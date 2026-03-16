/**
 * SafeLocalStorage Utility
 *
 * Provides a secure wrapper around localStorage to prevent XSS and ensure data integrity.
 * Supports AES encryption via crypto-js. An encryptKey is required for all read/write operations.
 */

import { decrypt, encrypt } from "./crypto";

export const SafeLocalStorage = {
  /**
   * Safely retrieves an item from localStorage.
   * @param key The storage key.
   * @param encryptKey Encryption key used to decrypt the stored value.
   * @param validator Optional function to validate the decrypted value. Returns null if invalid.
   */
  getItem: (key: string, encryptKey: string, validator?: (value: string) => boolean): string | null => {
    if (typeof window === "undefined") return null;

    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return null;

      const value = decrypt(raw, encryptKey);

      if (value === null) {
        console.warn(`[SafeLocalStorage] Decryption failed for key "${key}".`);
        return null;
      }

      // malicious script check (basic XSS prevention)
      if (/<script\b[^>]*>([\s\S]*?)<\/script>/gm.test(value) || /javascript:/gi.test(value) || /on\w+=/gi.test(value)) {
        console.warn(`[SafeLocalStorage] Potential harmful content detected in key "${key}". Access denied.`);
        return null;
      }

      if (validator && !validator(value)) {
        console.warn(`[SafeLocalStorage] Value for key "${key}" failed validation.`);
        return null;
      }

      return value;
    } catch (error) {
      console.error(`[SafeLocalStorage] Error reading key "${key}":`, error);
      return null;
    }
  },

  /**
   * Safely sets an item in localStorage.
   * @param key The storage key.
   * @param value The value to store.
   * @param encryptKey Encryption key used to AES encrypt the value before storing.
   */
  setItem: (key: string, value: string, encryptKey: string): void => {
    if (typeof window === "undefined") return;

    try {
      const toStore = encrypt(value, encryptKey);
      localStorage.setItem(key, toStore);
    } catch (error) {
      console.error(`[SafeLocalStorage] Error setting key "${key}":`, error);
    }
  },

  /**
   * Removes an item from localStorage.
   * @param key The storage key.
   */
  removeItem: (key: string): void => {
    if (typeof window === "undefined") return;

    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`[SafeLocalStorage] Error removing key "${key}":`, error);
    }
  },
};
