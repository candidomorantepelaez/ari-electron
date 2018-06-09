const factura = {
  "nombre": "FACTURA",
  "numero": 1,
  "libro": null,
  "pagina": null,
  "datosAri": {
		"nombre": "nombre",
    "direccion": {
      "poligono": "nombre del poligono",
      "calle": "nombre de la calle",
      "poblacion": "cod.postal y poblacion",
      "provincia": "provincia",
    },
    "nif": "NIF",
    "telefono": "111111111",
    "email": "email@email.com",
    "web": "www.web.com"
  },
  "datosEmpresa": {
      "nombre": "nombre empresa",
      "calle": "calle",
      "poblacion": "poblacion",
      "provincia": "provincia",
      "codigoPostal": "codigoPostal",
      "cif": "cif",
      "telefono": "111111111",
      "email": "email@email.com"
  },
  "numeroFactura": "1/1",
  "fechaFactura": "28/02/2018",
  "baseImponible": 23.80,
  "iva10": 3.12,
  "iva21": 0.89,
  "ivaTotal": 4.01,
  "totalFactura": 27.81,
  "formaPago": 'EFECTIVO',
  "observaciones": "Texto observaciones",
  "mensajeFinal": "¡Gracias por su confianza!",
  "gotaAguaEmpresa1": "nombre empresa",
  "gotaAguaEmpresa2": "nombre empresa 2",
  "productos": [{
      "nombre": "nombre producto",
      "codigo": "codigo",
      "precioUnidad": 4.46,
      "iva": '10%',
      "unidades": 2,
      "precioTotal": 8.92
  }],
  "inicioProductos": 15
}

export default factura;