import React from 'react';
import Affiche from './component/Affiche';
import Modifie from './component/Modifie';
import Supprimer from './component/Supprimer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return ( 
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Affiche />} />
        <Route path='/modifie/:id' element={<Modifie/>}/>
        <Route path='/supprimer/:id' element={<Supprimer/>}/>



      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
