
//Initialize the variables
let songindex=0
let audioelement = new Audio('songs/1.mp3')
let masterplay = document.querySelector("#masterplay")
let myprogess= document.querySelector("#myprogress")
let gif=document.querySelector("#gif")
let mastersongname=document.querySelector("#mastersongname")
let songitem = Array.from( document.getElementsByClassName("songitem"))
let arra=[]
function songs(a,b,c){
    this.songName=a;
    this.filepath=b;
    this.coverpath=c
}


// audioelement.play()

const firstsong= new songs("ADIYOGI","songs/1.mp3","covers/1.jpeg")
const secondsong= new songs("Dobbe","songs/2.mp3","covers/2.jpeg")
const thirdsong= new songs("GALLIYAN","songs/3.mp3","covers/3.jpeg")
const fourthsong= new songs("LA LA LA","songs/4.mp3","covers/4.jpeg")
const fifthsong= new songs("MERI JAAN","songs/5.mp3","covers/5.jpeg")
const sixthsong= new songs("ishq sufiyana","songs/6.mp3","covers/6.jpeg")
const seventhsong= new songs("ishq sufiyana","songs/7.mp3","covers/7.jpeg")
const eigthsong= new songs("ishq sufiyana","songs/8.mp3","covers/2.jpeg")
const ninthsong= new songs("ishq sufiyana","songs/9.mp3","covers/3.jpeg")
const tenthsong= new songs("ishq sufiyana","songs/10.mp3","covers/4.jpeg")
arra.push(firstsong,secondsong,thirdsong,fourthsong,fifthsong,sixthsong,seventhsong,eigthsong,ninthsong,tenthsong)
 


songitem.forEach(function(element,i){
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = arra[i].coverpath
    element.getElementsByClassName("songname")[0].innerText= arra[i].songName
})

//handle play/pause on click
masterplay.addEventListener("click", ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play()
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioelement.pause()
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle')
        gif.style.opacity=0
    }
})

//listen to event 
audioelement.addEventListener('timeupdate', ()=>{
    //update seekbar
let progress= parseInt((audioelement.currentTime/audioelement.duration)*100);
myprogess.value= progress
})

myprogess.addEventListener('change', ()=>{
audioelement.currentTime =  myprogess.value * audioelement.duration /100;
})

const makeallplays =()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
          element.classList.add('fa-play-circle')
        }) 
}


Array.from(document.getElementsByClassName("songitemplay")).forEach(function(element){
  element.addEventListener('click',(e)=>{
    makeallplays()
    
    songindex=parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add ('fa-pause-circle')
    audioelement.src =`songs/${songindex + 1}.mp3`
    // mastersongname.innerText= arra[songindex].songName
    audioelement.currentTime=0; 
    audioelement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
  })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>9){
        songindex=0;
    }
    else{
        songindex +=1;
    }
    audioelement.src =`songs/${songindex + 1}.mp3`
    // mastersongname.innerText= arra[songindex].songName
    audioelement.currentTime=0; 
    audioelement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -=1;
    }
    audioelement.src =`songs/${songindex + 1}.mp3`
    // mastersongname.innerText= arra[songindex].songName
    audioelement.currentTime=0; 
    audioelement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
})
// console.log(arra[songindex].songName)