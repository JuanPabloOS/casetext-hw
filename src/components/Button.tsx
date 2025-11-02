import React from "react";

const getAbsoluteStyles = (position: "left" | "right"): React.CSSProperties => {
  if (position === "left") {
    return {
      left: "100%",
      paddingLeft: "8px",
    };
  }
  return {
    right: "100%",
    paddingRight: "8px",
  };
};

export type ButtonAction = {
  label: string;
  action: () => void;
};

const Button = ({
  action,
  position,
}: {
  action?: ButtonAction;
  position: "left" | "right";
}) => {
  const handleClick = () => {
    if (!action) {
      return;
    }
    action.action();
  };
  return (
    <div
      className={`flex items-center justify-between relative ${
        position === "left" ? "" : "flex-row-reverse"
      }`}
    >
      <button
        aria-label={action?.label}
        className={`h-10 bg-[#c1c1c1] rounded-md w-20 cursor-pointer`}
        style={{
          boxShadow: "rgb(217 217 212) 0px -4px 0px, #9b9b9b 0px 4px 0px",
        }}
        onClick={handleClick}
      />
      <div className="w-5 h-1 bg-[#9b9b9b]"></div>

      <div
        className={`absolute flex items-center ${
          position === "left" ? "" : "flex-row-reverse"
        }`}
        style={{ ...getAbsoluteStyles(position), minWidth: "200px" }}
      >
        <div className="w-5 h-1 bg-amber-50"></div>

        <p className="text-lg font-bold text-cyan-50">{action?.label}</p>
      </div>
    </div>
  );
};

export default Button;
