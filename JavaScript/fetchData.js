function fetchData(method, textbody, url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {

            if (req.readyState === 4) {

                if (req.status >= 200 && req.status < 300) {
                    // 200 = ok, 201=created, 204=no content
                    // req.status === 201 leads to error msg
                    resolve(req.responseText);
                    // console.log("ok", req);
                }
                else {
                    reject("something went wrong");
                }

                // console.log(req.responseText);
                // if(req.responseText) {
                // const Users = JSON.parse(req.responseText);
                // }


                // console.log(Superheroes.squadName);
                // document.getElementById("squadName").innerHTML = Superheroes.squadName;

            }

        };
        req.open(method, "http://localhost:8080/JavaEEServer-1.0/api/" + url);
        req.setRequestHeader("content-type", "apllication/json");
        req.send(textbody);
    });
}

console.log('before promise');

function changePage(){

    window.location.assign("Login.html");

}

function onClickLogin(){


fetchData("GET", "http://localhost:8080/JavaEEServer-1.0/api/accounts").then((req) => {
    console.log('fulfilled', req.parsedResponse);
}).catch((err) => {
    console.log('rejected. reason:', err);
});
console.log('after promise');

changePage();


}
