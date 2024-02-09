import { englishToKhmerNumber } from "./englishToKhmerNumber";

export const convertToKhmerDate = (englishDate) => {
  const date = new Date(englishDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dayInKhmer = englishToKhmerNumber(day);
  const monthInKhmer = englishToKhmerNumber(month);
  const yearInKhmer = englishToKhmerNumber(year);

  const formattedKhmerDate = `ថ្ងៃទី ${dayInKhmer} ខែ ${monthInKhmer}​ ឆ្នាំ ${yearInKhmer}`;

  return formattedKhmerDate;
};
