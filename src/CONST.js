
export const IMAGE_URL =(id)=> `${import.meta.env.BASE_URL}/src/images/${id}.jpg`;
export const beautifyPrice = (price) => price.toString().slice(0,-3) + ' ' + price.toString().slice(-3) + ' ₽'