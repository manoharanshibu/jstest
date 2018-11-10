const base_convert = (number, baseFrom, baseTo) => parseInt(number, baseFrom).toString(baseTo).toUpperCase();

export default base_convert;