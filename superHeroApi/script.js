const heroBtn = document.getElementById("heroBtn");
const getHero = () => {
  let random = Math.floor(Math.random() * 731);
  console.log(random);
  const url = "https://www.superheroapi.com/api.php/10223569763528853/";
  fetch(`${url}/${random}`)
    .then((response) => response.json())
    .then((json) => {
        let img = json["image"]["url"];
        let imgElement = document.createElement("img");
        imgElement.src = img;
        imgElement.alt = json.name;
        // Clear previous image
        document.querySelector("#heroImageContainer").innerHTML = '';
        // Add new image
        document.querySelector("#heroImageContainer").appendChild(imgElement);
    });
};

heroBtn.onclick = () => getHero();
