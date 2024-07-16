const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const SPECIAL_CHARACTERS = `*-+._!$?'";,|=&%#@<>/\\[]{}()`;

let mostCommonPasswords: object = null;

const getRandomLowerCaseLetter = (): string => {

    return getRandomCharFromList(LOWERCASE_LETTERS);
};

const getRandomUpperCaseLetter = (): string => {

    return getRandomCharFromList(UPPERCASE_LETTERS);
};

const getRandomSpecialCharacter = (): string => {
    return getRandomCharFromList(SPECIAL_CHARACTERS);

};

const extractAllSubWords = (text: string, length: number): string[] => {
    const result: string[] = [];

    for (let index = 0; index <= text.length - length; index++) {
        result.push(text.substring(index, index + length));
    }
    const unique = [...new Set(result)];
    return unique;
};

const findCommonPassword = (password: string): string => {

    const MIN_LENGTH = 4;

    if (password.length < MIN_LENGTH) {
        return null;
    }
    if (isCommonPasswordExactMatch(password)) {
        return password;
    }

    const length = Math.min(password.length - 1, 16);

    for (let l = length; l >= 4; l--) {

        const subwords = extractAllSubWords(password, l);

        for (const word of subwords) {
            if (isCommonPasswordExactMatch(word)) {
                return word;
            }

        }

    }
    return null;
};

/**
 * List of most common passwords extracted from: 
 * https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10-million-password-list-top-100000.txt
 */
const isCommonPasswordExactMatch = (password: string): boolean => {

    if (password.length < 4) {
        return false;
    }

    if (mostCommonPasswords === null) {
        mostCommonPasswords = require('./most-common-passwords.json');
    }

    const text = password.toLowerCase();
    const firstLetter: object = (mostCommonPasswords as Record<string, object>)[text[0]];
    if (firstLetter === undefined) {
        return false;
    }
    const secondLetter: object = (firstLetter as Record<string, object>)[text[1]];
    if (secondLetter === undefined) {
        return false;
    }
    const thirdLetter: object = (secondLetter as Record<string, object>)[text[2]];
    if (thirdLetter === undefined) {
        return false;
    }
    const matchingPasswords: string[] = (thirdLetter as Record<string, string[]>)[text[3]];
    if (matchingPasswords === undefined) {
        return false;
    } else {
        return matchingPasswords.indexOf(text) >= 0;

    }
};

const getRandomDigit = (): string => {

    return getRandomCharFromList(DIGITS);
};

const getPassphraseStrengthScore = (passphrase: string): number => {

    console.debug(`Calculating score for: ${passphrase}`);

    const MAX_SCORE = 100;
    const MIN_SCORE = 0;
    const MAX_SCORE_PASSWORD_LENGTH = 35;
    const MIN_SCORE_PASSWORD_LENGTH = 0;
    const FACTOR = MAX_SCORE / (MAX_SCORE_PASSWORD_LENGTH - MIN_SCORE_PASSWORD_LENGTH);

    const separator = detectPassphraseSeparator(passphrase);
    if (separator === null) {
        console.debug(`Cannot find word separator, score is 0`);
        return 0;
    }
    const words = passphrase.split(separator);
    let penalty = 0;
    for (const word of words) {
        if (isCommonPasswordExactMatch(word)) {
            console.debug(`Common password detected: ${word}`);
            penalty += Math.round(word.length * 2 / 3);
        }

    }
    let score = Math.round((passphrase.length - penalty - MIN_SCORE_PASSWORD_LENGTH) * FACTOR);
    if (score > MAX_SCORE) {
        score = MAX_SCORE;
    } else if (score < MIN_SCORE) {
        score = MIN_SCORE;
    }

    console.debug(`Score is : ${score}`);
    return score;
};

