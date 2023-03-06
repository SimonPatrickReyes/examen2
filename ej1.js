//declaramos la funcion jugador
function jugador(nombre,apellidos,puntuacion,nivel) {
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.puntuacion=1;
    this.nivel=1;

    //funcion sumarPuntuacion, si puntuacion es divisible entre 10, es que ha alcanzado 10,20,30 puntos...
    this.sumarPuntuacion = function () {
        this.puntuacion++;
        if (this.puntuacion % 10 === 0) {
            this.nivel++;
        }
    },
        //funcion restarPuntuacion, si puntuacion es divisible entre 10, es que ha restado 10,20,30 puntos...
        this.restarPuntuacion = function () {
            if (this.puntuacion > 0) {
                this.puntuacion--;
                if (this.puntuacion % 10 === 9) {
                    this.nivel--;
                    if (this.nivel < 1) {
                        this.nivel = 1;
                    }
                }
                //si puntuacion llega 0, se resetea al jugador
                if (this.puntuacion === 0) {
                    this.nivel = 1;
                    this.puntuacion = 1;
                }
            }
        }
}
    
   
//dos jugadores precargados en el sistema
const jugador1 = new jugador("jose","perez")
const jugador2 = new jugador("sergio","martin")

console.log(jugador1)   

jugador1.sumarPuntuacion();
jugador1.sumarPuntuacion();
jugador1.sumarPuntuacion();
jugador1.sumarPuntuacion(); // gana 10 puntos
jugador1.sumarPuntuacion();
jugador1.sumarPuntuacion();
jugador1.sumarPuntuacion();
jugador1.sumarPuntuacion();
jugador1.sumarPuntuacion();

console.log(jugador1)

jugador1.restarPuntuacion();
jugador1.restarPuntuacion();
jugador1.restarPuntuacion();
jugador1.restarPuntuacion();
jugador1.restarPuntuacion();
jugador1.restarPuntuacion();
jugador1.restarPuntuacion();
jugador1.restarPuntuacion();
jugador1.restarPuntuacion();
jugador1.restarPuntuacion();
jugador1.restarPuntuacion();
jugador1.restarPuntuacion();
//pierde toda su puntuacion, jugador reiniciado
console.log(jugador1)



