Vue.component('mi-primer-component', {
    template: //html
    `    
        <h1 class="text-3xl">{{ title }}</h1>
    
    `,
    props: [
        'title'
    ]
});

Vue.component('mi-segundo-component', {
    template: //html
    `    
        
        <h1 class="text-3xl">{{ head }}</h1>
        
        <div v-for="(item, key) of productos" :key="key">
            <img src="{{ item.url }}">
            <p>{{ item.descripcion }}</p>
            <p>{{ item.precio }}</p>
        </div>
    
    `,
    props: {
        head: {
            type: String
        },
        productos: {
            type: Object
        }
    }
});




const app = new Vue ({
    el: '#app',
    data() {
        return {
            title: 'Mi primer componente con VueJs CDN',
            head: 'Mi segundo componente con VueJs CDN',
            productos: 
            [
                {
                    url: 'https://www.clarin.com/img/2021/05/20/la-hamburguesa-triple-cheese-bacon___Lj4vcOHr__340x340__1.jpg',
                    descripcion: 'Hamburguesa doble-1',
                    precio: 100
                },
                {
                    url: 'https://www.clarin.com/img/2021/05/20/la-hamburguesa-triple-cheese-bacon___Lj4vcOHr__340x340__1.jpg',
                    descripcion: 'Hamburguesa doble-2',
                    precio: 200
                },
                {
                    url: 'https://www.clarin.com/img/2021/05/20/la-hamburguesa-triple-cheese-bacon___Lj4vcOHr__340x340__1.jpg',
                    descripcion: 'Hamburguesa doble-3',
                    precio: 300
                }
            ]
        }
    }
    
});