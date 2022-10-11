import apiFetch from "./api-fetch";

export function getProducts() {
  return apiFetch("/");
}

export function getProduct(id) {
  return apiFetch(`/${id}`);
}

export function createProduct(data) {
  return apiFetch("/", {body: data});
}

export function updateProduct(id, data) {
  return apiFetch(`/${id}`, {body: data, method: "PATCH"});
}

export function deleteProduct(id) {
  return apiFetch(`/${id}`, {method: "DELETE"});
}