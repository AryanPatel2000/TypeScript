"use strict";
exports.__esModule = true;
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.isValid = function (s) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    };
    return EmailValidator;
}());
// export {EmailValidator};
// import { EmailValidator } from "./EmailValidator";
var email = 'abc.def@email.com';
var validator = new EmailValidator();
var result = validator.isValid(email);
console.log('\nemail->', email, '\nresult-> ', result);
