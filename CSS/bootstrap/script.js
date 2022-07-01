function addAlbum(element, event) {
    event.preventDefault();
    const inputs = {};
    for (input of document.querySelectorAll("#albumForm input")) {
        inputs[input.name] = input.value;
    }

    const newAlbum = `<div class="card m-2 mt-0" style="width: 18rem;">
                        <img src="${inputs.url}"
                            class="card-img-top" alt="${inputs.name}">
                        <div class="card-body">
                            <h5 class="card-title">${inputs.name}</h5>
                            <p class="card-text">by ${inputs.artist}, ${inputs.year}</p>
                        </div>
                    </div>`;
    document.querySelector("#albumContainer").innerHTML += newAlbum;
    element.reset();
}