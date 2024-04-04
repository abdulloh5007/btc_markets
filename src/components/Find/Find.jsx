import './Find.scss'

import find from '../../assets/find.png'

function Find() {
    return (
        <div className='find'>
            <h2>Find out the latest crypto news</h2>
            <div className="find__cards">
                <div className="find__cards__card" data-aos="fade-down-right">
                    <img src={find} alt={find} />
                    <div className="inner">
                        <div>
                            <b>Newsletter</b>
                            <p>Jan 19th 2023</p>
                        </div>
                        <p className='p'>This Week in Crypto: 19th January 2023</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="find__cards__card" data-aos="fade-down">
                    <img src={find} alt={find} />
                    <div className="inner">
                        <div>
                            <b>Newsletter</b>
                            <p>Jan 19th 2023</p>
                        </div>
                        <p className='p'>This Week in Crypto: 12th January 2023</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="find__cards__card" data-aos="fade-down-left">
                    <img src={find} alt={find} />
                    <div className="inner">
                        <div>
                            <b>Informational</b>
                            <p>Dec 27th 2022</p>
                        </div>
                        <p className='p'>BTC Markets Brand Refresh</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Find