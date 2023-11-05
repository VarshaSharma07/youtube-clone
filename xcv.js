
let userdata=JSON.parse(localStorage.getItem("video"));
console.log(userdata);

function playVideo(userdata){
    const playCont=document.getElementById("play");
    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${userdata.videoId}`;
    iframe.setAttribute('allowFullScreen', '')
    playCont.append(iframe)
}
playVideo(userdata)