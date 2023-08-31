import React from 'react'

const Urlinput = ({ setInputData, handleShortUrl, loading  }) => {
  return (
    <div className='urlcontainer'>
      <h3>Url <span>Shorter</span></h3>
      <div>
        <input type="text" placeholder='Paster Url here' onChange={(e)=> setInputData(e.target.value)} />
        <button onClick={handleShortUrl}>{!loading ? 'ShortUrl': 'loading...'}</button>
      </div>
    </div>
  )
}

export default Urlinput