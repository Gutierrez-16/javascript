const operacion = (tipo, numero1, numero2) => {
	if (tipo === 'suma') {
		return numero1 + numero2;
	} else if (tipo === 'resta') {
		return numero1 - numero2;
	}
};

const miVariable = operacion('suma', 150, 455);
console.log(miVariable);