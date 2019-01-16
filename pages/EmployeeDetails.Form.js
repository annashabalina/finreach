const EmployeeDetailsForm = function () {
    this.firstNameInput = element(by.model('selectedEmployee.firstName'));
    this.lastNameInput = element(by.model('selectedEmployee.lastName'));
    this.startDateInput = element(by.model('selectedEmployee.startDate'));
    this.emailInput = element(by.model('selectedEmployee.email'));
    this.addButton = element(by.buttonText('Add'));
    this.updateButton = element(by.buttonText('Update'));
    this.deleteButton = element(by.xpath('//div[@class=\'formFooter\']/p[.=\'Delete\']'));


    this.createEmployee = ( fName, lName, startDate, email ) => {
        this.firstNameInput.sendKeys(fName);
        this.lastNameInput.sendKeys(lName);
        this.startDateInput.sendKeys(startDate);
        this.emailInput.sendKeys(email);
        this.addButton.click();
    };

    this.editEmployeeDetails = ( input, newValue ) => {
        input.clear().sendKeys(newValue);
        this.updateButton.click();
    };
};
module.exports = EmployeeDetailsForm;