const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('get the officeNumber of the Manager', () => {
    const manager = new Manager('officeNumber');

    expect(manager.name).toBe('officeNumber');
    expect(manager.value).toEqual(expect.any(Number));
});

test('return everything for Manager', () => {
    const managerRoll = new Manager();

    expect(managerRoll.getRoll()).toHaveProperty('officeNumber');
});


