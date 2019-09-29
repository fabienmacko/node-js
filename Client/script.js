console.log("Init");

document.querySelector("#sendposts").addEventListener("click", function() {
  console.log("fetch");
  let pseudo = document.querySelector("#pseudo").value;
  let description = document.querySelector("#description").value;
  axios.post('http://localhost:3000/posts/insert', {
    pseudo,
    description
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