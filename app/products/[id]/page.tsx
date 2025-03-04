import { Button, Container, Separator } from "@/components/ui";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { Product } from "@/lib/types";

const productsTable: Product[] = [
  {
    id: 1,
    title: "Polo React",
    img_src: "/images/polos/polo-react.png",
    alt: null,
    price: 20,
    description:
      "Viste tu pasión por React con estilo y comodidad en cada línea de código.",
    created_at: new Date(),
    category_id: 1,
    is_on_sale: false,
    features: [
      "Estampado resistente que mantiene sus colores vibrantes lavado tras lavado.",
      "Hecho de algodón suave que asegura comodidad y frescura.",
      "Costuras reforzadas para una mayor durabilidad.",
      "Corte moderno que se adapta perfectamente al cuerpo.",
    ],
  },
  {
    id: 2,
    title: "Polo JavaScript",
    img_src: "/images/polos/polo-js.png",
    alt: null,
    price: 20,
    description:
      "Deja que tu amor por JavaScript hable a través de cada hilo de este polo.",
    created_at: new Date(),
    category_id: 1,
    is_on_sale: false,
    features: [
      "Logo de JavaScript bordado con precisión y detalle.",
      "Tela premium de algodón peinado.",
      "Disponible en varios colores.",
      "Acabado profesional con doble costura.",
    ],
  },
  {
    id: 3,
    title: "Polo Node.js",
    img_src: "/images/polos/polo-node.png",
    alt: null,
    price: 20,
    description:
      "Conéctate al estilo con este polo de Node.js, tan robusto como tu código.",
    created_at: new Date(),
    category_id: 1,
    is_on_sale: false,
    features: [
      "Diseño minimalista con el logo de Node.js.",
      "Material transpirable ideal para largas sesiones de código.",
      "Tejido resistente a múltiples lavados.",
      "Etiqueta sin costuras para mayor comodidad.",
    ],
  },
  {
    id: 4,
    title: "Polo TypeScript",
    img_src: "/images/polos/polo-ts.png",
    alt: null,
    price: 20,
    description:
      "Tipa tu estilo con precisión: lleva tu pasión por TypeScript en cada hilo.",
    created_at: new Date(),
    category_id: 1,
    is_on_sale: false,
    features: [
      "Logo de TypeScript estampado en alta calidad.",
      "Tejido antimanchas y duradero.",
      "Cuello reforzado que mantiene su forma.",
      "100% algodón hipoalergénico.",
    ],
  },
  {
    id: 5,
    title: "Polo Backend Developer",
    img_src: "/images/polos/polo-backend.png",
    alt: null,
    price: 25,
    description:
      "Domina el servidor con estilo: viste con orgullo tu título de Backend Developer.",
    created_at: new Date(),
    category_id: 1,
    is_on_sale: false,
    features: [
      "Diseño exclusivo para desarrolladores backend.",
      "Material premium que mantiene su forma.",
      "Costuras reforzadas en puntos de tensión.",
      "Estampado de alta durabilidad.",
    ],
  },
  {
    id: 6,
    title: "Polo Frontend Developer",
    img_src: "/images/polos/polo-frontend.png",
    alt: null,
    price: 25,
    description:
      "Construye experiencias con estilo: luce con orgullo tu polo de Frontend Developer.",
    created_at: new Date(),
    category_id: 1,
    is_on_sale: false,
    features: [
      "Diseño inspirado en elementos de UI/UX.",
      "Tela suave y ligera perfecta para el día a día.",
      "Estampado flexible que no se agrieta.",
      "Acabado profesional en cada detalle.",
    ],
  },
  {
    id: 7,
    title: "Polo Full-Stack Developer",
    img_src: "/images/polos/polo-fullstack.png",
    alt: null,
    price: 25,
    description:
      "Domina ambos mundos con estilo: lleva tu título de FullStack Developer en cada línea de tu look.",
    created_at: new Date(),
    category_id: 1,
    is_on_sale: false,
    features: [
      "Diseño que representa ambos mundos del desarrollo.",
      "Material premium de larga duración.",
      "Proceso de estampado ecológico.",
      "Corte moderno y cómodo.",
    ],
  },
  {
    id: 8,
    title: "Polo It's A Feature",
    img_src: "/images/polos/polo-feature.png",
    alt: null,
    price: 15,
    description:
      "Cuando el bug se convierte en arte: lleva con orgullo tu polo 'It's a feature'.",
    created_at: new Date(),
    category_id: 1,
    is_on_sale: true,
    features: [
      "Estampado humorístico de alta calidad.",
      "Algodón orgánico certificado.",
      "Diseño exclusivo de la comunidad dev.",
      "Disponible en múltiples colores.",
    ],
  },
  {
    id: 9,
    title: "Polo It Works On My Machine",
    img_src: "/images/polos/polo-works.png",
    alt: null,
    price: 15,
    description:
      "El clásico del desarrollador: presume tu confianza con 'It works on my machine'.",
    created_at: new Date(),
    category_id: 1,
    is_on_sale: true,
    features: [
      "Frase icónica del mundo del desarrollo.",
      "Material durable y cómodo.",
      "Estampado que no se desvanece.",
      "Ideal para regalo entre desarrolladores.",
    ],
  },
  {
    id: 10,
    category_id: 2,
    title: "Sticker JavaScript",
    img_src: "/images/stickers/sticker-js.png",
    alt: null,
    price: 2.99,
    description:
      "Muestra tu amor por JavaScript con este elegante sticker clásico.",
    created_at: new Date(),
    is_on_sale: false,
    features: [
      "Vinilo de alta calidad resistente al agua",
      "Adhesivo duradero que no deja residuos",
      "Colores vibrantes que no se desvanecen",
      "Tamaño perfecto para laptops y dispositivos",
    ],
  },
  {
    id: 11,
    category_id: 2,
    title: "Sticker React",
    img_src: "/images/stickers/sticker-react.png",
    alt: null,
    price: 2.49,
    description:
      "Decora tus dispositivos con el icónico átomo giratorio de React.",
    created_at: new Date(),
    is_on_sale: false,
    features: [
      "Vinilo de alta calidad resistente al agua",
      "Adhesivo duradero que no deja residuos",
      "Colores vibrantes que no se desvanecen",
      "Tamaño perfecto para laptops y dispositivos",
    ],
  },
  {
    id: 12,
    category_id: 2,
    title: "Sticker Git",
    img_src: "/images/stickers/sticker-git.png",
    alt: null,
    price: 3.99,
    description:
      "Visualiza el poder del control de versiones con este sticker de Git.",
    created_at: new Date(),
    is_on_sale: false,
    features: [
      "Vinilo de alta calidad resistente al agua",
      "Adhesivo duradero que no deja residuos",
      "Colores vibrantes que no se desvanecen",
      "Tamaño perfecto para laptops y dispositivos",
    ],
  },
  {
    id: 13,
    category_id: 2,
    title: "Sticker Docker",
    img_src: "/images/stickers/sticker-docker.png",
    alt: null,
    price: 2.99,
    description:
      "La adorable ballena de Docker llevando contenedores en un sticker único.",
    created_at: new Date(),
    is_on_sale: false,
    features: [
      "Vinilo de alta calidad resistente al agua",
      "Adhesivo duradero que no deja residuos",
      "Colores vibrantes que no se desvanecen",
      "Tamaño perfecto para laptops y dispositivos",
    ],
  },
  {
    id: 14,
    category_id: 2,
    title: "Sticker Linux",
    img_src: "/images/stickers/sticker-linux.png",
    alt: null,
    price: 2.49,
    description:
      "El querido pingüino Tux, mascota oficial de Linux, en formato sticker.",
    created_at: new Date(),
    is_on_sale: false,
    features: [
      "Vinilo de alta calidad resistente al agua",
      "Adhesivo duradero que no deja residuos",
      "Colores vibrantes que no se desvanecen",
      "Tamaño perfecto para laptops y dispositivos",
    ],
  },
  {
    id: 15,
    category_id: 2,
    title: "Sticker VS Code",
    img_src: "/images/stickers/sticker-vscode.png",
    alt: null,
    price: 2.49,
    description: "El elegante logo del editor favorito de los desarrolladores.",
    created_at: new Date(),
    is_on_sale: false,
    features: [
      "Vinilo de alta calidad resistente al agua",
      "Adhesivo duradero que no deja residuos",
      "Colores vibrantes que no se desvanecen",
      "Tamaño perfecto para laptops y dispositivos",
    ],
  },
  {
    id: 16,
    category_id: 2,
    title: "Sticker GitHub",
    img_src: "/images/stickers/sticker-github.png",
    alt: null,
    price: 2.99,
    description:
      "El alojamiento de repositorios más popular en un sticker de alta calidad.",
    created_at: new Date(),
    is_on_sale: false,
    features: [
      "Vinilo de alta calidad resistente al agua",
      "Adhesivo duradero que no deja residuos",
      "Colores vibrantes que no se desvanecen",
      "Tamaño perfecto para laptops y dispositivos",
    ],
  },
  {
    id: 17,
    category_id: 2,
    title: "Sticker HTML",
    img_src: "/images/stickers/sticker-html.png",
    alt: null,
    price: 2.99,
    description:
      "El escudo naranja de HTML5, el lenguaje que estructura la web.",
    created_at: new Date(),
    is_on_sale: false,
    features: [
      "Vinilo de alta calidad resistente al agua",
      "Adhesivo duradero que no deja residuos",
      "Colores vibrantes que no se desvanecen",
      "Tamaño perfecto para laptops y dispositivos",
    ],
  },
  {
    id: 18,
    category_id: 3,
    title: "Taza JavaScript",
    img_src: "/images/tazas/taza-js.png",
    alt: null,
    price: 14.99,
    description:
      "Disfruta tu café mientras programas con el logo de JavaScript.",
    created_at: new Date(),
    is_on_sale: false,
    features: [
      "Cerámica de alta calidad",
      "Apta para microondas y lavavajillas",
      "Capacidad de 325ml",
      "Diseño que no pierde color con el uso",
    ],
  },
  {
    id: 19,
    category_id: 3,
    title: "Taza React",
    img_src: "/images/tazas/taza-react.png",
    alt: null,
    price: 13.99,
    description:
      "Una taza que hace render de tu bebida favorita con estilo React.",
    created_at: new Date(),
    is_on_sale: false,
    features: [
      "Cerámica de alta calidad",
      "Apta para microondas y lavavajillas",
      "Capacidad de 325ml",
      "Diseño que no pierde color con el uso",
    ],
  },
  {
    id: 20,
    category_id: 3,
    title: "Taza Git",
    img_src: "/images/tazas/taza-git.png",
    alt: null,
    price: 12.99,
    description: "Commit a tu rutina diaria de café con esta taza de Git.",
    is_on_sale: false,
    created_at: new Date(),
    features: [
      "Cerámica de alta calidad",
      "Apta para microondas y lavavajillas",
      "Capacidad de 325ml",
      "Diseño que no pierde color con el uso",
    ],
  },
  {
    id: 21,
    category_id: 3,
    title: "Taza SQL",
    img_src: "/images/tazas/taza-sql.png",
    alt: null,
    price: 15.99,
    description: "Tu amor por los lenguajes estructurados en una taza de SQL.",
    is_on_sale: false,
    created_at: new Date(),
    features: [
      "Cerámica de alta calidad",
      "Apta para microondas y lavavajillas",
      "Capacidad de 325ml",
      "Diseño que no pierde color con el uso",
    ],
  },
  {
    id: 22,
    category_id: 3,
    title: "Taza Linux",
    img_src: "/images/tazas/taza-linux.png",
    alt: null,
    price: 13.99,
    description: "Toma tu café con la libertad que solo Linux puede ofrecer.",
    is_on_sale: false,
    created_at: new Date(),
    features: [
      "Cerámica de alta calidad",
      "Apta para microondas y lavavajillas",
      "Capacidad de 325ml",
      "Diseño que no pierde color con el uso",
    ],
  },
  {
    id: 23,
    category_id: 3,
    title: "Taza GitHub",
    img_src: "/images/tazas/taza-github.png",
    alt: null,
    price: 14.99,
    description: "Colabora con tu café en esta taza con el logo de GitHub.",
    is_on_sale: false,
    created_at: new Date(),
    features: [
      "Cerámica de alta calidad",
      "Apta para microondas y lavavajillas",
      "Capacidad de 325ml",
      "Diseño que no pierde color con el uso",
    ],
  },
];

export default async function Page({ params }: { params: { id: string } }) {
  const productId = Number(params.id);
  const product = productsTable.find((product) => product.id === productId);

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
