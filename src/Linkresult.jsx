import { useState,useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import cogoToast from 'cogo-toast';

const Linkresult = ({ shorturl }) => {

  const [copyText, setCopyText] = useState(false)

  return (
    <div className='linkcontainer'>
      <div className='resultContainer'>
        <div>{shorturl}</div>
        <CopyToClipboard
          text={shorturl}
          onCopy={()=>setCopyText(true)}
        >
          <button className={copyText ? 'copied' : ''} onClick={() => cogoToast.success('Text is copied', {position:'top-center'})}>Copy to clipboard</button>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default Linkresult