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
});

console.log(video_id);