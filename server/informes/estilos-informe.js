var crearEstilo = function(estilos) {
  return Object.assign(...estilos);
};

var normal = {
  font: {
    name: 'Calibri',
    size: 12
  }
}

var bold = {
  font: {
    name: 'Calibri',
    size: 12,
    bold: true
  }
}

var titulo = {
  font: {
    name: 'Calibri',
    bold: true,
    size: 28
  },
}

var alineacionDerecha = {
  alignment: {
    horizontal: 'right',
    vertical: 'center',
    wrapText: true
  }
}

var alineacionCentro = {
  alignment: {
    horizontal: 'center',
    vertical: 'center',
    wrapText: true
  }
}

var alineacionIzquierda = {
  alignment: {
      horizontal: 'left',
      vertical: 'center',
      indent: 1,
      wrapText: true
  }
}

var colorFondoOscuro = {
  fill: {
    type: 'pattern',
    patternType: 'solid',
    fgColor: '969696'
  }
}

var colorFondoClaro = {
  fill: {
    type: 'pattern',
    patternType: 'solid',
    fgColor: 'c0c0c0'
  }
}

var colorFondoBlanco = {
  fill: {
    type: 'pattern',
    patternType: 'solid',
    fgColor: 'ffffff'
  }
}

var conBordes = {
  border: {
    left: {
        style: 'thin',
        color: '000000'
    },
    right: {
        style: 'thin',
        color: '000000'
    },
    top: {
        style: 'thin',
        color: '000000'
    },
    bottom: {
        style: 'thin',
        color: '000000'
    },
    diagonal: {
        style: 'thin',
        color: '000000'
    },
    diagonalDown: false,
    diagonalUp: false,
    outline: false
  }
}

var sinBordes = {
  border: {
  }
}

var imagenLogoAri = {
  path: './server/assets/logoAri.jpg',
  type: 'picture',
  position: {
      type: 'absoluteAnchor',
      x: '0.78in',
      y: '0.48in'
  }
}

module.exports = {
  crearEstilo,
  normal,
  bold,
  titulo,
  alineacionDerecha,
  alineacionCentro,
  alineacionIzquierda,
  colorFondoClaro,
  colorFondoOscuro,
  colorFondoBlanco,
  conBordes,
  sinBordes,
  imagenLogoAri
}