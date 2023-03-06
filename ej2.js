function isLeapYear(year1,year2) {
     //pasa los numeros a enteros
    parseInt(year1);
    parseInt(year2);
    
    const añosBisiestos=[];
    //comprueba que los numeros introducidos estan dentro del rango
    if (year1>=2001 && year1<=2500 && year2>=2001 && year2<=2500) {
        console.log("correcto")
        //comprueba que sean divisibles entre 4
        if (year1%4===0 && year2%4===0) {
            añosBisiestos.push(year1,year2)
            console.log("Años bisiestos: "+añosBisiestos)
        }//comprueba que sean divisibles entre 100 y 400 a la vez
    
    }
    
    else{
        //da error y no muestra más mensajes
        console.log("número proporcionado no es válido")
    }
    
}

isLeapYear(2004,2500)