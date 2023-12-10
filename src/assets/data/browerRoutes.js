import Pricing from "../../pages/Pricing";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";

const browserRoutes = [
    {
        id: 1,
        path: '/',
        element: <Home />,
        title: 'Home'

    },
    {
        id: 2,
        path: '/about',
        element: <About />,
        title: 'About'

    },
    {
        id: 3,
        path: '/pricing',
        element: <Pricing />,
        title: 'Pricing'

    },
    {
        id: 4,
        path: '/contact',
        element: <Contact />,
        title: 'Contact'

    },
]

export default browserRoutes