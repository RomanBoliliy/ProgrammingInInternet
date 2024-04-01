
const str1 = 'Roman';
const str2 = 'roman';


function compareTexts(text1, text2, locale, ignoreCase = false) {
    const options = { sensitivity: ignoreCase ? 'base' : 'variant' };
    return text1.localeCompare(text2, locale, options);
}


switch (compareTexts(str1, str2, 'en-US', true)) {
    case -1:
        console.log(`\"${str1}\" comes before \"${str2}\"`);
        break;
    case 0:
        console.log(`\"${str1}\" and \"${str2}\" are identical`);
        break;
    case 1:
        console.log(`\"${str1}\" comes after \"${str2}\"`);
        break;
    default:
        break;
}