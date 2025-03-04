import { Button, Container, Separator } from "@/components/ui";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { fetchProductById } from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const productId = Number(params.id);
  const product = await fetchProductById(productId);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <section className={styles.product}>
        <Container className={styles.product__container}>
          <div className={styles.product__image}>
            <img
              src={product.img_src}
              alt={product.title}
              className={styles.product__image_content}
            />
          </div>
          <div className={styles.product__info}>
            <h1 className={styles.product__title}>{product.title}</h1>
            <p className={styles.product__price}>${product.price}</p>
            <p className={styles.product__description}>{product.description}</p>
            <form>
              <input hidden name="product_id" value={product.id} readOnly />
              <Button size="xl" className={styles.product__button}>
                Agregar al Carrito
              </Button>
            </form>
            <Separator className={styles.product__separator} />
            <div className={styles.product__features}>
              <h2 className={styles.product__features_title}>
                Características
              </h2>
              <ul className={styles.product__features_list}>
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
