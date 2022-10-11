import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getProducts } from "./services/products-services";
import CreateForm from "./pages/create-product";
import DetailProduct from "./pages/detail-product";
import EditForm from "./pages/edit-product";
import Home from "./pages/home";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
`;

function App () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then ((products) => setProducts(products))
      .catch((error) => console.log(error))
      
  },[]);

  return(
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={products}/>}></Route>
          <Route path="/create" element={<CreateForm products={products}/>}></Route>
          <Route path="/:id" element={<DetailProduct></DetailProduct>}></Route>
          <Route path="/edit/:id" element={<EditForm></EditForm>}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App;