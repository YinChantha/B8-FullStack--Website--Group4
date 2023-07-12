import axios from "axios";

// getall fixdeposits
export async function getAllfixedeposits(queryParams) {
  try {
    // console.log(queryParams);
    const params = { ...queryParams };

    // Remove empty values from the query parameters
    Object.keys(params).forEach((key) => {
      if (params[key] === "") {
        delete params[key];
      }
    });
    // console.log(params
    //   );
    const response = await axios.get(
      "http://34.124.252.231:8080/fixeddeposits",
      {
        params: params,
      }
    );
    // Process the response data here
    // console.log(response.data);

    if (response.status === 200) {
      const alldata = response.data;
      return alldata;
    }
  } catch (error) {
    // Handle error
    console.error(error);
  }
}
// getall fixdeposits bank
export async function getAlldepositsBybank(bank) {
  try {
    const data = await axios.get(
      `http://34.143.206.144:8080/fixeddeposits/all    `
    );
    if (data.status === 200) {
      const alldata = data.data;
      return alldata;
    }
  } catch (err) {
    console.log(err);
  }
}
