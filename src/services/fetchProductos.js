
export const fetchProductos = async () => {
	const url = "https://dummyjson.com/products?limit=12";

  const respuesta = await fetch(url);

  const datos = await respuesta.json();
  return datos.products;
	
}
