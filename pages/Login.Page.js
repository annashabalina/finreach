const LoginPage = function () {
    let usernameInput = element(by.model('user.name'));
    let passwordInput = element(by.model('user.password'));
    let loginButton = element(by.buttonText('Login'));

    this.login = ( username, password ) => {
        usernameInput.clear().sendKeys(username);
        passwordInput.clear().sendKeys(password);
        loginButton.click();
    };
};

module.exports = LoginPage;