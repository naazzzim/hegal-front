import styles from '@/styles/Home2.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import OutlineButton from '../OutlineButton';
import { useSelector } from 'react-redux';

const HighlightCard = ({ item }) => {
    const slug = item.link.split(' ').join('-').toLowerCase().replace('&-', '');
    const languageData = useSelector((state) => state.language);
    const language = languageData.language;
    const router = useRouter();

    const handleClick = () => {
        router.push(`/services/${slug}?language=${language}`);
    };

    return (
        <div className={styles.highlightCardContainer}>
            <Image src={item.icon} width={255} height={130} alt={'icon'}/>
            <h3 onClick={handleClick}>{item.title}</h3>
            {/* <p>{desc}</p> */}
            {/* <h4> <Image className={styles.hicon} src={'/icons/h41.svg'}  width={30}  height={30} alt='list-icon'/> Offered Services</h4> */}
            {/* <ul>
          {
            item.list.map(
              x=> <li>{x}</li>
            )
          }
        </ul> */}
            <p>
                {item.description}
                
            </p>
            <span className={styles.link} onClick={handleClick}>
                    {languageData.highlight.readMore} <Image className={styles.harrow} width={18} height={18} src={'/icons/right2.svg'} />
                </span>
            <OutlineButton className={styles.bookButton} text={languageData.highlight.bookService} onClick={handleClick} />
        </div>
    );
};

export default HighlightCard;