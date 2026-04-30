const button = document.getElementById("button");

let boton_pulsado = false;

button.addEventListener("click", function (e) {

    e.preventDefault();

    if (!boton_pulsado) {
        boton_pulsado = true;
        Tabla();
    }  
});

function Tabla(){
    let t = document.getElementById("tabla");
    let fila = "";

    for (let i = 1; i <= 10; i++) {

        // color aleatorio
        let color = `hsl(${i * 36}, 70%, 80%)`;

        fila = `<div><table style="background-color:${color}">`;

        for (let j = 1; j <= 10; j++) {
            fila += "<tr><th>" + i + " X " + j + "</th>";
            fila += "<td>" + (j * i) + "</td></tr>";
        }

        fila += "</table></div>";

        t.innerHTML += fila;
    }
}
