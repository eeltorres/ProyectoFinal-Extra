# PROGRAMA

## Funcionamiento

### Problema
La empresa de seguros TK-U, ubicada en la ciudad Jedha, realiza cientos de
cotizaciones a diario para sus posibles clientes/asegurados. El inconveniente
que se tiene hasta la fecha es que las cotizaciones se realizan de forma
manual, lo cual hace que las personas pierdan mucho tiempo y que se
generen como máximo 50 cotizaciones al día.
Esto está causando un gran atraso para la entrega de las cotizaciones y
posiblemente están perdiendo una gran cantidad de posibles clientes.
Dado que usted ya tiene los conocimientos necesarios para poder realizar un
Cotizador automático para la empresa de seguros TK-U, se requiere que
usted complete los siguientes requisitos, le proveen un programa base en el
cual debe de completar los requerimientos.</br>

**REQUERIMIENTOS A REALIZAR**</br>

1. La persona a asegurar tiene que ser mayor de edad, por lo cual no se
consideran los casos en los cuales esto no sea verdad. </br>

2. Se tiene un plan base, al cual se le pueden aplicar recargos extra
dependiendo de las condiciones del asegurado. Las condiciones que
causan recargos son las siguientes:
+ Dependiendo de la edad del asegurado
+ Dependiendo de si el asegurado está casado o no y
dependiendo también de la edad del esposo/a del asegurado
+ Dependiendo de la cantidad de hijos o hijas que tenga el
asegurado.</br>

3. Para el primer y el segundo punto, son recargos basados en los rangos de
edades:
+ Si tienen de 18 a 24 años, se les hará un recargo del 10% del precio base.
+ Si tienen de 25 a 49 años, se les hará un recargo del 20% del precio
base.
+ Si tienen 50 años o más, se les hará un recargo del 30% del precio base

## Planteamiento de la SOLUCIÓN

El programa debe de realizar una cotización de seguros de manera automatizada.
Le solicitará al usuario los requisitos necesarios para poder realizar
el cálculo basado en:
- Edad del cliente
- Edad del conyugue, si tiene
- Cantidad de hijos, si tiene
- Cantidad de propiedades, si tiene
- Su salario

La salida del programa le mostrará a detalle los recargos añadidos por cada uno
de los puntos anteriores y el resultado total de la cotización.

## Funcionamiento del codigo

   >El codigo registra pricipalmente los recargos ya establecidos como constantes.</br>
Luego de esto se genera un ciclo while para que se repita las cotizaciones </br>
hasta que el usuario decida salir. </br>
Se declaran las variables que utilizará el codigo, posterior se le solicita al </br>
usuario que ingrese sus datos: 
>- Nombre
>- Edad
>- Salario
>- Si tiene conyugue
>-   - Edad del conyugue
>- Si tiene hijos
>-   - Cantidad de hijos
>- Si tiene propiedad
>-   - Cantidad de propiedades </br>
>
>En base a estos datos se realizan el cálculo, añadiendo los recargos establecidos</br>
por cada uno.</br>
Por último se le muestra al usuario el recargo de cada uno de los elementos </br>
y el total de la cotización.

## Puntos a tomar en cuenta del nuevo codigo
+ Se declararon constantes a los valores que no cambiaran como los recargos
+ Se realizo un cicho para repetir el proceso
+ Se declararon las variables dentro del clico while para limpiar cada vez que se repita
+ Se regeneraron variables individuales para guargar el resultado de cada recargo
+ Se realizaron las validaciones para saber si los campos no estan vacios
+ Se realizaron las validaciones para saber si es menor de edad y mostrar una alerta
+ Se trato de utilizar la menor cantidad de variables en memoria

## Puntos a mejorar
+ Cuando el usuario ingrese SALIR debería mostrar un reporte de las cotizacion
+ Realizar alertas cuando el usuario ingrese datos invalidos, por ejemplo: (edad del conyugue = 17)