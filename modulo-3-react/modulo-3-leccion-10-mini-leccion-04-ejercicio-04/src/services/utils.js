const paddingLeft = (text, size, paddingValue = ' ') => {
  let result = text;

  if (size > text.length) {
    for (let i = 0; i < size - text.length; i += paddingValue.length) {
      result = paddingValue + result;
    }
  }

  return result;
};

const objectToExport = {
  paddingLeft: paddingLeft,
};

export default objectToExport;
