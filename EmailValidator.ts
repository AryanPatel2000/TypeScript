import { Validator } from "./validators";

class EmailValidator implements Validator{
     isValid(s: string): boolean {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return emailRegex.test(s);
     }
}


let email = 'abc.def@email.com';
let validator = new EmailValidator();
let result = validator.isValid(email)

console.log('\nemail->', email, '\nresult-> ', result)