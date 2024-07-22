import React, { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { DoubleInput } from "../components/DoubleInput";

const Notes: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const toggle = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div>
        {clicked ? (
          <DoubleInput onClick={toggle} />
        ) : (
          <CustomInput onClick={toggle} />
        )}
      </div>
      <div>
        
      </div>
    </>
  );
};

export { Notes };
