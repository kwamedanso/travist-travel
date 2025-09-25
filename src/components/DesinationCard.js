import { AiFillStar } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function DesinationCard(props) {
    return (
        <>
            <div className="destination-card flex jc-space-btwn">
                <div>
                    <img className='destination-img' src={props.image} alt={props.location} />
                    <div >
                        <div className='flex jc-space-btwn'>
                            <span className='fs-100 padding-block-100'>{props.period}</span>
                            <span className='star-rating flex ai-center'><AiFillStar id='star' /> {props.starRating}</span>
                        </div>

                        <div>
                            <p className='fs-200 fw-semi-bold'>{props.description}</p>
                        </div>
                    </div>
                </div>
                <div className='flex jc-space-btwn padding-block-100'>
                    <p className='flex ai-center '>
                        <FaLocationDot className='location-icon' />
                        <span className='fs-100'>{props.location}</span>
                    </p>
                    <Link to={"/destination-details"} state={props.location} className='button discover-btn fs-200'>Discover</Link>
                </div>
            </div>
        </>
    )
}
