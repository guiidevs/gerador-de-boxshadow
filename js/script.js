// Class de comportamento

class boxShadowGenerator{
    constructor(horizontal, horizontalref, vertical, verticalref, borrao, borraoref, espalhamento, espalhamentoref, corshadow, corbox, box, code){
        this.horizontal = horizontal;
        this.horizontalref = horizontalref;
        this.vertical = vertical;
        this.verticalref = verticalref;
        this.borrao = borrao;
        this.borraoref = borraoref;
        this.espalhamento = espalhamento;
        this.espalhamentoref = espalhamentoref;
        this.corshadow = corshadow;
        this.corbox = corbox;
        this.box = box;
        this.code = code;
    }
    mudancaDeInputs(){
        this.horizontalref.value = this.horizontal.value;
        this.verticalref.value = this.vertical.value;
        this.borraoref.value = this.borrao.value;
        this.espalhamentoref.value = this.espalhamento.value;
    }
    mudancaDeText(){
        this.horizontal.value = this.horizontalref.value;
        this.vertical.value = this.verticalref.value;
        this.borrao.value = this.borraoref.value;
        this.espalhamento.value = this.espalhamentoref.value;
    }
    mudarBoxShadow(){
        this.code.innerHTML = `${this.corshadow.value} ${this.horizontal.value}px ${this.vertical.value}px ${this.borrao.value}px ${this.espalhamento.value}px`
        this.box.style.boxShadow = `${this.corshadow.value} ${this.horizontal.value}px ${this.vertical.value}px ${this.borrao.value}px ${this.espalhamento.value}px`
        this.box.style.backgroundColor = `${this.corbox.value}`
    }
    pegarvalor(){
        return `box-shadow: black ${this.horizontal.value}px ${this.vertical.value}px ${this.borrao.value}px ${this.espalhamento.value}px;`;
    }
}

// Variaveis dos inputs
const horizontal = document.querySelector('#horizontal');
const horizontalref = document.querySelector('#horizontal_ref');
const vertical = document.querySelector('#vertical');
const verticalref = document.querySelector('#vertical_ref');
const borrao = document.querySelector('#borrao');
const borraoref = document.querySelector('#borrao_ref');
const espalhamento = document.querySelector('#espalhamento');
const espalhamentoref = document.querySelector('#espalhamento_ref');
const corshadow= document.querySelector('#corshadow');
const corbox = document.querySelector('#corbox');

const box = document.querySelector('#box');
const code = document.querySelector('#copy-conteudo span');

const configbox = new boxShadowGenerator(
    horizontal, 
    horizontalref, 
    vertical, 
    verticalref, 
    borrao, 
    borraoref, 
    espalhamento,
    espalhamentoref,
    corshadow,
    corbox,
    box,
    code);
// Eventos

configbox.mudancaDeInputs();
configbox.mudarBoxShadow();
box.style.backgroundColor = ``

// range
horizontal.addEventListener('input', (event) => {
    configbox.mudancaDeInputs();
    configbox.mudarBoxShadow();
})
vertical.addEventListener('input', (event) => {
    configbox.mudancaDeInputs();
    configbox.mudarBoxShadow();
})
borrao.addEventListener('input', (event) => {
    configbox.mudancaDeInputs();
    configbox.mudarBoxShadow();
})
espalhamento.addEventListener('input', (event) => {
    configbox.mudancaDeInputs();
    configbox.mudarBoxShadow();
})
corshadow.addEventListener('input', (event) => {
    configbox.mudancaDeInputs();
    configbox.mudarBoxShadow();
})
corbox.addEventListener('input', (event) => {
    configbox.mudancaDeInputs();
    configbox.mudarBoxShadow();
})

// referencias
horizontalref.addEventListener('input', (event) => {
    configbox.mudancaDeText();
})
verticalref.addEventListener('input', (event) => {
    configbox.mudancaDeText();
})
borraoref.addEventListener('input', (event) => {
    configbox.mudancaDeText();
})
espalhamentoref.addEventListener('input', (event) => {
    configbox.mudancaDeText();
})

const code2 = document.querySelector('#copy');
code2.addEventListener('click', (event) => {
    navigator.clipboard.writeText(configbox.pegarvalor())
    alert('Campo copiado com sucesso!')
})