Vue.component('mi-primer-component', {
    template: 
    `    
        <h1 class="text-3xl">{{ title }}</h1>
    
    `,
    props: [
        'title'
    ]
});

Vue.component('mi-segundo-component', {
    template: 
    `    
        <h1 class="text-3xl">{{ head }}</h1>
    
    `,
    props: {
        head: {
            type: String
        }
    }
});




const app = new Vue ({
    el: '#app',
    data() {
        return {
            title: 'Mi primer componente con VueJs CDN',
            head: 'Mi segundo componente con VueJs CDN'
        }
    },
    
});