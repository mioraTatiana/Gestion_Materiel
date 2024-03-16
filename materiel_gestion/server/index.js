import express, { json } from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "materiel",
})


app.get("/", (req, res) => {
    const sql =" SELECT * FROM materiel";
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        return res.send(data );
    })
})

app.get("/select/somme", (req, res) => {
    const sql =" SELECT SUM(Quantite) as somme FROM materiel";
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        return res.send(data );
    })
})


app.get("/selection/:numMateriel", (req, res) => {
    const numMateriel = req.params.numMateriel;
    const sql =" SELECT * FROM materiel WHERE numMateriel =?";
    db.query(sql, [numMateriel],(err, data) => {
        if(err) return res.json(err)
        return res.send(data );
        // return res.json(data );

    })
})

app.get("/query/abime", (req, res) => {
    const sql =" SELECT SUM(Quantite) AS quantiteAbime FROM materiel WHERE Etat = 'abime';";
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        // return res.send(data );
        return res.json(data );

    })
})

app.get("/requette/mauvais", (req, res) => {
    const sql =" SELECT SUM(Quantite) AS quantiteMauvais FROM materiel WHERE Etat = 'mauvais'";
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
         return res.send(data );
        // return res.json(data );

    })
})




app.get("/selectBon/bon", (req, res) => {
    const sql =" SELECT SUM(Quantite) AS quantite FROM materiel WHERE Etat = 'bon'";
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        // return res.send(data );
        return res.json(data );

    })
})





app.post("/create", (req, res) => {
    const Designation = req.body.Designation;
    const Etat = req.body.Etat;
    const Quantite = req.body.Quantite;
    const sql ="INSERT INTO materiel (Designation, Etat, Quantite) VALUES (?,?,?)";

    
    db.query(sql,[Designation, Etat, Quantite], (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put("/update/modifier/:numMateriel", (req, res) => {
    const sql ="UPDATE `materiel` SET `Designation`=?,`Etat`=?,`Quantite`=? WHERE `numMateriel`=?";
    
        const Designation = req.body.Designation;
        const Etat = req.body.Etat;
        const Quantite = req.body.Quantite;
        const numMateriel = req.params.numMateriel;
    
    

    db.query(sql,[Designation, Etat, Quantite, numMateriel], (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete('/delete/:numMateriel', (req, res) =>{
    const sql = "DELETE FROM `materiel` WHERE numMateriel=?"
    const numMateriel = req.params.numMateriel;
    db.query(sql, [numMateriel], (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)

    })
})


app.listen(8081, ()=>{
    console.log("Votre serveur est prêt");
})