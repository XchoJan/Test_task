import axios from "axios";
export async function getData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
    return response.data;
  } catch (error) {
    console.log('catch error', error.message);
  }
}

