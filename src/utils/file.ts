/**
 * Converts a File object to a Base64-encoded string.
 * @param file - The File object to convert.
 * @returns A promise that resolves to a Base64-encoded string.
 */
export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

/**
 * Creates a File object from a Base64-encoded string.
 * @param fileData - The Base64-encoded string, including the data URL prefix (e.g., "data:image/png;base64,...").
 * @param fileName - The name to use for the resulting File object.
 * @param mimeType - The MIME type of the file.
 * @returns A File object created from the Base64-encoded data.
 */
export function createFileObject(
  fileData: string,
  fileName: string,
  mimeType: string,
): File {
  // Extract base64 data from the data URL
  const base64Data = fileData.split(',')[1];
  // Convert base64 data to binary
  const binaryString = atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Create a Blob from the binary data
  const blob = new Blob([bytes], { type: mimeType });
  // Return a File object
  return new File([blob], fileName, {
    type: mimeType,
    lastModified: Date.now(),
  });
}
