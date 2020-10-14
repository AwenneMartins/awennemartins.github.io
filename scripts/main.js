let minhaImagem= document.querySelector('img');
minhaImagem.onclick= function(){
    let meuSrc =minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/4604242439_d677ff833c_o.jpg'){
        minhaImagem.setAttribute('src','imagens/849861.png');
    }
    else{
        minhaImagem.setAttribute('src','imagens/4604242439_d677ff833c_o.jpg');
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
    meuCabecalho.innerHTML= 'Conheça um pouco mais sobre A lenda de Zelda, ' + meuNome;
    }
}

if(!localStorage.getItem('nome')){
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.innerHTML = 'Conheça um pouco mais sobre A lenda de Zelda, ' + meuNome;
}

meuBotao.onclick = function() {
    defineNomeUsuario();
}