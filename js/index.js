var contador = 0;

function somaValor(num) {
  contador = contador + num;


}
function mostrar(){
    var conversor = (contador.toFixed(2)).toString();
    var valor = "R$" + conversor.replace('.', ',');
    document.getElementById('mostrar').innerHTML = valor;
}

function remover() {
  contador = 0;
  document.getElementById('mostrar').innerHTML = 'R$0,00';
 
}

function diminuirValor(num) {

  contador = contador - num;
  if(contador<=0){
    contador=0;
  }
  
}


// menu dropdown EXEMPLO canal youtube "CFB CURSOS" //
function mostrarDrop(){
  document.getElementsByClassName("conteudo_drop")[0].classList.toggle("mostrarDrop");
}
window.onclick=function(event){
  if(!event.target.matches('.btnDrop')){
      var dropdowns=this.document.getElementsByClassName("conteudo_drop");
      var i;
      for(i=0;i<dropdowns.length;i++){
          var abrirDrop=dropdowns[i];
          if(abrirDrop.classList.contains('mostrarDrop')){
              abrirDrop.classList.remove('mostrarDrop');
          }
      }
  }
}

