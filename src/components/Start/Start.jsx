import './Start.scss'

import contact from '../../assets/contact.png'
import line from '../../assets/line.png'
import walletApp from '../../assets/walletApp.png'
import { Button, Rating } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';

function Start() {
    const [rate, setRate] = useState(4.5)
    return (
        <div className='start'>
            <div className="h2">
                <h2>Start trading in 3 easy steps</h2>
            </div>
            <div className="start__cards">
                <div data-aos="fade-up">
                    <span><img src={contact} alt={contact} /></span>
                    <b>1. Create</b>
                    <p>Sign up and verify your free account.</p>
                </div>
                <div data-aos="fade-up">
                    <span><img src={walletApp} alt={walletApp} /></span>
                    <b>2. Deposit</b>
                    <p>Add AUD or crypto to your wallet using our secure methods.</p>
                </div>
                <div data-aos="fade-up">
                    <span><img src={line} alt={line} /></span>
                    <b>3. Trade</b>
                    <p>You’re all set. Buy, sell and trade crypto immediately.</p>
                </div>
            </div>
            <div className="btnGr">
                <Button variant="outlined" className='btn signup'>Get started</Button>
            </div>
            <div className="iconGr">
                <GoogleIcon />
                <Rating style={{ marginLeft: 8 }} name="half-rating-read" readOnly onChange={(e, i) => setRate(i)} defaultValue={4.5} precision={0.5} />
                <b>{rate}</b>
            </div>
        </div>
    )
}

export default Start