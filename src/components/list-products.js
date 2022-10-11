import { useEffect, useState } from "react"
import React from "react"
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { Link, useNavigate } from "react-router-dom";
import DeleteProduct from "./delete-product";
import { typography } from "../styles/typography";
import { RiDeleteBinFill, RiEditBoxFill } from "react-icons/ri";
import Modal from "./modal";

const Title = styled.a`
  ${typography.semibold.md}
  color: ${colors.black};
  text-decoration: none;
  text-align:center;
  margin: auto;
`;

const Icon = styled.a`
  color: ${colors.orange};
`;

const Price = styled.p`
  ${typography.semibold.lg}
  color: ${colors.orange};
  margin-bottom: 8px;
`;

const ProductPicture = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 100%;
  display: flex;
  position: absolute;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`
const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
`;

const FoodCard = styled.div`
  position: relative;
  width: 156px;
  height: 250px;
  top: 2px;
  float: left;
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const ProductCard = styled.div`
  width: 156px;
  height: 212px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 18px 13px;
  background: ${colors.white};
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
`;

const ProductOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 18px;
`;

const Other = styled.div`
  display: flex;
  align-items: flex-end;
`;


const ListProducts = ({product}) => {
  const [open, setOpen] = useState(false)

  return(
    <div>
      <FoodCard key={product.id}>
        <ProductPicture src={product.picture_url}/>
        <Other>
        <ProductCard>
        <div>
          <ProductData>
            <Title href={`/${product.id}`}>{product.name}</Title>
            <Price>${product.price}</Price>
          </ProductData>
          <ProductOptions>
            <Icon href={`/edit/${product.id}`}><RiEditBoxFill/></Icon>
            <Modal open={open} close={() => setOpen(false)}><DeleteProduct id={product.id}/></Modal>
            <Icon onClick={() => setOpen(true)}><RiDeleteBinFill/></Icon>
          </ProductOptions>
        </div>
        </ProductCard>
        </Other>
      </FoodCard>
    </div>
  )
}

export default ListProducts;