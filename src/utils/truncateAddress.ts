/**
 * Truncates an address string to display only a portion of it.
 *
 * @param address - The address string to truncate.
 * @param prefixLength - Number of characters to show from the start of the address (default: 4).
 * @param suffixLength - Number of characters to show from the end of the address (default: 4).
 * @returns The truncated address with ellipses in the middle.
 */
export function truncateAddress(
  address: string,
  prefixLength: number = 4,
  suffixLength: number = 4
): string {
  if (address.length <= prefixLength + suffixLength) {
    // Return the original address if it's shorter than the desired length
    return address;
  }

  const prefix = address.slice(0, prefixLength);
  const suffix = address.slice(-suffixLength);

  return `${prefix}...${suffix}`;
}
