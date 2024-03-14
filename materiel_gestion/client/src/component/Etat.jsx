import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../etat.css'
import '../assets/bootstrap.min.css'

function Etat() {
    const [Bon, setBon] = useState([]);
    const [Mauvais, setMauvais] = useState([]);
    const [Abime, setAbime] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8081/selectBon/bon', )
        .then((res)=>{
            setBon(res.data);
            console.log(res)
        })
        .catch(err => console.log(err));

        axios.get('http://localhost:8081/requette/mauvais', )
        .then((res)=>{
            setMauvais(res.data);
            console.log(res)
        })
        .catch(err => console.log(err));

        axios.get('http://localhost:8081/query/abime', )
        .then((res)=>{
            setAbime(res.data);
            console.log(res)
        })
        .catch(err => console.log(err));

    })
  return (
    <div id="tableau" className="border border-light-subtle border-2 shadow-lg rounded m-2 p-2 mt-3">
        <h2 className='h2'>Etats des materiels:</h2>
        <div>
            <table className='table'>
                <thead>
                    <th className= 'h4'>Bon</th>
                </thead>
                <tbody>
                    {Bon.map((etat1, index) =>{
                        return <tr key={index}>
                        <td className= 'h6'>{etat1.quantite}</td>
                    </tr>
                    })}
                </tbody>
                
            </table>
        </div>

        <div>
            <table className='table'>
                <thead>
                    <th className= 'h4'>Mauvais</th>
                </thead>
                <tbody>
                    {Mauvais.map((etat1, index) =>{
                    return  <tr key={index}>
                    <td className= 'h6'>{etat1.quantiteMauvais}</td>
                </tr>
                    })}
                </tbody>
                
            </table>
        </div>

        <div>
            <table className='table'>
                <thead>
                    <th className= 'h4'>Abime</th>
                </thead>
                <tbody>
                    {Abime.map((etat1, index) =>{
                        return <tr key={index}>
                        <td className= 'h6'>{etat1.quantiteAbime}</td>
                    </tr>
                    })}
                </tbody>
                
            </table>
        </div>
    </div>
  )
}

export default Etat