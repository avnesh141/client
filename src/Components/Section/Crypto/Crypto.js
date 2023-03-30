import React, { useState } from 'react'
import './Crypto.css'
import axios from 'axios'
import { useEffect } from 'react'
function Crypto() {

  const [coinList,setCoinList] = useState([]);
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/list').then((res)=>{setCoinList(res.data);console.log(res.data);})
  },[])
  return (
    <div>
        
    </div>
  )
}

export default Crypto
