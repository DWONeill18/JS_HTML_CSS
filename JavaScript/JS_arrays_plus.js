const myObject = {

    firstname: "David",
    lastname: "O'Neill",
    age: 29,
    address: {

        line1: "118 Boulthma Park Road",
        line2: "Boultham",
        line3: null,
        city: "Lincoln",
        postcode: "LN6 7TQ"
    }

}

console.log(myObject["firstname"]);
console.log(myObject.firstname);

console.log(myObject.address.city);

const newObject = JSON.stringify(myObject);

const mySecondObject = JSON.parse(newObject);



console.log(mySecondObject["firstname"]);



console.log(mySecondObject.firstname);
console.log(myObject.address.line3);





