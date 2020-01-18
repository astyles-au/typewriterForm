// main script
console.log('main js script loaded');


// Howler js sound files
var sound1fileName = '360602__cabled-mess__typewriter-snippet-02'
var sound2fileName = '406243__stubb__typewriter-ding-near-mono'

// Howler js sound files config
var soundDirectory = 'sounds' + '/'
var extension = '.wav'
var sound1 = soundDirectory + sound1fileName + extension
var sound2 = soundDirectory + sound2fileName + extension

// vue component - type-writer form
Vue.component('type-writer', {
    data: function () {
        return {
            formText: ''
        }
    },

    // watcher
    watch: {
        formText: function () {

            let x = event.which
            console.log(event.which)

            // if statement to test key pressed and allocate sound
            if (x != 13) {
                // howler js sound play
                var sound = new Howl({
                    src: [sound1],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                    onend: function () {
                        console.log('Finished!');
                    }
                });
            }  // end of function          
    }
}, // end of watcher

    methods: {

        // play typewriter ding sound via howler js - method
        nextLine: function () {
            console.log('You pressed enter!')
            // howler js sound play
            var sound = new Howl({
                src: [sound2],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function () {
                    console.log('Finished!');
                }
            });
        }, // end of nextLine method

    },
    template: `
    <form v-on:submit.prevent="onSubmit"
    class="animated fadeInUp">
        <textarea
        name="typeWriterPage"
        id="typeWriterPage"
        cols="30" rows="10"
        placeholder="Start typing..."
        v-model="formText"
        v-on:keyup.enter="nextLine"
        >
        </textarea>
    </form>
    `
})

// main vue instance
new Vue({
    el: '#app',
    data: {
        // vueTest: 'Vue loaded ok!' // keeping this in place to test vue loaded as test
        pageHeading: 'Classic' + ' ' + 'Typewriter'
    }
});
