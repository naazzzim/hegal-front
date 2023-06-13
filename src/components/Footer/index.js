import  styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import Links from './Links'
import Socials from './Socials'


const LinksData  = [
  {
    title:'Quick Links',
    list:[
      {
        name:'About us',
        route:'#about'
      },
      {
        name:'Services',
        route:'#services'
      },
      {
        name:'Contact Us',
        route:'#contact-us'
      },
      // {
      //   name:'Account & Book Keeping Services',
      //   route:'#'
      // }
    ]
  }
]

const LogoData  = {
  logo:'/hegal.png',
  name:'Hegal Group Tax Consultants Co. LLC.',
  addressl1:'Office No. 43-44,',
  addressl2:'Dubai Municipality - Bur Dubai - Al Fahidi'
}

const ContactData = {
  title:'Connect with us',
  mail:'info@hegalgroup.ae',
  phone:'+971562376716',
  linkedIn:'https://www.linkedin.com/company/hegalgroup/',
  whatsapp:'+971503431265',
  instagram:'https://instagram.com/hegalgroup_?igshid=ZGUzMzM3NWJiOQ==',
  twitter:'https://twitter.com/HEGALGROUP?t=C9bC9RdmjAVt4YDIJkNgYw&s=08'
}
const Footer = () => {
  return (
    <div  className={styles.footer}>
      <div className={styles.logo}>
        <Image   src={'/hegal.png'} alt='hegal group' width={300} height={300} />
        <h3>{LogoData.name}<br />{LogoData.addressl1} <br />{LogoData.addressl2} </h3>
      </div>
      <div>
      {
        LinksData.map(x=>
          <Links item={x}/>
          )
        }
      </div>
      <div>
        <Socials data={ContactData} />
      </div>
    </div>
  )
}

export default Footer