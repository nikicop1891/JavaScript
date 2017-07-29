display2="";
function escribir(n){
  var display=document.getElementById("display").innerHTML;
  if (display==0 && n!='.') {
    displayN =display.replace(0,"");
    document.getElementById("display").innerHTML=displayN+n;
  }else {
    document.getElementById("display").innerHTML=display+n;
  }
}

function limpiar(){
  document.getElementById("display").innerHTML=0;
  document.getElementById("display2").innerHTML=0;
}

function masmenos(){
  var display=document.getElementById("display").innerHTML;
  if (display>0) {
    document.getElementById("display").innerHTML="-"+display;
  }else {
    displayN=display.replace(/[-|(|)]/g, "")
    document.getElementById("display").innerHTML=displayN;
  }
}

function aritmetica(x){
  var   display1=document.getElementById("display").innerHTML;
if (display1!="" && display2=="") {
  display2=display1+x;
  document.getElementById("display").innerHTML="";
}else if (display1!="") {
  display2=display2+display1+x;
  document.getElementById("display").innerHTML="";
  }
}

function calcular(){
  var display1=document.getElementById("display").innerHTML;
  /*var display2=document.getElementById("display2").innerHTML;*/
  document.getElementById("display").innerHTML=eval(display2+display1);
  display2="";
}

function raiz(){
  var display1=document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML=Math.sqrt(display1);
}
