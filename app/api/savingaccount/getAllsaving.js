import axios from "axios";

export async function getAllsaving(queryParams) {
  try {
    const params = { ...queryParams };
    Object.keys(params).forEach((key) => {
      if (params[key] === "") {
        delete params[key];
      }
    });
    const response = await axios.get("http://34.143.206.144:8080/savings/all", {
      params: params,
    });
    if (response.status === 200) {
      const allData = response.data;
      console.log(allData);
      return allData;
    }
  } catch (error) {
    console.error(error);
  }
}
