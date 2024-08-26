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
    const { data } = await axios.post('https://shrtlnk.dev/api/v2/link', { url: inputData }, {
      headers: {
        'api-key': 'h8QGhEWOVBmuD4ndBD9wi9D1x7utnNhirZDaBtY7zYfxx',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    setLoading(false);
    Setshorturl(data?.shrtlnk);
  }


  return (
    <div className='maincontainer'>
      <Urlinput setInputData={setInputData} handleShortUrl={handleShortUrl} loading={loading} />
      <BackgroundColor />
      <Linkresult shorturl={shorturl} />
    </div>
  )
}

export default App