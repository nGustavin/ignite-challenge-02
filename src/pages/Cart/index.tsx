import React from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

interface ProductFormatted extends Product {
  priceFormatted?: string;
}

const Cart = (): JSX.Element => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const data: ProductFormatted[] = [...cart]
  
  data.map((item: ProductFormatted) => {
    item.priceFormatted = formatPrice(item.price)
  })

  const total =
    formatPrice(
      cart.reduce((sumTotal, product) => {
        sumTotal += product.price
        return sumTotal
      }, 0)
    )

  function handleProductIncrement(product: Product) {
    // TODO
  }

  function handleProductDecrement(product: Product) {
    // TODO
  }

  function handleRemoveProduct(productId: number) {
    // TODO
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {data.map(({title, image, amount, id, price, priceFormatted}) => (

          <tr data-testid="product">
          <td>
            <img src={image} alt={title} />
          </td>
          <td>
            <strong>{title}</strong>
            <span>{priceFormatted}</span>
          </td>
          <td>
            <div>
              <button
                type="button"
                data-testid="decrement-product"
              // disabled={product.amount <= 1}
              // onClick={() => handleProductDecrement()}
              >
                <MdRemoveCircleOutline size={20} />
              </button>
              <input
                type="text"
                data-testid="product-amount"
                readOnly
                value={2}
              />
              <button
                type="button"
                data-testid="increment-product"
              // onClick={() => handleProductIncrement()}
              >
                <MdAddCircleOutline size={20} />
              </button>
            </div>
          </td>
          <td>
            <strong>R$ 359,80</strong>
          </td>
          <td>
            <button
              type="button"
              data-testid="remove-product"
            // onClick={() => handleRemoveProduct(product.id)}
            >
              <MdDelete size={20} />
            </button>
          </td>
        </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
