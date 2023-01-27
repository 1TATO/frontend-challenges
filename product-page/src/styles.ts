import styled from 'styled-components';

export const ProductContainer = styled.main`
  padding: 0 8.25rem;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20rem;

  justify-content: center;

  height: 648px;
  width: 364.5px;

  button {
    margin-left: 60%;

    cursor: pointer;

    background: none;
    border: none;

    img {
      height: 2rem;

      transition: transform 0.2s;

      &:hover {
        transform: scale(1.08);
      }
    }

    svg {
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.08);
      }
    }
  }

  div {
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

export const ProductDescription = styled.div`
  span {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 0.625rem;
  }

  h1 {
    font-family: 'Crimson Pro', serif;
    font-weight: 600;
    font-size: 2rem;

    margin-top: 1rem;
  }

  p {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    margin-top: 1rem;
  }

  button {
    cursor: pointer;
    margin-top: 1.25rem;
    border-radius: 999999px;
    padding: 8px 16px;

    border: 0.5px solid #271a45;
    background: none;

    text-transform: uppercase;
    font-size: 0.75rem;

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.08);
    }
  }
`;
