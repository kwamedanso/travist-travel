import React from 'react'
import packages from '../../assets/data/packages'
import { BsCheckAll } from 'react-icons/bs'
import features from '../../assets/data/features';



export default function CompareFeatures() {
    let firstNum = packages.at(0).features.length;
    let secondNum = packages[1].features.length;
    let thirtNum = packages[2].features.length;

    let featuresHeading = ['Accomomodation', 'Ticket Reservation', 'Visa Application', 'Car Rental'];



    return (
        <div className='compare-features'>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        {featuresHeading.map(heading => <th key={heading} className='table-heading'>{heading}</th>)}
                    </tr>

                    {features.map(item => {
                        return (
                            <tr key={item.title}>
                                {/* <tc>{item.title}</tc> */}
                                <th>{item.title}</th>
                                <td>{item.accomodation && <BsCheckAll />}</td>
                                <td>{item.ticket && <BsCheckAll />}</td>
                                <td>{item.visa && <BsCheckAll />}</td>
                                <td>{item.carRental && <BsCheckAll />}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
