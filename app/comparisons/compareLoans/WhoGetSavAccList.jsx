import React from "react";

const list = [
  "College savers: Saving for college is one of the biggest expenses parents face. Saving for students should be a marathon, not a sprint. An FDIC-insured savings account is a safe place to save for your child’s college education. Eventually, you might want to consider moving some money into a CD — depending on when your child is starting college.",
  "Future retirees: A savings account is one of the vehicles that should be used to prepare for retirement and should be a part of your retirement plan.",
  "Disciplined planners: It's critical to have an emergency savings account. This account should be able to cover at least six months' worth of expenses. You never know what the future will hold.",
  "Travelers: Planning a trip can be a fun part of traveling, and you can use your savings account to create a travel budget. Set up a recurring transfer from your checking account into your savings account so you don’t forget to save for your vacation.",
  "Future homeowners: A savings account at an FDIC-insured bank is the perfect place for your future downpayment on a home. Automate your savings to make sure you achieve your goal of homeownership.",
];

const WhoGetSavAccList = () => {
    const ulStyles = {
      listStyleType: "disc", // Set the list item numbering style to decimal
      paddingLeft: "20px", // Add some left padding for indentation
    };
  return (
    <ul style={ulStyles} className="bodyText mt-6">
      {list.map((item, index) => (
        <li key={index} className="mt-4">{item}</li>
      ))}
    </ul>
  );
};

export default WhoGetSavAccList;
