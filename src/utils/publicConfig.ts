/**
 * PublicConfig Utility
 *
 * Fetches JSON files from the /public directory at runtime.
 * Files in /public are served at the root path (e.g. /config.json).
 */

/**
 * Fetches and parses a JSON file from the /public directory.
 * @param filename The file name relative to /public (e.g. "config.json").
 * @returns Parsed JSON data typed as T, or null if the fetch fails.
 */
export async function fetchPublicJson<T = unknown>(filename: string): Promise<T | null> {
  try {
    const response = await fetch(`/${filename}`);

    if (!response.ok) {
      console.error(
        `[PublicConfig] Failed to fetch "${filename}": ${response.status} ${response.statusText}`
      );
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`[PublicConfig] Error fetching "${filename}":`, error);
    return null;
  }
}
