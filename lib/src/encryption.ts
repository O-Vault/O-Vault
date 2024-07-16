const SHA256 = 'SHA-256';
const PBKDF2 = 'PBKDF2';
const AES_GCM = 'AES-GCM';
const APP_NAME = 'O-VAULT';
const CURRENT_FILE_VERSION = '1.0';
const SEPARATOR = 65535;
const ITERATIONS = 500000;
const SHIFT = 20;

/**
 * Implementation reference:
 * - https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm
 * - https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2
 * - https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/pbkdf2.js
 */

const encrypt = async (message: string, password: string, includeAppNameAndVersion: boolean): Promise<Uint16Array> => {

    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encHash = await encryptMessage(message, password, salt, iv, ITERATIONS);

    const ovault = includeAppNameAndVersion ? new TextEncoder().encode(APP_NAME) : null;
    const version = includeAppNameAndVersion ? new TextEncoder().encode(CURRENT_FILE_VERSION) : null;
    const iterationsHash = encodeIterations(ITERATIONS.toString());
    const separator = Uint16Array.from([SEPARATOR]);

    if (includeAppNameAndVersion) {
        return new Uint16Array([
            ...ovault, ...separator,
            ...version, ...separator,
            ...iterationsHash, ...separator,
            ...salt, ...separator,
            ...iv, ...separator,
            ...encHash]);
    } else {
        return new Uint16Array([
            ...iterationsHash, ...separator,
            ...salt, ...separator,
            ...iv, ...separator,
            ...encHash]);
    }

};

const encryptMessage = async (message: string, password: string, salt: Uint8Array, iv: Uint8Array, iterations: number): Promise<Uint8Array> => {

    const msg = new TextEncoder().encode(message);
    const keyMaterial = await getKeyMaterial(password);
    const key = await getKey(keyMaterial, salt, iterations);
    const enc = await crypto.subtle.encrypt({
        name: AES_GCM,
        iv: iv
    }, key, msg);
    const encHash = new Uint8Array(enc);
    return encHash;
};

const toUint8Array = (src: Uint16Array): Uint8Array => {

    const result = new Uint8Array(src.length);
    let i = 0;
    src.forEach(val => {
        if (val > 255) {
            throw new Error(`The value ${val} exceeds the limit`);
        }
        result[i] = val;
        i++;
    });
    return result;
};

const encodeIterations = (iter: string): Uint8Array => {

    const result = new Uint8Array(iter.length);
    for (let i = 0; i < iter.length; i++) {
        result[i] = iter[i].charCodeAt(0) - SHIFT;
    }
    return result;
};

const decodeIterations = (array: Uint16Array): number => {

    let result = '';
    for (let i = 0; i < array.length; i++) {
        result = result + String.fromCharCode(array[i] + SHIFT);
    }
    return parseInt(result);
};

const split = (src: Uint16Array, separator: number): Uint16Array[] => {

    const parts: Uint16Array[] = [];
    let begin = 0;
    for (let i = 0; i < src.length; i++) {
        if (src[i] === separator) {
            parts.push(src.slice(begin, i));
            begin = i + 1;
        }
    }
    parts.push(src.slice(begin, src.length));
    return parts;
};

const getKeyMaterial = async (password: string): Promise<CryptoKey> => {

    const enc = new TextEncoder();
    return crypto.subtle.importKey(
        'raw',
        enc.encode(password),
        { name: PBKDF2 },
        false,
        ['deriveKey']
    );
};

const getKey = (keyMaterial: CryptoKey, salt: Uint8Array, iterations: number): Promise<CryptoKey> => {
    return crypto.subtle.deriveKey(
        {
            name: PBKDF2,
            salt: salt,
            iterations: iterations,
            hash: SHA256
        },
        keyMaterial,
        { name: AES_GCM, length: 256 },
        true,
        ['encrypt', 'decrypt']
    );
};

const decryptMessage = async (encrypted: Uint8Array, password: string, salt: Uint8Array, iv: Uint8Array, iterations: number): Promise<string> => {

    const keyMaterial = await getKeyMaterial(password);
    const key = await getKey(keyMaterial, salt, iterations);

    try {
        const dec = await crypto.subtle.decrypt({
            name: AES_GCM,
            iv: iv
        }, key, encrypted);
        return (new TextDecoder().decode(dec));
    } catch (err) {
        throw new Error(DECRYPTION_FAILED_ERROR);
    }

};

const decrypt = async (encrypted: Uint16Array, password: string, includeAppNameAndVersion: boolean): Promise<string> => {

    const parts = split(encrypted, SEPARATOR);
    let k = 0;
    const utf16Decoder = new TextDecoder("utf-16le");
    if (includeAppNameAndVersion) {

        const appName = utf16Decoder.decode(parts[k++]);
        const version = utf16Decoder.decode(parts[k++]);

        if (appName !== APP_NAME) {
            throw new Error(`Invalid app name ${appName}`);
        }
        if (version !== CURRENT_FILE_VERSION) {
            throw new Error(`Invalid version ${version}`);
        }
    }

    const iterations = decodeIterations(parts[k++]);

    const salt = toUint8Array(parts[k++]);
    const iv = toUint8Array(parts[k++]);
    const enc = toUint8Array(parts[k++]);

    const message = await decryptMessage(enc, password, salt, iv, iterations);
    return message;
};

export const DECRYPTION_FAILED_ERROR = 'DECRYPTION_FAILED_ERROR';

export const aes = {
    encrypt: encrypt,
    decrypt: decrypt
};
