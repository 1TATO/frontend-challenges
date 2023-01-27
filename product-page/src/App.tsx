import { X } from 'phosphor-react';
import { useState } from 'react';

import productImg from './assets/product.png';
import productButtonImg from './assets/productButton.svg';
import productGif from './assets/productGif.gif';

import { ProductContainer, ProductDescription, ProductImage } from './styles';
import { GlobalStyle } from './styles/global';

export function App() {
  const [isGif, setIsGif] = useState(false);

  function changeImageState() {
    setIsGif(!isGif);
  }

  return (
    <>
      <GlobalStyle />

      <ProductContainer>
        <ProductImage>
          <button onClick={changeImageState}>
            {isGif ? <X size={24} /> : <img src={productButtonImg} alt="" />}
          </button>

          <div>
            {isGif ? (
              <img src={productGif} alt="" />
            ) : (
              <img src={productImg} alt="" />
            )}
          </div>
        </ProductImage>

        <ProductDescription>
          <span>CÓDIGO: 42404</span>
          <h1>Sofá Margot II - Rosé</h1>
          <p>R$ 4.000</p>

          <button>Adicionar à cesta</button>
        </ProductDescription>
      </ProductContainer>
    </>
  );
}
