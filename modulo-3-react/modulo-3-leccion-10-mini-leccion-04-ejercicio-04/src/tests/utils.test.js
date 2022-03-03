import utils from '../services/utils';

test('paddingLeft("hola", 6, "x") returns "xxhola"', () => {
  expect(utils.paddingLeft('hola', 6, 'x')).toBe('xxhola');
});

test('paddingLeft("hola", 6, "a") returns "aahola"', () => {
  expect(utils.paddingLeft('hola', 6, 'a')).toBe('aahola');
});

test('paddingLeft("ee", 4, "aa") returns "aaee"', () => {
  expect(utils.paddingLeft('ee', 4, 'aa')).toBe('aaee');
});

test('paddingLeft("xxxx", 6, "x") returns "xxxxxx"', () => {
  expect(utils.paddingLeft('xxxx', 6, 'x')).toBe('xxxxxx');
});

test('paddingLeft("", 6, "x") returns "xxxxxx"', () => {
  expect(utils.paddingLeft('', 6, 'x')).toBe('xxxxxx');
});

test('paddingLeft("hola mi amigo", 6, "x") returns "hola mi amigo"', () => {
  expect(utils.paddingLeft('hola mi amigo', 6, 'x')).toBe('hola mi amigo');
});

test('paddingLeft("xxxx", 0, "x") returns "xxxx"', () => {
  expect(utils.paddingLeft('xxxx', 0, 'x')).toBe('xxxx');
});
