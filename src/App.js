
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

  // useEffect(() => {
  //   if (data > 10 || data > -10 ){ 
  //     setdata(0)
  //   }
  // }, [])

  // function checkData () {
  //   if (data > 9 || data < -10 ){ 
  //         setdata(0)
  //       }
  // }

  function onhandleClick (action) {
    if (action > 9 || action < -10 ){ 
      setdata(0)
    }
    else {
      setdata(action)
    }
  }

  return (
    <div>
      <Header title="Daily Code" />
      <div className="App">
        {bootstrap}
      </div>
      <div class="card witj position-relative">
        <div class="card-body position-relative ">
          <h5 class="card-title" style={{textAlign: 'center'}}>Score : {data}</h5>
          <button type="button" class="btn btn-outline-primary cardm" onClick={() => onhandleClick(data + 1)}>+1</button>
          <button type="button" class="btn btn-outline-danger cardm" onClick={() => onhandleClick(data - 1)}>-1</button>
          <button type="button" class="btn btn-outline-warning cardm" onClick={() => onhandleClick(0)}>0</button>
        </div>
      </div>
    </div>
  );
}

export default App;