const getPenalty = (password: string): number => {
    const numberOfCharTypes = getNumberOfCharTypes(password);
    let penalty;
    if (numberOfCharTypes === 1) {
        penalty = 4;
    } else if (numberOfCharTypes === 2) {
        penalty = 2;
    } else if (numberOfCharTypes === 3) {
        penalty = 1;
    } else {
        penalty = 0;
    }
    return penalty;
};

const getPasswordStrengthScore = (password: string): number => {

    console.debug(`Calculating score for: ${password}`);
    const MAX_SCORE = 100;
    const MIN_SCORE = 0;
    const MAX_SCORE_PASSWORD_LENGTH = 16;
    const MIN_SCORE_PASSWORD_LENGTH = 4;
    const FACTOR = MAX_SCORE / (MAX_SCORE_PASSWORD_LENGTH - MIN_SCORE_PASSWORD_LENGTH);

    let penalty = getPenalty(password);

    const commonPassword = findCommonPassword(password);
    if (commonPassword != null) {
        console.debug(`Common password detected: ${commonPassword}`);
        penalty += commonPassword.length;
    }
    let score = Math.round((password.length - penalty - MIN_SCORE_PASSWORD_LENGTH) * FACTOR);
    if (score > MAX_SCORE) {
        score = MAX_SCORE;
    } else if (score < MIN_SCORE) {
        score = MIN_SCORE;
    }

    console.debug(`Score is : ${Math.round(score)}`);
    return Math.round(score);

};

const calculatePasswordStrength = (password: string, isPassphrase: boolean): number => {

    return isPassphrase ? getPassphraseStrengthScore(password) : getPasswordStrengthScore(password);

};

const getNumberOfCharTypes = (password: string): number => {

    let result = 0;
    let hasDigit = false;
    let hasSpecialCharacter = false;
    let hasLowerCaseLetter = false;
    let hasUpperCaseLetter = false;
    let hasExtendedCharacter = false;
    for (const letter of password) {

        if (!hasDigit && isDigit(letter)) {
            hasDigit = true;
            result++;
        }
        if (!hasLowerCaseLetter && isLowerCaseLetter(letter)) {
            hasLowerCaseLetter = true;
            result++;
        }
        if (!hasUpperCaseLetter && isUpperCaseLetter(letter)) {
            hasUpperCaseLetter = true;
            result++;
        }
        if (!hasSpecialCharacter && isSpecialCharacter(letter)) {
            hasSpecialCharacter = true;
            result++;
        }
        if (!hasExtendedCharacter && isExtendedCharacter(letter)) {
            hasExtendedCharacter = true;
            result++;
        }
    }
    return result;
};

const isLowerCaseLetter = (character: string): boolean => {
    return LOWERCASE_LETTERS.indexOf(character[0]) >= 0;
};

const isExtendedCharacter = (character: string): boolean => {

    const isNonPrintable = character.codePointAt(0) < 32;
    if (isNonPrintable) {
        return false;
    }
    const result = (LOWERCASE_LETTERS + UPPERCASE_LETTERS + DIGITS + SPECIAL_CHARACTERS).indexOf(character[0]) >= 0;
    return !result;
};

const isUpperCaseLetter = (character: string): boolean => {
    return UPPERCASE_LETTERS.indexOf(character[0]) >= 0;
};

const isDigit = (character: string): boolean => {
    return DIGITS.indexOf(character[0]) >= 0;
};

const isSpecialCharacter = (character: string, includeSpace: boolean = false): boolean => {
    const specialCharacters = includeSpace ? ' ' + SPECIAL_CHARACTERS : SPECIAL_CHARACTERS;
    return specialCharacters.indexOf(character[0]) >= 0;
};


const getRandomCharacter = (upperCaseCharacter: boolean, specialCharacter: boolean): string => {
    let charList = LOWERCASE_LETTERS + DIGITS;
    if (specialCharacter) {
        charList += SPECIAL_CHARACTERS;
    }
    if (upperCaseCharacter) {
        charList += UPPERCASE_LETTERS;
    }
    return getRandomCharFromList(charList);
};
const getRandomCharFromList = (charList: string): string => {

    const pos = getRandomValue(charList.length - 1);
    return charList[pos];
};

