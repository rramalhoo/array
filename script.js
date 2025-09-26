//AULA 01

const carrosPasseio = ['Onix', 'Argo', 'Mobi', 'Nivus'];

const carrosSUV=[
    'T-Cross',
    'Tracker',
    'Renegade'
];


const carrosPickUp=[];
carrosPickUp[0]='RAM';
carrosPickUp[1]='Toro';
carrosPickUp[2]='Montana';

const numeros=[5,6,7.8,9.36];

carrosPickUp[1]="Ranger";

meuCarroFavorito=carrosSUV[1];
alert(meuCarroFavorito);



//AULA 02
const frutas=['Banana', 'Laranja', 'Maça', 'Manga'];


alert(frutas)


/*shift*/
frutas.shift()
alert(frutas)


/*splice*/
frutas.splice(2,2,'Limão', 'Kiwi')
alert(frutas)


/*join*/
alert(frutas.join(' - '))


/*concat*/
const verduras=['Couve', 'Alface']
const comidas=frutas.concat(verduras)
alert (comidas)


/*slice*/
const comidasLista2 =['Banana', 'Laranja', 'Maça', 'Manga', 'Couve', 'Alface'];
const verdura= comida.slice(4)
alert(comidasLista2)


/*sort, reverse*/
alert(comidas.sort())
alert(comidas.reverse())