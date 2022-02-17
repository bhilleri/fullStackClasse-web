export function getProducts(){
    return fetch("http://localhost:9000/api/private/product")
        .then(res=>res.json())
        .catch(e => console.log(e.toString()))
}

export function postProduct(newProduct){
    return fetch("http://localhost:9000/api/private/product", {
        method:"POST",
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newProduct)
      }).then(res => res.json())
      .catch(e => console.log(e.toString()));
}

export function deleteProduct(id){
    return fetch("http://localhost:9000/api/private/product/"+ id.toString(),{
    method:"DELETE"})
    .catch(e=>console.log(e.toString()))
}
