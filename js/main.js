// main script
// console.log('main js script loaded');


// Howler js sound files
var keyType = 'sounds/' + '360602__cabled-mess__typewriter-snippet-02.wav'
var enterDing = 'sounds/' + '406243__stubb__typewriter-ding-near-mono.wav'
var clearPage = 'sounds/' + '185521__leossom__escrevendo-a-maquina-voltando-carro-typewriter-olivetti-1975-carrierreturn.mp3'

// main vue instance
const app = new Vue({
    el: '#app',
    data: {
        // vueTest: 'Vue loaded ok!' // keeping this in place to test vue loaded as test
        pageHeading: 'Classic' + ' ' + 'Typewriter',
        formText: ''
    },

    // define methods under the `methods` object
methods: {

    clearPage: function (event) {
        // howler js sound play - clear page
        var sound = new Howl({
            src: [clearPage],
            autoplay: true,
            loop: false,
            volume: 0.5,
            onend: function () {
                console.log('Page clear sound Finished!');
            }
        });
      },

      nextLine: function (event) {
        // howler js sound play - next line ding
        var sound = new Howl({
            src: [enterDing],
            autoplay: true,
            loop: false,
            volume: 0.5,
            onend: function () {
                console.log('Page clear sound Finished!');
            }
        });
      },

      keyClack: function (event) {
        // howler js sound play - key clack press
        var sound = new Howl({
            src: [keyType],
            autoplay: true,
            loop: false,
            volume: 0.5,
            onend: function () {
                console.log('Page clear sound Finished!');
            }
        });
      },

  } // end of methods

});
