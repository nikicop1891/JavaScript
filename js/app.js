var display2="";

function escribir(n){

  var display1=document.getElementById("display").innerHTML;
  var n1=display1.length
  var punto=display1.indexOf(".")
  var repeticion=0

  for (var i = 0; i < display1.length; i++) {
    if (display1.charAt(i)==".") {
      repeticion++;
    }
  }

  if (display1=="0" && n!='.') {
    displayN =display1.replace("0","");
    document.getElementById("display").innerHTML=displayN+n;
  } else if(n1<8 && punto==-1){
      if (n=='.' && repeticion>0) {
      document.getElementById("display").innerHTML=display1;
      } else {
          document.getElementById("display").innerHTML=display1+n;
          repeticion=0;
        }
    } else if (n1<9 && punto!=-1) {
        if (n=='.' && repeticion>0) {
            document.getElementById("display").innerHTML=display1;
        } else {
            document.getElementById("display").innerHTML=display1+n;
            repeticion=0;
          }
      }
}
function escribir1(x){
    MouseOver(x);
    escribir(x);
}

function limpiar(){
  MouseOver('on');
  document.getElementById("display").innerHTML=0;
  display2="";
}

function masmenos(){
  MouseOver('sign');
  var display1=document.getElementById("display").innerHTML;
  if (display1>0) {
    document.getElementById("display").innerHTML="-"+display1;
  }else {
    displayN=display1.replace(/[-|(|)]/g, "")
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
function aritmetica1(x){
  aritmetica(x);
  MouseOver(x);
}

function calcular(){
  var display1=document.getElementById("display").innerHTML;
  var resultado=eval(display2+display1);
  var cadena=resultado.toString()
  var punto=display1.indexOf(".")
  var n1=cadena.length
  if (n1<8) {
    document.getElementById("display").innerHTML=cadena.substr(0,8);
    display2="";
  } else if(n1>7){
      document.getElementById("display").innerHTML=cadena.substr(0,9);
      display2="";
    }
}

function raiz(){
  var display1=document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML=Math.sqrt(display1);
  MouseOver('raiz');
}

function MouseOver(x) {
  document.getElementById(x).style="width:19%; height:60px"
}
function MouseOut(x) {
  document.getElementById(x).style="width:22%; height:62.91px"
}
