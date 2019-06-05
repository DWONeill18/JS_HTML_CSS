
function createTableRow(member){

    let tableRef = document.getElementById("heroes-table");
    let row = tableRef.insertRow(-1);
    let index = 0;
    for (let key in member){
        let cell = row.insertCell(index);
        let text = document.createTextNode(member[key]);
        cell.appendChild(text);
        index++;
    }
}

const req = new XMLHttpRequest();
req.onreadystatechange = function () {

    if (req.readyState === 4) {
        console.log("ok");
        console.log(req.responseText);
        const Superheroes = JSON.parse(req.responseText);

        for (let member of Superheroes.members){

            createTableRow(member);
        }


        console.log(Superheroes.squadName);
        document.getElementById("squadName").innerHTML = Superheroes.squadName;
        document.getElementById("p1").innerHTML = Superheroes.homeTown;


        // function generateTable(table, data) {
        //     for (let element of data) {
        //         let row = table.insertRow();
        //         for (key in element) {
        //             let cell = row.insertCell();
        //             let text = document.createTextNode(element[key]);
        //             cell.appendChild(text);
        //         }
        //     }
        // }
        // let table = document.querySelector("table");
        // let data = Object.keys(mountains[0]);
        // generateTableHead(table, data);
        // generateTable(table, mountains);





        // txt += "<table border='1'>"
        // for (x in Superheroes) {
        //     txt += "<tr><td>" + Superheroes[x].name + "</td></tr>";
        // }
        // txt += "</table>"
        // document.getElementById("demo").innerHTML = txt;


        //     for (let x of Superheroes.members) {


        //         if (x) {

        //             document.getElementById("p1").innerHTML = (x.age);



        //         }
        //     }

    }

};

req.open("GET", "http://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
req.send();

