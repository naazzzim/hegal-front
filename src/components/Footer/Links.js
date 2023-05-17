import  styles from '@/styles/Footer.module.css'
import Link from 'next/link'

const Links = ({item}) => {
  return (
    <div    className={styles.linksContainer}>
        <h5>
            {item.title}
        </h5>
        <ul>
            {item.list.map(x=> <li><Link    href={x.route}>{x.name}</Link></li> )}
        </ul>
    </div>
  )
}

export default Links