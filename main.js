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
const gain1 = document.getElementById('gain1').value;

const play_ch2 = document.getElementById('play_ch2');
const stop_ch2 = document.getElementById('stop_ch2');

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
function setGain1(e) {

    var gainch1 = e.target.value;
    console.log("Gain 1:" , gain1);
    //music1.volume = parseFloat(gain1);
    music1.volume = gainch1*gain1;
}
$('#gain_ch1').on('change', setGain1);
$('#value_ch1_gain').on('change', setGain1*10);




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

// CANAL 1
    // Play CH1
    play_ch2.addEventListener("click", function (evento) {
        var sound1 = new Howl({
            src: ['https://github.com/mdelaosa/TFG/blob/2cc77238632eac450e741f3d3411bee40a0c7366/Guitar.mp3'],
            volume: 1.0,
            onend: function () {
              alert('We finished with the setup!');
            }
          });
          sound1.play()
});
    // Stop CH1
stop_ch2.addEventListener("click", function (evento) {
	    // Cuando se hace click en el botón "stop" para la música
    music1.pause();
    music1.currentTime = 0;
});