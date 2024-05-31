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
            lista: estudiantes,
            nombre: null,
            apellido: null
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
            console.log(this.nombre)
            console.log(this.apellido)
            const nuevo = {
                nombre: this.nombre,
                apellido: this.apellido
            }
            this.lista.unshift(nuevo);
            this.reset();
        },

        reset() {
            this.nombre = null;
            this.apellido = null
        },

        agregar2({charCode}) {
            // console.log(event)
            console.log(charCode)
            if(charCode !== 13) return;
            if(this.nombre !== null && 
                this.apellido !== null) {
                    this.agregar();
                }

            
        }
    }
});
app.mount('#myApp')
