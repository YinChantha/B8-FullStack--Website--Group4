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

    const response = await axios.get(
      "http://34.124.252.231:8080/fixeddeposits",
      {
        params: params,
      }
    );

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
      const alldata = data.data.bankTermRate;
      return alldata;
    }
  } catch (err) {
    console.log(err);
  }
}

// getall fixdeposits list
// export async function getAllfixedepositlist() {
//   try {
//     // ----------------------
//     const data = {
//       bank: ["aba", "wing"],
//       currency: "KHR",
//       rateAt: "Maturity",
//     };

//     // Create a new URL object with your base URL
//     const baseUrl = "http://34.143.206.144:8080/fixeddeposits/hist";
//     const url = new URL(baseUrl);

//     // Add the query params using URLSearchParams
//     const queryParams = new URLSearchParams();

//     // Loop through the data object and add each query param
//     for (const key in data) {
//       const value = data[key];

//       // If the value is an array, add each item as a separate query param
//       if (Array.isArray(value)) {
//         value.forEach((item) => queryParams.append(key, item));
//       }
//       // Otherwise, add the single value as a query param
//       else {
//         queryParams.append(key, value);
//       }
//     }

//     // Add the query params to the URL
//     url.search = queryParams.toString();

//     // Get the final URL with the formatted query params
//     const finalUrl = url.toString();

//     console.log("finalUrl", finalUrl);
//     // ----------------------
//     const params = { ...queryParams };
//     const res = axios.get(finalUrl);

//     // Remove empty values from the query parameters
//     // Object.keys(params).forEach((key) => {
//     //   if (params[key] === "") {
//     //     delete params[key];
//     //   }
//     // });
//     // const queryString = new URLSearchParams(params).toString();
//     // console.log("queryString is here  : ", queryString);
//     // console.log(
//     //   "url response is here  : ",
//     //   `http://34.143.206.144:8080/fixeddeposits/hist?${queryString}currency=KHR&rateAt=Maturity`
//     // );

//     // `http://34.143.206.144:8080/fixeddeposits/hist?bank=aba&bank=wing&currency=KHR&rateAt=Maturity`

//     // const response = await axios.get(
//     //   // `http://34.143.206.144:8080/fixeddeposits/hist?${queryString}currency=KHR&rateAt=Maturity`
//     // );

//     if (res.status === 200) {
//       const alldata = res.data.bankTermRate;
//       return alldata;
//     }
//   } catch (error) {
//     // Handle error
//     console.error(error);
//   }
// }

// getall fixdeposits list
// export async function getAllfixedepositlist(queryParams) {
//   try {
//     // console.log(queryParams);
//     const params = { ...queryParams };

//     // Remove empty values from the query parameters
//     Object.keys(params).forEach((key) => {
//       if (params[key] === "") {
//         delete params[key];
//       }
//     });

//     const response = await axios.get(
//       "http://34.143.206.144:8080/fixeddeposits/hist",
//       {
//         params: params,
//       }
//     );

//     if (response.status === 200) {
//       const alldata = response.data;
//       return alldata;
//     }
//   } catch (error) {
//     // Handle error
//     console.error(error);
//   }
// }
export async function getAllfixeddepositlist(queryParams) {
  try {
    const { bank, ...restParams } = queryParams;

    const banks = bank.split("&").map((item) => item.split("=")[1]);
    const params = {
      ...restParams,
      bank: banks,
    };

    // Remove empty values from the query parameters
    Object.keys(params).forEach((key) => {
      if (params[key] === "") {
        delete params[key];
      }
    });

    const response = await axios.get(
      "http://34.143.206.144:8080/fixeddeposits/hist",
      {
        params: params,
      }
    );

    if (response.status === 200) {
      const alldata = response.data;
      return alldata;
    }
  } catch (error) {
    // Handle error
    console.error(error);
  }
}
