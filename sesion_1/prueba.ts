// creame un funcion para validar si numero es par o impar, quiero devuelva un booleano, documentamela con jsdoc

import moment from 'moment';

/**
 * Obtiene la fecha y hora actual
 * @param formato - Formato opcional para la fecha (por defecto: 'YYYY-MM-DD HH:mm:ss')
 * @returns La fecha y hora actual como string formateado
 */
function obtenerFechaHoraActual(formato: string = 'YYYY-MM-DD HH:mm:ss'): string {
    return moment().format(formato);
}

/**
 * Valida si un número es par o impar
 * @param numero - El número a validar
 * @returns true si el número es par, false si es impar
 */
function esPar(numero: number): boolean {
    return numero % 2 === 0;
}

console.log(esPar(4));
console.log(esPar(5));
console.log(esPar(6));

console.log(obtenerFechaHoraActual()); // Ej: 2025-03-10 14:30:45
console.log(obtenerFechaHoraActual('DD/MM/YYYY HH:mm')); // Ej: 10/03/2025 14:30

