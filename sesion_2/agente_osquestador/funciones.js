/**
 * Convierte un texto en un array de palabras.
 * Separa el texto por espacios, tabulaciones y saltos de línea.
 * Elimina los elementos vacíos del resultado.
 *
 * @param {string} texto - Texto en cualquier formato (puede incluir espacios múltiples, tabs, saltos de línea)
 * @returns {string[]} Array con las palabras del texto
 *
 * @example
 * texto_a_array("Hola mundo") // ["Hola", "mundo"]
 * texto_a_array("  uno   dos\t\ntres  ") // ["uno", "dos", "tres"]
 */
const texto_a_array = (texto) => {
  if (typeof texto !== "string") {
    return [];
  }
  return texto.trim().split(/\s+/).filter((palabra) => palabra.length > 0);
};
