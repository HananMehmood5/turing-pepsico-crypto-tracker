export type LocalStore = {
  token: string;
};

export const get = <T extends keyof LocalStore>(key: T): LocalStore[T] | null => {
  const storedData = localStorage.getItem(key);
  if (storedData) return JSON.parse(storedData);
  return null;
};

export const set = <T extends keyof LocalStore>(key: T, value: LocalStore[T]) =>
  localStorage.setItem(key, JSON.stringify(value));

export const remove = (key: keyof LocalStore) => localStorage.removeItem(key);

export const localStorageHelper = {
  get,
  set,
  remove,
};
