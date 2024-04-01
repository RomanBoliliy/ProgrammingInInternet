const date = new Date();

console.log(`French: ${new Intl.DateTimeFormat('fr').format(date)}`);
console.log(`Chinese: ${new Intl.DateTimeFormat('zh').format(date)}`);
console.log(`Egyptian: ${new Intl.DateTimeFormat('egx').format(date)}`);
console.log(`Thai: ${new Intl.DateTimeFormat('th-TH-u-nu-thai').format(date)}`);