class Person {
    constructor(firstName, lastName, gender, maritalStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }

    toLocaleString(locale) {
        const salutation = this.getSalutation(locale);
        return `${salutation} ${this.lastName}`;
    }

    getSalutation(locale) {
        switch (locale) {
            case 'en':
                if (this.gender === 'female') {
                    if (this.maritalStatus === 'married') {
                        return 'Mrs.';
                    } else {
                        return 'Miss';
                    }
                } else {
                    return 'Mr.';
                }
            case 'ua':
                 if (this.gender === 'female') {
                    return 'Pani';
                 } else {
                    return 'Pan';
                }
            case 'de':
                if (this.gender === 'female') {
                    return 'Frau';
                } else {
                    return 'Herr';
                }
                case 'ru':
                    if (this.gender === 'female') {
                        return 'Gospoga';
                    } else {
                        return 'Gospodin';
                    }
            case 'fr':
                if (this.gender === 'female') {
                    return 'Mme';
                } else {
                    return 'M.';
                }
            default:
                return '';
        }
    }
}

const person1 = new Person('Roman', 'Bolily', 'male', 'married');
console.log(person1.toLocaleString('ua'));

const person2 = new Person('Oksana', 'Makarchuk', 'female', 'married');
console.log(person2.toLocaleString('en'));

const person3 = new Person('Alina', 'Boyko', 'female', 'single');
console.log(person3.toLocaleString('en'));

const person4 = new Person('Oleg', 'Biliy', 'female', 'married');
console.log(person4.toLocaleString('fr'));