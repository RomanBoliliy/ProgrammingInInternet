const str1 = '{0} has {1} messages';
const str2 = 'Il y a {1} messages pour {0}';


function localeTemplate(template, ...args) {
    for(let i = 0; i < args.length; i++) {
        template = template.replace(`{${i}}`, args[i]);
    }
    return template;
}


console.log(localeTemplate(str1, 'Roman', 66));
console.log(localeTemplate(str2, 'Dmitro', 6));