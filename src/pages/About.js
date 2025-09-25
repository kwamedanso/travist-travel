import { useState, useEffect } from 'react';
import {

    FaQuoteLeft, FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaPlay, FaTimes, FaAward, FaShieldAlt, FaClock, FaStar, FaPlane
} from 'react-icons/fa';
import styles from "../styles/aboutPage.module.css"
import { stats, values, team, testimonials } from '../assets/data/about';

const About = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1>Discover the world with passionate explorers</h1>
                        <p>
                            We're not just a travel company - we're your gateway to extraordinary adventures.
                            With years of experience and a passion for discovery, we craft personalized journeys
                            that create lifelong memories.
                        </p>
                        <div className={styles.heroButtons}>
                            <button className={styles.primaryBtn}>Our Story</button>
                            <button
                                className={styles.videoBtn}
                                onClick={() => setIsVideoOpen(true)}
                            >
                                <FaPlay /> Watch Our Journey
                            </button>
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                        <img
                            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop"
                            alt="Travel team exploring"
                        />
                        <div className={styles.floatingCard}>
                            <div className={styles.cardIcon}>
                                <FaPlane />
                            </div>
                            <div className={styles.cardText}>
                                <span className={styles.cardTitle}>Your Adventure Awaits</span>
                                <span className={styles.cardSubtitle}>Let's explore together</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.stats}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                                <div className={styles.statIcon}>
                                    <stat.icon />
                                </div>
                                <div className={styles.statContent}>
                                    <span className={styles.statNumber}>{stat.number}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className={styles.story}>
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <div className={styles.storyText}>
                            <span className={styles.sectionTag}>Our Story</span>
                            <h2>Born from a love of exploration</h2>
                            <p>
                                Travyst was founded in 2018 by a group of passionate travelers who believed
                                that everyone deserves to experience the world's wonders. What started as a
                                small team of adventurers has grown into a trusted travel partner for thousands
                                of explorers worldwide.
                            </p>
                            <p>
                                Our mission is simple: to make extraordinary travel accessible to everyone.
                                We carefully curate each destination, partner with local experts, and design
                                experiences that go beyond typical tourism to create meaningful connections
                                with the places and people you encounter.
                            </p>
                            <div className={styles.storyFeatures}>
                                <div className={styles.feature}>
                                    <FaClock />
                                    <span>24/7 Support</span>
                                </div>
                                <div className={styles.feature}>
                                    <FaShieldAlt />
                                    <span>Safe & Secure</span>
                                </div>
                                <div className={styles.feature}>
                                    <FaAward />
                                    <span>Award Winning</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.storyImages}>
                            <div className={styles.imageGrid}>
                                <img
                                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
                                    alt="Mountain landscape"
                                    className={styles.storyImg1}
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                                    alt="Ocean view"
                                    className={styles.storyImg2}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.values}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>Our Values</span>
                        <h2>What drives us forward</h2>
                        <p>These core values guide everything we do and shape the experiences we create for our travelers.</p>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueIcon}>
                                    <value.icon />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.team}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>Our Team</span>
                        <h2>Meet the explorers behind Travyst</h2>
                        <p>Our diverse team of travel experts, local guides, and adventure enthusiasts work together to create unforgettable journeys.</p>
                    </div>
                    <div className={styles.teamGrid}>
                        {team.map((member, index) => (
                            <div key={index} className={styles.teamCard}>
                                <div className={styles.memberImage}>
                                    <img src={member.image} alt={member.name} />
                                    <div className={styles.socialOverlay}>
                                        <a href={member.social.linkedin}><FaLinkedin /></a>
                                        <a href={member.social.twitter}><FaTwitter /></a>
                                        <a href={member.social.instagram}><FaInstagram /></a>
                                    </div>
                                </div>
                                <div className={styles.memberInfo}>
                                    <h3>{member.name}</h3>
                                    <span className={styles.memberRole}>{member.role}</span>
                                    <p>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={styles.testimonials}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>Testimonials</span>
                        <h2>What our travelers say</h2>
                        <p>Don't just take our word for it - hear from some of the amazing people we've had the pleasure to travel with.</p>
                    </div>
                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={styles.testimonialCard}>
                                <div className={styles.quote}>
                                    <FaQuoteLeft />
                                </div>
                                <p>"{testimonial.text}"</p>
                                <div className={styles.rating}>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <div className={styles.testimonialAuthor}>
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <div className={styles.authorInfo}>
                                        <span className={styles.authorName}>{testimonial.name}</span>
                                        <span className={styles.authorLocation}>{testimonial.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Ready to start your adventure?</h2>
                        <p>Join thousands of happy travelers who have discovered the world with us. Your next great journey is just a click away.</p>
                        <div className={styles.ctaButtons}>
                            <button className={styles.primaryBtn}>Plan Your Trip</button>
                            <div className={styles.contact}>
                                <FaPhone />
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className={styles.videoModal}>
                    <div className={styles.videoContainer}>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setIsVideoOpen(false)}
                        >
                            <FaTimes />
                        </button>
                        <div className={styles.videoWrapper}>
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Our Journey"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;