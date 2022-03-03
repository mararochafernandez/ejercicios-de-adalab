const getSquareArea = (a) => a ** 2;

const getTriangleArea = (a, b) => (a * b) / 2;

const objectToExport = {
  getSquareArea: getSquareArea,
  getTriangleArea: getTriangleArea,
};

export default objectToExport;
