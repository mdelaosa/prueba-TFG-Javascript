console.log("Initializing mixer");

//-- Canal 1
const play_ch1 = document.getElementById('play_ch1');
const stop_ch1 = document.getElementById('stop_ch1');
const gain_ch1 = document.getElementById('gain_ch1');
const aux1_ch1 = document.getElementById('aux1_ch1');
const aux2_ch1 = document.getElementById('aux2_ch1');
const pfl_ch1 = document.getElementById('pfl_ch1');
const mute_ch1 = document.getElementById('mute_ch1');
const main_ch1 = document.getElementById('main_ch1');
const slider_ch1 = document.getElementById('slider_ch1');

const music1 = new Audio('Guitar.mp3');

play_ch1.addEventListener("click", function (evento) {
	// Aquí todo el código que se ejecuta cuando se da click al botón
	// El evento del click
    music1.play();
    music1.loop = true;
});
stop_ch1.addEventListener("click", function (evento) {
	// Aquí todo el código que se ejecuta cuando se da click al botón
	// El evento del click
    music1.pause();
    music1.currentTime = 0;
});
function mute1() {
    if (music1.muted == false) {
        music1.muted = true;
        document.getElementById("mute_ch1").style.backgroundColor= "white";
    }else{
        music1.muted = false;
        document.getElementById("mute_ch1").style.backgroundColor= "#aaaaff";
    }
}

function valores_slider1(){
    let value_sliderch1 = slider_ch1.value;
}