import { useState, useEffect } from 'react';
import {
    FaStar, FaMapMarkerAlt, FaClock, FaUsers, FaCalendarAlt, FaChevronDown, FaChevronUp, FaCheck, FaHeart, FaRegHeart, FaShare, FaCamera, FaTimes
} from 'react-icons/fa';
import styles from "../styles/destinationDetails.module.css"
import { useLocation } from 'react-router-dom';



const DestinationDetails = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const location = useLocation()

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const destination = {
        name: "Santorini, Greece",
        location: "Cyclades Islands, Greece",
        rating: 4.8,
        reviewCount: 1247,
        duration: "7 Days / 6 Nights",
        groupSize: "2-12 People",
        price: 1299,
        originalPrice: 1599,
        discount: "19% OFF",
        mainImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1601581875309-c3539aa0031e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560181088-7a2e-5ac6-22bd-1c8a0b5a8f5f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=800&h=600&fit=crop"
        ],
        description: "Experience the magic of Santorini with its iconic blue-domed churches, stunning sunsets, and crystal-clear waters. This carefully curated tour takes you through the most beautiful spots of this Greek island paradise.",
        highlights: [
            "Watch breathtaking sunsets in Oia",
            "Explore traditional villages of Fira and Imerovigli",
            "Visit ancient Akrotiri archaeological site",
            "Wine tasting at local vineyards",
            "Relax at Red and Black beaches",
            "Traditional Greek cooking class"
        ],
        included: [
            "6 nights accommodation in 4-star hotel",
            "Daily breakfast and 3 dinners",
            "All transfers and transportation",
            "Professional English-speaking guide",
            "Entrance fees to attractions",
            "Wine tasting experience",
            "Cooking class",
            "Airport transfers"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Fira Exploration",
                activities: [
                    { time: "10:00 AM", activity: "Airport pickup and hotel check-in" },
                    { time: "2:00 PM", activity: "Walking tour of Fira town" },
                    { time: "4:00 PM", activity: "Cable car ride to old port" },
                    { time: "7:00 PM", activity: "Welcome dinner with sea view" }
                ]
            },
            {
                day: 2,
                title: "Oia Village & Sunset",
                activities: [
                    { time: "9:00 AM", activity: "Breakfast at hotel" },
                    { time: "10:30 AM", activity: "Bus transfer to Oia village" },
                    { time: "11:00 AM", activity: "Explore Oia's narrow streets" },
                    { time: "1:00 PM", activity: "Lunch at traditional taverna" },
                    { time: "3:00 PM", activity: "Visit Maritime Museum" },
                    { time: "6:30 PM", activity: "Famous Oia sunset viewing" }
                ]
            },
            {
                day: 3,
                title: "Archaeological Sites & Wine",
                activities: [
                    { time: "9:00 AM", activity: "Visit Akrotiri excavation site" },
                    { time: "11:30 AM", activity: "Red Beach exploration" },
                    { time: "1:00 PM", activity: "Seaside lunch" },
                    { time: "3:00 PM", activity: "Wine tasting at Santo Wines" },
                    { time: "5:00 PM", activity: "Vineyard tour and dinner" }
                ]
            },
            {
                day: 4,
                title: "Volcanic Islands Tour",
                activities: [
                    { time: "8:00 AM", activity: "Boat departure to Nea Kameni" },
                    { time: "9:30 AM", activity: "Volcano hiking and exploration" },
                    { time: "12:00 PM", activity: "Hot springs swimming at Palea Kameni" },
                    { time: "2:00 PM", activity: "Lunch on Thirassia island" },
                    { time: "4:00 PM", activity: "Return to Santorini" }
                ]
            },
            {
                day: 5,
                title: "Beaches & Relaxation",
                activities: [
                    { time: "10:00 AM", activity: "Visit Perissa Black Beach" },
                    { time: "12:00 PM", activity: "Beach activities and swimming" },
                    { time: "1:30 PM", activity: "Beachside lunch" },
                    { time: "4:00 PM", activity: "Ancient Thera archaeological site" },
                    { time: "7:00 PM", activity: "Free time for shopping" }
                ]
            },
            {
                day: 6,
                title: "Cooking Class & Culture",
                activities: [
                    { time: "10:00 AM", activity: "Traditional Greek cooking class" },
                    { time: "12:30 PM", activity: "Enjoy the meal you prepared" },
                    { time: "3:00 PM", activity: "Visit local art galleries" },
                    { time: "5:00 PM", activity: "Explore Megalochori village" },
                    { time: "8:00 PM", activity: "Farewell dinner with live music" }
                ]
            },
            {
                day: 7,
                title: "Departure",
                activities: [
                    { time: "10:00 AM", activity: "Hotel check-out" },
                    { time: "11:00 AM", activity: "Last-minute souvenir shopping" },
                    { time: "1:00 PM", activity: "Airport transfer" },
                    { time: "3:00 PM", activity: "Departure" }
                ]
            }
        ]
    };

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
    };

    const openGallery = (index) => {
        setSelectedImage(index);
        setIsGalleryOpen(true);
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % destination.gallery.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + destination.gallery.length) % destination.gallery.length);
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.breadcrumb}>
                        <span>Home</span> / <span>Destinations</span> / <span>Greece</span> / <span>Santorini</span>
                    </div>

                    <div className={styles.titleSection}>
                        <div className={styles.leftTitle}>
                            <h1>{location.state}</h1>
                            <div className={styles.locationInfo}>
                                <FaMapMarkerAlt />
                                <span>{destination.location}</span>
                            </div>
                            <div className={styles.rating}>
                                <div className={styles.stars}>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < Math.floor(destination.rating) ? styles.starFilled : styles.starEmpty} />
                                    ))}
                                    <span>{destination.rating}</span>
                                </div>
                                <span className={styles.reviews}>({destination.reviewCount} reviews)</span>
                            </div>
                        </div>

                        <div className={styles.rightTitle}>
                            <div className={styles.priceSection}>
                                <span className={styles.discount}>{destination.discount}</span>
                                <div className={styles.prices}>
                                    <span className={styles.originalPrice}>${destination.originalPrice}</span>
                                    <span className={styles.currentPrice}>${destination.price}</span>
                                </div>
                                <span className={styles.perPerson}>per person</span>
                            </div>
                            <div className={styles.actionButtons}>
                                <button
                                    className={styles.favoriteBtn}
                                    onClick={() => setIsFavorite(!isFavorite)}
                                >
                                    {isFavorite ? <FaHeart /> : <FaRegHeart />}
                                </button>
                                <button className={styles.shareBtn}>
                                    <FaShare />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Gallery */}
            <div className={styles.gallery}>
                <div className={styles.mainImage}>
                    <img
                        src={destination.gallery[selectedImage]}
                        alt={destination.name}
                        onClick={() => openGallery(selectedImage)}
                    />
                    <button className={styles.galleryBtn} onClick={() => openGallery(0)}>
                        <FaCamera /> View Gallery
                    </button>
                </div>
                <div className={styles.thumbnails}>
                    {destination.gallery.slice(1, 5).map((img, index) => (
                        <div
                            key={index}
                            className={styles.thumbnail}
                            onClick={() => setSelectedImage(index + 1)}
                        >
                            <img src={img} alt={`${destination.name} ${index + 2}`} />
                            {index === 3 && destination.gallery.length > 5 && (
                                <div className={styles.moreImages} onClick={() => openGallery(4)}>
                                    <span>+{destination.gallery.length - 5} more</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.mainContent}>
                    {/* Quick Info */}
                    <div className={styles.quickInfo}>
                        <div className={styles.infoItem}>
                            <FaClock />
                            <span>{destination.duration}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <FaUsers />
                            <span>{destination.groupSize}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <FaCalendarAlt />
                            <span>Available Year Round</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className={styles.section}>
                        <h2>About This Trip</h2>
                        <p>{destination.description}</p>
                    </div>

                    {/* Highlights */}
                    <div className={styles.section}>
                        <h2>Trip Highlights</h2>
                        <div className={styles.highlights}>
                            {destination.highlights.map((highlight, index) => (
                                <div key={index} className={styles.highlight}>
                                    <FaCheck />
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What's Included */}
                    <div className={styles.section}>
                        <h2>What's Included</h2>
                        <div className={styles.included}>
                            {destination.included.map((item, index) => (
                                <div key={index} className={styles.includedItem}>
                                    <FaCheck />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Itinerary */}
                    <div className={styles.section}>
                        <h2>Day by Day Itinerary</h2>
                        <div className={styles.itinerary}>
                            {destination.itinerary.map((day, index) => (
                                <div key={index} className={styles.itineraryDay}>
                                    <div
                                        className={styles.dayHeader}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div className={styles.dayInfo}>
                                            <span className={styles.dayNumber}>Day {day.day}</span>
                                            <span className={styles.dayTitle}>{day.title}</span>
                                        </div>
                                        {activeAccordion === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>

                                    {activeAccordion === index && (
                                        <div className={styles.dayContent}>
                                            {day.activities.map((activity, actIndex) => (
                                                <div key={actIndex} className={styles.activity}>
                                                    <span className={styles.time}>{activity.time}</span>
                                                    <span className={styles.activityText}>{activity.activity}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.bookingCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.priceInfo}>
                                <span className={styles.fromText}>From</span>
                                <div className={styles.priceDisplay}>
                                    <span className={styles.oldPrice}>${destination.originalPrice}</span>
                                    <span className={styles.newPrice}>${destination.price}</span>
                                </div>
                                <span className={styles.perPersonText}>per person</span>
                            </div>
                        </div>

                        <div className={styles.cardContent}>
                            <div className={styles.formGroup}>
                                <label>Check-in Date</label>
                                <input type="date" />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Guests</label>
                                <select>
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4+ Guests</option>
                                </select>
                            </div>

                            <button className={styles.bookNowBtn}>Book Now</button>
                            <button className={styles.inquireBtn}>Send Inquiry</button>

                            <div className={styles.features}>
                                <div className={styles.feature}>
                                    <FaCheck />
                                    <span>Free Cancellation</span>
                                </div>
                                <div className={styles.feature}>
                                    <FaCheck />
                                    <span>Instant Confirmation</span>
                                </div>
                                <div className={styles.feature}>
                                    <FaCheck />
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    {/* <div className={styles.contactCard}>
                        <h3>Need Help?</h3>
                        <p>Have questions about this trip? Our travel experts are here to help.</p>
                        <button className={styles.contactBtn}>Contact Us</button>
                    </div> */}
                </div>
            </div>

            {/* Gallery Modal */}
            {isGalleryOpen && (
                <div className={styles.galleryModal}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeBtn} onClick={() => setIsGalleryOpen(false)}>
                            <FaTimes />
                        </button>
                        <button className={styles.prevBtn} onClick={prevImage}>‹</button>
                        <button className={styles.nextBtn} onClick={nextImage}>›</button>
                        <img src={destination.gallery[selectedImage]} alt={destination.name} />
                        <div className={styles.imageCounter}>
                            {selectedImage + 1} / {destination.gallery.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DestinationDetails;