// main script
console.log('main js script loaded');

// vue component - type-writer form
Vue.component('type-writer', {
    data: function () {
      return {
        formText: ''
      } 
    },
    template: `
    <form>
        <textarea 
        name="typeWriterForm" 
        id="typeWiterForm"
        cols="30" rows="10"
        v-model="formText">
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
