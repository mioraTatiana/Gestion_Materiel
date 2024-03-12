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
        axios.get('http://localhost:8081/'+id)
        .then((res) => {
            console.log(res);
            setmaterielList(res.data);
        }
        )
    },[])

  const modifierMateriel = () => {
    axios.put('http://localhost:8081/'+id, {Designation: Designation, Etat:Etat, Quantite:Quantite})
    .then((res)=>{
    console.log(res); 

    navigate('/');
    })

  }

  return (
  <div className=" border border-light-subtle border-2 shadow-sm rounded m-2 p-2 mt-3" id="modifierModal">
    
            <div className="dialog">
            <div className="">
                <div className="modal-header border-bottom border-2 border-light">
                    <div className="h3"> Modifier d'un materiel</div>
                    <Link to={'/'} className="btn btn-primary ms-3">Retour</Link>
                </div>              
                <div className="body " >
                    <form action="">
      
                        <label for="Designation" className="form-label h6"> Designation </label>
                        <input type="text" name="Designation" id="" className="form-control mb-1" onChange={(event) =>{setDesignation(event.target.value)}}/>
    
                        <label for="Etat" className="form-label h6 "> Etat </label>
                        <select name="Etat" id="" className="form-select mb-1" onChange={(event) =>{setEtat(event.target.value)}}>
                            {/* if ({materiel.Etat}== 'bon') {
                                <option value="bon" selected>bon</option>
    
                            } else if ({materiel.Etat}== 'mauvais') {
                                <option value="mauvais" selected>mauvais</option>
    
                            }else{
                                <option value="abime" selected>abime</option>
    
                            } */}
     
                            <option value="bon">bon</option>
                            <option value="mauvais">mauvais</option>
                            <option value="abime" >abime</option>
                        </select>
    
                        <label for="Quantite" className="form-label h6"> Quantité </label>
                        <input type="number" name="Quantite" id=""  className="form-control" onChange={(event) =>{setQuantite(event.target.value)}}/>
                        </form>
                </div>
  
                <div className="footer">
                    <button type="button" className="btn btn-success float-end mt-3" onClick={() => modifierMateriel}>Modifier</button>
    
                
    
                </div>
            </div>
        </div>
    
    
</div>

  )
}

export default Modifie