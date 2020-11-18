
let requestURL = 'ezquiz.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();


function dataReportStatus(data) {
    let colToPush = document.getElementById("column-push");
    for (let i = 0; i < data.tracks.items.length; i++) {
        colToPush.innerHTML += `<div class="col-4 mt-5">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${data.tracks.items[i].album.images[0].url}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${data.tracks.items[i].album.name}</h5>
                <p>Artist: ${data.tracks.items[i].album.artists[0].name}</p>
                <p>Release dat: ${data.tracks.items[i].album.release_date}</p>
                <p>Available: ${data.tracks.items[i].album.available_markets.length} countries</p>
            </div>
        </div>
    </div>`
    }
}
