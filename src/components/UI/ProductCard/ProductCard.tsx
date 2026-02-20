import Button from "@/components/UI/Button/Button";
import styles from "./ProductCard.module.css";


type SectionTitleProps = {
    image: string;
    title: string;
    price: number;
};


export default function ProductCard({ image, title, price }
: SectionTitleProps) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={image} alt={title} loading="lazy"/>
            </div>

            <div className={styles.info}>
                <h3>{title}</h3>
                <div>
                    <p>{price} грн</p>
                    <Button>Купити</Button>
                </div>

            </div>
        </div>
    );
}