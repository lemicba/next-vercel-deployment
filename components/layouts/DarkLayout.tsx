import { FC, PropsWithChildren, ReactNode } from "react";

const DarkLayout: FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;
