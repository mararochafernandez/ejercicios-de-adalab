const getSquareArea = (a) => (!isNaN(a) ? a ** 2 : null);

const getTriangleArea = (a, b) => (a * b) / 2;

const objectToExport = {
  getSquareArea: getSquareArea,
  getTriangleArea: getTriangleArea,
};

export default objectToExport;
