function Employee(name) {
    this.types = ['name', 'id', 'email'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'name') {
        this.value = 'Henry'
    } else if (this.name === 'id') {
        this.value = Math.floor(Math.random() * 19 + 1)
    } else {
        this.value = 'jtjackson325@gmail.com'
    }
}

Employee.prototype.getName = function() {
    return {
        name: this.name
    };
};

Employee.prototype.getId = function() {
    return {
        id: this.id
    };
};

Employee.prototype.getEmail = function() {
    return {
        email: this.getEmail
    };
};

Employee.prototype.getRoll = function() {
    return {
        name: this.name,
        id: this.id,
        email: this.email
    };
};

module.exports = Employee;