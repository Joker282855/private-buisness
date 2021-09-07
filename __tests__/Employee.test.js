const { test, expect } = require('@jest/globals');
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
