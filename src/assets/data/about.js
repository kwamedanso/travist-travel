import {
    FaGlobe, FaUsers, FaHeart,
    FaMapMarkerAlt, FaQuoteLeft, FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaPlay, FaTimes, FaAward, FaShieldAlt, FaClock, FaHandshake, FaStar, FaPlane
} from 'react-icons/fa';

const stats = [
    { icon: FaUsers, number: "10,000+", label: "Happy Travelers" },
    { icon: FaGlobe, number: "50+", label: "Countries Covered" },
    { icon: FaMapMarkerAlt, number: "500+", label: "Destinations" },
    { icon: FaStar, number: "4.9", label: "Average Rating" }
];

const values = [
    {
        icon: FaHeart,
        title: "Passion for Travel",
        description: "We believe travel has the power to transform lives, create lasting memories, and connect cultures across the world."
    },
    {
        icon: FaShieldAlt,
        title: "Safety First",
        description: "Your safety and security are our top priorities. We carefully vet all our partners and destinations."
    },
    {
        icon: FaAward,
        title: "Excellence",
        description: "We strive for excellence in every aspect of our service, from planning to execution of your perfect trip."
    },
    {
        icon: FaHandshake,
        title: "Trust & Reliability",
        description: "Built on trust, we ensure transparent pricing and reliable service that exceeds your expectations."
    }
];

const team = [
    {
        name: "Sarah Johnson",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=300&h=300&fit=crop&crop=face",
        bio: "Former travel journalist with 15 years of experience exploring the world's hidden gems.",
        social: { linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
        name: "Michael Chen",
        role: "Head of Operations",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
        bio: "Operations expert ensuring seamless travel experiences with attention to every detail.",
        social: { linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
        name: "Emily Rodriguez",
        role: "Travel Experience Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
        bio: "Creative mind behind our unique itineraries and unforgettable travel experiences.",
        social: { linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
        name: "David Thompson",
        role: "Customer Success Manager",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
        bio: "Dedicated to ensuring every traveler has the perfect journey from start to finish.",
        social: { linkedin: "#", twitter: "#", instagram: "#" }
    }
];

const testimonials = [
    {
        name: "Jennifer Walsh",
        location: "New York, USA",
        text: "Travyst made our honeymoon absolutely perfect. Every detail was carefully planned and executed flawlessly.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
    },
    {
        name: "Marco Silva",
        location: "São Paulo, Brazil",
        text: "The best travel experience I've ever had. Professional service and incredible destinations.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
        name: "Lisa Anderson",
        location: "London, UK",
        text: "Outstanding customer service and attention to detail. I'll definitely book with Travyst again.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face"
    }
];


export { stats, values, team, testimonials }; 