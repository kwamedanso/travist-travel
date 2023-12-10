import { BiSelectMultiple } from 'react-icons/bi'
import { GiReceiveMoney } from 'react-icons/gi'
import { LiaPlaneDepartureSolid } from 'react-icons/lia'
// import { GiAirplaneDeparture } from 'react-icons/gi'

const steps = [
    {
        id: 1,
        title: 'Choose Package',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptas!',
        icon: <BiSelectMultiple />
    },
    {
        id: 2,
        title: 'Make Payment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptas!',
        icon: <GiReceiveMoney />
    },
    {
        id: 3,
        title: 'Reach Airpot on Selected Date',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptas!',
        icon: <LiaPlaneDepartureSolid />
    },
]


export default steps;