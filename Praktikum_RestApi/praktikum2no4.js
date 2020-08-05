const express= require("express")
const bodyParser= require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.listen(8000, ()=>{
    console.log("Server run on port 8000")
})

app.post("/BMI", (req,res)=>{
    //ambil data
    let BeratBadan = Number(req.body.BeratBadan)
    let TinggiBadan = Number(req.body.TinggiBadan)
    //rumus
    let BMI = BeratBadan / Math.pow(TinggiBadan,2)
    let Indikator = null

    if (BMI < 18.5) {
        Indikator = "Kekurangan Berat Badan"
    } else if (BMI >= 18.5 && BMI <= 24.9){
        Indikator = "Normal(Ideal)"
    } else if (BMI >= 25.0 && BMI <= 29.9) {
        Indikator = "Kelebihan Berat Badan"
    } else {
        Indikator = "Kegemukan(Obesitas)"
    }
    //response
    let response = {
        BeratBadan: BeratBadan,
        TinggiBadan: TinggiBadan,
        BMI: BMI,
        Indikator: Indikator
    }
    //berikan response json yg brisi objek
    res.json(response)
})