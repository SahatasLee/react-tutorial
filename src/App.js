
import { useState } from 'react';
import './App.css';
import Header from './component/Header';

function App() {

  const bootstrap = (
    <div class="alert alert-primary" role="alert">
      Welcome to React World
    </div>
  )

  const [data, setdata] = useState(0);



  return (
    <div>
      <Header title="Daily Code" />
      <div className="App">
        {bootstrap}
      </div>
      <div class="card witj position-relative">
        <div class="card-body position-relative ">
          <h5 class="card-title" style={{textAlign: 'center'}}>Score : {data}</h5>
          <button type="button" class="btn btn-outline-primary cardm" onClick={() => setdata(data + 1)}>+1</button>
          <button type="button" class="btn btn-outline-danger cardm" onClick={() => setdata(data - 1)}>-1</button>
          <button type="button" class="btn btn-outline-warning cardm" onClick={() => setdata(0)}>0</button>
        </div>
      </div>
    </div>
  );
}

export default App;
