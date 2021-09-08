const Employee = require('../lib/Employee.js');

test('creates a employee name object', () => {
    const employeeName = new Employee('name')

    expect(employeeName.name).toBe('name');
    expect(employeeName.value).toEqual(expect.any(String));
});

test('gives the employee an id number for identification', () => {
    const employeeId = new Employee('id');

    expect(employeeId.name).toEqual(expect.any(String));
    expect(employeeId.name.length).toBeGreaterThan(0);
    expect(employeeId.value).toEqual(expect.any(Number));
});

test('gives the user an email', () => {
    const employeeEmail = new Employee('email')

    expect(employeeEmail.name).toEqual(expect.any(String));
    expect(employeeEmail.name.length).toBeGreaterThan(0);
    expect(employeeEmail.value).toEqual(expect.any(String));
});

test('get the users name as an object', () => {
    const employee = new Employee('Berta')

    expect(employee.getName()).toHaveProperty('name');
});

test('get the users id as an object', () => {
    const employee = new Employee(13)

    expect(employee.getId()).toHaveProperty('id')
});

test('get the employees email', () => {
    const employee = new Employee('happybunny25@gmail.com')

    expect(employee.getEmail()).toHaveProperty('email')
});

test('get the employees role by getting all of their values', () => {
    const employeeRoll = new Employee();

    expect(employeeRoll.getRoll()).toHaveProperty('name');
    expect(employeeRoll.getRoll()).toHaveProperty('id');
    expect(employeeRoll.getRoll()).toHaveProperty('email');
});