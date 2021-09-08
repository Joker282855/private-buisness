const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('create the name of the school for the Intern', () => {
    const internSchool = new Intern('school');

    expect(internSchool.name).toBe('school');
    expect(internSchool.value).toEqual(expect.any(String));
});

test('getting the school of the Employee', () => {
    const intern = new Intern('Stanford University');

    expect(intern.getSchool()).toHaveProperty('school');
});

test('get all of the values of Intern for getRole function', () => {
    const intern = new Intern()

    expect(intern.getRole()).toHaveProperty('school');
});
