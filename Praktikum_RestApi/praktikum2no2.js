const express = require("express") //ambil library express js
const bodyParser = require("body-parser") // ambil  library body-parser
const cors = require("cors") // ambil  library cors
const app = express()

//----> pemanggilan fungsi <---- 
// penggunaan body-parser untuk ekstrak datarequest berformat JSON
app.use(bodyParser.json())

// untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

//penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//endpoint Celcius
app.get("/convert/celcius/:celcius", (req,res) => {
    //data yang ditampung untuk dikirim dan dikonversikan ke numeric
    let celcius = req.params.celcius //mengambil nilai suhu
    //rumus
    let R = (4/5) * celcius
    let K = celcius + 273
    let F = (9/5) * celcius + 32

    //objek berisi data untuk diresponse
    let response = {
        celcius: celcius,
        result : {
            Reamur: R,
            Kelvin: K,
            Farenheit: F
        }
    }
    //memberikan respon format json yang berisi objek
    res.json(response)
})

//endpoint Kelvin
app.post("/convert/kelvin/:kelvin", (req,res) => {
    //data yang ditampung untuk dikirim dan dikonversikan ke numeric
    let kelvin = req.params.kelvin //mengambil nilai suhu
    //rumus
    let C = kelvin - 273
    let R = 4/5*(kelvin-273)
    let F = 9/5*(kelvin-273)+32

    //objek berisi data untuk diresponse
    let response = {
        kelvin: kelvin,
        result : {
            Celcius: C,
            Reamur: R,
            Farenheit: F
        }
    }
    //memberikan respon format json yang berisi objek
    res.json(response)
})

//endpoint reamur
app.post("/convert/reamur/:reamur", (req,res) => {
    //data yang ditampung untuk dikirim dan dikonversikan ke numeric
    let reamur = req.params.reamur //mengambil nilai suhu
    //rumus
    let C = (5/4) * reamur
    let K = (5/4) * reamur + 273
    let F = (9/4) * reamur + 32

    //objek berisi data untuk diresponse
    let response = {
        reamur: reamur,
        result : {
            Celcius: C,
            Farenheit: F,
            Kelvin: K
        }
    }
    //memberikan respon format json yang berisi objek
    res.json(response)
})

//endpoint farenheit
app.post("/convert/Farenheit/:Farenheit", (req,res) => {
    //data yang ditampung untuk dikirim dan dikonversikan ke numeric
    let Farenheit = req.params.Farenheit //mengambil nilai suhu
    //rumus
    let C = 5/9 * (Farenheit-32) 
    let R = 4/9 * (Farenheit-32)
    let K = 5/9 * (Farenheit-32)+273

    //objek berisi data untuk diresponse
    let response = {
        Farenheit: Farenheit,
        result : {
            Celcius: C,
            Reamur: R,
            Kelvin: K
        }
    }
    //memberikan respon format json yang berisi objek
    res.json(response)
})

//server port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})