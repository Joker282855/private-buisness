const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('create the github username from the employee', () => {
    const engineer = new Engineer('github');

    expect(engineer.name).toBe('github');
    expect(engineer.value).toEqual(expect.any(String));
});

test('getting the users github username', () => {
    const engineer = new Engineer('happydragon23@gmail.com')

    expect(engineer.getGithub()).toHaveProperty('github');
});

test('get all of the values for Engineer with geRole', () => {
    const engineer = new Engineer()

    expect(engineer.getRole()).toHaveProperty('github');
});