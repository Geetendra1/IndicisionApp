class Person {
    constructor(name= 'anonymous', age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `hi.i am ${this.name}`;
    }
    getDiscription() {
        return `${this.name} is ${this.age} years old`;
    }
}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDiscription() {
        let description = super.getDiscription();

        if (this.hasMajor()) {
            description += `their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += `i am visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const me = new Traveler('geetendra', 19, 'jabalpur');
console.log(me.getGreeting());