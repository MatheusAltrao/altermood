export function copyTextToClipboard(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!navigator.clipboard) {
      reject(new Error("Clipboard API not supported"));
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
}
