
const dogImgBtn = document.getElementById('dogButton')

const imgGenrator = ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
    let godImgDiv= document.getElementById('dogImage');
        godImgDiv = godImgDiv.getElementsByTagName('img')[0]
        godImgDiv.src = json["message"]
    })
}

dogImgBtn.onclick = ()=> imgGenrator()


