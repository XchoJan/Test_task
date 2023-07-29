import axios from "axios";
export async function getData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos/12', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('catch error', error.message);
  }
}

