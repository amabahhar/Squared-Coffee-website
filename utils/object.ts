/**
 * Sets a value in a nested object based on a path string (e.g., 'hero.title').
 * Creates missing nested objects as needed.
 */
export const setByPath = (obj: any, path: string, value: any) => {
  const parts = path.split('.');
  const lastPart = parts.pop()!;
  let current = obj;
  
  for (const part of parts) {
    if (!current[part]) {
      current[part] = {};
    }
    current = current[part];
  }
  
  current[lastPart] = value;
  return obj;
};

/**
 * Deep merge utility for translations
 */
export const deepMerge = (target: any, source: any) => {
  if (!source) return target;
  const output = { ...target };
  
  Object.keys(source).forEach(key => {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      output[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      output[key] = source[key];
    }
  });
  
  return output;
};
