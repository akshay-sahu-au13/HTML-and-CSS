
let container = document.querySelector('.container');

const card = document.createElement('div');

document.addEventListener('DOMContentLoaded', getProfiles());

async function getProfiles() {
    let res = await profilesReq();
    console.log(res);
    if (res.data.length > 0){
        console.log("Profiles fetched successfully");
        let profile_card = "";

        res.data.forEach(function(profile){
            profile_card += `<div class="card">
            <h3>${profile.first_name}</h3>
            <p>${profile.email}</p>
            <img src="${profile.avatar}" alt="dp">
        </div>`
        });
        container.innerHTML = profile_card;
    }
}

async function profilesReq() {
    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
        }
    }

        let profiles = await fetch("https://reqres.in/api/users", options);
        // console.log('Data: ',await profiles.json());
        return profiles.json()
    } catch (error) {
        console.log(error);
    }
}

card.innerHTML = `<h3></h3> <p></p> <img src="" alt=""></img>`;