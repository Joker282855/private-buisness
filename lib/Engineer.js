function Engineer(name) {
    this.name = name;

    if (this.name === 'github') {
        this.value = 'jtjackson325@gmail.com'
    } else {
        this.value = 'cutepuppy12@gmail.com'
    }
}

Engineer.prototype.getGithub = function() {
    return {
        github: this.github
    };
};

Engineer.prototype.getRole = function() {
    return {
        name: this.name,
        github: this.github
    };
};

module.exports = Engineer;