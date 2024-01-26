import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/products-services";
import ListProducts from "../components/list-products";
import { Button } from "../styles/buttons";
import { typography } from "../styles/typography";
import styled from "@emotion/styled";

const Title = styled.p`
  ${typography.semibold.lg}
  margin-bottom: 34px;
`;

const ListContainer = styled.div`
  height: 100%;
  min-width: 370px;
  overflow: overlay;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/create");
  };

  useEffect(() => {
    getProducts()
      .then ((products) => setProducts(products))
      .catch((error) => console.log(error))
      
  },[]);
  
  return (
    <Container>
      <Title>Products dashboard</Title>
      <ListContainer>
      {products.map((product) => {
        return(
          <ListProducts product={product}/>
        )
      })}
      </ListContainer>
      <Button onClick={handleClick}>Create product</Button>
    </Container>
  )
}

export default Home;
