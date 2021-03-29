const generateNew = () => {
    fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => {
        const persona = json.results[0];
        const profilePhoto = document.getElementById("photo");
        const profileName = document.getElementById("name");
        const profileInfo = document.getElementById("info");

        const img = `${persona.picture.large}`;
        const name = `${persona.name.first} </br> ${persona.name.last}`;
        const email = `${persona.email}`;
        const city = `${persona.location.city}`;
        const nat = `${persona.nat}`;
        const phone = `${persona.phone}`;
        const gender = `${persona.gender}`;
        const age = `${persona.dob.age}`;
        const country = `${persona.location.country}`;
        const coords = persona.location.coordinates;
        let birth = persona.dob.date.split('T');
        birth = birth[0];

        profilePhoto.innerHTML = `<img class ="profilePhotoImg" src="${img}"/>`;
        profileName.innerHTML = `<h2 class="Title-Name t-center rounded">${name}</h2>`;
        profileInfo.innerHTML = `<p class="info-text m-2">Email: ${email} </p>`;
        profileInfo.innerHTML += `<p class="info-text m-2">Gender: ${gender} </p>`;
        profileInfo.innerHTML += `<p class="info-text m-2">Country: ${country} </p>`;
        profileInfo.innerHTML += `<p class="info-text m-2">City: ${city} </p>`;
        profileInfo.innerHTML += `<p class="info-text m-2">Coords: ${coords.latitude} ${coords.longitude}</p>`;
        profileInfo.innerHTML += `<p class="info-text m-2">Nationality: ${nat} </p>`;
        profileInfo.innerHTML += `<p class="info-text m-2">Phone: ${phone} </p>`;
        profileInfo.innerHTML += `<p class="info-text m-2">Age: ${age} </p>`;
        profileInfo.innerHTML += `<p class="info-text m-2">Birthday: ${birth} </p>`;
    
    })
}

if (document.getElementById("photo").innerHTML == '') {
    generateNew();
}

