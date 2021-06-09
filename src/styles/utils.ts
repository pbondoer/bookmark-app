export const mapPixels = <T>(
  obj: Record<keyof T, number>
): Record<keyof T, string> => {
  const mapped: Record<string, string> = {};

  Object.keys(obj).map(key => {
    mapped[key] = obj[key as keyof T] + 'px';
  });

  return mapped as Record<keyof T, string>;
};

export default { mapPixels };
