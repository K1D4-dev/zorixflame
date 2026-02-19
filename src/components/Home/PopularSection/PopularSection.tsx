import { useEffect, useState } from "react";
import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";
import ProductCard from "@/components/UI/ProductCard/ProductCard";
import { supabase } from "@/library/supabase";

import styles from "./PopularSection.module.css";

type Product = {
    id: number;
    name: string;
    price: number;
    image_url: string;
};

const PopularSection = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .eq("is_popular", true);

            if (error) {
                console.error("Помилка завантаження:", error);
            } else {
                setProducts(data || []);
            }

            setLoading(false);
        };

        loadProducts();
    }, []);

    return (
        <section className={styles.popular}>
            <SectionTitle title="Популярні товари" />

            <div className={styles.grid}>
                {loading && <p>Завантаження...</p>}

                {!loading &&
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.name}
                            price={product.price}
                            image={
                                new URL(
                                    `/src/assets/images/${product.image_url}`,
                                    import.meta.url
                                ).href
                            }
                        />
                    ))}
            </div>
        </section>
    );
};

export default PopularSection;
