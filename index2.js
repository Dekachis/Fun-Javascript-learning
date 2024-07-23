const profiles = [
    {
    pictures:"tortoise.jpg",
    names:"Tortoise"},
    {
        pictures:"deer.jpg",
        names:"Deer"
    },
    {
        pictures:"dolphin.jpg",
        names:"Dolphin"
    },
    {
        pictures:"elephant.jpg",
        names:"Elephant"
    },
    {
        pictures:"hipo.jpg",
        names:"Hipopothamus"
    },
    {
        pictures:"squirrel.jpg",
        names:"Squirrel"
    },
    {
        pictures:"tiger.jpg",
        names:"Tiger"
    }
]

let aniPics = document.querySelector(".aniPic")
let aniNames = document.querySelector(".aniName")

let index = 0;

function updateProfiles() {
    const {pictures, names} = profiles[index]
    aniPics.src = pictures;
    aniNames.innerText = names;
    index++;

    if (index === profiles.length) {
        index = 0;
    }

    setTimeout(() => {
        updateProfiles()
    }, 3000)
}

updateProfiles();