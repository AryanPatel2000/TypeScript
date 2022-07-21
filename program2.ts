

let city: string[];
city = ['Dispur', 'Shilong', 'Mumbai', 'Ladakh']
console.log(city)
console.log('typeof : ', typeof(city))

let series = [2,6,4,8,9,12];
console.log("Series: ", series);

let ope = series.map( e => e * 2);
console.log("Series * 2: ", ope)

//union type : The union type allows to combine multiple types into one type.
let mix: (string | number )[]
 mix = ['India', 'UK', 'UAE', 'Russia', 100,200,500,600, ]
console.log('Array: ', mix)


function display(id: number, name: string)
{
    console.log(`Id= ${id} , Name= ${name}`);
    
}
display(7, "MS Dhoni");


function sum(x:number, y:number)
{
    return x + y;
}
let Addition: number = sum(10,20);

console.log('10 + 20 = ', Addition)

//Type Assertion
let empCode: any = 123;
let employeeCode = <number> empCode;
console.log('emp code: ', employeeCode)

let str: any = true;
let disStr = str as string
console.log('String: ', disStr)


function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1- discount);
    return format ? `$${netPrice}` : netPrice
 }

 //let netPrice = getNetPrice(100, 0.05, true) as number;
 
 let netPrice = <string> getNetPrice(100,0.05, true)
 console.log('Net Price: ', netPrice)

 let netP = getNetPrice(100, 0.05, false) as number
 console.log('net price: ', netP);

 interface Student{
     name: string;
     code: number;
 }
 
 let student = <Student> {};
 student.name = 'Dhoni',
 student.code = 7;

 console.log('Name: ', student.name, '\nCode: ', student.code)

 let state: any[]  = ['Gujarat', 'Maharashtra', 'Rajsthan', 'Goa', 1,2,3, true, false]

 console.log('State: ', state)

//  let i: any;
//  for(i in state)
//  {  
//     console.log(state[i])
//  }


//Tuple type
let tp: [number, string, boolean] [];
tp =[ [1, 'MSD', true], [2, 'VK', false], [3, 'Sachin', true]]
console.log(tp)

tp.push([4, 'Raina', true])

console.log("Data: ", tp)

let arrTouple = [true, 1526, 'abcd']
console.log("Data: ",arrTouple)

arrTouple.push(false, 1565, 'ABCD')
console.log("Data: ",arrTouple)

arrTouple.push(true, 'India', 1947)
console.log("Data: ",arrTouple);


function disp(value: any[]){

    for( let i = 0; i< arrTouple.length; i++)
    {
        console.log(arrTouple[i])
    }
}

disp(arrTouple)


//enum example
enum appStatus{ 
   Active = 'ACT',
   InActive = 'INACT',
   OnHold = 'HLD',
   ONDTOP = 'STOP'
}

function checkStatus(status: appStatus): void{
    console.log('Status: ', status)
}
checkStatus(appStatus.ONDTOP)
console.log()

//functions

function add( a: number, b: number, message: any): any {
    //
    console.log('Message: ', message.toUpperCase());
    console.log('Addition: ', a + b)
    return a + b ;
}

let result = add(500, 1500, 'india');

console.log('Sum: ', result);

//function with optional parameters

function multiply(a: number, b: number, c? :number): number{

    if(typeof c !== 'undefined')
    {
        return a * b * c;
    }

    return a * b;
}
let res = multiply(5, 50, 100)
console.log('Multiplication: ', res);

//rest parameter
function getTotal(...number: number[]): number{
    let total = 0;
    number.forEach((num) => total += num);
    return total;
}

console.log('Total: ', getTotal(50,500))



//function Overloading
function Add(a: number, b: number, c:number): number;
function Add(a: number, b: number, ): number;
function Add(a: number, b: number,  c?: number): number{

   if(c) return a + b + c ;
   
         return a + b ;

}

let aa = Add(500,5000 );
console.log('Result: ', aa)

let bb = Add(1500,2500,5200,)
console.log('Res: ',bb)
 

//method overloading

class Counter {
    private current: number = 1;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[]{
        if(target){
            let value = [];
            for(let start = this.current; start <= target; start++){

                value.push(start);
            }
            this.current = target
            return value
        }
        return ++this.current;
    }
}

let counter = new Counter();

//console.log(counter.count());//return a number
console.log(counter.count(20));// return an array


//class

class Person{

   
    private _firstName: string;
    private _lastName: string;
    private _age: number;
    

    constructor(fname:string, lname: string, age:number, ){

        this._firstName = fname;
        this._lastName = lname;
        this._age = age;
            
    }

   
    public get age(){
        return this._age
    }
    public set age(theAge: number){
        if(theAge <= 0 || theAge >=200){
            throw new Error('Invalid age')
        }
        this._age = theAge;
    }
    

    public get fullName(): string{
        return `${this._firstName} ${this._lastName}`
    }


    
}

let person = new Person('Virat', 'kohli', 235)


console.log('fullName: ', person.fullName)
console.log('Age: ', person.age)


class Car{

    constructor(private color: string, private model: string){
        this.color = color;
        this.model = model;
    }
    getInfo(): string{
        return `${this.color} ${this.model}`;
    }
    describe(): string{
        return `This is Audi ${this.model} ${this.color} color `
    }

}

class Audi extends Car{

    constructor(color: string,model: string, private price: number){

        super(color, model)
    }

    describe(): string {
        return super.describe() + `with Price ${this.price}`
    }

}
let obj = new Audi('Brown','A7', 8500000)

console.log(obj.getInfo())
console.log(obj.describe())

//Interface: 
interface iEmployee{
    empCode: number;
    name: string;
    getSalary: (empCode: number) => number;
}

class Emp implements iEmployee{
    empCode: number;
    name: string;

    constructor(code:number, name: string){
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode: number): number{
        return 200000
    }
}

let emp = new Emp(1, 'Hanery Ford')

console.log('EmpCode: ', emp.empCode);
console.log('Name: ', emp.name);



interface BusinessPartener {

    name: string;
    credit: number
}
interface Identity {
    id: number;
    name: string;
}
interface Contact{
    email: string;
    phone: string
}
//intersection types : create a new type by combining multiple existing types
type Employee = Identity & Contact;
type Customer = BusinessPartener & Contact;

let e: Employee = {
    id : 100,
    name : 'john pandey',
    email: 'john@email.com',
    phone: '(408)-847-5684'
}

console.log("EmpInfo: ", e)


let c: Customer = {
    name: 'Business ltd.',
    credit : 5000000,
    email: 'business@email.com',
    phone: '(301)-987-9512'

}

console.log('CustomerInfo: ', c)

type Ins= BusinessPartener & Identity & Contact

let I: Ins = {
    id: 101,
    name: 'Ad.dorcy',
    email:'dorcy@email.com',
    phone: '(087)-852-7532',
    credit: 150000
}

console.log('Info-> ', I)


