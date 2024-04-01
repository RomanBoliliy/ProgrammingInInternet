

class Format {
    constructor(locale) {
        this.locale = locale;
        this.unit = this.imperialSystemCountries.includes(this.locale) ? 'in' : 'mm';
        this.defaultSize = this.imperialSystemCountries.includes(this.locale) ?
            { width: 8.5, height: 11 } :
            { width: 210, height: 297 };
    }

    imperialSystemCountries = ['en-US', 'en-CA', 'en-LR', 'en-MM'];

    getSize() {
        return `${this.locale} : ${this.defaultSize.width} ${this.unit} x ${this.defaultSize.height} ${this.unit}`;
    }
}

const str1 = new Format('en-US');
const str2 = new Format('fr');


console.log(str1.getSize());
console.log(str2.getSize());