Vue.component('mi-primer-component', {
    template: //html
    `    
        <h1 class="text-3xl">{{ title }}</h1>
    
    `,
    // props: [
    //     'title'
    // ]

    props: {
        title: {
            title: String
        }
    }
});

Vue.component('mi-segundo-component', {
    template: //html
    `    
        <div>
            <h1 class="flex justify-center text-4xl mb-4">{{ head }}</h1>
            <div class="flex flex-wrap w-full justify-center items-center">
                <div v-for="(item, i) of productos" :key="i" class="flex-col mr-8">
                    <img :src="item.url">
                    <div class="flex flex-col items-center">
                        <h3 class="text-2xl">{{ item.descripcion}} {{ i }}</h3>
                        <p class="text-xl">$$$ {{ item.precio }}</p>
                    </div>
                </div>
            </div>
        </div>
    
    `,
    props: {
        head: {
            type: String
        },
        productos: {
            type: Array
        }
    }
});


const app = new Vue ({
    el: '#app',
    data() {
        return {
            title: 'Mi primer componente con VueJs CDN',
            head: 'Componente de Productos',
            productos: 
            [
                {
                    url: 'https://www.clarin.com/img/2021/05/20/la-hamburguesa-triple-cheese-bacon___Lj4vcOHr__340x340__1.jpg',
                    descripcion: 'Hamburguesa doble',
                    precio: 100
                },
                {
                    url: 'https://www.clarin.com/img/2021/05/20/la-hamburguesa-triple-cheese-bacon___Lj4vcOHr__340x340__1.jpg',
                    descripcion: 'Hamburguesa doble',
                    precio: 200
                },
                {
                    url: 'https://www.clarin.com/img/2021/05/20/la-hamburguesa-triple-cheese-bacon___Lj4vcOHr__340x340__1.jpg',
                    descripcion: 'Hamburguesa doble',
                    precio: 300
                },
                {
                    url: 'https://www.clarin.com/img/2021/05/20/la-hamburguesa-triple-cheese-bacon___Lj4vcOHr__340x340__1.jpg',
                    descripcion: 'Hamburguesa doble',
                    precio: 100
                },
                {
                    url: 'https://www.clarin.com/img/2021/05/20/la-hamburguesa-triple-cheese-bacon___Lj4vcOHr__340x340__1.jpg',
                    descripcion: 'Hamburguesa doble',
                    precio: 200
                },
                {
                    url: 'https://www.clarin.com/img/2021/05/20/la-hamburguesa-triple-cheese-bacon___Lj4vcOHr__340x340__1.jpg',
                    descripcion: 'Hamburguesa doble',
                    precio: 300
                },
                {
                    url: 'https://www.clarin.com/img/2021/05/20/la-hamburguesa-triple-cheese-bacon___Lj4vcOHr__340x340__1.jpg',
                    descripcion: 'Hamburguesa doble',
                    precio: 300
                },
                {
                    url: 'https://www.clarin.com/img/2021/05/20/la-hamburguesa-triple-cheese-bacon___Lj4vcOHr__340x340__1.jpg',
                    descripcion: 'Hamburguesa doble',
                    precio: 300
                }
            ],
        }
    }
    
});