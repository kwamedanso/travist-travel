import { GiLindenLeaf } from 'react-icons/gi'
import { AiOutlineRobot, AiOutlineThunderbolt } from 'react-icons/ai'


const packages = [
    {
        id: 1,
        isPopular: false,
        title: 'Lite',
        description: 'Perfect to get started',
        inclusions: 'Lite includes:',
        features: ['Accomomodation', 'Ticket Reservation'],
        icon: <GiLindenLeaf />
    },
    {
        id: 2,
        isPopular: true,
        title: 'Pro',
        description: 'Best for professionals',
        inclusions: 'Everything in Lite, plus:',
        features: ['Accomomodation', 'Ticket Reservation', 'Visa Application'],
        icon: <AiOutlineRobot />
    },
    {
        id: 3,
        isPopular: false,
        title: 'Ultimate',
        description: 'Toolset for hard players',
        inclusions: 'Everything in Pro, plus:',
        features: ['Accomomodation', 'Ticket Reservation', 'Visa Application', 'Car Rental'],
        icon: <AiOutlineThunderbolt />
    }
]


export default packages;
// Try star rating for popularity