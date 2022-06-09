const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
    try {
        e.preventDefault();
        const userInput = form.elements.query.value;
        //Allows for changes to the URL
        const config = { params: { q: userInput } };
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        displayImages(res.data);
    }
    catch (e) {
        const errorMsg = document.createElement("H2");
        errorMsg.innerText = "API unavailable please try again later";
        errorMsg.style.color = "red";
        document.body.append(errorMsg);
    }

});

const displayImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.getElementById("imgContainer").append(img);
            form.reset();
        }
    }
}
