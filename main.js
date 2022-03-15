console.log("Initializing mixer");

//-- Canal 1
const load_ch1 = document.getElementById('load_ch1');
const gain_ch1 = document.getElementById('gain_ch1');
const aux1_ch1 = document.getElementById('aux1_ch1');
const aux2_ch1 = document.getElementById('aux2_ch1');
const pfl_ch1 = document.getElementById('pfl_ch1');
const mute_ch1 = document.getElementById('mute_ch1');
const main_ch1 = document.getElementById('main_ch1');
const slider_ch1 = document.getElementById('slider_ch1');

const music1 = new Audio('adf.wav');
music1.play();
music1.loop =true;
music1.playbackRate = 2;
music1.pause();

function valores_slider1(){
    let value_sliderch1 = slider_ch1.value;
}