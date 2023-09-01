console.log('Welcome to spotify');

// Initialise the variables 
let songIndex = 0 ;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs=[
    { songName:"Aaj bhi ",filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    { songName:"Aaj bhi ",filePath:"song/2.mp3", coverPath:"covers/2.jpg"},
    { songName:"Aaj bhi ",filePath:"song/3.mp3", coverPath:"covers/3.jpg"},
    { songName:"Aaj bhi ",filePath:"song/4.mp3", coverPath:"covers/4.jpg"},
    { songName:"Aaj bhi ",filePath:"song/5.mp3", coverPath:"covers/5.jpg"},
    { songName:"Aaj bhi ",filePath:"song/6.mp3", coverPath:"covers/6.jpg"},
    { songName:"Aaj bhi ",filePath:"song/7.mp3", coverPath:"covers/7.jpg"},
    { songName:"Aaj bhi ",filePath:"song/8.mp3", coverPath:"covers/8.jpg"},
    { songName:"Aaj bhi ",filePath:"song/9.mp3", coverPath:"covers/9.jpg"},

]
// Handle play/ pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity =0;
    }
})
// list to event 
audioElement.addEventListener('timeupdate',()=>{
    //    console.log('timeupdate')
    //    update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress)
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})