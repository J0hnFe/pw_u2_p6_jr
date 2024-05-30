console.log(Vue)

const estudiantes = [{
    nombre: "Filipo II",
    apellido: "De Macedonia"
},
{
    nombre: "Alejandro",
    apellido: "Magno"
},
{
    nombre: "Cleopatra",
    apellido: "De Egipto"
}
];

const app = Vue.createApp({
    /*
    template:`
    <h1>Hola mundo desde VueJS</h1>
    <p>{{1+1}}</p>
    <p>{{[1, 2, 3]}}</p>
    <p>{{true?'Verdadero':'Falso0'}}</p>
    `*/
    // template es una OptionAPI

    // data es otra, para propiedades reactivas
    data() {
        return {
            // Aquí declaro "propiedades reactivas"
            mensaje: "Hola mundo, propiedad reactiva",
            valor: 7,
            lista: estudiantes  
        }
    },

    // para metodos
    methods: {
        cambiarTexto() {
            this.mensaje = "Texto cambiado"
        },

        sumar() {
            this.valor = this.valor + 10
        },

        agregar() {
            const nuevo = {
                nombre: "Felipe",
                apellido: "Ramos"
            }
            this.lista.unshift(nuevo);
        }
    }
});
app.mount('#myApp')