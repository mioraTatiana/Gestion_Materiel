import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/bootstrap.min.css';
import axios from 'axios';
import '../index.css'


function Affiche() {
    const [Designation, setDesignation] = useState('');
    const [Etat, setEtat] = useState('');
    const [Quantite, setQuantite] = useState(0);
    const [materielList, setmaterielList] = useState([]);

    const navigate = useNavigate();
   
    const ajouterMateriel = () =>{
       
        axios.post('http://localhost:8081/create', {Designation: Designation, Etat:Etat, Quantite:Quantite})
            .then((res)=>{
            console.log(res); 

            navigate('/');
            window.location.reload();
            })
    }

    

        
    useEffect(()=>{
        axios.get('http://localhost:8081/', )
        .then((res)=>{
            setmaterielList(res.data);
            console.log(res)
        })
        .catch(err => console.log(err));


    },[])

      return (
    

    <div className="affiche">
        <div className="modal" id="ajoutModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="h3"> Ajout d'un materiel</div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <label for="Designation" className="form-label h6"> Designation </label>
                            <input type="text" name="Designation" id="" className="form-control mb-1" onChange={(event) =>{setDesignation(event.target.value)}}/>

                            <label for="Etat" className="form-label h6 "> Etat </label>
                            <input type="text" name="Etat" className="form-control" placeholder='bon ou mauvais ou abime' id="" onChange={(event) =>{setEtat(event.target.value)}}/>

                            <label for="Quantite" className="form-label h6"> Quantité </label>
                            <input type="number" name="Quantite" id="" className="form-control" onChange={(event) =>{setQuantite(event.target.value)}}/>

                            <button type="button" className="btn btn-primary float-end mt-3" onClick={ajouterMateriel}>Ajouter</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div id="Global" className=" border border-1 border-light-subtle rounded shadow-lg p-3 mt-5">
        <div className="h1 text-decoration-underline">Gestion des materiels</div>
        <Link to={'/Etat'} className='btn btn-primary btn-lg m-2 float-start'>Etat</Link>

        <button type="button" className="btn btn-primary btn-lg float-end m-2" data-bs-toggle="modal" data-bs-target="#ajoutModal" >Ajouter</button>
        <div className="">
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">N°Materiel</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Etat</th>
                        <th scope="col">Quantité</th>
                        <th scope="col"className="center" >Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider" >
                    {materielList.map((materiel, index) =>{
                        return (                    <tr key={index}>
                            <th scope="row">{materiel.numMateriel}</th>
                            <td>{materiel.Designation}</td>
                            <td>{materiel.Etat}</td>
                            <td>{materiel.Quantite}</td>
                            <td>
                                <Link to={ `/modifie/${materiel.numMateriel}`} className="btn btn-lg btn-success me-1">Modifier</Link>
                                <Link to={`/Supprimer/${materiel.numMateriel}`} className="btn btn-lg btn-danger me-1">Supprimer</Link>
                            </td>
                        </tr>
                        )

                    })}



                </tbody>
            </table>
        </div>

        </div>

        



    </div>

    

    


    
  )
}

export default Affiche

