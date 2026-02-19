import styles from "./HeroSection.module.css";
import { useNavigate } from "react-router-dom";

import Button from "@/components/UI/Button/Button";

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Створіть атмосферу затишку у своєму домі</h1>
                    <p className={styles.description}>Натуральні свічки ручної роботи</p>

                    <Button variant={"section"} onClick={() => navigate("/catalog")}>Перейти в каталог</Button>
                </div>
            </section>
        </>
    );
}

export default HeroSection;