import React from 'react'
import styles from '@/styles/Home2.module.css'
import Image from 'next/image'
import ContactForm from './ContactForm'


const Contact = ({data}) => {
  return (
    <section    className={styles.contact}>
        <section>
            <div>
                <Image src="/illustrations/connect.svg" width={700} height={700} alt={'help'} />
            </div>
            <article    className={styles.heroText}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <ContactForm />
            </article>
        </section>

        <section className={styles.ghh}>

        </section>
    </section>
  )
}

export default Contact