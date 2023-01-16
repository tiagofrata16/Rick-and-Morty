url = "https://rickandmortyapi.com/api/character/562";
url2 = "https://rickandmortyapi.com/api/character/129";
url3 = "https://rickandmortyapi.com/api/character/133";

const container = document.querySelector('#container');

async function getAllPosts() {
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);

    //console.log(response);

    const data = await response.json();

    console.log(data);

    const data2 = await response2.json();

    console.log(data2);

    const data3 = await response3.json();

    console.log(data3);

    const dataPost = (data) => {

        const urlImage = data.image;
        fetch(urlImage)
        .then(function(data){
            return data.blob();
        }).then(function (result){
        const imgURL = URL.createObjectURL(result);

        const div = document.createElement("div");
        const divInfo = document.createElement("div");
        const name = document.createElement("h1");
        const imageDiv = document.createElement("div");
        
        const id = document.createElement("h2");
        const location = document.createElement("h2");
        const origin = document.createElement("h2");        
        const gender = document.createElement("h2");
        const species = document.createElement("h2");
        
        name.innerText = data.name;
        const img = `<img src="${imgURL}"/>`;
        imageDiv.innerHTML = img;
        id.innerText = `Id: ${data.id}`;
        location.innerText = `Location: ${data.location.name}`;
        origin.innerText = `Origin: ${data.origin.name}`;
        gender.innerText = `Gender: ${data.gender}`;
        species.innerText = `Species: ${data.species}`;
              
        div.appendChild(name);
        div.appendChild(imageDiv);

        divInfo.appendChild(id);
        divInfo.appendChild(location);
        divInfo.appendChild(origin);
        divInfo.appendChild(gender);
        divInfo.appendChild(species);

        div.appendChild(divInfo);
        div.setAttribute('class','divChar');
        container.appendChild(div);
        })
    }
    dataPost(data);
    dataPost(data2);
    dataPost(data3);
}

getAllPosts();












