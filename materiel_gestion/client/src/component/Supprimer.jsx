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
        axios.get('http://localhost:8081/selection/'+id)
        .then((res) => {
            console.log(res);
            setmaterielList(res.data);
        }
        )
    }, [])

        
    const supprimerMateriel = () => {
        axios.delete('http://localhost:8081/delete/'+id)
        .then((res)=>{
            console.log(res); 

            navigate('/');

    })

    }

  return (
    <div className="border border-danger border-2 shadow-sm rounded m-2  mt-5" id="supprimerModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header border border-bottom-danger p-2">
                    <div className="h3"> Supprimer d'un materiel</div>
                    <Link to={'/'} className="btn btn-primary ms-3">Retour</Link>
                </div>
                <div className="modal-body p-2">
                    <form action="">
                        <label for="Quantite" className="form-label h6"> N°Materiel </label>
                        <input type="number" name="Quantite" id="" value={id} className="form-control"/>


                        <button type="button" className="btn btn-danger float-end mt-3" onClick={supprimerMateriel}>Supprimer</button>

                    </form>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Supprimer