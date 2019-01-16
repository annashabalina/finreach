const LoginPage = require('../pages/Login.Page'),
    MainPage = require('../pages/Main.Page'),
    EmployeeDetails = require('../pages/EmployeeDetails.Form');

const {newEmployeeData} = require('../data/newEmployee.data');

describe('Test create, edit, delete new employee', function () {
    const loginPage = new LoginPage(),
        mainPage = new MainPage(),
        employeeDetailsForm = new EmployeeDetails();

    beforeAll(() => {
        browser.get(browser.params.url);
        loginPage.login(browser.params.username, browser.params.password);
    });

    it('Create new employee', () => {
        mainPage.openCreateNewEmployeeFrom();
        employeeDetailsForm.createEmployee(
            newEmployeeData.firstName,
            newEmployeeData.lastName,
            newEmployeeData.startDate,
            newEmployeeData.email
        );
        mainPage.findEmployeeInTheList(`${newEmployeeData.firstName} ${newEmployeeData.lastName}`).then(result => {
            expect(result.length).toEqual(1);
        });
    });

    it('Edit my test employee', () => {
        mainPage.findEmployeeInTheList(`${newEmployeeData.firstName} ${newEmployeeData.lastName}`).then(result => {
            result[0].click();
        });
        mainPage.editButton.click();
        employeeDetailsForm.editEmployeeDetails(employeeDetailsForm.startDateInput, newEmployeeData.newStartDate);
        mainPage.findEmployeeInTheList(`${newEmployeeData.firstName} ${newEmployeeData.lastName}`).then(result => {
            result[0].click();
        });
        mainPage.editButton.click();

        employeeDetailsForm.startDateInput.getAttribute('value').then(( val ) => {
            expect(val).toEqual(newEmployeeData.newStartDate);
        });

    });

    it('Delete new employee', () => {
        const employeeFullName = `${newEmployeeData.firstName} ${newEmployeeData.lastName}`;
        employeeDetailsForm.deleteButton.click();
        browser.switchTo().alert().getText().then(text => {
            expect(text).toEqual(`Are you sure you want to delete ${employeeFullName}?`);
        });
        browser.switchTo().alert().accept();
        mainPage.findEmployeeInTheList(employeeFullName).then(result => {
            expect(result.length).toEqual(0);
        });
    });

});