const express= require("express") // -> ambil library express js
const bodyParser = require("body-parser") // -> ambil library bosy parser
const cors = require("cors") // -> ambil library cors
const app = express()

// -> oemanggilan fungsi
// bosy parser untuk medapatkan data request berformat json
app.use(bodyParser.json())

// ektrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

//cors spya endpoint dapat diakses oleh cross platform
app.use(cors())

//server
app.listen(8000, ()=>{
    console.log("Server run on port 8000")
})

//endpoint 1 biner
app.post("/convert/Biner", (req,res) =>{
     //ambiladata
     let masuk = Number(req.body.masuk)
     let Decimal = parseInt(masuk,2)// mengubah angkabiner ke decimal
     let Oktal = parseInt(masuk, 2).toString(8) // mengubah angkabiner ke oktal
     let Hexadecimal = parseInt(masuk, 2).toString(16) // mengubah angkabiner ke hexadecimal
    //objek data response
    let response = {
        Biner: masuk,
        Decimal: Decimal,
        Oktal: Oktal,
        Hexadecimal: Hexadecimal
    }
    //memberikan respon json yang brisi objek
    res.json(response)
})

//endpoint 2 decimal
app.post("/convert/Decimal", (req,res)=>{
    //data
    let masuk = Number(req.body.masuk)
    let Biner = masuk.toString(2)
    let Oktal = masuk.toString(8)
    let Hexadecimal = masuk.toString(16)
    //objek response
    let response = {
        Decimal: masuk,
        Biner: Biner,
        Oktal: Oktal,
        Hexadecimal: Hexadecimal
    }
    //respon frmt json <- objek
    res.json(response)
})

//endpoint 3 oktal
app.post("/convert/Oktal", (req,res)=>{
    //data
    let masuk = Number(req.body.masuk)
    let Biner = parseInt(masuk,8).toString(2)
    let Decimal = parseInt(8)
    let Hexadecimal = parseInt(masuk,8).toString(16)
    //objek response
    let response = {
        Oktal: masuk,
        Biner: Biner,
        Decimal: Decimal,
        Hexadecimal: Hexadecimal
    }
    // respon frmt json <- objek
    res.json(response)
})

//endpoint 4 Hexadecimal
app.post("/convert/Hexadecimal", (req,res)=>{
    //data
    let masuk = Number(req.body.masuk)
    let Biner = parseInt(masuk,16).toString(2)
    let Decimal = parseInt(16)
    let Oktal = parseInt(masuk,16).toString(8)
    //objek response
    let response = {
        Hexadecimal: masuk,
        Biner: Biner,
        Decimal: Decimal,
        Oktal: Oktal
    }
    // respon frmt json <- objek
    res.json(response)
})