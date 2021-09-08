function Intern(name) {
    this.name = name;

    if (this.name === 'school') {
        this.value = 'Utah Valley University'
    } else {
        this.value = 'Brigham Young University'
    };
};

Intern.prototype.getSchool = function() {
    return {
        school: this.school
    };
};

Intern.prototype.getRole = function() {
    return {
        name: this.name,
        school: this.school
    };
};

module.exports = Intern;