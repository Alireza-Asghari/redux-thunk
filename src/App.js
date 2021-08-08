import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { actionCreators } from './state/action-creators/export.actions';
import axios from 'axios'
import { LoopCircleLoading } from 'react-loadingg';

function App() {

 const account = useSelector((state) => state.account)
 const fetch = useSelector((state) => state.fetch)
 const dispatch = useDispatch()
 const [loading,setLoading] = React.useState(false);

const {depositMoney,withdrawMoney,fetchData} = bindActionCreators(actionCreators, dispatch)

const fetchProducts =  () => {
  setLoading(true)
   axios
  .get("http://localhost:1337/books")
  .then(response=>{
    fetchData(response.data)
    setLoading(false)
  }   
    )    
  };
  console.log(account);
  console.log(fetch)

useEffect(() => {
  fetchProducts();
}, []);
if(loading) return (<div><LoopCircleLoading size='large' /></div>)
  return (
    <div className="App">
      <div>{account}</div>
     <button onClick={()=> depositMoney(100)}>deposit</button>
     <button onClick={()=> withdrawMoney(100)}>deposit</button>
     <br/>
     <br/>
     <br/>
     <br/>
    <div>
    
    </div>
      {
        fetch.map((el,index)=>
              {
                return(
                  <div key={index}>
                    {el.title}
                  </div>
                )
              }
          )
      }
    </div>
  );
}

export default App;
