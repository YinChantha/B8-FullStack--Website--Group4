import axios from "axios";

// export const getAllfixeddeposits = async () => {
//   const response = await axios.get("http://34.124.252.231:8080/fixeddeposits");
//   return response.data;
// };
export async function getAllfixeddeposits() {
  try {
    const data = await axios.get(`http://34.124.252.231:8080/fixeddeposits/all`);
    if (data.status === 200) {
      const alldata = data.data;
      return alldata;
    }
  } catch (err) {
    console.log(err);
  }
}
