import { supabase } from "@/library/supabase";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/Login/LoginForm/LoginForm";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = async (email: string, password: string) => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            navigate("/admin");
        }
    };

    return <LoginForm onLogin={handleLogin} />;
}