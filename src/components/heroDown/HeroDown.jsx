"use client"
import { useEffect, useState } from 'react';
import { FaUsers, FaStar } from 'react-icons/fa';
import styles from './heroDown.module.css';
import Animate from 'rc-animate';

const data = [
   

    {
        title: 'Pride of Noni Students Association',
        icon: 'users',
        description: 'Join us in the journey of excellence and community.',
    },
    {
        title: 'Honors of Noni Students Association',
        icon: 'star',
        description: 'Recognizing and celebrating achievements in education and beyond.',
    },
    {
        title: 'Empowerment through Education',
        icon: 'star',
        description: 'Providing opportunities for growth and success through learning.',
    },
    {
        title: 'Community Engagement',
        icon: 'users',
        description: 'Building a strong network of students and alumni for a better tomorrow.',
    },
    {
        title: 'Innovation and Creativity',
        icon: 'star',
        description: 'Fostering a culture of innovation and creativity among our members.',
    },
    {
        title: 'Leadership Development',
        icon: 'star',
        description: 'Empowering future leaders through skill development and mentorship.',
    },
];


const HeroDown = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const componentPosition = document.getElementById('hero-down').offsetTop;

        if (scrollPosition > componentPosition) {
            setVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.heroContainer}>
            {data.map((item, index) => (
                <Animate key={index} transitionName="fade" transitionAppear>
                    <div id="hero-down" className={`${styles.heroCard} ${visible && styles.animated}`}>
                        <h3>{item.title}</h3>
                        {item.icon === 'users' ? <FaUsers className={styles.icon} /> : <FaStar className={styles.icon2} />}
                        <p>{item.description}</p>
                    </div>
                </Animate>
            ))}
        </div>
    );
};

export default HeroDown