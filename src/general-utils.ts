import { toNumber } from "lodash/fp";

export const toDigits = (x: number): number[] => x.toString().split('').map(toNumber);