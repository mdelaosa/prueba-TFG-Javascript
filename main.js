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

// CANAL 1
    // Play CH1
play_ch1.addEventListener("click", function (evento) {
	    // Cuando se hace click en el botón "play" comienza la música
    music1.play();
    music1.loop = true;
});
    // Stop CH1
stop_ch1.addEventListener("click", function (evento) {
	    // Cuando se hace click en el botón "stop" para la música
    music1.pause();
    music1.currentTime = 0;
});
    // Gain CH1
/*const analyserNode = new AnalyserNode(audioCtx, {
    fftSize: 2048,
    maxDecibels: -25,
    minDecibels: -60,
    smoothingTimeConstant: 0.5,
});*/
    // Aux1 CH1
    // Aux2 CH1
    // PFL CH1
    // Main CH1
    // Mute CH1
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