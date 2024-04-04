import './Why.scss'

import secure from '../../assets/secure.png'
import fast from '../../assets/fast.png'
import chat from '../../assets/chat.png'


function Why() {
  return (
    <div className="why">
      <h2>Why BTC Markets?</h2>
      <div className="why__cards">
        <div data-aos="flip-left" data-aos-duration="1500">
          <img src={secure} alt={secure} />
          <b>Security</b>
          <p>Multiple layers of account security, 2FA, address whitelisting, Biometrics.</p>
        </div>
        <div data-aos="flip-up" data-aos-duration="1500">
          <img src={fast} alt={fast} />
          <b>Speed</b>
          <p>Fast trade executions with an industry leading uptime of 99.99%.</p>
        </div>
        <div data-aos="flip-right" data-aos-duration="1500">
          <img src={chat} alt={chat} />
          <b>Support</b>
          <p>100% Australian-based customer support, OTC desk and VIP Program.</p>
        </div>
      </div>
    </div>
  )
}

export default Why