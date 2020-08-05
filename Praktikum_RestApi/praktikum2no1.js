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

//server port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

// --> endpoint pertama bangun ruang balok method post
app.post("/Balok", (req,res) => {
    let panjang = Number(req.body.panjang) //mengambil niali panjang
    let lebar = Number(req.body.lebar) //mengambil nilai lebar
    let tinggi = Number(req.body.tinggi) //mengambil nilai tinggi

    //rumus
    let luaspermukaan = 2 * ((panjang*lebar) + (panjang*tinggi) + (lebar*tinggi))
    let volume = panjang * lebar * tinggi

    // objek data yang berisi yang akan dijadika respon
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luaspermukaan: luaspermukaan,
        volume: volume
    }
    // untuk membuat response dgn format json yang diisi objeknya
    res.json(response)
})

// --> endpoint 2 kubus
app.post("/Kubus", (req,res) => {
    let psisi = Number(req.body.psisi) //ambil nilai sisi

    //rumus
    let luaspermukaan = 6 * (psisi * psisi)
    let volume = psisi * psisi * psisi

    //objek data response
    let response = {
        sisi: sisi,
        luaspermukaan: luaspermukaan,
        volume: volume
    }
    //membuat response dgn json yang diisi di objeknya
    res.json(response)
})

// --> endpoint 3
app.post("/Tabung", (req,res) => {
    let jari = Number(req.body.jari) // ambil nilai jari jari
    let tinggi = Number(req.body.tinggi) // ambil nilai tinggi
    //rumus
    let luaspermukaan = 2 * Math.PI * jari (jari + tinggi)
    let volume = Math.PI * Math.pow(jari,2) * tinggi

    //objek yang brisi data untuk diresponse
    let response = {
        jari: jari,
        tinggi: tinggi,
        luaspermukaan: luaspermukaan,
        volume: volume
    }
    // memebuat response dgn json yang diisi objeknya
    res.json(response)
})

// --> endpoint 4
app.post("/Bola", (req,res) => {
    let jari = Number(req.body.jari) //mengambil jari jari

    //rumus
    let luaspermukaan = 4 * Math.PI * (Math.pow(jari,2))
    let volume = 4 / 3 * Math.PI * (Math.pow(jari,3))
    
    //objek data response
    let response = {
        jari: jari,
        luaspermukaan: luaspermukaan,
        volume: volume
    }
    //membuat response dgn jsonn yang diisi di objeknya
    res.json(response)
})

