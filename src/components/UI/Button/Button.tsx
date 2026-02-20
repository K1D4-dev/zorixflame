import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    variant?: "card" | "section";
};

export default function Button({
                                   children,
                                   onClick,
                                   variant = "card",
                               }: ButtonProps) {
    return (
        <button
            className={`${styles.btn} ${styles[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
