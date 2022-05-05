Vue.component('mi-primer-component', {
    template:
    `
        <div>
            <div class="flex w-full max-h-32 text-white border-b p-4">
                <div class="flex flex-col w-full hidden md:flex items-end justify-center pr-4">
                    <h2 class="text-2xl">{{ titulo }}</h2>
                    <a class="text-xl"><strong></strong>{{ entrega }}</a>
                </div>
            </div>
        </div> 
    
    `,
    // props: [
    //     'title'
    // ]

    props: {
        titulo: {
            type: String
        },
        entrega: {
            type: String
        }
    }
});

Vue.component('mi-segundo-component', {
    template:
    `    
        <div>
            <h1 class="flex justify-center text-4xl mb-4">{{ hprod }}</h1>
            <div class="flex flex-wrap w-full justify-center bg-amber-50 items-center">
                <div v-for="(item, i) of productos" :key="i" class="flex-col m-8 border-[#fff]">
                    <img :src="item.url">
                    <div class="flex flex-col items-start mt-4">
                        <h3 class="text-2xl">{{ item.descripcion}} {{ i }}</h3>
                        <p class="text-xl mt-2">$ {{ item.precio }}</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: {
        hprod: {
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
            titulo: 'Hola , soy Nicolas Jimenez',
            entrega: 'Esta es la Segunda entrega - Componentes con VueJs',
            hprod: 'Componente de Hamburguesas',
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
                }
            ],
        }
    }
    
});