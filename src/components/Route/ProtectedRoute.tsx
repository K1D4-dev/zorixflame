import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { supabase } from "@/library/supabase";

type ProtectedRouteProps = {
    children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const checkAdmin = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (!user) {
                setLoading(false);
                return;
            }

            const { data } = await supabase
                .from("profiles")
                .select("role")
                .eq("id", user.id)
                .single();

            if (data?.role === "admin") {
                setIsAdmin(true);
            }

            setLoading(false);
        };

        checkAdmin();
    }, []);

    if (loading) return <p>Loading...</p>;

    if (!isAdmin) return <Navigate to="/login" />;

    return <>{children}</>;
}
