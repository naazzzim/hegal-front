import  styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Links = ({item}) => {
  return (
    <div    className={styles.linksContainer}>
        <h2>
            {item.title}
        </h2>
        <hr />
        <ul>
            {item.list.map(x=> (<><li><Link    href={x.route}><h3>{x.name}<Image src="/icons/right.svg" width="24" height="24" alt='arrow'/></h3></Link></li> <hr /></> ) )}
        </ul>
    </div>
  )
}

export default Links