

function getRandomElement<T>(items: T[]):T {

    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex]
}

let stri = ['a','b','c', 'd', 'e', 'f', 'g'];
let randomEle = getRandomElement<string>(stri);

console.log('Random character: ', randomEle)


class Cars{
    name: string;
    model: string;
    color: string;

    constructor(name:string, model:string, color: string){
        this.name = name;
        this.model = model;
        this.color = color;
    }
}

function disPlay<T extends Cars>(car:T):void{
    console.log(`\nThis is ${car.name} ${car.model} with ${car.color} color`)
}

let car = new Cars('Audi', 'A7', 'Brown');

disPlay(car)

//Generics 

function getItems<T>(items:T[]):T[]{
    return new Array<T>().concat(items);
}

let arrNumber = getItems([10,20,30,40]);
let arrString = getItems(["Abcd", "Efgh"]);


arrNumber.push(50);
arrString.push('ijk')

console.log('arrNumber', arrNumber);
console.log('arrString: ', arrString);

//Multiple Type Variables
function displayData<T, U>(id:T, name:U):void{
    console.log("\nid->", id + "\nname->" , name);
}
displayData(371,"Raghu")

class studentInfo<T,U>
{
    private Id: T
    private Name: U

    setValue(id: T, name: U):void{
        this.Id=id;
        this.Name=name;
    }

    display():void{
        console.log(`\nId = ${this.Id},\nName = ${this.Name}`);
    }
}

let st = new studentInfo<number, string>();
st.setValue(101, "Virat");

st.setValue(201, "Rohit");
st.display();