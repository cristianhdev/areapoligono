
let video;


let sliders = [
    '.bienvenida',
    '#slider1',
    '#slider2',
    '#slider3',
    '#slider4',
    '#slider5',
    '#slider6'
]

let respuestasInputs = [
    { 'input1': 48, 'input2': '6,5', 'respuesta': 156 },
    { 'input1': 45, 'input2': 8, 'respuesta': 180 },
    { 'input1': 48, 'input2': '7,2', 'respuesta': '172.8' },
    { 'input1': 48, 'input2': '8,5', 'respuesta': 204 }
]

let arrayInputsGrupo = [
    ['input1Ej1', 'input2Ej1', 'input3Ej1'],
    ['input1Ej2', 'input2Ej2', 'input3Ej2'],
    ['input1Ej3', 'input2Ej3', 'input3Ej3'],
    ['input1Ej4', 'input2Ej4', 'input3Ej4'],
]

function init() {
    presentacionActividad = new Presentacion(sliders, '.siguienteBtn', null, false)
}

function cargarActividadFinal() {
    document.querySelector('.siguienteBtn').style.display = 'none'
}


function validarInputs() {
    let inputs = document.querySelectorAll('input')
    let respuestas = []
    let correcto = false

    inputs.forEach(element => {
        respuestas.push(element.value)
    });




    respuestas.forEach((element, index) => {
        if (element == '') {
            inputs[index].classList.add('incorrectoInput')
            document.querySelector('.mensaje-actividad').style.display = 'flex'
            document.querySelector('.mensaje-actividad').innerHTML = '!Faltan datos!'
            setTimeout(() => {
                document.querySelector('.mensaje-actividad').style.display = 'none'

            }, 2300);
            correcto = false
        } else {

            correcto = true

        }
    });


    if (correcto) {
        validarGrupoInputs(arrayInputsGrupo, respuestasInputs)
    }
}

