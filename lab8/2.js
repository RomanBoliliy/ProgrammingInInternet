const number = 666;

console.log(
    `English: ${new Intl.NumberFormat('en-US').format(number)}`
);

console.log(
    `Arabic: ${new Intl.NumberFormat('ar').format(number)}`
);

console.log(
    `Thai: ${new Intl.NumberFormat('th-TH-u-nu-thai').format(number)}`
);