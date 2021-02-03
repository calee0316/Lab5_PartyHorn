// main.js


document.getElementById('volume-number').addEventListener('input', function(){
    document.getElementById('volume-slider').value=document.getElementById('volume-number').value;
    let change = document.getElementById('volume-number').value;
    if(change == 0){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById('honk-btn').disabled = true;
    }else if(change <=33 && change>=1){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg"
        document.getElementById('honk-btn').disabled = false;
    }else if(change <=66 && change>=34){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg"
        document.getElementById('honk-btn').disabled = false;
    }else if(change <=100 && change >=67){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg"
        document.getElementById('honk-btn').disabled = false;
    }
})

document.getElementById('volume-slider').addEventListener('input', function(){
    document.getElementById('volume-number').value = document.getElementById('volume-slider').value;
    let change = document.getElementById('volume-slider').value;
    if(change == 0){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById('honk-btn').disabled = true;
    }else if(change <=33 && change>=1){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg"
        document.getElementById('honk-btn').disabled = false;
    }else if(change <=66 && change>=34){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg"
        document.getElementById('honk-btn').disabled = false;
    }else if(change <=100 && change >=67){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg"
        document.getElementById('honk-btn').disabled = false;
    }
})

document.getElementById('audio-selection').addEventListener("change",function() {
    if(document.getElementById('radio-car-horn').checked){
        document.getElementById('horn-sound').src = "./assets/media/audio/car-horn.mp3"
        document.getElementById('sound-image').src = "./assets/media/images/car.svg"
    }else if(document.getElementById('radio-air-horn').checked){
        document.getElementById('horn-sound').src = "./assets/media/audio/air-horn.mp3"
        document.getElementById('sound-image').src = "./assets/media/images/air-horn.svg"
    }else if(document.getElementById('radio-party-horn').checked){
        document.getElementById('horn-sound').src = "./assets/media/audio/party-horn.mp3"
        document.getElementById('sound-image').src = "./assets/media/images/party-horn.svg"
    }
})

document.getElementById('honk-btn').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('horn-sound').volume = document.getElementById('volume-number').value/100;
    document.getElementById('horn-sound').play();
})

// TODO
