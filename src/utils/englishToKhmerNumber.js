export const englishToKhmerNumber = (englishNumber) => {
  if (englishNumber < 0) {
    throw new Error("Invalid number for Khmer digit conversion");
  }
  const englishToKhmerNumberSingleDigit = (digit) => {
    const khmerDigits = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
    return khmerDigits[digit];
  };

  const khmerDigits = [""];
  for (let i = 1; i <= 8000; i++) {
    khmerDigits.push(
      i
        .toString()
        .split("")
        .map((digit) => englishToKhmerNumberSingleDigit(parseInt(digit)))
        .join("")
    );
  }

  return khmerDigits[englishNumber];
};
