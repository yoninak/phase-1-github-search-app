document.getElementById("github-form").addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
   let search = document.getElementById('search').value
console.log(search)

fetch(`https://api.github.com/search/users?q=${search}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
//    console.log(data.items)
   //iterate through data.items, create HTML elements, give it some innertext//
   data.items.forEach(obj => {
    console.log(obj)
let p = document.createElement("p")
p.innerText = obj.login

let a = document.createElement("a")
a.innerText = obj.html_url
a.href = obj.html_url

let image = document.createElement("img")
image.src = obj.avatar_url

let ul = document.getElementById("user-list")
ul.append(p, a, image)

}); 
  });
}
