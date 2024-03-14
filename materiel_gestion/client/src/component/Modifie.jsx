import axios from 'axios';
import React, {useEffect, useState}from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../assets/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';




function Modifie() {
    const [Designation, setDesignation] = useState('');
    const [Etat, setEtat] = useState('');
    const [Quantite, setQuantite] = useState(0);
    const [materielList, setmaterielList] = useState([]); 
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/selection/'+id)
        .then((res) => {
            console.log(res);
            setmaterielList(res.data);
            
        }
        )
    },[])

  const modifierMateriel = () => {
    axios.put('http://localhost:8081/update/modifier/'+id, {Designation: Designation, Etat:Etat, Quantite:Quantite})
    .then((res)=>{
    console.log(res); 

    navigate('/');
    })

  }

  return (
  <div className=" border border-success border-2 shadow-sm rounded m-2 mt-3" id="modifierModal">
    
            <div className="dialog">
            <div className="">
                <div className="modal-header border-bottom border-2 border-success p-2">
                    <div className="h3"> Modifier d'un materiel</div>
                    <Link to={'/'} className="btn btn-primary ms-3">Retour</Link>
                </div>              
                <div className="body p-2" >
                    <form action="" onSubmit={modifierMateriel}>
      
                        <label for="Designation" className="form-label h6"> Designation </label>
                        <input type="text" name="Designation" id="" value={materielList.Designation} className="form-control mb-1" onChange={(event) =>{setDesignation(event.target.value)}}/>
    
                        <label for="Etat" className="form-label h6 "> Etat </label>
                        <input type="text" name="Etat" className='form-control' value={materielList.Etat} placeholder='bon ou mauvais ou abime' id="" onChange={(event) =>{setEtat(event.target.value)}}/>
                        
                        <label for="Quantite" className="form-label h6"> Quantité </label>
                        <input type="number" name="Quantite" id="" value={materielList.Quantite}  className="form-control" onChange={(event) =>{setQuantite(event.target.value)}}/>
                        
                        </form>
                </div>
  
                <div className="footer border border-success">
                    <button type="submit" className="btn btn-success float-end mt-3" onClick={modifierMateriel}>Modifier</button>
                </div>
            </div>
        </div>
    
    
</div>

  )
}

export default Modifie