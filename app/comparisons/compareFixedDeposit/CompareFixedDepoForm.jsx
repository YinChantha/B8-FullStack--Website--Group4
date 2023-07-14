import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import ReactPaginate from "react-paginate";
import {
  getAlldepositsBybank,
  getAllfixeddepositlist,
} from "../../api/fixeddeposits/getAlldeposits";
import ChartFilter from "../compareSavingAcc/ChartFilter";
import ChartComponent from "../compareSavingAcc/ChartBar";
const TABLE_HEAD = [
  "Month of ",
  "Month of",
  "Month of",
  "Month of",
  "Month of",
  "Month of",
];

const CompareFixedDepoForm = () => {
  const [data, setData] = useState([]);
  const [queryParams, setQueryParams] = useState({
    bank: "",
    currency: "KHR",
    rateAt: "Maturity",
  });
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const itemsPerPage = 4;
  // const pageRangeDisplayed = 3;
  // const marginPagesDisplayed = 1;
  // const [itemOffset, setItemOffset] = useState(0);
  // const endOffset = itemOffset + itemsPerPage;
  // const currentItems = data?.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil((data?.length || 0) / itemsPerPage);
  // const handlePageClick = (event) => {
  //   const selectedPage = event.selected;
  //   const newOffset = selectedPage * itemsPerPage;
  //   setItemOffset(newOffset);
  // };
  // const itemsPerPage = 4; // Number of items to display per page
  // const [currentPage, setCurrentPage] = useState(0);

  // // Calculate the index range of the current page
  // const startIndex = currentPage * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  // // Get the sliced data for the current page
  // // const displayedData = data.slice(startIndex, endIndex);
  // const displayedData = data.slice(0, itemsPerPage);

  // const totalPages = Math.ceil(data.length / itemsPerPage);

  // // const handlePageClick = (selectedPage) => {
  // //   setCurrentPage(selectedPage.selected);
  // // };

  // const handlePageClick = (selectedPage) => {
  //   const newStartIndex = selectedPage.selected * itemsPerPage;
  //   const newEndIndex = newStartIndex + itemsPerPage;
  //   setCurrentPage(selectedPage.selected);
  //   // Update the displayed data based on the new index range
  //   const newDisplayedData = data.slice(newStartIndex, newEndIndex);
  //   // Use newDisplayedData directly or assign it to a new variable
  //   // depending on how you want to use it in your component
  // };

  // const fetchDataWithParams = async (e) => {
  //   e.preventDefault();
  //   console.log("Selected value:", data);
  //   try {
  //     const res = await getAlldepositsBybank();
  //     setData(res.data.fixdDeposits);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getAlldepositsBybank();
  //       setData(res.data.fixdDeposits);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllfixeddepositlist(queryParams);
        setData(res.data.bankTermRate);
        console.log("data is here : ", res.data.bankTermRate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
            // onClick={fetchDataWithParams}
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
        <ChartComponent />
        {/* <div className="mt-6">
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
                {currentItems.map((data, index) => {
                    const isLast = index === currentItems.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    const uniqueKey = `${data.bank}-${index}`;

                    return (
                      <tr key={uniqueKey}>
                        <td className={classes}>
                          <div className="flex items-center gap-2">
                            <img
                              className="h-14 w-14 rounded-full"
                              src={data.logo}
                              alt="logo"
                            />
                            <div>
                              <p className="text-gray-900 font-semibold text-sm">
                                {data.bank}
                              </p>
                              <p className="text-gray-500 font-serif text-sm">
                                {data.currency}
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
                              {data.rate} %
                            </Typography>
                            <p className="text-gray-500 font-serif text-sm">
                              Rate at {data.rateAt}
                            </p>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data.term}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data.openwith}
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
                            {data.condition}
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
                            {data.update_date}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          )}
        </div> */}

        {/* data of the table term */}

        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Bank
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Term 1
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Term 2
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Term 3
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Term 4
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Term 5
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        ABA
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 3%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        023-7-8: 3.88 %,<br></br> 2023-7-10: 3.88%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 4.75%, <br></br>2023-7-10: 4.75%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 5.25%,<br></br>
                        2023-7-10: 5.25%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 5.75%,<br></br>
                        2023-7-10: 5.75%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        ACLEDA
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 3.33%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 3.9 %,<br></br> 2023-7-10: 3.9%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 4.75%, <br></br>2023-7-10: 4.75%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 5%,<br></br>
                        2023-7-10: 5.%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 5.3%,<br></br>
                        2023-7-10: 5.3%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        SATHAPANA
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 4%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 5.5 %,<br></br> 2023-7-10: 5.5%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 4.75%, <br></br>2023-7-10: 4.75%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 6.25%,<br></br>
                        2023-7-10: 6.25%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        2023-7-8: 6.75%,<br></br>
                        2023-7-10: 6.75%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* data of the table term */}
        {/* Pagination controls */}
        {/* <div className="flex justify-center mt-8">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={marginPagesDisplayed}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="flex justify-center"
            pageClassName="inline-block px-2 py-1 mx-1 text-gray-700 cursor-pointer"
            activeClassName="bg-blue-500 text-white"
            previousClassName="inline-block px-2 py-1 mx-1 text-gray-700 cursor-pointer"
            nextClassName="inline-block px-2 py-1 mx-1 text-gray-700 cursor-pointer"
            breakClassName="inline-block px-2 py-1 mx-1 text-gray-700"
          />
        </div> */}
      </div>
    </div>
  );
};

export default CompareFixedDepoForm;
