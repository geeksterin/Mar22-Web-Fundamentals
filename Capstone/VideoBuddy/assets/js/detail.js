const url = window.location.href;
const url_obj = new URL(url);
const params = new URLSearchParams(url_obj.search);

if(!params.has('id')) {
  window.location.href = "index.html";
}

const video_id = params.get('id');

fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id='+video_id+'&key=AIzaSyAdWaVR_CQXV4SELrqkK6_qbtvsepjE03o')
.then((res) => {
  return res.json();
}).then((data) => {
  const video_details = data.items[0];
  console.log(video_details);
  const title = video_details.snippet.title;
  const channel_name = video_details.snippet.channelTitle;
  const description = video_details.snippet.description;
  const view_count = video_details.statistics.viewCount;
  const like_count = video_details.statistics.likeCount;

  document.getElementById('video_title').innerText = title;
  document.getElementById('channel_name').innerText = channel_name;
  document.getElementById('video_description').innerText = description;
  document.getElementById('video_views').innerText = view_count;
  document.getElementById('video_likes').innerText = like_count;
  document.getElementById('player_iframe').src="https://www.youtube.com/embed/" + video_id;

  getSuggestions();
});


function getSuggestions() {
  fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&relatedToVideoId='+video_id+'&type=video&key=AIzaSyAdWaVR_CQXV4SELrqkK6_qbtvsepjE03o')
  .then((res) => {
    return res.json();
  }).then((data) => {
    // console.log(data);
    const suggestion_list = data.items;
    const suggestions_container = document.getElementById('suggestions_container');

    for(let i = 0; i < suggestion_list.length; i++) {
      const single_suggestion = suggestion_list[i];
      console.log(single_suggestion);

      const suggesion_video_id = single_suggestion.id.videoId;
      if(single_suggestion.snippet == undefined) {
        continue;
      }
      const suggestion_video_title = single_suggestion.snippet.title;
      const suggestion_video_thumbnail = single_suggestion.snippet.thumbnails.high.url;
    
      const h5_elem = document.createElement('h5');
      h5_elem.classList.add('card-title');
      h5_elem.innerText = suggestion_video_title;

      const anchor_elem = document.createElement('a');
      anchor_elem.href = `detail.html?id=${suggesion_video_id}`;
      anchor_elem.appendChild(h5_elem);

      const div_elem = document.createElement('div');
      div_elem.classList.add('card-body');
      div_elem.appendChild(anchor_elem);

      const image_elem = document.createElement('img');
      image_elem.src = suggestion_video_thumbnail;
      image_elem.classList.add('card-img-top');

      const card_div_elem = document.createElement('div');
      card_div_elem.classList.add('card');
      card_div_elem.style.minWidth = "18rem";
      card_div_elem.style.maxWidth = "18rem";
      card_div_elem.appendChild(image_elem);
      card_div_elem.appendChild(div_elem);

      suggestions_container.appendChild(card_div_elem);
    }
  });
}

/*
<div class="card" style="min-width: 18rem;">
</div>
*/