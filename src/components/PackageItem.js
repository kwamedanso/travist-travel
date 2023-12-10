import { BsCheckAll } from 'react-icons/bs'
export default function PackageItem(props) {
    return (
        <div className='package-item padding-block-100'>
            <div className="package-item-content">
                {props.isPopular && <div className="popularity">
                    <p className='popularity-item fw-bold'>POPULAR</p>
                </div>}


                <div className="package-heading padding-block-200">
                    <div className="package-heading-title">
                        <div className='flex'>
                            {props.icon}
                            <h3 className='fs-300 fw-bold'>{props.title}</h3>
                        </div>
                        <p className='fs-100 fs-op-200 padding-block-1'>{props.description}</p>
                    </div>
                </div>

                <div className="package-content padding-block-1">
                    <h4 className='fs-100 fw-bold'>{props.inclusions}</h4>
                    <ul className='package-inclusions'>
                        {props.features.map(item => <li className='fs-100 fs-op-200 padding-block-1 flex ai-center' key={item}><BsCheckAll />{item}</li>)}
                    </ul>
                </div>

            </div>

            <button className='button pkg-button'>Contact Us</button>

        </div>
    )
}
