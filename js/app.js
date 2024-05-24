console.log(Vue)

const app = Vue.createApp({
    template:`
    <h1>Hola mundo desde VueJS</h1>
    <p>{{1+1}}</p>
    <p>{{[1, 2, 3]}}</p>
    <p>{{true?'Verdadero':'Falso0'}}</p>
    `
});
app.mount('#myApp')