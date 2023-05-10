import React from "react";

function Option({ option, selectOption, answer, selected }: any) {
  console.log({ selected, option, answer });
  let check;

  if (selected === option) {
    if (option === answer) {
      check = "correct";
    } else check = "wrong";
  } else {
    check = "disabled";
  }

  return (
    <>
      <li className={`opcao ${selected ? check : ""}`} onClick={() => selectOption()}>
        {option}
      </li>
    </>
  );
}

export default Option;
