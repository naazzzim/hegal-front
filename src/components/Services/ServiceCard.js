import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({item}) => {
    return (
        <Link href={item.route}>
            <div className={styles.ServiceCard}>
                <Image src={item.image} alt={item.title} height={300} width={300}/>
                <h3>{item.title}</h3>
            </div>
        </Link>
    );
};

export default ServiceCard;
