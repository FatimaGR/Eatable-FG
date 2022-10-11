import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/products-services';
import Input from '../components/input';
import styled from "@emotion/styled";
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';
import { Button } from '../styles/buttons';

const Title = styled.p`
  ${typography.semibold.lg}
  color: ${colors.black};
  margin-bottom: 64px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const FormContent = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CreateForm = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    picture_url: "",
  })

  const handleClick = () => {
    navigate("/");
  };

  function handleSubmit(e){
    e.preventDefault();
    createProduct(formData)
    .then(handleClick)
    .catch(error => console.log(error))
  }

  function handleChange(event){
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value});
  }

  return (
    <FormContainer>
      <Title>Create Product</Title>
      <FormContent onSubmit={handleSubmit}>
        <div>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            label="Name"
          />
          <Input
            name="price"
            value={formData.price}
            onChange={handleChange}
            label="Price"
          />
          <Input
            name="description"
            value={formData.description}
            onChange={handleChange}
            label="Description"
          />
          <Input
            name="category"
            value={formData.category}
            onChange={handleChange}
            label="Category"
          />
          <Input
            type="url"
            name="picture_url"
            value={formData.picture_url}
            onChange={handleChange}
            label="Picture URL"
          />
        </div>
        <div>
          <Button type="submit">Create</Button>
        </div>
      </FormContent>
    </FormContainer>
  )
}

export default CreateForm;