function validarGrupoInputs(inputs, respuestas) {

    let correctosGlobal = [
        new Array(3),
        new Array(3),
        new Array(3),
        new Array(3)
    ]


    //Validando grupo 1 inputs
    let input1A = document.querySelector(`#${inputs[0][0]}`)
    let input2A = document.querySelector(`#${inputs[0][1]}`)
    let input3A = document.querySelector(`#${inputs[0][2]}`)
    if (input1A.value == respuestas[0].input1) {
        input1A.classList.remove('incorrectoInput')
        input1A.classList.add('correctoInput')
        correctosGlobal[0][0] = true
    } else {
        input1A.classList.remove('correctoInput')
        input1A.classList.add('incorrectoInput')
        correctosGlobal[0][0] = false
        mostrarMensajeIncorrecto()
    }

    if (input2A.value == respuestas[0].input2) {
        input2A.classList.remove('incorrectoInput')
        input2A.classList.add('correctoInput')
        correctosGlobal[0][1] = true
    } else {
        input2A.classList.remove('correctoInput')
        input2A.classList.add('incorrectoInput')
        correctosGlobal[0][1] = false
        mostrarMensajeIncorrecto()
    }

    if (input3A.value == respuestas[0].respuesta) {
        input3A.classList.remove('incorrectoInput')
        input3A.classList.add('correctoInput')
        correctosGlobal[0][2] = true
    } else {
        input3A.classList.remove('correctoInput')
        input3A.classList.add('incorrectoInput')
        correctosGlobal[0][2] = false
        mostrarMensajeIncorrecto()
    }

    //Validando grupo 2 inputs
    let input1B = document.querySelector(`#${inputs[1][0]}`)
    let input2B = document.querySelector(`#${inputs[1][1]}`)
    let input3B = document.querySelector(`#${inputs[1][2]}`)
    if (input1B.value == respuestas[1].input1) {
        input1B.classList.remove('incorrectoInput')
        input1B.classList.add('correctoInput')
        correctosGlobal[1][0] = true
    } else {
        input1B.classList.remove('correctoInput')
        input1B.classList.add('incorrectoInput')
        correctosGlobal[1][0] = false
        mostrarMensajeIncorrecto()
    }

    if (input2B.value == respuestas[1].input2) {
        input2B.classList.remove('incorrectoInput')
        input2B.classList.add('correctoInput')
        correctosGlobal[1][1] = true
    } else {
        input2B.classList.remove('correctoInput')
        input2B.classList.add('incorrectoInput')
        correctosGlobal[1][1] = false
        mostrarMensajeIncorrecto()
    }

    if (input3B.value == respuestas[1].respuesta) {
        input3B.classList.remove('incorrectoInput')
        input3B.classList.add('correctoInput')
        correctosGlobal[1][2] = true
    } else {
        input3B.classList.remove('correctoInput')
        input3B.classList.add('incorrectoInput')
        correctosGlobal[1][2] = false
        mostrarMensajeIncorrecto()
    }


    //Validando grupo 3 inputs
    let input1C = document.querySelector(`#${inputs[2][0]}`)
    let input2C = document.querySelector(`#${inputs[2][1]}`)
    let input3C = document.querySelector(`#${inputs[2][2]}`)
    if (input1C.value == respuestas[2].input1) {
        input1C.classList.remove('incorrectoInput')
        input1C.classList.add('correctoInput')
        correctosGlobal[2][0] = true
    } else {
        input1C.classList.remove('correctoInput')
        input1C.classList.add('incorrectoInput')
        correctosGlobal[2][0] = false
        mostrarMensajeIncorrecto()
    }

    if (input2C.value == respuestas[2].input2) {
        input2C.classList.remove('incorrectoInput')
        input2C.classList.add('correctoInput')
        correctosGlobal[2][1] = true
    } else {
        input2C.classList.remove('correctoInput')
        input2C.classList.add('incorrectoInput')
        correctosGlobal[2][1] = false
        mostrarMensajeIncorrecto()
    }

    if (input3C.value == respuestas[2].respuesta) {
        input3C.classList.remove('incorrectoInput')
        input3C.classList.add('correctoInput')
        correctosGlobal[2][2] = true
    } else {
        input3C.classList.remove('correctoInput')
        input3C.classList.add('incorrectoInput')
        correctosGlobal[2][2] = false
        mostrarMensajeIncorrecto()
    }

    //Validando grupo 4 inputs
    let input1D = document.querySelector(`#${inputs[3][0]}`)
    let input2D = document.querySelector(`#${inputs[3][1]}`)
    let input3D = document.querySelector(`#${inputs[3][2]}`)
    if (input1D.value == respuestas[3].input1) {
        input1D.classList.remove('incorrectoInput')
        input1D.classList.add('correctoInput')
        correctosGlobal[3][0] = true
    } else {
        input1D.classList.remove('correctoInput')
        input1D.classList.add('incorrectoInput')
        correctosGlobal[3][0] = false
        mostrarMensajeIncorrecto()
    }

    if (input2D.value == respuestas[3].input2) {
        input2D.classList.remove('incorrectoInput')
        input2D.classList.add('correctoInput')
        correctosGlobal[3][1] = true
    } else {
        input2D.classList.remove('correctoInput')
        input2D.classList.add('incorrectoInput')
        correctosGlobal[3][1] = false
        mostrarMensajeIncorrecto()
    }

    if (input3D.value == respuestas[3].respuesta) {
        input3D.classList.remove('incorrectoInput')
        input3D.classList.add('correctoInput')
        correctosGlobal[3][2] = true
    } else {
        input3D.classList.remove('correctoInput')
        input3D.classList.add('incorrectoInput')
        correctosGlobal[3][2] = false
        mostrarMensajeIncorrecto()
    }


    const isValido = (valor) => valor == true
    let puntos_total = 0

    if (correctosGlobal[0].every(isValido)) {
        document.querySelector('.resultadoEj1').classList.remove('incorrecto')
        document.querySelector('.resultadoEj1').classList.add('correcto')
        puntos_total++
    } else {
        document.querySelector('.resultadoEj1').classList.remove('correcto')
        document.querySelector('.resultadoEj1').classList.add('incorrecto')
        puntos_total--
    }

    if (correctosGlobal[1].every(isValido)) {
        document.querySelector('.resultadoEj2').classList.remove('incorrecto')
        document.querySelector('.resultadoEj2').classList.add('correcto')
        puntos_total++
    } else {
        document.querySelector('.resultadoEj2').classList.remove('correcto')
        document.querySelector('.resultadoEj2').classList.add('incorrecto')
        puntos_total--
    }

    if (correctosGlobal[2].every(isValido)) {
        document.querySelector('.resultadoEj3').classList.remove('incorrecto')
        document.querySelector('.resultadoEj3').classList.add('correcto')
        puntos_total++
    } else {
        document.querySelector('.resultadoEj3').classList.remove('correcto')
        document.querySelector('.resultadoEj3').classList.add('incorrecto')
        puntos_total--
    }

    if (correctosGlobal[3].every(isValido)) {
        document.querySelector('.resultadoEj4').classList.remove('incorrecto')
        document.querySelector('.resultadoEj4').classList.add('correcto')
        puntos_total++
    } else {
        document.querySelector('.resultadoEj4').classList.remove('correcto')
        document.querySelector('.resultadoEj4').classList.add('incorrecto')
        puntos_total--
    }

    if (puntos_total < 4) {
        mostrarMensajeIncorrecto()
    } else {
        mostrarMensajeCorrecto()
    }


}

function mostrarMensajeIncorrecto() {
    document.querySelector('.mensaje-actividad').style.display = 'flex'
    document.querySelector('.mensaje-actividad').innerHTML = '!Datos incorrectos!'
    setTimeout(() => {
        document.querySelector('.mensaje-actividad').style.display = 'none'
    }, 2300);
}

function mostrarMensajeCorrecto() {
    document.querySelector('.mensaje-actividad').style.display = 'flex'
    document.querySelector('.mensaje-actividad').innerHTML = '!Datos Correctos!'
    setTimeout(() => {
        document.querySelector('.mensaje-actividad').style.display = 'none'

    }, 2300);
}

function ocultarMensaje(){

}
