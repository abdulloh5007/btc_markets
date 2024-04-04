import './Wallet.scss'

import wallet from '../../assets/wallet.png'
import upload from '../../assets/upload.png'
import walletApp from '../../assets/walletApp.png'
import location from '../../assets/location.png'
import secureApp from '../../assets/secureApp.png'

function Wallet() {
  return (
    <div className="wallet">
      <div className="wallet__left">
        <img src={wallet} alt={wallet} />
      </div>
      <div className="wallet__right">
        <h3>Wallet</h3>
        <b>Simple and secure wallet services</b>
        <div className="wallet__right__cards">
          <div>
            <img src={secureApp} alt={secureApp} />
            <b>Secure asset storage</b>
            <p>We use multi-signature technology to securely store your assets.</p>
          </div>
          <div>
            <img src={location} alt={location} />
            <b>Assets held in Australia</b>
            <p>100% Australian-based custody of your assets.</p>
          </div>
          <div>
            <img src={walletApp} alt={walletApp} />
            <b>Multi-coin wallet</b>
            <p>Store multiple assets simultaneously in one wallet.</p>
          </div>
          <div>
            <img src={upload} alt={upload} />
            <b>Fast funding</b>
            <p>Credit your wallet with AUD in seconds using Osko PayID.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet