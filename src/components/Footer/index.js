import  styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import Links from './Links'

const footerData  = [
  {
    title:'Important Links',
    list:[
      {
        name:'Corporate Tax',
        route:'#'
      },
      {
        name:'goAML',
        route:'#'
      },
      {
        name:'VAT AUDIT',
        route:'#'
      },
      {
        name:'Account & Book Keeping Services',
        route:'#'
      }
    ]
  },
  {
    title:'Recent Post',
    list:[
      {
        name:'VAT Services',
        route:'#'
      }
    ]
  }
]

const Footer = () => {
  return (
    <div  className={styles.footer}>
      <Image  className={styles.logo} src={'/hegal.png'} alt='hegal group' width={200} height={200} />
      {
        footerData.map(x=>
            <Links item={x}/>
            )
      }
    </div>
  )
}

export default Footer