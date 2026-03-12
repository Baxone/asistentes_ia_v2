import styles from './ProductCard.module.css';

export interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  category: string;
  onAddToCart: (id: string, quantity: number) => void;
}

export function ProductCard({
  id,
  image,
  name,
  price,
  category,
  onAddToCart,
}: ProductCardProps) {
  const handleClick = () => {
    onAddToCart(id, 1);
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={name}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price.toFixed(2)} €</p>
        <button
          type="button"
          className={styles.button}
          onClick={handleClick}
        >
          Añadir al carrito
        </button>
      </div>
    </article>
  );
}