const detectWordSeparator = (passphrase: string): string | isValidPasswordResult => {
    let separator = '';
    for (let i = 0; i < passphrase.length; i++) {
        const character = passphrase.charAt(i);
        if (isSpecialCharacter(character, true)) {
            if (separator === '') {
                separator = passphrase[i];
            } else if (separator !== passphrase[i]) {
                return 'only-one-word-separator-expected';
            }
        }
    }
    if (separator === '') {
        return 'no-word-separator-found';
    } else {
        return separator;
    }
};

export type isValidPasswordResult = 'valid' | 'contains-invalid-character'
    | 'only-one-word-separator-expected' | 'no-word-separator-found'
    | 'not-enough-words' | 'should-not-start-with-word-separator' | 'should-not-end-with-word-separator'
    | 'adjacent-word-separator-not-allowed' | 'a-word-is-too-short' | 'too-many-repetitions-passphrase'
    | 'not-enough-characters'|'password-too-long';

const isWordSeparatorRepeated = (passphrase: string, separator: string): boolean => {

    const parts = passphrase.split(separator);
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] === '') {
            return true;
        }
    }
    return false;
};

const isWordTooShort = (passphrase: string, separator: string, minCharsWordsPassphrase: number): boolean => {

    const parts = passphrase.split(separator);
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].length < minCharsWordsPassphrase) {
            return true;
        }
    }
    return false;
};

const containsInvalidCharacter = (password: string): boolean => {

    for (let i = 0; i < password.length; i++) {
        const code = password.codePointAt(i);
        if (code < 32) {
            return true;
        }
    }
    return false;
};

const isValidPassphrase = (passphrase: string, minChars: number, minWordsPassphrase: number,
    minCharsWordsPassphrase: number): isValidPasswordResult => {

    if (passphrase.length < minChars) {
        return 'not-enough-characters';
    }

    const separator = detectWordSeparator(passphrase);
    if (separator.length > 1) {
        const error = separator as isValidPasswordResult;
        return error;
    }

    if (isWordSeparatorRepeated(passphrase, separator)) {
        return 'adjacent-word-separator-not-allowed';
    }
    if (isWordTooShort(passphrase, separator, minCharsWordsPassphrase)) {
        return 'a-word-is-too-short';
    }
    if (containsInvalidCharacter(passphrase)) {
        return 'contains-invalid-character';
    }
    if (passphrase.split(separator).length < minWordsPassphrase) {
        return 'not-enough-words';
    }
    if (passphrase.startsWith(separator)) {
        return 'should-not-start-with-word-separator';
    }
    if (passphrase.endsWith(separator)) {
        return 'should-not-end-with-word-separator';
    }

    return 'valid';
};

const isValidPassword = (password: string, minChars: number): isValidPasswordResult => {

    if (password.length < minChars) {
        return 'not-enough-characters';
    }
    if (password.length >= 128) {
        return 'password-too-long';
    }
    if (containsInvalidCharacter(password)) {
        return 'contains-invalid-character';
    }
    return 'valid';
};

const getRandomPassword = (length: number, upperCaseCharacter: boolean, specialCharacter: boolean): string => {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += getRandomCharacter(specialCharacter, upperCaseCharacter);
    }
    return result;
};

const makeOneCharacterUpperCase = (password: string): string => {
    let stop = false;
    let attempt = 0;
    let result = password;
    do {
        const pos = getRandomValue(password.length - 1);
        if (isLowerCaseLetter(result[pos])) {
            result = result.substring(0, pos) + result[pos].toUpperCase() + result.substring(pos + 1);
            stop = true;
        }
        attempt++;
        if (attempt > 100) {
            throw new Error('failed');
        }
    } while (!stop);

    return result;
};

const replaceSeparatorByLetter = (result: string, pos: number): string => {
    return result.substring(0, pos - 1) + getRandomPassword(1, false, false) + result.substring(pos);
};

