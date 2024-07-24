export declare const DECRYPTION_FAILED_ERROR = "DECRYPTION_FAILED_ERROR";
export declare const aes: {
    encrypt: (message: string, password: string, includeAppNameAndVersion: boolean) => Promise<Uint16Array>;
    decrypt: (encrypted: Uint16Array, password: string, includeAppNameAndVersion: boolean) => Promise<string>;
};
