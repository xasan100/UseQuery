import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import People from './Components/People';
import Planets from './Components/Planets';

function App() {

  const [page, setPage] = useState('planets')

  return (
    <div className="center">
      <Navbar setPage={setPage} />
      {page === 'planets' ? <Planets /> : <People />}
    </div>
  );
}

export default App;