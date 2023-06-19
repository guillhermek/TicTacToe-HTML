function hideElements() {
  var div = document.querySelector('.startplayer');
  div.style.display = 'none';
  var twoplayers = document.createElement("button");
  twoplayers.setAttribute("id", "twoplayers");
  twoplayers.innerHTML = "2 PLAYERS "
  document.body.appendChild(twoplayers);
  
  twoplayers.addEventListener("click",function(){
    criardiv();
    twoplayers.style.display = 'none';

   
  })
}

    



function criardiv(){
  criarblock();
  
block1.addEventListener("click", function(){  clickblock1(); alterarBooleano(); });
block2.addEventListener("click", function(){  clickblock2(); alterarBooleano(); });
block3.addEventListener("click", function(){  clickblock3(); alterarBooleano(); });
block4.addEventListener("click", function(){  clickblock4(); alterarBooleano(); });
block5.addEventListener("click", function(){  clickblock5(); alterarBooleano(); });
block6.addEventListener("click", function(){  clickblock6(); alterarBooleano(); });
block7.addEventListener("click", function(){  clickblock7(); alterarBooleano(); });
block8.addEventListener("click", function(){  clickblock8(); alterarBooleano(); });
block9.addEventListener("click", function(){  clickblock9(); alterarBooleano(); });
}   





function criarblock() {
  /*CRIAR BOTÃO  */
  var block1 = document.createElement("button");
  var block2 = document.createElement("button");
  var block3 = document.createElement("button");
  var block4 = document.createElement("button");
  var block5 = document.createElement("button");
  var block6 = document.createElement("button");
  var block7 = document.createElement("button");
  var block8 = document.createElement("button");
  var block9 = document.createElement("button");
/* ADICIONAR ID NO  */
  block1.setAttribute("id", "block1");
  block2.setAttribute("id", "block2");
  block3.setAttribute("id", "block3");
  block4.setAttribute("id", "block4");
  block5.setAttribute("id", "block5");
  block6.setAttribute("id", "block6");
  block7.setAttribute("id", "block7");
  block8.setAttribute("id", "block8");
  block9.setAttribute("id", "block9");
/* ADICIONAR OS ELEMENTOS NO HTML */
  document.body.appendChild(block1);
  document.body.appendChild(block2);
  document.body.appendChild(block3);
  document.body.appendChild(block4);
  document.body.appendChild(block5);
  document.body.appendChild(block6);
  document.body.appendChild(block7);
  document.body.appendChild(block8);
  document.body.appendChild(block9);
}
