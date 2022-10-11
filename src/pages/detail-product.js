import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../services/products-services";
import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import { Button } from "../styles/buttons";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
`;

const DetailContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 241px;
  height: 241px;
  object-fit: cover;
  border-radius: 100%;
  margin: 46px 46px 91px 45px;
  box-shadow: 0px 100px 200px rgba(57, 57, 57, 0.1);
`;

const Title = styled.p`
  ${typography.semibold.xl}
  margin-bottom: 10px;
`;

const Price = styled.p`
  ${typography.semibold.xl}
  color: ${colors.orange};
  margin-bottom: 27px;
`;

const SubTitle = styled.p`
  ${typography.semibold.md}
  margin-bottom: 4px;
`;

const Description = styled.p`
  ${typography.regular.sm}
  margin-bottom: 120px;
`;

const DetailProduct = () => {
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()

  let params = useParams()
  useEffect(()=>{
    getProduct(params.id)
      .then ((product) => setProduct(product))
      .catch((error) => console.log(error))
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  console.log(product)
  return (
    <DetailContainer>
      <div>
        <ProductImage src={product?.picture_url}/>
        <DetailContent>
          <Title>{product?.name}</Title>
          <Price>${product?.price}</Price>
        </DetailContent>  
        <SubTitle>Description</SubTitle>
        <Description>{product?.description}</Description>
      </div>
      <div>
        <Button onClick={handleClick}>Go back</Button>
      </div>
    </DetailContainer>
  )
}

export default DetailProduct;