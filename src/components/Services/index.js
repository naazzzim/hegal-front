import CommonHeading from "../CommonHeading"
import styles from '@/styles/Home.module.css'
import ServiceCard from "./ServiceCard"

const servicesData = [
    {
        title: 'System Audit Assurance and Cyber Security',
        image: '/coverimg.png',
        route: '#'
    },
    {
        title: 'System Audit Assurance and Cyber Security',
        image: '/coverimg.png',
        route: '#'
    },
    {
        title: 'System Audit Assurance and Cyber Security',
        image: '/coverimg.png',
        route: '#'
    },
    {
        title: 'System Audit Assurance and Cyber Security',
        image: '/coverimg.png',
        route: '#'
    },
    {
        title: 'System Audit Assurance and Cyber Security',
        image: '/coverimg.png',
        route: '#'
    },
    {
        title: 'System Audit Assurance and Cyber Security',
        image: '/coverimg.png',
        route: '#'
    },
    {
        title: 'System Audit Assurance and Cyber Security',
        image: '/coverimg.png',
        route: '#'
    },
    {
        title: 'System Audit Assurance and Cyber Security',
        image: '/coverimg.png',
        route: '#'
    },
    {
        title: 'System Audit Assurance and Cyber Security',
        image: '/coverimg.png',
        route: '#'
    },

]

const Services = () => {
    return (
        <section className={styles.Services}>
            <CommonHeading text={'Our Featured Services'}/>
            <p>We are here to assist you with every process. Please go through this and feel free to contact us.</p>
            <div className={styles.ServicesContainer}>
                {
                    servicesData.map(x => <ServiceCard item={x}/>)
                }
            </div>
        </section>
    )
}

export default Services