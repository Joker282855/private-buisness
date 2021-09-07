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


module.exports = Employee;