let nombre = document.getElementById("nombre");
let html_1 = document.getElementById("html_1");
let html_2 = document.getElementById("html_2");
let html_3 = document.getElementById("html_3");
let javascript_1 = document.getElementById("javascript_1");
let javascript_2 = document.getElementById("javascript_2");
let javascript_3 = document.getElementById("javascript_3");
let css_1 = document.getElementById("css_1");
let css_2 = document.getElementById("css_2");
let css_3 = document.getElementById("css_3");
let html_promedio = document.getElementById("html_promedio");
let css_promedio = document.getElementById("css_promedio");
let javascript_promedio = document.getElementById("javascript_promedio");

let nombre_prompt = prompt("Ingrese tu nombre");
let nota_1_html = parseInt(prompt("Ingrese la Nota 1 de HTML"));
let nota_2_html = parseInt(prompt("Ingrese la Nota 2 de HTML"));
let nota_3_html = parseInt(prompt("Ingrese la Nota 3 de HTML"));
let nota_1_css = parseInt(prompt("Ingrese la Nota 1 de CSS"));
let nota_2_css = parseInt(prompt("Ingrese la Nota 2 de CSS"));
let nota_3_css = parseInt(prompt("Ingrese la Nota 3 de CSS"));
let nota_1_javascript = parseInt(prompt("Ingrese la Nota 1 de JAVASCRIPT"));
let nota_2_javascript = parseInt(prompt("Ingrese la Nota 2 de JAVASCRIPT"));
let nota_3_javascript = parseInt(prompt("Ingrese la Nota 3 de JAVASCRIPT"));

nombre.innerHTML = nombre_prompt;
html_1.innerHTML = nota_1_html;
html_2.innerHTML = nota_2_html;
html_3.innerHTML = nota_3_html;
css_1.innerHTML = nota_1_css;
css_2.innerHTML = nota_2_css;
css_3.innerHTML = nota_3_css;
javascript_1.innerHTML = nota_1_javascript;
javascript_2.innerHTML = nota_2_javascript;
javascript_3.innerHTML = nota_3_javascript;

html_promedio.innerHTML = ((nota_1_html + nota_2_html + nota_3_html) / 3).toFixed(1); 
css_promedio.innerHTML = ((nota_1_css + nota_2_css + nota_3_css) / 3).toFixed(2);
javascript_promedio.innerHTML = ((nota_1_javascript + nota_2_javascript + nota_3_javascript) / 3).toFixed(2);