const moveCharLeft = (result: string, pos: number): string => {
    const char = result[pos];
    return result.substring(0, pos - 1) + char + result.substring(pos - 1, pos) + result.substring(pos + 1);
};

const generatePasswordInternal = (length: number): string => {

    let result = '';
    for (let i = 0; i < length; i++) {
        result += getRandomCharacter(true, true);
    }
    return result;
};

const generateEasyToRememberPasswordInternal = (length: number): string => {
    const separator = getRandomSpecialCharacter();
    let result = '';
    do {
        if (result !== '') {
            result += separator;
        }
        result += getRandomPassword(getRandomValue(3) + 2, false, false);
    } while (result.length < length);
    result = result.substring(0, length);
    if (result.substring(length - 1, length) === separator) {
        result = replaceSeparatorByLetter(result, length);
    }
    if (result.substring(length - 2, length - 1) === separator) {
        const newResult = replaceSeparatorByLetter(result, length - 1);
        if (length - newResult.lastIndexOf(separator) <= 6) {
            result = newResult;
        } else {
            result = moveCharLeft(result, length - 2);
        }
    }
    result = makeOneCharacterUpperCase(result);
    return result.substring(0, length);
};

/**
 * Generate a random integer number from 0 to max included 
 */
const getRandomValue = (max: number): number => {
    const array = new Uint8Array(1);
    crypto.getRandomValues(array);
    return array[0] % (max + 1);
};

const generatePassword = (length: number): string => {

    let password = generatePasswordInternal(length);
    if (getPasswordStrengthScore(password) > 90) {
        return password;
    }
    /* 2nd attempt */
    password = generatePasswordInternal(length);
    if (getPasswordStrengthScore(password) > 90) {
        return password;
    }
    /* last attempt */
    return generatePasswordInternal(length);

};

const generateEasyToRememberSecurePassword = (length: number): string => {


    let password = generateEasyToRememberPasswordInternal(length);
    if (getPasswordStrengthScore(password) > 90) {
        return password;
    }
    /* 2nd attempt */
    password = generateEasyToRememberPasswordInternal(length);
    if (getPasswordStrengthScore(password) > 90) {
        return password;
    }
    /* last attempt */
    return generateEasyToRememberPasswordInternal(length);

};

const detectPassphraseSeparator = (password: string): string => {

    for (const char of password) {
        if (isSpecialCharacter(char, true)) {
            return char;
        }
    }
    return null;
};

export const passwordUtil = {
    isValidPassword: isValidPassword,
    isValidPassphrase: isValidPassphrase,
    calculatePasswordStrength: calculatePasswordStrength,
    getPasswordStrengthScore: getPasswordStrengthScore,
    getPassphraseStrengthScore: getPassphraseStrengthScore,
    getRandomCharFromList: getRandomCharFromList,
    getRandomLowerCaseLetter: getRandomLowerCaseLetter,
    getRandomUpperCaseLetter: getRandomUpperCaseLetter,
    getRandomDigit: getRandomDigit,
    getRandomSpecialCharacter: getRandomSpecialCharacter,
    containsInvalidCharacter: containsInvalidCharacter,
    getRandomCharacter: getRandomCharacter,
    generatePassword: generatePassword,
    generateEasyToRememberSecurePassword: generateEasyToRememberSecurePassword,
    getRandomValue: getRandomValue,
    makeOneCharacterUpperCase: makeOneCharacterUpperCase,
    findCommonPassword: findCommonPassword,
    extractAllSubWords: extractAllSubWords,
    getNumberOfCharTypes: getNumberOfCharTypes,
    LOWERCASE_LETTERS: LOWERCASE_LETTERS,
    UPPERCASE_LETTERS: UPPERCASE_LETTERS,
    DIGITS: DIGITS,
    SPECIAL_CHARACTERS: SPECIAL_CHARACTERS
};