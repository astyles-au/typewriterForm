// main script
console.log('main js script loaded');

// vue component - type-writer form
Vue.component('type-writer', {
    data: function () {
        return {
            formText: ''
        }
    },
    methods: {

        // play typewriter ding sound via howler js - method
        alert: function () {
            console.log('You pressed enter!')
            // howler js
            var sound = new Howl({
                src: ['sounds/406243__stubb__typewriter-ding-near-mono.wav'],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function() {
                  console.log('Finished!');
                }
              });
        } // end of alert method
    },
    template: `
    <form v-on:submit.prevent="onSubmit">
        <textarea 
        name="typeWriterForm" 
        id="typeWiterForm"
        cols="30" rows="10"
        v-model="formText"
        v-on:keyup.enter="alert"
        >
        </textarea>
    </form>
    `
})

// main vue instance
let vm = new Vue({
    el: '#app',
    data: {
        vueTest: 'Vue loaded ok!',
    }
});
