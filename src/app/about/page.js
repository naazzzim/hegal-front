import styles from '@/styles/About.module.css'
import Image from 'next/image'


const about = () => {
  const aboutContent = {
    title:'Who Are We & Why Us?',
    desc:[
      'Experience transformative growth with HEGAL, the dynamic business advisory firm that overcomes marketplace challenges. Our extensive expertise, instincts, and imagination fuel your success by creating winning value propositions. Navigating change and enhancing performance across growth, risk, operations, and regulations is our purpose.',
      'As an international organization, HEGAL Group delivers sustainable solutions and transformative strategies to clients in Asia, Europe, and the Middle East. Since 2018, we have expanded our formidable team, operating from global offices spanning the Middle East, Europe, Japan, China, Singapore, India, and esteemed local family business groups.',
      'Innovation lies at the heart of our approach, supported by an unwavering commitment to quality. With our multidimensional capabilities in Strategy, Finance, Taxation, Audits, People, Process, Technology, Sales, and Marketing, we offer integrated value propositions. Our comprehensive and unbiased advisory services forge trusted partnerships, serving as your single point of contact to conquer business challenges.',
      'HEGAL embodies a strong ethos and a dedication to client success, making us the preferred global advisory partner. Stay ahead of the curve in a world of constant change and disruptions, empowered by our experience-driven solutions.'
    ]
  }
  return (
    <>
      <main className={styles.about}>
        <section>
          <Image src={'/hegal-arabic.png'} height={600} width={600} alt='company'/>
          <h1>{aboutContent.title}</h1>
        </section>
        {
          aboutContent.desc.map(para=> (<>
            <br />
            <p>{para}</p>
          </>) )
        }
      </main>
    </>
  )
}

export default about