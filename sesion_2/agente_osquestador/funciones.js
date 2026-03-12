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


/**
 * Suma dos números.
 *
 * @param {number} a - Primer sumando
 * @param {number} b - Segundo sumando
 * @returns {number} Resultado de la suma
 *
 * @example
 * sumar(2, 3) // 5
 * sumar(-1, 1) // 0
 */
const sumar = (a, b) => {
  return a + b;
};


// Tests unitarios
describe("texto_a_array", () => {
  it("should return array of words from simple text", () => {
    expect(texto_a_array("Hola mundo")).toEqual(["Hola", "mundo"]);
  });

  it("should handle multiple spaces, tabs and newlines", () => {
    expect(texto_a_array("  uno   dos\t\ntres  ")).toEqual(["uno", "dos", "tres"]);
  });

  it("should return empty array for non-string input", () => {
    expect(texto_a_array(123)).toEqual([]);
    expect(texto_a_array(null)).toEqual([]);
    expect(texto_a_array(undefined)).toEqual([]);
    expect(texto_a_array({})).toEqual([]);
  });

  it("should return empty array for empty string", () => {
    expect(texto_a_array("")).toEqual([]);
  });

  it("should return empty array for string with only whitespace", () => {
    expect(texto_a_array("   ")).toEqual([]);
  });

  it("should return single word array for single word", () => {
    expect(texto_a_array("palabra")).toEqual(["palabra"]);
  });
});
