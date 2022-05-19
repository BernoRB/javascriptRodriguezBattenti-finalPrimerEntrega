// 1 - Simular entrada-proceso-salida, sin errores
// 2 - Capturar por prompt, largar por alert, que sea coherente
// 3 - Funciones con parámetros + Arrays + Objetos con propiedades y métodos
// 4 - Referenciar el JS bien
// 5 - Nombrar bien las variables, identar, hacer comentarios


// Declaramos textos estáticos que usaremos más adelante, para que luego no 'ensucien' visualmente el código
const textoNombre = '¡Bienvenido a Tivicom juega! podrás ganar descuentos en el producto que decidas contratar participando en divertidos juegos.\n\nAntes que nada, decime tu nombre:'
const textoMail = `¡Lindo nombre!. \n\nAhora por favor decime tu mail:`
const textoProducto = `Y bien, ¿en qué producto estás interesado? escribí INTERNET, TELEVISION o TELEFONIA. \n\n`

// Creamos una CLASE productos para poner en práctica objetos.
class Productos {
    constructor(id, nombre, descripcion, precio) {
        this.id = id,
            this.nombre = nombre,
            this.descripcion = descripcion,
            this.precio = precio
    }

    // Muestra el nombre y descripción del producto
    mostrar() {
        alert(`¡Te muestro ahora los productos!\n\n${this.nombre}: ${this.descripcion}`)
    }

    // Calcula el precio final en función del descuento ganado
    calcularPrecioFinal(descuento) {
        let precioFinal = this.precio * (1 - descuento)
        return precioFinal
    }
}

// Creamos los productos llamando al constructor de la clase
let producto1 = new Productos(1, "Internet", "La mejor conexión a internet para empresas y hogares con un servicio de alta disponibilidad y con la mayor cobertura del mercado.", 3500)
let producto2 = new Productos(2, "Television", "Televisión satelital, la mayor variedad de canales nacionales e internacionales y contenido on-demand las 24 horas.", 2900)
let producto3 = new Productos(3, "Telefonia", "Servicio de red movil con la mayor cobertura del mercado, roaming gratuito en toda américa, llamadas y SMS gratis.", 1600)

// Creamos un array para poner en práctica el tema y usamos el método push para agregar nuestros productos
let listaProductos = []
listaProductos.push(producto1, producto2, producto3)



function iniciaSimulador() {
    //Pedimos nombre, mail y producto a contratar
    nombre = pidoDatos(textoNombre)
    mail = pidoDatos(textoMail)
    // Muestro los productos disponibles antes de darle la elección
    listaProductos.forEach(prod => prod.mostrar())
    producto = pidoDatos(textoProducto).toUpperCase()
    // Vamos al juego que todavía no está desarrollado por requerir temas que aún no vimos
    descuento = juego()
    console.log(nombre)
    console.log(mail)
    console.log(descuento)
}

// Función que recibe un texto para mostrar y devuelve el dato que ingrese el usuario
function pidoDatos(texto) {
    datoRetorno = prompt(texto)
    return datoRetorno
}

// En la versión final el juego será un memotest
// En función de los aciertos y el tiempo tardado será el descuento obtenido
// Como no es posible desarrollarlo con los conocimientos actuales, lo omito y obtenemos el descuento de otra forma
function juego() {
    alert(`¡${nombre}!. En este punto jugarías a un Memotest para determinar el descuento.\n\nComo nuestros empleados aún lo están desarrollando, vamos a dejar que VOS elijas el descuento que te merecés. \n\nGenerosos, ¿no?`)
    let descuento = 0
    let quiereMas = ''
    // Sumamos un 2% de descuento hasta que el usuario no quiera más
    do {
        if (quiereMas == '') 
            descuento += 2
        quiereMas = prompt(`Actualmente tu descuénto es de ${descuento}%.\n\nSi creés que te merecés MÁS, ¡dale al enter sin escribir nada!. Si creés que es suficiente, escribi LISTO (nuestras finanzas te lo agradecen`).toUpperCase()
    } while (quiereMas != 'LISTO' && descuento < 30)
    // Si descuento es 30, salió por límite. Se le informa.
    if (descuento == 30) {
        alert("¡Listo, che! no te podemos dar más de un 30%. ¿Continuamos?")
    }
    return descuento
}

iniciaSimulador()