// Clase para la informacion que estara llenando el jefe de almacen
export class Ruta {
  ronda: Number;

  // Este es asignado preliminarmente por un administrador

  chofer: Chofer;
  // Este es asignado preliminarmente por un administrador
  copiloto: Copiloto;

  horaSalida: Date;
  horaLlegada: Date;
  horaReferencia: String;

  // Este es asignado preliminarmente por un administrador
  unidad: Unidad;

  kmSalida: String;
  kmEntrada: String;

  // El tipo de incidencia esta asignado de manera preliminar
  incidencia: String;
  anotaciones: String;
}

class Chofer {
  nombre: String;
  acumuladoHoras: Number;
  aumuladoKm: Number;
  acumuladoPedidos: Number;
  acumuladoCantidad: Number;
}

class Unidad {
  nombre: String;
  acumuladoHoras: Number;
  aumuladoKm: Number;
  acumuladoPedidos: Number;
  acumuladoCantidad: Number;
  gastoGasolina: Number;

  // Se agregara una subclase donde vendra el rendimiento de la unidad
}

class Copiloto {
  nombre: String;
  acumuladoHoras: Number;
  aumuladoKm: Number;
  acumuladoPedidos: Number;
  acumuladoCantidad: Number;
}
