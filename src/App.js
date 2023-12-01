import TextField from '@mui/material/TextField';
import './App.css';
import Header from './components/Header'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react'
// import Fields from './components/Fields'
import DeleteIcon from '@mui/icons-material/Delete';
function App() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[data,setData]=useState([])


  const addData=()=>{
    setData([...data,{name,email}]);
    setName("")
    setEmail("")
  }

  const removeData=(index)=>{
    let arr=data
    arr.splice(index,1);
    setData([...arr])
  }
  return (
    <div className="App">
      <Header/>
      <div className="form">
        <Stack spacing={2} direction="row">  
          <TextField id="outlined-basic" value={name} onChange={(event)=>setName(event.target.value)} label="Name" variant="outlined" />
          <TextField id="outlined-basic" value={email} onChange={(event)=>setEmail(event.target.value)} label="Email" variant="outlined" />
          <Button variant="contained" onClick={addData}>
            <AddIcon/>
          </Button>
        </Stack>
      </div>
      <div className="data">
          <div className="dataval">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
        </div>
        {
          data.map((elements,index)=>{
            return(
              <div key={index} className="dataval">
                <h4>{elements.name}</h4>
                <h4>{elements.email}</h4>
                <Button onClick={()=>removeData(index)} variant="outlined" color="error">
                  <DeleteIcon/>
                </Button>
              </div>
            )
          })
        }
    </div>
  );
}

export default App;
