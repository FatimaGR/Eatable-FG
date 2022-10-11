import { deleteProduct } from "../services/products-services"
import { ConfirmBtn } from "../styles/buttons"
import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";

const Title = styled.p`
  ${typography.semibold.lg}
  color: ${colors.black};
`;

const ConfirmCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const DeleteProduct = ({id}) => {
  function refreshPage() {
    window.location.reload(false);
  }

  function handleDelete(){
    deleteProduct(id)
    .then(refreshPage)
    .catch(error => console.log(error))
  };

  return(
    <ConfirmCard>
      <Title>Are you sure?</Title>
      <ConfirmBtn onClick={handleDelete}>Yes, delete it!</ConfirmBtn>
    </ConfirmCard>
  )
}

export default DeleteProduct;