export const createFoodicsUrl = (foodicsId: string, name: string): string => {
  const slug = name.toLowerCase()
    .replace(/\+/g, 'plus') // handle '+' signs explicitly e.g. "Club + Chips"
    .replace(/ /g, '-')
    .replace(/[^\w\u0600-\u06FF-]+/g, ''); // Keep alphanumeric and Arabic chars, remove others

  return `https://squared-coffee.foodics.online/menu/-226471/${foodicsId}-${slug}`;
};
