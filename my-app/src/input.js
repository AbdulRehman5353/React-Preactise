import React, { useContext } from "react";
import { Context } from "./Provider.txs";
import InputTitle from "./inputTitle";

const Input = () => {
  const { name, updateName, aCallback } = useContext(Context);

  return (
    <div>
      <InputTitle />
      <div>
        <InputTitle />
        <div>
          <input
            type="text"
            value={name}
            onChange={e => updateName(e.target.value)}
          />
        </div>
        <button onClick={aCallback}>Click Callback</button>
      </div>
    </div>
  );
};

export default Input;
