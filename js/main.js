// main script
console.log('main js script loaded');

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
          console.log('Some keys were pressed!')
               // howler js
               var sound = new Howl({
                src: ['sounds/360602__cabled-mess__typewriter-snippet-02.wav'],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function () {
                    console.log('Finished!');
                }
            });
        }
      },

    methods: {

        // play typewriter ding sound via howler js - method
        nextLine: function () {
            console.log('You pressed enter!')
            // howler js
            var sound = new Howl({
                src: ['sounds/406243__stubb__typewriter-ding-near-mono.wav'],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function () {
                    console.log('Finished!');
                }
            });
        }, // end of nextLine method


        // play typewriter key sound via howler js - method
        vintageKey: function () {
            console.log('You didnt press enter!')
            // howler js
            var sound = new Howl({
                src: ['sounds/360602__cabled-mess__typewriter-snippet-02.wav'],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function () {
                    console.log('Finished!');
                }
            });
        } // end of nextLine method

    },
    template: `
    <form v-on:submit.prevent="onSubmit">
        <textarea
        name="typeWriterPage"
        id="typeWriterPage"
        cols="30" rows="10"
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
        vueTest: 'Vue loaded ok!', // keeping this in place to test vue loaded as test
    }
});
