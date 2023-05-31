// function main() {}

// module.exports = { main }

const url = "https://swapi.dev/api/people"
fetch(url)
  .then((response) => response.json())
  .then((data) => {
  const post = data.results
    
    console.log(post);
    // displayStarwars(post)
    let slides = "";

post.map((star) => {
  slides +=`
 <div id ="starwars">
  <div class = "starwars-body">
    <img src="./images/${star.name}.jpeg" alt ="">
    <button type="button" class="collapsible">${star.name}</button>
    <div class="content">
      <p>Name: ${star.name}</p>
      <p>Gender: ${star.gender}</p>
      <p>Height: ${star.height}</p>
    </div>
 </div>
</div>
`
});

document.getElementById('starwars').innerHTML = slides

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
  })

 
  // <a href="/detail" class='collapsible'> <h2 class="name">${star.name}</h2> </a>
// function displayStarwars(post){
  
//   for(let i = 0; i < (post.results).length; i++){
//   const starwars = post.results[i];
//   const starwarsDiv = document.getElementById("starwars"); 
//   const starwarsDiv2 = document.getElementById("starwars2")

//   const starwarsName = starwars.name;
//   const heading = document.createElement("h1");
//   heading.innerHTML = starwarsName;
//   starwarsDiv.appendChild(heading);

//   const starwarsGender = starwars.gender;
//   const paragraph = document.createElement("p");
//   paragraph.innerHTML = starwarsGender;
//   starwarsDiv.appendChild(paragraph);
 
//   const starwarsHeight = starwars.height;
//   const paragraph1 = document.createElement("p");
//   paragraph1.innerHTML = starwarsHeight;
//   starwarsDiv.appendChild(paragraph1);
  
//   const starwarsImg = document.createElement("img");
//   starwarsImg.src = 'https://cdn.wallpapersafari.com/16/35/zfRAgk.jpg';
//   starwarsDiv.appendChild(starwarsImg);
// }
// }

// document.write('this is javascript')
 
// https://th.bing.com/th/id/R.adb8b3ba9e87cec50b8a4b40a944b280?rik=nwg0mv41d%2bScwQ&riu=http%3a%2f%2fawesomewallpapers.files.wordpress.com%2f2009%2f05%2fmovie-star-wars-2786.jpg&ehk=fDg1c86XQy5Xc6%2fEGcFcpG19C7wzxyuXY3MZFkUWrzY%3d&risl=&pid=ImgRaw&r=0
  