/**
 * Crypto Utility
 *
 * AES encryption and decryption helpers powered by crypto-js.
 */

import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

/**
 * Encrypts a plaintext string using AES.
 * @param plaintext The string to encrypt.
 * @param encryptKey The secret key used for encryption.
 * @returns The encrypted ciphertext as a base64 string.
 */
export function encrypt(plaintext: string, encryptKey: string): string {
  return AES.encrypt(plaintext, encryptKey).toString();
}

/**
 * Decrypts an AES-encrypted ciphertext string.
 * @param ciphertext The base64-encoded ciphertext to decrypt.
 * @param encryptKey The secret key used for decryption.
 * @returns The decrypted plaintext string, or null if decryption fails.
 */
export function decrypt(ciphertext: string, encryptKey: string): string | null {
  try {
    const bytes = AES.decrypt(ciphertext, encryptKey);
    const plaintext = bytes.toString(Utf8);
    return plaintext || null;
  } catch {
    return null;
  }
}
