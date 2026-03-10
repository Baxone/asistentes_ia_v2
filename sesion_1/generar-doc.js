const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require('docx');
const fs = require('fs');
const path = require('path');

const doc = new Document({
  sections: [{
    children: [
      new Paragraph({
        text: "Explicación de las funciones en payments.ts",
        heading: HeadingLevel.TITLE,
        spacing: { after: 400 }
      }),
      new Paragraph({
        text: "1. executeTransaction (líneas 3-5)",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 300, after: 200 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Simula la ejecución de una transacción de pago. Recibe un objeto con amount, currency y method, y devuelve siempre un objeto mock con success: true y un transactionId fijo ('mock-id'). No conecta con ningún proveedor real de pagos; es código de prueba o desarrollo.",
            size: 22
          })
        ],
        spacing: { after: 300 }
      }),
      new Paragraph({
        text: "2. processPayment (líneas 7-11)",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 300, after: 200 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Es la función principal exportada del módulo. Hace lo siguiente:",
            size: 22
          })
        ],
        spacing: { after: 100 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: "• ", size: 22 }),
          new TextRun({ text: "Valida que el amount sea mayor que 0; si no, lanza un error.", size: 22 })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: "• ", size: 22 }),
          new TextRun({ text: "Calcula la comisión con calculateFee.", size: 22 })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: "• ", size: 22 }),
          new TextRun({ text: "Llama a executeTransaction con el importe total (amount + fee), la moneda y el método de pago.", size: 22 })
        ],
        spacing: { after: 300 }
      }),
      new Paragraph({
        text: "3. calculateFee (líneas 14-18)",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 300, after: 200 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Calcula la comisión según el método de pago:",
            size: 22
          })
        ],
        spacing: { after: 100 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: "• Tarjeta: ", size: 22, bold: true }),
          new TextRun({ text: "2,9% (0.029)", size: 22 })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: "• PayPal: ", size: 22, bold: true }),
          new TextRun({ text: "3,4% (0.034)", size: 22 })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: "• Transferencia: ", size: 22, bold: true }),
          new TextRun({ text: "0%", size: 22 })
        ],
        spacing: { after: 300 }
      }),
      new Paragraph({
        text: "Resumen del flujo",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 300, after: 200 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: "1. ", size: 22, bold: true }),
          new TextRun({ text: "processPayment valida el importe.", size: 22 })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: "2. ", size: 22, bold: true }),
          new TextRun({ text: "calculateFee obtiene la comisión según el método.", size: 22 })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: "3. ", size: 22, bold: true }),
          new TextRun({ text: "executeTransaction simula la transacción con el importe total (amount + fee).", size: 22 })
        ],
        spacing: { after: 200 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "La parte 'legacy' suele referirse a que executeTransaction es un mock y no integra un proveedor real de pagos.",
            size: 22,
            italics: true
          })
        ],
        spacing: { after: 200 }
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  const outputPath = path.join(__dirname, 'explicacion_payments.docx');
  fs.writeFileSync(outputPath, buffer);
  console.log('Documento creado:', outputPath);
});
