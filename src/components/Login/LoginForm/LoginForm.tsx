import { useState } from "react";
import styles from './LoginForm.module.css';

import SectionTitle from "@/components/UI/SectionTitle/SectionTitle.tsx";
import Button from "@/components/UI/Button/Button.tsx";

type LoginFormProps = {
    onLogin: (email: string, password: string) => void;
};

export default function LoginForm({ onLogin }: LoginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className={styles.section}>

                <div className={styles.form}>
                    <SectionTitle title="Admin Login" />
                    <div className={styles.input}>
                        <p>Email</p>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.input}>
                        <p>Password</p>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>


                    <Button onClick={() => onLogin(email, password)} >Login</Button>

                </div>
            </div>

        </>
    );
}