import type { ReactNode } from "react";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
    title: ReactNode;
    subtitle?: ReactNode;
};

export default function SectionTitle({
                                         title,
                                         subtitle,
                                     }: SectionTitleProps) {
    return (
        <div className={styles.section_title}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && (
                <p className={styles.subtitle}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
