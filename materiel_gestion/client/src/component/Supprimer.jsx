import axios from 'axios';
import React, {useEffect, useState}from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../assets/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';



function Supprimer() {
    const {id} = useParams();
    const [materielList, setmaterielList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/'+id)
        .then((res) => {
            console.log(res);
            setmaterielList(res.data);
        }
        )
    }, [])

        
    const supprimerMateriel = () => {
        axios.delete('http://localhost:8081/'+id)
        .then((res)=>{
            console.log(res); 

            navigate('/');

    })

    }

  return (
    <div class="border border-light-subtle border-2 shadow-sm rounded m-2 p-2 mt-5" id="supprimerModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header border-bottom-2 border-light">
                    <div class="h3"> Supprimer d'un materiel</div>
                    <Link to={'/'} className="btn btn-primary ms-3">Retour</Link>
                </div>
                <div class="modal-body">
                    <form action="">
                        <label for="Quantite" class="form-label h6"> N°Materiel </label>
                        <input type="number" name="Quantite" id="" class="form-control"/>


                        <label for="Designation" class="form-label h6"> Designation </label>
                        <input type="text" name="Designation" id="" class="form-control mb-1"/>

                        <button type="button" class="btn btn-danger float-end mt-3" onClick={() => supprimerMateriel}>Supprimer</button>

                    </form>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Supprimer