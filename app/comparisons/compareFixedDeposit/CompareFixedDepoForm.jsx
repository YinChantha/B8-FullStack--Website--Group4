import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import ReactPaginate from "react-paginate";
import { getAlldepositsBybank } from "../../api/fixeddeposits/getAlldeposits";
const TABLE_HEAD = [
  "Company",
  "Interest Rate",
  "Term",
  "Openwith",
  "Condition",
  "Date",
];

const TABLE_ROWS = [
  {
    bank: "WOORI",
    logo: "hi",
    rate: 9.1,
    rateAt: "0",
    currency: "KHR",
    term: 36,
    condition: "FIX DESPOSIT",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "SHINHAN",
    logo: "hi",
    rate: 9.1,
    rateAt: "0",
    currency: "KHR",
    term: 36,
    condition: "FIX DESPOSIT",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "ABA",
    logo: "https://i.pinimg.com/originals/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg",
    rate: 9,
    rateAt: "0",
    currency: "KHR",
    term: 60,
    condition: "FIX DEPOSIT",
    openwith: "COUNTER",
    update_date: "2023-7-8",
  },
  {
    bank: "ACLEDA",
    logo: "https://www.acledabank.com.kh/kh/assets/download_material/download-logo-blue.jpg",
    rate: 8.3,
    rateAt: "3",
    currency: "KHR",
    term: 72,
    condition: "Long Term",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "ABA",
    logo: "https://i.pinimg.com/originals/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg",
    rate: 9,
    rateAt: "0",
    currency: "KHR",
    term: 60,
    condition: "FIX DEPOSIT",
    openwith: "COUNTER",
    update_date: "2023-7-8",
  },
  {
    bank: "ACLEDA",
    logo: "https://www.acledabank.com.kh/kh/assets/download_material/download-logo-blue.jpg",
    rate: 8.3,
    rateAt: "3",
    currency: "KHR",
    term: 72,
    condition: "Long Term",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "WOORI",
    logo: "hi",
    rate: 9.1,
    rateAt: "0",
    currency: "KHR",
    term: 36,
    condition: "FIX DESPOSIT",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "SHINHAN",
    logo: "hi",
    rate: 9.1,
    rateAt: "0",
    currency: "KHR",
    term: 36,
    condition: "FIX DESPOSIT",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "ABA",
    logo: "https://i.pinimg.com/originals/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg",
    rate: 9,
    rateAt: "0",
    currency: "KHR",
    term: 60,
    condition: "FIX DEPOSIT",
    openwith: "COUNTER",
    update_date: "2023-7-8",
  },
  {
    bank: "ACLEDA",
    logo: "https://www.acledabank.com.kh/kh/assets/download_material/download-logo-blue.jpg",
    rate: 8.3,
    rateAt: "3",
    currency: "KHR",
    term: 72,
    condition: "Long Term",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "ABA",
    logo: "https://i.pinimg.com/originals/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg",
    rate: 9,
    rateAt: "0",
    currency: "KHR",
    term: 60,
    condition: "FIX DEPOSIT",
    openwith: "COUNTER",
    update_date: "2023-7-8",
  },
  {
    bank: "ACLEDA",
    logo: "https://www.acledabank.com.kh/kh/assets/download_material/download-logo-blue.jpg",
    rate: 8.3,
    rateAt: "3",
    currency: "KHR",
    term: 72,
    condition: "Long Term",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "WOORI",
    logo: "hi",
    rate: 9.1,
    rateAt: "0",
    currency: "KHR",
    term: 36,
    condition: "FIX DESPOSIT",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "SHINHAN",
    logo: "hi",
    rate: 9.1,
    rateAt: "0",
    currency: "KHR",
    term: 36,
    condition: "FIX DESPOSIT",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "ABA",
    logo: "https://i.pinimg.com/originals/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg",
    rate: 9,
    rateAt: "0",
    currency: "KHR",
    term: 60,
    condition: "FIX DEPOSIT",
    openwith: "COUNTER",
    update_date: "2023-7-8",
  },
  {
    bank: "ACLEDA",
    logo: "https://www.acledabank.com.kh/kh/assets/download_material/download-logo-blue.jpg",
    rate: 8.3,
    rateAt: "3",
    currency: "KHR",
    term: 72,
    condition: "Long Term",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "ABA",
    logo: "https://i.pinimg.com/originals/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg",
    rate: 9,
    rateAt: "0",
    currency: "KHR",
    term: 60,
    condition: "FIX DEPOSIT",
    openwith: "COUNTER",
    update_date: "2023-7-8",
  },
  {
    bank: "ACLEDA",
    logo: "https://www.acledabank.com.kh/kh/assets/download_material/download-logo-blue.jpg",
    rate: 8.3,
    rateAt: "3",
    currency: "KHR",
    term: 72,
    condition: "Long Term",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "ABA",
    logo: "https://i.pinimg.com/originals/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg",
    rate: 9,
    rateAt: "0",
    currency: "KHR",
    term: 60,
    condition: "FIX DEPOSIT",
    openwith: "COUNTER",
    update_date: "2023-7-8",
  },
  {
    bank: "ACLEDA",
    logo: "https://www.acledabank.com.kh/kh/assets/download_material/download-logo-blue.jpg",
    rate: 8.3,
    rateAt: "3",
    currency: "KHR",
    term: 72,
    condition: "Long Term",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
  {
    bank: "ABA",
    logo: "https://i.pinimg.com/originals/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg",
    rate: 9,
    rateAt: "0",
    currency: "KHR",
    term: 60,
    condition: "FIX DEPOSIT",
    openwith: "COUNTER",
    update_date: "2023-7-8",
  },
  {
    bank: "ACLEDA",
    logo: "https://www.acledabank.com.kh/kh/assets/download_material/download-logo-blue.jpg",
    rate: 8.3,
    rateAt: "3",
    currency: "KHR",
    term: 72,
    condition: "Long Term",
    openwith: "MOBILE",
    update_date: "2023-7-8",
  },
];

const CompareFixedDepoForm = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 4; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the index range of the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the sliced data for the current page
  const displayedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const fetchDataWithParams = async (e) => {
    e.preventDefault();
    console.log("Selected value:", data);
    try {
      const res = await getAlldepositsBybank();
      setData(res.data.fixdDeposits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAlldepositsBybank();
        setData(res.data.fixdDeposits);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const pageRangeDisplayed = 2;
  const marginPagesDisplayed = 1; 
  return (
    <div>
      <div className="p-10 bg-gray-200 rounded-md mt-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle">
                Select your bank
              </label>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1288_92357)">
                  <path
                    d="M9.99996 6.67078V10.0041M9.99996 13.3374H10.0083M18.3333 10.0041C18.3333 14.6065 14.6023 18.3374 9.99996 18.3374C5.39759 18.3374 1.66663 14.6065 1.66663 10.0041C1.66663 5.40174 5.39759 1.67078 9.99996 1.67078C14.6023 1.67078 18.3333 5.40174 18.3333 10.0041Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1288_92357">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.00415039)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <select className="selectStyle">
              <option>Less than a year</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
              <option value="4">4 months</option>
              <option value="5">5 months</option>
              <option value="6">6 months</option>
              <option value="6">7 months</option>
              <option value="6">8 months</option>
              <option value="6">9 months</option>
              <option value="6">10 months</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle">
                Account Type
              </label>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1288_92357)">
                  <path
                    d="M9.99996 6.67078V10.0041M9.99996 13.3374H10.0083M18.3333 10.0041C18.3333 14.6065 14.6023 18.3374 9.99996 18.3374C5.39759 18.3374 1.66663 14.6065 1.66663 10.0041C1.66663 5.40174 5.39759 1.67078 9.99996 1.67078C14.6023 1.67078 18.3333 5.40174 18.3333 10.0041Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1288_92357">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.00415039)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <select className="selectStyle">
              <option>Less than a year</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
              <option value="4">4 months</option>
              <option value="5">5 months</option>
              <option value="6">6 months</option>
              <option value="6">7 months</option>
              <option value="6">8 months</option>
              <option value="6">9 months</option>
              <option value="6">10 months</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between ">
              <label for="value" className="labelStyle">
                Select Terms
              </label>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1288_92362)">
                  <path
                    d="M10.0001 6.67078V10.0041M10.0001 13.3374H10.0084M18.3334 10.0041C18.3334 14.6065 14.6025 18.3374 10.0001 18.3374C5.39771 18.3374 1.66675 14.6065 1.66675 10.0041C1.66675 5.40174 5.39771 1.67078 10.0001 1.67078C14.6025 1.67078 18.3334 5.40174 18.3334 10.0041Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1288_92362">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.00415039)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <select className="selectStyle ">
              <option>Less than a year</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
              <option value="4">4 months</option>
              <option value="5">5 months</option>
              <option value="6">6 months</option>
              <option value="6">7 months</option>
              <option value="6">8 months</option>
              <option value="6">9 months</option>
              <option value="6">10 months</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle">
                Select currency
              </label>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1288_92362)">
                  <path
                    d="M10.0001 6.67078V10.0041M10.0001 13.3374H10.0084M18.3334 10.0041C18.3334 14.6065 14.6025 18.3374 10.0001 18.3374C5.39771 18.3374 1.66675 14.6065 1.66675 10.0041C1.66675 5.40174 5.39771 1.67078 10.0001 1.67078C14.6025 1.67078 18.3334 5.40174 18.3334 10.0041Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1288_92362">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.00415039)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <select className="selectStyle">
              <option>Less than a year</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
              <option value="4">4 months</option>
              <option value="5">5 months</option>
              <option value="6">6 months</option>
              <option value="6">7 months</option>
              <option value="6">8 months</option>
              <option value="6">9 months</option>
              <option value="6">10 months</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-5 ">
          <button
            onClick={fetchDataWithParams}
            type="submit"
            className="redButton"
          >
            Update result
          </button>
        </div>
      </div>
      <div className="mt-20">
        <div className="text-center">
          <h1 className="text-[#101828] font-medium text-xl">
            Good news! We’ve found{" "}
            <span className="text-[#12B76A]">51 products</span> for you to take
            a look at.
          </h1>
          <p className="text-[#475467] text-lg font-normal mt-5">
            Our platform keeps you updated on the most current and exciting
            promotions from banks and financial institutions in Cambodia.
          </p>
        </div>
        <div className="mt-6">
          {loading ? (
            <div className="flex justify-center items-center h-full mt-32">
              <img
                className="h-16 w-16"
                src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                alt="loading"
              />
            </div>
          ) : (
            <Card className="h-full w-full">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {displayedData.map(
                    (
                      {
                        logo,
                        bank,
                        rate,
                        rateAt,
                        currency,
                        term,
                        condition,
                        openwith,
                        update_date,
                      },
                      index
                    ) => {
                      const isLast = index === displayedData.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                      const uniqueKey = `${bank}-${index}`;

                      return (
                        <tr key={bank}>
                          <td className={classes}>
                            <div className="flex items-center gap-2">
                              <img
                                className="h-14 w-14 rounded-full"
                                src={logo}
                                alt="logo"
                              />
                              <div>
                                <p className="text-gray-900 font-semibold text-sm">
                                  {bank}
                                </p>
                                <p className="text-gray-500 font-serif text-sm">
                                  {currency}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className={classes}>
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="text-gray-900 font-semibold text-sm"
                              >
                                {rate} %
                              </Typography>
                              <p className="text-gray-500 font-serif text-sm">
                                Rate at {rateAt}
                              </p>
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {term}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {openwith}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              as="a"
                              href="#"
                              variant="small"
                              color="blue"
                              className="text-gray-900 font-semibold text-sm"
                            >
                              {condition}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              as="a"
                              href="#"
                              variant="small"
                              color="blue"
                              className="text-gray-900 font-semibold text-sm"
                            >
                              {update_date}
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </Card>
          )}
        </div>
        {/* Pagination controls */}
        <div className="flex justify-center mt-8">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={marginPagesDisplayed}
            pageCount={totalPages}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="flex justify-center"
            pageClassName="inline-block px-2 py-1 mx-1 text-gray-700 cursor-pointer"
            activeClassName="bg-blue-500 text-white"
            previousClassName="inline-block px-2 py-1 mx-1 text-gray-700 cursor-pointer"
            nextClassName="inline-block px-2 py-1 mx-1 text-gray-700 cursor-pointer"
            breakClassName="inline-block px-2 py-1 mx-1 text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default CompareFixedDepoForm;
