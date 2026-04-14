(function(){


    let y = document.querySelector('#com'),
    start=5

    y.innerText = start

    let interval = setInterval(function(){
        com.innerText = --start
        if(start == 0){
            clearInterval(interval)
            new Audio("https://cdn.pixabay.com/audio/2025/09/02/audio_4e70a465f7.mp3").play()
        }
    },1000)

})()