import { ActionType } from "../types/global.types";

export function generateID() {
  const str = "ABCDEF123456";
  const res = [];
  const arr = str.split("");
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * arr.length);
    res.push(arr[index]);
  }
  return res.join("");
}

export function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]) {
  // const res = {} as Partial<T>
  const res: Partial<T> = {};
  for (const key of keys) {
    res[key] = obj[key];
  }
  return res;
}

export function sortArr<T, K extends keyof T>(arr: T[], key1: K, key2: K) {
  return arr.sort((a, b) => {
    if (a[key1] === b[key1]) {
      return a[key2] !== b[key2] ? (a[key2] > b[key2] ? 1 : -1) : 0;
    } else {
      return a[key1] > b[key1] ? 1 : -1;
    }
  });
}

export function findSubStr<T, K extends keyof T>(
  arr: T[],
  key: K,
  str: string
) {
  return arr.filter((item) => {
    const val = item[key] as string;
    return val.trim().toLowerCase().indexOf(str.trim().toLowerCase()) !== -1;
  });
}

type ObjectWithId = {
  id: number;
};

export function intersection<
  T1 extends ObjectWithId,
  T2 extends ObjectWithId,
  K extends keyof ObjectWithId
>(arr1: T1[], arr2: T2[], key: K) {
  return arr1.map((a1) => ({
    ...a1,
    shouldRestore: arr2.findIndex((a2) => a2[key] === a1[key]) !== -1
  }));
}

export const generateObj = (
  text: string,
  type: ActionType,
  payload?: number
) => ({ text, type, payload });
