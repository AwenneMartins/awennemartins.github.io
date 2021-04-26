let minhaImagem= document.querySelector('img');
minhaImagem.onclick= function(){
    let meuSrc =minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/IMG-20210405-WA0017.jpg'){
        minhaImagem.setAttribute('src','imagens/IMG-20210413-WA0157.jpg');
    }
    else{
        minhaImagem.setAttribute('src','imagens/IMG-20210405-WA0017.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome) {
        defineNomeUsuario();
      } else {
    localStorage.setItem('nome',meuNome);
    meuCabecalho.innerHTML= 'Eu Te amo demais, ' + meuNome;
    }
}

if(!localStorage.getItem('nome')){
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.innerHTML = 'Eu te amo demais, ' + meuNome;
}

meuBotao.onclick = function() {
    defineNomeUsuario();
}
