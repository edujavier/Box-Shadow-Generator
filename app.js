let elem = document.getElementById('element');
let code = document.getElementById('code');
let inputs = document.querySelectorAll('.sliders input');

inputs.forEach((inp) => inp.addEventListener('input', generateShadow));
function generateShadow(){
  let hShadow = document.getElementById('h-shadow').value;
  let vShadow = document.getElementById('v-shadow').value;
  let blurRadius = document.getElementById('blur-radius').value;
  let spreadRadius = document.getElementById('spread-radius').value;
  let shadowColor = document.getElementById('shadow-color').value;
  let shadowColorOpacity = document.getElementById('shadow-color-opacity').value;
  let shadowInset = document.getElementById('shadow-inset').checked;/*es checked porque es de tipo checkbox*/
  /*console.log(shadowColor); */ 
  /*console.log(hexToRgba(shadowColor, shadowColorOpacity));*/

  /*Usando operador ternario de js condición ? expr1(true) : expr2(false)*/
  /*Si es marcada el checkbox de inset nos aparece el prefijo inset en la impresion caso contrario no*/
  let boxShadow = shadowInset ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowColorOpacity)}`:
  `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowColorOpacity)}`;
  /*console.log(boxShadow);*/
  elem.style.boxShadow = boxShadow;/*agrega todos los estilos configurados con .style*/

  code.textContent = `box-shadow: ${boxShadow}`;
}
/*convierto hex a rgba*/
function hexToRgba(shadowColor, shadowColorOpacity){
  let r = parseInt(shadowColor.substr(1, 2),16);
  let g = parseInt(shadowColor.substr(3, 2),16);
  let b = parseInt(shadowColor.substr(5, 2), 16);
  return `rgba(${r},${g},${b},${shadowColorOpacity})`;
}
/*Copie el código generado al portapapeles*/
function copyCode(){
  code.select();/*selecciona el texto*/
  document.execCommand('copy');/*ejecuta copiar*/
  alert('CODE COPY');

}
/*llamo a la función generateShadow en cada carga de página*/
window.onload = generateShadow();
