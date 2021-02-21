
const BASE_READABLE_NUMBERS = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
};

module.exports = (number) => {
  const set = new Set(Object.keys(BASE_READABLE_NUMBERS));
  const strNumber = String(number);
  if (set.has(strNumber)) {
    return BASE_READABLE_NUMBERS[number];
  } else if (strNumber.length === 2) {
    return BASE_READABLE_NUMBERS[strNumber[0] + '0'] + (BASE_READABLE_NUMBERS[strNumber[1]] !== 'zero' ? ' ' + BASE_READABLE_NUMBERS[strNumber[1]] : '');
  } else if (strNumber.length === 3) {
    return BASE_READABLE_NUMBERS[strNumber[0]] + ' hundred' + (set.has(String(strNumber[1] + strNumber[2])) ? ' ' + BASE_READABLE_NUMBERS[strNumber[1] + strNumber[2]] : ((BASE_READABLE_NUMBERS[strNumber[1] + '0'] ? ' ' + BASE_READABLE_NUMBERS[strNumber[1] + '0'] : '') + (BASE_READABLE_NUMBERS[strNumber[2]] !== 'zero' ? ' ' + BASE_READABLE_NUMBERS[strNumber[2]] : '')));
  }
};
