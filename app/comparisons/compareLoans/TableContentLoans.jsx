import React, { useEffect, useState } from "react";
import Link from "next/link";
import BankInfoLoans from "./BankInfoLoans";
import data from "/public/data.json";
import ChooseSavAccListLoans from "./ChooseSavAccListLoans";
import KnowSaveAcc from "./KnowSaveAcc";
import SocialLink from "@/app/components/SocialLink";

const TableContentLoans = () => {
  // what to know about saving accounts
  const [linkClickedLoans, setLinkClickedLoans] = useState(false);
  // how to choose a saving account
  const [linkChooseSaveAccLoans, setlinkChooseSaveAccLoans] = useState(false);
  // best saving accounts and rates
  const [linkBestSaveAccLoans, setlinkBestSaveAccLoans] = useState(false);

  const tableContent = "text-gray-500 font-semibold text-base";
  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById("knowsaveaccloans");
      const section1 = document.getElementById("choosesaveaccloans");
      const section2 = document.getElementById("aveacc");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setLinkClickedLoans(true);
      }
      if (section1) {
        section.scrollIntoView({ behavior: "smooth" });
        setlinkChooseSaveAccLoans(true);
      }
      if (section2) {
        section.scrollIntoView({ behavior: "smooth" });
        setlinkBestSaveAccLoans(true);
      }
    };

    const handleLinkClick = () => {
      scrollToSection();
    };

    const link = document.querySelector("Link");
    if (link) {
      link.addEventListener("click", handleLinkClick);
    }

    return () => {
      if (link) {
        link.removeEventListener("click", handleLinkClick);
      }
    };
  }, []);
  return (
    <div>
      {/* table of content and best savings... */}
      <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row py-16 md:gap-[60px] ">
        <div className="hidden sm:hidden md:block md:flex-col md:gap-8 max-w-[308px]">
          <hr className="border-b-1 border-gray-100 md:mb-8" />
          <div className="flex flex-col gap-4 min-w-[264px]">
            <h1 className="text-red-600 font-semibold text-base">
              Table of contents
            </h1>
            <div className="flex flex-col gap-3">
              <Link
                href="/comparisons/compareLoans#savingaccloans"
                className={`${tableContent}`}
                onClick={() => setlinkBestSaveAccLoans(true)}
              >
                Best savings accounts and rates
              </Link>
              <Link
                href="/comparisons/compareLoans#choosesaveaccloans"
                className={`${tableContent}`}
                onClick={() => setlinkChooseSaveAccLoans(true)}
              >
                How to choose a savings account
              </Link>
              <Link
                href="/comparisons/compareLoans#knowsaveaccloans"
                onClick={() => setLinkClickedLoans(true)}
                className={`${tableContent}`}
              >
                What to know about savings accounts
              </Link>
            </div>
          </div>
          <hr className="border-b-1 border-gray-100 md:my-8" />
          {/* social link component */}
          <SocialLink />
        </div>

        <div>
          {/* best saving accounts info */}
          <div
            id="savingaccloans"
            className={`${linkBestSaveAccLoans ? "translate-y-20" : ""}`}
          >
            <h1 className="text-gray-900 font-semibold text-3xl">
              Best savings accounts and rates in June 2023
            </h1>
            <p className="mt-6 text-[#667085] text-lg">
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id.
            </p>
            <p className="mt-5 mb-12 text-[#667085] text-lg">
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.
            </p>
            {/* chipmong bank */}
            <div className="flex flex-col gap-6">
              <BankInfoLoans />
              <BankInfoLoans />
              <BankInfoLoans />
            </div>
            {/* more text below bank info */}
            {/* use style "bodyText" in body */}
            <div className="bodyText mt-6 flex flex-col gap-6 ">
              <p className="">{data.textBelowOverview.text1}</p>
              <p className="">{data.textBelowOverview.text2}</p>
              <p className="">{data.textBelowOverview.text3}</p>
            </div>
            <div className="mt-12">
              <h1 className="titleText">Software and tools</h1>
              <p className="bodyText mt-4 ">{data.softwareTools}</p>
            </div>
            <div>
              <h1 className="titleText mt-12">Other resources</h1>
              <p className="bodyText mt-12">{data.otherResources.resource1}</p>
              <p className="bodyText mt-6"> {data.otherResources.resource2}</p>
            </div>
          </div>
          <hr className="border-b-1 border-gray-100 my-12" />
          {/* how to choose a savings account className={styles.marginTop}*/}
          <div
            id="choosesaveaccloans"
            className={`${linkChooseSaveAccLoans ? "translate-y-20" : ""}`}
          >
            <h1 className="text-[#101828] font-semibold text-3xl">
              How to choose a savings account
            </h1>
            <p className="bodyText mt-6">{data.savingAcc.saveA1}</p>
            <p className="bodyText mt-5">{data.savingAcc.saveA2}</p>
            <ChooseSavAccListLoans />
          </div>
          <hr className="border-b-1 border-gray-100 my-12" />
          {/* what to know about savings accounts */}
          <div
            id="knowsaveaccloans"
            className={`${linkClickedLoans ? "translate-y-20" : ""}`}
          >
            <KnowSaveAcc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableContentLoans;
