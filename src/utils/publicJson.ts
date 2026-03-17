/**
 * PublicConfig Utility
 *
 * Fetches JSON files from the /public directory at runtime.
 * Files in /public are served at the root path (e.g. /config.json).
 */

import type { IPublicConfig } from "@/types/common";
import { SafeLocalStorage } from "@utils/safeStorage";
import CONSTANTS from "@/constants";

/**
 * Fetches and parses a JSON file from the /public directory.
 * @param filename The file name relative to /public (e.g. "config.json").
 * @returns Parsed JSON data typed as T, or null if the fetch fails.
 */
export async function fetchPublicJson<T = unknown>(filename: string): Promise<T | null> {
  try {
    const response = await fetch(`/${filename}`);

    if (!response.ok) {
      console.error(`[PublicConfig] Failed to fetch "${filename}": ${response.status} ${response.statusText}`);
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`[PublicConfig] Error fetching "${filename}":`, error);
    return null;
  }
}

const FALLBACK_CONFIG: IPublicConfig = { API_ENDPOINT: "" };

/**
 * Returns the public runtime configuration, using SafeLocalStorage as a cache layer.
 *
 * Strategy:
 * 1. Read from SafeLocalStorage — if present and valid, return immediately (no network request).
 * 2. If the cache is missing or corrupted, fetch `config.json` from the /public directory.
 * 3. On a successful fetch, persist the result to SafeLocalStorage for future calls.
 * 4. If the fetch fails, return a safe fallback so the app can still boot.
 *
 * @returns The parsed {@link IPublicConfig} object, or a fallback with empty values on failure.
 */
export async function getPublicConfigs(): Promise<IPublicConfig> {
  const cache = SafeLocalStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.PUBLIC_CONFIG, CONSTANTS.LOCAL_STORAGE_KEYS.PUBLIC_CONFIG);

  if (cache) {
    try {
      return JSON.parse(cache) as IPublicConfig;
    } catch {
      // corrupted cache — fall through to re-fetch
    }
  }

  const fetched = await fetchPublicJson<IPublicConfig>("config.json");

  if (fetched) {
    SafeLocalStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEYS.PUBLIC_CONFIG, JSON.stringify(fetched), CONSTANTS.LOCAL_STORAGE_KEYS.PUBLIC_CONFIG);
    return fetched;
  }

  return FALLBACK_CONFIG;
}
