import styles from './page.module.css'
import Hero from '@/components/Hero'
import Highlight from '@/components/Highlight'
import Contact from '@/components/Contact'
import WhatsappButton from '@/components/WhatsappButton'
import HeroVideo from '@/components/HeroVideo'


const homeData  = {
  HeroVideo:{
    title: 'Unlock Your Business Potential In Dubai',
    subTitle:'Worry no more! With us, your business will seamlessly establish and flourish in the land of opportunities! '

  },
  hero:{
    title:'Who Are We & Why Us?',
    description:"We, as an international organization, deliver sustainable solutions and transformative strategies to clients in Asia, Europe, and the Middle East. Since 2018, we have expanded our formidable team, operating from global offices spanning the Middle East, Europe, Japan, China, Singapore, India, and esteemed local family business groups.",
    buttonText:"Read More",
    buttonLink:"#",
  },
  highlight:{
    title:'Our Featured Services',
    description:"Looking to level up your business growth? We've curated a list of top-notch services that come highly recommended. These carefully selected offerings will ensure your business stays on the path to success and reliability. So, without further ado, let's dive into our featured services!",
    items:[
      {
        title:'Corporate Tax',
        description:'Corporate tax (CT) is a direct tax on the net income or profit of corporations and other entities. It is also known as Corporate Income Tax (CIT) or Business Profits Tax. The UAE has the lowest corporate income tax rate in the GCC region, set at 9% except for Bahrain.',
        icon:'/illustrations/ctax.jpg'

      },
      {
        title:'Audit',
        description:'An audit is an independent examination of an organization\'s financial report, including balance sheets, income statements, statements of changes in equity, cash flow statements, and explanatory notes.',
        icon:'/illustrations/audit.jpg'

      },
      {
        title:'VAT',
        description:'VAT was introduced in the United Arab Emirates on 1 January 2018. The general VAT rate is 5% and applies to most goods and services, with some goods and services subject to a 0% rate or an exemption from VAT (subject to specific conditions being met).',
        icon:'/illustrations/vat1.jpg'

      },
      {
        title:'UBO',
        description:'UBO is the term for the person who ultimately owns or controls a customer in a transaction. Defined by FATF, a regulatory body against money laundering and terrorist financing, UBO includes those with ultimate legal control over a person or arrangement.',
        icon:'/illustrations/UBO1.jpg'
      },
      {
        title:'ESR Reporting',
        description:'The Economic Substance Regulations require businesses to prove their genuine economic activity within the UAE and not solely seek tax advantages in low-tax jurisdictions. This prevents the practice of profit shifting from high-tax to low-tax regions.',
        icon:'/illustrations/ESR.jpg'
      },
      {
        title:'Accounting & Book Keeping',
        description:'We cover every aspect of accountancy and aspire to understand your business needs for accounting and bookkeeping services in Dubai, UAE and long-term goals so we can tailor a package that would meet all your requirements',
        icon:'/illustrations/accounting.jpg'
      },
      {
        title:'Company Formation',
        description:'Company formation in UAE is a simple step by step process and doesn\'t require endless visits to any lawyer. The procedures for company formation in UAE are recognized to be a legal one and it includes the registration of company name and licensing of business activity.',
        icon:'/illustrations/cform.jpg'
      },
      {
        title:'Golden Visa',
        description:'The Golden visa allows foreign talents to reside, work, and study in the UAE with exclusive benefits, benefiting investors, entrepreneurs, scientists, students, graduates, humanitarians, and frontline heroes.',
        icon:'/illustrations/PRO.jpg'
      }
    ]
  },
  contact:{
    title:'Contact Us',
    description:'Want to book a service? Have any opinions to share? We\'re happy to hear from you. Without further ado, fill the form below. We\'ll reach out to you in no time',

  }
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HeroVideo data={homeData.HeroVideo} />
        <Hero data={homeData.hero}/>
        <Highlight data={homeData.highlight} />
        <Contact data={homeData.contact} />
        <WhatsappButton />
      </main>
    </>
  )
}
