let validator = {
    set: function(obj, prop, value) {
        if (prop == "name") {
            if (!typeof value == "string") {
                throw new TypeError('The name must be string');
            }
            if (value.length > 7) {
                throw new RangeError('The name must be 7 character or less');
            } else {
                obj[prop] = value;
                return true;
            }
        }
        if (prop == "address") {
            if (typeof value == "string") {
                obj[prop] = value;
                return true;
            } else {
                throw new TypeError('The address must be string');
            }
        }
        if (prop === 'age') {
            if (isNaN(value)) {
                throw new TypeError('The age must be integer');
            }
            if (value < 25 || value >= 60) {
                throw new RangeError('The age must be between 25 & 60');
            } else {
                obj[prop] = value;
                return true;
            }
        }
    }
};
const person = new Proxy({}, validator);
console.log("if person age is 100.")
person.age = 100; // Throws an exception
console.log("if person address is 222.");
person.address = 222; // Throws an exception
console.log("if person name is 'AmalAssem'.")
person.name = "AmalAssem"; // Throws an exception