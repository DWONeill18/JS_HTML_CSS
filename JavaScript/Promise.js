function fetchData() {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {

            if (req.readyState === 4) {

                if (req.status === 200) {
                    // req.status === 201 leads to error msg
                    resolve(req);
                    console.log("ok");
                }
                else {
                    reject("something went wrong");
                }

                console.log(req.responseText);
                const Superheroes = JSON.parse(req.responseText);


                console.log(Superheroes.squadName);
                document.getElementById("squadName").innerHTML = Superheroes.squadName;

            }

        };
        req.open("GET", "http://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
        req.send();
    });
}

console.log('before promise');
fetchData().then((req) => {
    console.log('fulfilled', req, req.status, req.responseText);
}).catch((err) => {
    console.log('rejected. reason:', err);
});
console.log('after promise');




// const req = new XMLHttpRequest();
// req.onreadystatechange = function () {

//     if (req.readyState === 4) {
//         console.log("ok");
//         console.log(req.responseText);
//         const Superheroes = JSON.parse(req.responseText);


//         console.log(Superheroes.squadName);
//         document.getElementById("squadName").innerHTML = Superheroes.squadName;
//         document.getElementById("p1").innerHTML = Superheroes.homeTown;
//     }

// };

// req.open("GET", "http://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
// req.send();
