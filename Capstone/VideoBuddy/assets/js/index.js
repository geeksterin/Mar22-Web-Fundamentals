fetch('https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=24&key=AIzaSyAdWaVR_CQXV4SELrqkK6_qbtvsepjE03o')
.then((res) => {
  return res.json();
}).then((data) => {
  console.log(data);
});


/*

<div class="col">
  <div class="card" style="width: 18rem;">
  <!-- <img src="..." class="card-img-top" alt="..."> -->
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
            </div>
          </div>


*/