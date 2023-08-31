import React, { useState } from 'react'
import Urlinput from './Urlinput';
import BackgroundColor from './backgroundColor';
import Linkresult from './Linkresult';
import axios from 'axios';

const App = () => {

  const [shorturl, Setshorturl] = useState("");
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShortUrl = async () => {
    setLoading(true);
    const { data } = await axios.post(`https://api.shrtco.de/v2/shorten?url=${inputData}`);
    setLoading(false);
    Setshorturl(data.result.full_short_link);
  }


  return (
    <div className='maincontainer'>
      <Urlinput setInputData={setInputData} handleShortUrl={handleShortUrl} loading={ loading } />
      <BackgroundColor />
      <Linkresult shorturl={shorturl}  />
    </div>
  )
}

export default App