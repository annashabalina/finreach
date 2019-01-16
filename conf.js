exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/spec.js'],

    params: {
        url: "https://cafetownsend-angular-rails.herokuapp.com/login",
        username: "Luke",
        password: "Skywalker",
    },
    onPrepare: function () {
        // browser.manage().window().maximize();
    }
};