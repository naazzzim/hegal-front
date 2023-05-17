import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/Hero'
import Highlight from '@/components/Highlight'
import Contact from '@/components/Contact'
import WhatsappButton from '@/components/WhatsappButton'


const homeData  = {
  hero:{
    title:'Stop Complaining, Elevate Your Business',
    description:"We're here to make your business thrive. With the help of our world class consultancy and services, your business is bound to succeed",
    buttonText:"Explore our Services",
    buttonLink:"#",
  },
  highlight:{
    title:'Our Featured Services',
    description:"Looking to level up your business growth? We've curated a list of top-notch services that come highly recommended. These carefully selected offerings will ensure your business stays on the path to success and reliability. So, without further ado, let's dive into our featured services!",
    items:[
      {
        title:'Corporate Tax',
        description:'Our corporate tax services provide expert guidance on tax compliance, planning, and filing to help your business stay compliant and minimize tax liabilities. Let us take care of your tax needs so you can focus on growing your business.',
        icon:'/illustrations/tax.jpg'

      },
      {
        title:'Audit',
        description:'Our audit services provide independent, thorough examination and assessment of your financial statements, internal controls and compliance with regulations. Trust our experienced professionals to give you confidence in your financial reporting.',
        icon:'/illustrations/audit.jpg'

      },
      {
        title:'VAT',
        description:'Our VAT services provide comprehensive support for businesses navigating complex VAT regulations. We offer VAT registration, compliance, planning and reporting to help you manage your VAT obligations efficiently and effectively.',
        icon:'/illustrations/vat.jpg'

      },
      {
        title:'goAML',
        description:'Our goAML services provide an automated solution for reporting suspicious financial activities to regulatory authorities. Our system streamlines the reporting process and ensures compliance with anti-money laundering regulations, helping you to protect your business from financial crime.',
        icon:'/illustrations/goAML.jpg'

      },
      {
        title:'ESR Reporting',
        description:'Our ESR Reporting services assist businesses in fulfilling their Economic Substance Regulations obligations. We provide comprehensive support, ensuring accurate reporting and compliance with ESR requirements, enabling you to confidently meet your regulatory obligations.',
        icon:'/illustrations/ESR.jpg'
      },
      {
        title:'UBO Services',
        description:'Our UBO (Ultimate Beneficial Owner) services help businesses identify and verify the individuals who ultimately own or control the company. We offer reliable UBO identification, due diligence, and compliance solutions to ensure transparency and compliance with regulatory requirements.',
        icon:'/illustrations/UBO.jpg'
      },
      {
        title:'System Audit Assurance and Cyber Security',
        description:'Our System Audit Assurance and Cyber Security services provide robust protection and comprehensive assessments to safeguard your digital assets against cyber threats.',
        icon:'/illustrations/cyber.jpg'
      },
      {
        title:'PRO Services',
        description:'Our PRO (Public Relations Officer) services offer seamless and efficient handling of governmental and administrative tasks. From visa processing to document clearance, we ensure hassle-free operations, allowing you to focus on your core business activities.',
        icon:'/illustrations/PRO.jpg'
      }
    ]
  },
  contact:{
    title:'Connect With Us',
    description:'Want to book a service? Have any opinions to share? We\'re happy to hear from you. Without further ado, fill the form below. We\'ll reach out to you in no time',

  }
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero data={homeData.hero}/>
      <Highlight data={homeData.highlight} />
      <Contact data={homeData.contact} />
      <WhatsappButton />
    </main>
  )
}
