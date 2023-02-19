//Constantes en recargos
//Precio base de la cotización, en quetzales, lo puede cambiar
const precio_base = 2000;
//Valores de los recargos por edad de cliente y conyugye
const recargo_edad18 = 0.1; // 10%
const recargo_edad25 = 0.2; // 20%
const recargo_edad50 = 0.3; // 30%
//Valores de los recargos de los hijos
const recargo_hijos = 0.2; // 20%
//Valores de los recargos de propiedad y salario
const recargo_propiedad = 0.35; //35%
const recargo_salario = 0.05; //5%

do {
    //Variables y limpieza de variables
    var recargo = 0;
    var recargo_total_cliente = 0;
    var recargo_total_conyugue = 0;
    var recargo_total_hijos = 0;
    var recargo_total_propiedad = 0;
    var recargo_total_salario = 0;
    var total_recargos = 0;
    var edad_conyuge = 0;
    var hijos_cantidad = 0;
    var propedad_cantidad = 0;
//INICIO
    var nombre = prompt("Ingrese su Nombre", "");
    var edad = prompt("Ingrese su edad", 0);
    var salario = prompt("Ingrese su salario", 0);

    if (nombre != "" && edad >= 18 && salario != 0) {
        var conyugue = prompt("Tiene esposo/a", "SI/NO");
        if (conyugue.toUpperCase() == "SI") {
            parseInt(edad_conyuge = prompt("Cuantos años tiene su esposo/a"));
        }
        var hijos = prompt("Tiene hijos/as", "SI/NO");
        if (hijos.toUpperCase() == "SI") {
            parseInt(hijos_cantidad = prompt("Cuantos hijos tiene", 0));
        }
        var propiedad = prompt("Tiene propiedad / es", "SI/NO");
        if (propiedad.toUpperCase() == "SI") {
            parseInt(propedad_cantidad = prompt("Cuantas propiedades tiene", 0))
        }

        //CALCULAR RECARGO POR EDAD DEL CLIENTE
        if (edad >= 18 && edad < 25) {
            recargo = precio_base * recargo_edad18;
            recargo_total_cliente += recargo;
        }
        else if (edad >= 25 && edad < 50) {
            recargo = precio_base * recargo_edad25;
            recargo_total_cliente += recargo;
        }
        else {
            recargo = precio_base * recargo_edad50;
            recargo_total_cliente += recargo;
        }
        //CALCULAR EL RECARGO POR EDAD DE CONYUGUE
        if (edad_conyuge >= 18 && edad < 25) {
            recargo = precio_base * recargo_edad18;
            recargo_total_conyugue += recargo;
        }
        else if (edad_conyuge >= 25 && edad < 50) {
            recargo = precio_base * recargo_edad25;
            recargo_total_conyugue += recargo;
        }
        else if (edad_conyuge > 50) {
            recargo = precio_base * recargo_edad50;
            recargo_total_cliente += recargo;
        }
        //CALCULAR RECARGO POR CANTIDAD DE HIJOS
        if (hijos_cantidad > 0) {
            recargo_total_hijos = precio_base * (hijos_cantidad * recargo_hijos);
        }
        //CALCULAR RECARGO POR SALARIO ASEGURADO
        if (salario > 0) {
            recargo_total_salario = salario * recargo_salario;
        }
        //SUMAMOS TODOS LOS RECARGOS ANTERIORES PARA REALIZAR EL RECARGO DE LA COTIZACION
        total_recargos = recargo_total_cliente + recargo_total_conyugue + recargo_total_hijos + recargo_total_salario;
        //CALCULAR RECARGO POR PROPIEDAD
        if (propedad_cantidad > 0) {
            recargo_total_propiedad = total_recargos * (propedad_cantidad * recargo_propiedad);
            total_recargos += recargo_total_propiedad;
        }
        //Mostrar al usuario los resultados detallados y generales
        alert("El recargo inicial: " + recargo_total_cliente + "\n" +
            "El recargo por el seguro de su conyugue es: " + recargo_total_conyugue + "\n" +
            "El recargo por el seguro de sus hijos: " + recargo_total_hijos + "\n" +
            "El recargo por el seguro de su propiedad/es es: " + recargo_total_propiedad + "\n" +
            "El recargo por el seguro de su salario es: " + recargo_total_salario)
        alert("El total de los recargos es: " + total_recargos);
        alert("El precio total de la cotizacion es :" + (total_recargos + precio_base));

    }
    else if (edad < 18 && edad > 0) {
        alert("No se puede realizar la cotizacion a menores de edad");
    }
    else {
        alert("Debe llenar los campos solicitados");
    }
    salir = prompt("Ingrese SALIR si no desea realizar otra cotizacion.\n De lo contrario presione ENTER", "");

} while (salir.toUpperCase() != "SALIR");

