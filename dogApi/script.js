
const dogImgBtn = document.getElementById('dogButton')

const imgGenrator = async ()=>{
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    let godImgDiv= document.getElementById('dogImage');
    godImgDiv = godImgDiv.getElementsByTagName('img')[0]
    godImgDiv.src = data['message']
}

dogImgBtn.onclick = () => imgGenrator()


