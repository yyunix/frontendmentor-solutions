import { OptionsState, RangeValueState } from "@/types/form";

// UTF-16 table: https://asecuritysite.com/coding/asc2
const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const getUppercase = () => String.fromCharCode(getRandomNumber(65, 65 + 26));

const getLowercase = () => String.fromCharCode(getRandomNumber(97, 97 + 26));

const getNumber = () => getRandomNumber(0, 10).toString();

const getSymbol = () => {
  const randomSymbols = [
    String.fromCharCode(getRandomNumber(33, 33 + 15)),
    String.fromCharCode(getRandomNumber(58, 7 + 58)),
    String.fromCharCode(getRandomNumber(91, 6 + 91)),
    String.fromCharCode(getRandomNumber(123, 4 + 123)),
  ];

  return randomSymbols[getRandomNumber(0, 4)];
};

export const generatePassword = (
  length: RangeValueState,
  { uppercase, lowercase, numbers, symbols }: OptionsState
) => {
  const password = [];

  // Append at least one requested value
  if (uppercase && password.length < length) password.push(getUppercase());
  if (lowercase && password.length < length) password.push(getLowercase());
  if (numbers && password.length < length) password.push(getNumber());
  if (symbols && password.length < length) password.push(getSymbol());

  // Append the remainder
  while (password.length < length) {
    const x = Math.random();
    if (x < 0.25) {
      if (uppercase && password.length < length) password.push(getUppercase());
    } else if (x < 0.5) {
      if (lowercase && password.length < length) password.push(getLowercase());
    } else if (x < 0.75) {
      if (numbers && password.length < length) password.push(getNumber());
    } else if (symbols && password.length < length) {
      password.push(getSymbol());
    } else {
      if (password.length < length) {
        password.push(getLowercase());
      }
    }
  }

  // Shuffle the password
  let shuffledPassword = "";
  while (password.length > 0) {
    const random = Math.floor(Math.random() * password.length);
    shuffledPassword += password[random];
    password.splice(random, 1);
  }

  return shuffledPassword;
};

export const measureStrength = (
  length: RangeValueState,
  { uppercase, lowercase, numbers, symbols }: OptionsState
) => {
  const numOptionsChecked =
    Number(uppercase) + Number(lowercase) + Number(numbers) + Number(symbols);

  if (length <= 0 || numOptionsChecked === 0) return 0;
  if (length < 5 || numOptionsChecked < 2) return 1;
  if (length < 10 || numOptionsChecked <= 2) return 2;
  if (length <= 15 || numOptionsChecked <= 2) return 3;
  if (length <= 20 || numOptionsChecked <= 4) return 4;
  return 0;
};
