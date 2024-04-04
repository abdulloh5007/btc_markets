import './Header.scss'
import Tel from '../../assets/tel.png'
import "../../App.scss"
import { Button, Rating } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';

function Header() {
  const [rate, setRate] = useState(4.5)
  return (
    <div className="header">
      <div className="left">
        <h1>Buy, sell and trade crypto today</h1>
        <b>Trade with confidence and build your future with Australia’s fastest crypto exchange.</b>
        <div className="btnGr">
          <Button variant="outlined" className='btn login'>Get started</Button>
          <Button variant='contained' className='btn signup'>View exchange</Button>
        </div>
        <div className="iconGr">
          <GoogleIcon /> 
          <Rating style={{marginLeft: 8}} name="half-rating-read" readOnly onChange={(e, i) => setRate(i)} defaultValue={4.5} precision={0.5} /> 
          <b>{rate}</b>
        </div>
      </div>
      <div className="right">
        <img src={Tel} alt="Telephone" />
      </div>
    </div>
  )
}

export default Header