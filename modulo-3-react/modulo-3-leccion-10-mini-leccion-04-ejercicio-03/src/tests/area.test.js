import area from '../services/area';

test('getSquareArea(3) returns 9', () => {
  expect(area.getSquareArea(3)).toBe(9);
});

test('getTriangleArea(3, 4) returns 6', () => {
  expect(area.getTriangleArea(3, 4)).toBe(6);
});

test('getSquareArea() returns null', () => {
  expect(area.getSquareArea()).toBeNull();
});

test('getSquareArea("a") returns null', () => {
  expect(area.getSquareArea('a')).toBeNull();
});
