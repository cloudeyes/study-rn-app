const cache: Record<string, any> = {};

export const createOrUse = (key: string, callback: () => any) => {
  if (cache[key]) {
    return cache[key];
  }

  cache[key] = callback();
};
