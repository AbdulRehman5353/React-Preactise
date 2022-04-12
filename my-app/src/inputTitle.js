import React, { useContext } from "react";
import { Context } from "./Provider.txs";

const InputTitle = () => {
  const { name } = useContext(Context);

  return <div>the context in Provider is : {name}</div>;
};

export default InputTitle;
