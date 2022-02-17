export function getProducts(){
    return fetch("http://localhost:9000/api/private/product")
        .then(res=>res.json())
        .catch(e => console.log(e.toString()))
}