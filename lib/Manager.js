const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

getRole() {
    return 'Manager';
}

getOfficeNumber(officeNumber) {
    return this.officeNumber;
}
}


module.exports = Manager