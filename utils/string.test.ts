import { expect, test, describe } from 'vitest';
import { createFoodicsUrl } from './string';

describe('createFoodicsUrl', () => {
  test('creates correct URL for a standard English name', () => {
    expect(createFoodicsUrl('12345', 'Club Sandwich')).toBe('https://squared-coffee.foodics.online/menu/-226471/12345-club-sandwich');
  });

  test('handles spaces and special characters', () => {
    expect(createFoodicsUrl('98765', 'O\'Eggs!')).toBe('https://squared-coffee.foodics.online/menu/-226471/98765-oeggs');
  });

  test('replaces plus signs properly', () => {
    expect(createFoodicsUrl('111', 'Club + Chips')).toBe('https://squared-coffee.foodics.online/menu/-226471/111-club-plus-chips');
  });

  test('preserves Arabic characters', () => {
    expect(createFoodicsUrl('222', 'قهوة عربية')).toBe('https://squared-coffee.foodics.online/menu/-226471/222-قهوة-عربية');
  });

  test('converts uppercase to lowercase', () => {
    expect(createFoodicsUrl('333', 'LATTE')).toBe('https://squared-coffee.foodics.online/menu/-226471/333-latte');
  });
});
