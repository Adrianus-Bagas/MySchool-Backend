export const generatedRandomString = (textLength: number) => {
  const initialString = 'QWERTYUIOPLKJHGFDSAZXCVBNM1234567890';

  let result = '';
  for (let i = 0; i < textLength; i++) {
    const randomNumber = Math.round(Math.random() * (initialString.length - 1));
    result += initialString[randomNumber];
  }
  return result;
};
