const mongoose = require ('mongoose');
const express = require('express');
const {request} = require('express');
const app = express();

const url = 'mongodb://localhost:27017/Practica';

mongoose.connect(url)

.then(()=> console.log('Nos conectamos a MONGODB'))

.catch((e)=> console.log('ERROR en : '+ e))


//Generar la Coleccion

const EstudianteSchema = mongoose.Schema({

    nombre: String,
    apellido: String,
    curso: String,
    seccion: String


}, {versionkey: false})

const EstudianteModel = mongoose.model('Estudiante', EstudianteSchema);



//Insertar Datos

const insertarEstudiante = async ()=>{

    const Estudiante = new EstudianteModel({

        nombre : 'Carlos',
        apellido : 'Doblado',
        curso: '2',
        seccion: 'B'


    })

    const resultado = await Estudiante.save()
    console.log(resultado)

}


//Mostrar Estudiante 

const mostrarEstudiante = async ()=>{

    const Estudiante = await EstudianteModel.findOne()
    console.log(Estudiante)

}


//Actualizar Estudiante 

const ActualizarEstudiante = async (id)=>{

    const Estudiante = await EstudianteModel.updateOne({_id:id},{
        $set:{

            nombre:'Dagoberto',
            apellido: 'Doblado',
            curso: '3',
            seccion: 'A'
        }
    })
}


//Eliminar Registro

const EliminarEstudiante = async (id)=>{

    const Estudiante = await EstudianteModel.deleteOne({_id:id})
    console.log(Estudiante)

}


//Operaciones HTTP

app.get('/', (req, res)=>{

    res.send('Probando que funcione el GET....!')

    console.log('Probando que si funciona el GET...!')

})

app.put('/', (req, res)=>{

    res.send('Probando que si funciona el PUT....!')
    console.log('Verificando doble que si funciona el PUT..!!')

})

app.post('/', (req, res)=>{

    res.send('Probando el que sirva el POST...!')

    console.log('Doble asegurado que sircve el POST...!')


})


app.delete('/', (req, res)=>{


    res.send('Probando que sirva el DELETE...!!')

    console.log('Doble verificacion del DELETE..!!')


})

app.listen(3000, ()=>{

    console.log('SERVIDOR IS UP')


})

//insertarEstudiante()

//ActualizarEstudiante('65cb11168ccf53fef8ede065')

EliminarEstudiante('65cb11168ccf53fef8ede065')