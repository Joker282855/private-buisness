function Manager(name) {
    this.name = name;

    if (this.name === 'officeNumber') {
        this.value = Math.floor(Math.random() * 399 + 1);
    } else {
        this.value = Math.floor(Math.random() * 250 + 1);
    }
};

Manager.prototype.getRoll = function() {
    return {
        name: this.name,
        officeNumber:  this.officeNumber
    }
};

module.exports = Manager;