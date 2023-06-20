import { ADD_TO_CART_BUTTON_TXT } from '@/helpers/literals';
import { mockedProducts } from '@/__mocks__/products';
import Card from '@/components/ui/Card';
import { styles } from './styles';

const Products: React.FC = () => (
  <main css={styles.wrapper}>
    {mockedProducts.map((product) => (
      <Card
        key={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        category={product.category}
        thumbnail={product.thumbnail}
        actionText={ADD_TO_CART_BUTTON_TXT}
        onAddToCart={() => {}}
      />
    ))}
  </main>
);

export default Products;
