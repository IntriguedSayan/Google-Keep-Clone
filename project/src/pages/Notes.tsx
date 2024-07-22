import React, { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { DoubleInput } from "../components/DoubleInput";
import { NoteContainer } from "../components/NoteContainer";

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
        <NoteContainer/>
      </div>
    </>
  );
};

export { Notes };
