import { ProductCard } from './ProductCard/ProductCard';

const sampleProduct = {
  id: '1',
  image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
  name: 'Reloj Clásico',
  price: 89.99,
  category: 'Accesorios',
};

function App() {
  const handleAddToCart = (id: string, quantity: number) => {
    console.log(`Añadido al carrito: producto ${id}, cantidad ${quantity}`);
    alert(`Producto ${id} añadido al carrito (cantidad: ${quantity})`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-md">
        <h1 className="mb-8 text-center text-2xl font-bold text-gray-900">
          ProductCard Demo
        </h1>
        <ProductCard
          {...sampleProduct}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default App;
