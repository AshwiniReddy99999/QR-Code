
import { useState } from 'react';
import './App.css';
import QRCode from 'qrcode'




function App() {
  const [url,setUrl]=useState("")
  const [qrcode,setqrcode]=useState("")
  const handlechange=(e)=>{
     setUrl(e.target.value)
  }
  const generateQr=()=>{
    QRCode.toDataURL(url, {
			width:400 ,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setqrcode(url)
		})
  }
  return (
    <div className="App">
      <div className='main'>
        <input type='text' placeholder='enter url'value={url} onChange={handlechange}></input>
        <button onClick={generateQr}>Generate QRCode</button>
      </div>
      <div>
        <img src={qrcode}></img>
        
      </div>
      <div><a href={qrcode} download="qrcode.jpg">Download</a></div>
    </div>
  );
}

export default App;
