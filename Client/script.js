console.log("Init");

document.querySelector("#sendposts").addEventListener("click", function() {
  console.log("fetch");

  axios.post('http://localhost:3000/posts/insert', {
    title: "Mathieu a rejoint la communauté",
    description: "loremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
  })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  axios.post('http://localhost:3000/user/insert', {
    name: "Mat",
    age: 19
  })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})

document.querySelector("#getposts").addEventListener("click", function() {
  console.log("fetch");

  axios.get('http://localhost:3000/posts')
  .then(function (response) {
    // handle success
    console.log(response);
    
    // document.querySelector("#posts").appendChild("<div>"+response+"</div>")
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})