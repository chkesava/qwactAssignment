import './index.css'
import Header from '../header'


const Home=()=>{
    return(
        <div className='body'>
            <Header/>
            <div className='middle-content'>
                <button className='middle-button'>Word of the day</button>
                <button className='middle-button'>Play Fun games</button>
                <div className='sun'></div>
            </div>
            <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
        </div>
    )
}

export default Home