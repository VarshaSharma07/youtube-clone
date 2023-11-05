const videoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyAEwL1eIor7nqinmj8SME7BlN6wQbr56pY";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key : api_key,
    part :'snippet',
    chart : 'mostPopular',
    maxResults : 75,
    regionCode : 'IN'
}))

.then(res => res.json())
.then(data => {
   console.log(data);
      data.items.forEach(item => {
        getChannelIcon(item);
      })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
      fetch(channel_http + new URLSearchParams({
        key : api_key,
        part :'snippet',
        id : video_data.snippet.channelId
      }))
      .then(res => res.json())
      .then(data => {
        console.log(data);
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
      })
}

const makeVideoCard = (data) => {
  let snip=data.snippet;
  let videoId=data.id;
  let div=document.createElement("div");
  div.innerHTML += `
    <div class="video">
         <img src="${data.snippet.thumbnails.high.url}" height = 300px width = 300px class="thumbnail" alt="channel thumbnail">
           <div class="content">
              <img src="${data.channelThumbnail}" class="channel-icon" alt="channel icon">
                  <div class="info">
                     <h4 class="title">${data.snippet.title}</h4>
                     <p class="channel-name">${data.snippet.channelTitle}</p>
                  </div> 
                 </div>
                </div>
                `;
               // const cv=document.querySelector(".video")
               let obj={
                snip,
                videoId
               }
                  div.addEventListener("click",(e)=>{
                    localStorage.setItem("video", JSON.stringify(obj))
                    window.location.href="xcv.html"
                        })
                vedioCardContainer.append(div)
               
            }

            const searchInput = document.querySelector('.search-bar');
            const searchBtn = document.querySelector('.search-btn');
            let searchLink ="https://www.youtube.com/results?search_query=";    
            
            searchBtn.addEventListener('click' , () => {
              if(searchInput.value.length){
                  location.href = searchLink + searchInput.value;
              }
            })

            const btn=document.querySelector(".toggle-btn");
            const btn1=document.querySelector(".side-bar");
            btn.addEventListener("click", (e)=>{
              btn1
            })