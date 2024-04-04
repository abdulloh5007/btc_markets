import './Trade.scss'
import tradeRight from '../../assets/tradeRight.png'

import exchange from '../../assets/exchange.png'
import candle from '../../assets/candle.png'
import track from '../../assets/track.png'
import mobile from '../../assets/mobile.png'

function Trade() {
  return (
    <div className='trade'>
      <div className="trade__two">
        <div className="trade__two__left" data-aos="fade-right">
          <h2>TRADE</h2>
          <h3>Buy, sell and trade crypto with confidence</h3>
          <div className="trade__two__left__cards">
            <div>
              <img src={exchange} alt={exchange} />
              <b>Simple buy & sell options</b>
              <p>Buy and sell cryptocurrency quickly and easily.</p>
            </div>
            <div>
              <img src={candle} alt={candle} />
              <b>Advanced trading</b>
              <p>Access advanced order types including limit, market, stop limit and dollar cost averaging.</p>
            </div>
            <div>
              <img src={track} alt={track} />
              <b>Portfolio tracking</b>
              <p>Track your total asset holdings, values and equity over time.</p>
            </div>
            <div>
              <img src={mobile} alt={candle} />
              <b>Mobile app</b>
              <p>Monitor markets, manage your portfolio, and trade crypto on the go.</p>
            </div>
          </div>
        </div>
        <div className="trade__two__right" data-aos="fade-left">
          <img src={tradeRight} alt={tradeRight} />
        </div>
      </div>
    </div>
  )
}

export default Trade