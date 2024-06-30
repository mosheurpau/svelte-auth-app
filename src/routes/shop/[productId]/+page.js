export const load = async ({ fetch, params }) => {
  const fetchProduct = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  };
  const product = await fetchProduct(params.productId);
  return {
    product,
  };
};
