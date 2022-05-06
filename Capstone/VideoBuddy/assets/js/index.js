fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&key=AIzaSyAdWaVR_CQXV4SELrqkK6_qbtvsepjE03o')
.then((res) => {
  return res.json();
}).then((data) => {
  const video_list = data.items;
  const parent_container = document.getElementById('card_container');

  for(let i =0; i < video_list.length; i++) {
    const single_video = video_list[i];
    const video_id = single_video.id;
    const thumbnail = single_video.snippet.thumbnails.high.url;
    const title = single_video.snippet.title;
    const channel_name = single_video.snippet.channelTitle;
    const view_count = single_video.statistics.viewCount;


    const title_elem = document.createElement('h5');
    title_elem.innerText = title;
    title_elem.classList.add("card-title");

    const anchor_elem = document.createElement('a');
    anchor_elem.href = `detail.html?id=${video_id}`;
    anchor_elem.appendChild(title_elem);

    const para_elem = document.createElement('p');
    para_elem.innerText = `${channel_name} || ${view_count} Views`;
    para_elem.classList.add('card-text');

    const div_elem = document.createElement('div');
    div_elem.classList.add("card-body");
    div_elem.appendChild(anchor_elem);
    div_elem.appendChild(para_elem);

    const image_elem = document.createElement('img');
    image_elem.src = thumbnail;
    image_elem.classList.add("card-img-top");

    const div_elem_1 = document.createElement('div');
    div_elem_1.classList.add("card");
    div_elem_1.classList.add("my-2");
    div_elem_1.style.width = "100%";
    div_elem_1.appendChild(image_elem);
    div_elem_1.appendChild(div_elem);

    const div_elem_2 = document.createElement('div');
    div_elem_2.classList.add("col");
    div_elem_2.appendChild(div_elem_1);

    parent_container.appendChild(div_elem_2);
  }
});