
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  

  
  document.addEventListener('scroll',()=>{
    const cabecalho = document.querySelector('.header-site');
    if($(document).scrollTop() > 100){
      cabecalho.classList.add('fixed');
    }else{
      cabecalho.classList.remove('fixed');
    }
  });


  // ===================> SCRIPT TAB Portfolio  <=========================
// Selecionando o Item do menu servicos
const tabMenuPortfolio = document.querySelectorAll('.js-tabMenuPortfolio li');
// Selecionando o conteúdo da servicos
const tabContentPortfolio = document.querySelectorAll('.js-tabContentPortfolio .itens-portfolio');
// Adicionando o 1 item ativo

if(tabMenuPortfolio.length && tabContentPortfolio.length){


  tabContentPortfolio[0].classList.add('ativo-content-servicos');
  tabMenuPortfolio[0].classList.add('ativo-lista-servicos');

  // Função que ativa e desativa o conteúdo do item
  function activeTabServicos (index){
    // Foreach pecorre por todos os itens do conteudo para que ele remova o ativo 
    tabContentPortfolio.forEach((section) => {
      section.classList.remove('ativo-content-servicos');
    });
    // Adiciona a class ativo no item menu
    tabContentPortfolio[index].classList.add('ativo-content-servicos');
  }
  function activeTabServicosList (index){
    // Foreach pecorre por todos os itens do conteudo para que ele remova o ativo 
    tabMenuPortfolio.forEach((section) => {
      section.classList.remove('ativo-lista-servicos');
    });
    // Adiciona a class ativo no item menu
    tabMenuPortfolio[index].classList.add('ativo-lista-servicos');
  }
     
  // Função que ativa a class ativo de acordo com o item clicado
  tabMenuPortfolio.forEach((itemMenu,index)=>{
    // Adicionando o evento a função
    itemMenu.addEventListener('click', ()=>{
  
      // Chamada da função a partir do index
      activeTabServicos(index);
    });
  });
  // Função que ativa a class ativo ao menu com o item clicado

  tabMenuPortfolio.forEach((itemMenu,index)=>{
    // Adicionando o evento a função
    itemMenu.addEventListener('click', ()=>{
  
      // Chamada da função a partir do index
      activeTabServicosList(index);
    });
  });
}
