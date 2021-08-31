import { Dispatch, SetStateAction } from "react";
import capitalize from "lodash/capitalize";

export function thousandSeparator(
  number: number,
  locale: string = "vi"
): string {
  return Number(number).toLocaleString(locale);
}

export function thousandSeparatorByComma(number: number): string {
  return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
}

export function thousandSeparatorByDot(number: number): string {
  return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "";
}

// INFO: parse string seperator by comma to a number
export function parseCommaStringToNumber(commaString: string): number {
  return Number(commaString ? commaString.replace(/\D/g, "") : "0");
}

export function getPositiveNumberOnly(inputValue: string): string {
  let result = inputValue.replaceAll(/[^0-9]/g, "");
  result = Number(result) > 0 ? Number(result).toString() : "";
  return result;
}

export function deleteFieldsInObject(
  object: { [x: string]: unknown },
  fieldList: string[]
) {
  fieldList.forEach((field) => {
    object[field] = undefined;
  });
}

export function isValidArray(item: string | string[]): string[] | boolean {
  item = Array.isArray(item) ? item : [""];
  if (item.length !== 0 && item[0] !== "" && item) {
    return item;
  }
  return false;
}

export function filterValidArrayFromArray(
  array: (string | string[])[]
): (string | string[])[] {
  array = array.filter(isValidArray);
  return array;
}

export function checkValidArray(array?: unknown[]): boolean {
  return array ? Array.isArray(array) && array.length > 0 : false;
}

export function getValidArray<T>(array?: T[]): T[] {
  return checkValidArray(array) ? array || [] : [];
}

export function getCapitalizeArray(array?: string[]): string[] {
  return getValidArray(array).map((e) => capitalize(e));
}
export function setState<T>(
  state: T,
  setThisState: Dispatch<SetStateAction<T>>
) {
  setThisState(state);
}

export function getDayOfWeek(day: number): string {
  const dayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return dayOfWeek[day] ?? "";
}

export function getDayOfWeekSundayFirst(day: number): string {
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return dayOfWeek[day] ?? "";
}

export function getValidEnding(
  amount: number,
  unit: string,
  isAllowZero?: boolean,
  isNoAmount?: boolean
): string {
  const nullString: string = isAllowZero ? `0 ${unit}` : "";
  const unitWithEnding: string = `${unit}${amount > 1 ? "s" : ""}`;
  return `${
    amount < 1 && !isNoAmount
      ? nullString
      : `${isNoAmount ? "" : amount} ${unitWithEnding}`
  }`;
}
