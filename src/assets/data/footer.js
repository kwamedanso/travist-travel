import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'


const footer = [
    {
        id: 1,
        title: 'About',
        links: [
            { label: 'How it Works', labelpath: '#how-it-works' },
            { label: 'About Us', labelpath: '/about' }
        ]
    },
    {
        id: 2,
        title: 'Company',
        links: [
            { label: 'Pricing', labelpath: '/pricing' },
            { label: 'Terms & Conditions', labelpath: '#' },
            { label: 'Privacy Policy', labelpath: '#' },
            { label: 'Home', labelpath: '/' }
        ]
    },
    {
        id: 3,
        title: 'Contact Us',
        links: [{ label: 'travisttravel@gmail.com', labelpath: 'mailto:travisttravel@gmail.com' }, { label: '+233 20 800 1363', labelpath: 'tel:+233208001363' }],
        socials: [
            {
                id: 1,
                socialIcon: <AiFillInstagram />,
                socialPath: 'https://instagram.com/travisttravel?igshid=MmIzYWVlNDQ5Yg=='
            },
            {
                id: 2,
                socialIcon: <FaFacebookF />,
                socialPath: '#'
            },
            {
                id: 3,
                socialIcon: <AiOutlineTwitter />,
                socialPath: 'https://twitter.com/travisttravel?s=11&t=cVS8Bfcxpu54KxmMIfFH7Q'

            }

        ]
    }
]

export default footer;