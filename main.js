console.log("Initializing mixer");

//-- Canal 1
const play_ch1 = document.getElementById('play_ch1');
const stop_ch1 = document.getElementById('stop_ch1');
const gain_ch1 = document.getElementById('gain_ch1');
const value_ch1_gain = document.getElementById('value_ch1_gain');
const aux1_ch1 = document.getElementById('aux1_ch1');
const aux2_ch1 = document.getElementById('aux2_ch1');
const pfl_ch1 = document.getElementById('pfl_ch1');
const mute_ch1 = document.getElementById('mute_ch1');
const main_ch1 = document.getElementById('main_ch1');
const slider_ch1 = document.getElementById('slider_ch1');

const music1 = new Audio('Guitar.mp3');
//var gain1;

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

/*
var setGain1 = audioCtx.createGain();
source.connect(setGain1);
setGain1.connect(audioCtx.destination);
*/

const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

const track = audioContext.createMediaElementSource(music1);

const gainNode = audioContext.createGain();

track.connect(gainNode).connect(audioContext.destination);

gain_ch1.addEventListener('input', function() {
  gainNode.gain.value = this.value;
  console.log(gainNode.gain.value);
}, false);



    // Aux1 CH1
    // Aux2 CH1
    // PFL CH1
    // Main CH1
    // Mute CH1
function muteCH1() {
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

    /*
            // jquery ui sliders to adjust track volume
        $('.slider').slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: _this.track
        });
    */
    /*
        function makeMasterFader(){
            masterGain = context.createGainNode();
            masterGain.gain.value = 1;
            var compressor = new tuna.Compressor({
                               threshold: -10,    //-100 to 0
                               makeupGain: 1,     //0 and up
                               attack: 1,         //0 to 1000
                               release: 0,        //0 to 3000
                               ratio: 10,          //1 to 20
                               knee: 5,           //0 to 40
                               automakeup: true,  //true/false
                               bypass: 1
                             });
              $('#buss').change(function(){
              if($(this).is(':checked')){
                compressor.bypass = 0;
                } else {
                  compressor.bypass = 1;}
          
              });
            masterGain.connect(compressor.input);
            compressor.connect(context.destination);
          }
    */
    /*
        const analyserNode = new AnalyserNode(audioCtx, {
            fftSize: 2048,
            maxDecibels: -25,
            minDecibels: -60,
            smoothingTimeConstant: 0.5,
        });
    */
}