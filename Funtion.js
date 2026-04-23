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
        fila = "<div><table>";

        for (let j = 1; j <= 10; j++) {
            fila += "<tr><th>" + i.toString() + "  X " + j.toString() + "</th>";
            fila += "<td>" + (j * i).toString() + "</td>";
            fila += "</tr>";
        }
        fila += "</table></div>";

        t.innerHTML += fila;
    }
}