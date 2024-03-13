import React from 'react';
import Affiche from './component/Affiche';
import Modifie from './component/Modifie';
import Supprimer from './component/Supprimer';
import Copy from './component/Copy'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return ( 
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Affiche />} />
        <Route path='/modifie/:id' element={<Modifie/>}/>
        <Route path='/supprimer/:id' element={<Supprimer/>}/>
        <Route path='/copy' element={<Copy/>}/>



      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
