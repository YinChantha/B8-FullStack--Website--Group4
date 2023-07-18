import axios from "axios";
import qs from "querystring";
// getall fixdeposits
// export async function getAllfixedeposits(queryParams) {
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
//       "http://34.124.252.231:8080/fixeddeposits",
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

// get all fixdeposite defualt page
export async function getAlldepositsdefualt() {
  try {
    const data = await axios.get(
      `http://35.240.154.65:8080/fixeddeposits/bank-term?currency=KHR&rateAt=Maturity&term=6&term=12&term=24&term=48      `
    );
    if (data.status === 200) {
      const alldata = data.data;
      return alldata;
    }
  } catch (err) {
    console.log(err);
  }
}
// getall fixdeposits bank
export async function fetchAllBanks() {
  try {
    const data = await axios.get(
      `http://35.240.154.65:8080/fixeddeposits/bank-term?currency=KHR&rateAt=Maturity`
    );
    if (data.status === 200) {
      const alldata = data.data;
      return alldata;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getAllfixeddepositlist(queryParams) {
  try {
    const response = await axios.get(
      "http://35.240.154.65:8080/fixeddeposits/bank-term",
      {
        params: queryParams,
        paramsSerializer: (params) => {
          return qs.stringify(params);
        },
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

// get All fixed deposit history
export async function getAllfixeddeposithistory(queryParams) {
  try {
    const response = await axios.get(
      "http://35.240.154.65:8080/fixeddeposits/hist",
      {
        params: queryParams,
        paramsSerializer: (params) => {
          return qs.stringify(params);
        },
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

// get all fixdeposite line chart by defualt page
export async function getAlldepositsDefualtLineChart() {
  try {
    const data = await axios.get(
      `http://35.240.154.65:8080/fixeddeposits/hist?currency=KHR&rateAt=Maturity&term=6&term=12&term=24&term=48`
    );
    if (data.status === 200) {
      const alldata = data.data;
      return alldata;
    }
  } catch (err) {
    console.log(err);
  }
}