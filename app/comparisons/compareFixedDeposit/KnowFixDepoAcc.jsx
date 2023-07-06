import React from "react";
import WhoGetFixDepo from "./WhoGetFixDepo";

const KnowFixDepoAcc = () => {
  return (
    <div>
      <h1 className="text-[#101828] font-semibold text-3xl">
        What to know about savings accounts
      </h1>
      <h2 className="titleText mt-6">
        What is a savings account and how does it work?
      </h2>
      <div className="bodyText mt-4">
        <p>
          A savings account is a type of financial account found at both banks
          and credit unions. These federally insured accounts typically pay
          interest, but often at lower rates than other interest-bearing
          financial products insured by the government, like certificates of
          deposit (CDs).
        </p>
        <p className="mt-5">
          In exchange for lower rates, savings accounts offer more liquidity,
          allowing for up to six types of withdrawals or transfers per statement
          cycle (and potentially more). That makes savings accounts ideal for
          stashing money you may need access to if unexpected costs arise.
        </p>
        <p className="mt-5">
          Savings accounts can play a crucial role in your financial health.
          Unlike a CD, which forces you to lock up your money for a specified
          period of time, there's no set term for maturity with a savings
          account. So, a savings account is a good spot to park your emergency
          fund. A CD isn't a good place for emergency savings since withdrawing
          your money before the CD term ends will likely result in a potentially
          costly fee.
        </p>
      </div>

      <h2 className="titleText mt-6">Who should get a savings account?</h2>
      <div className="bodyText mt-6">
        <p className="">
          Most consumers would benefit from having an emergency fund and
          additional savings. Most banks make it easy by allowing consumers to
          open multiple savings accounts for different savings goals.
        </p>
        <p className="mt-5">
          A savings account should be a part of a diverse portfolio that could
          also include CDs for locking away money for longer terms, as well as
          the best investments to build your retirement nest egg. As a general
          rule, savings accounts are for money that you may need in the short
          term and that you don't want to expose to any risk that could cause
          you to lose principal. CDs are generally better suited for money that
          can be left untouched for one, three or five years, since CDs
          typically charge penalties for early withdrawals.
        </p>
        <p className="mt-5">
          You’ll also want to make sure all of your savings accounts, money
          market accounts, checking accounts and CDs are at FDIC-insured banks,
          that your money is within FDIC limits and that you’re following the
          FDIC’s rules.
        </p>
        <p className="mt-5">
          Some people may not be good candidates for savings accounts, including
          those who aren't able to maintain any minimum balance requirement that
          may result in fees. That said, some savings accounts at online
          FDIC-insured banks don’t have any minimum opening deposit
          requirements, minimum balance requirements or monthly service fees.
        </p>
        <p className="mt-5">
          Here are a few categories of people who may benefit from opening a
          savings account:
        </p>
        <WhoGetFixDepo />
      </div>
    </div>
  );
};

export default KnowFixDepoAcc;
