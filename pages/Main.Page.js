const MainPage = function () {
    this.createButton = element(by.id('bAdd'));
    this.editButton = element(by.id('bEdit'));
    this.deleteButton = element(by.id('bDelete'));
    this.employeesList = element.all(by.repeater('employee in employees'));

    this.openCreateNewEmployeeFrom = () => {
        this.createButton.click();
    };

    this.findEmployeeInTheList = ( fullName ) => {
        return this.employeesList.filter(( emp ) => {
            return emp.getText().then(text => {
                return text.indexOf(fullName) > -1;
            });
        });
    };
};

module.exports = MainPage;