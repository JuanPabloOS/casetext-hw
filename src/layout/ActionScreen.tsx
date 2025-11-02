import Button from "@/components/Button";
import type { ButtonAction } from "@/components/Button";
import React from "react";
import { Outlet } from "react-router";

const SIDE_CLOCK_CLASS = "flex flex-col h-full mt-auto gap-5";

interface ActionScreenI {
  leftActions: {
    1?: ButtonAction;
    2?: ButtonAction;
    3?: ButtonAction;
    4?: ButtonAction;
  };
  rightActions: {
    1?: ButtonAction;
    2?: ButtonAction;
    3?: ButtonAction;
    4?: ButtonAction;
  };
  title: string;
}
const ActionScreen = ({ leftActions, rightActions, title }: ActionScreenI) => {
  return (
    <div className="flex w-full p-4">
      <div className={SIDE_CLOCK_CLASS}>
        <Button position="left" action={leftActions[1]} />
        <Button position="left" action={leftActions[2]} />
        <Button position="left" action={leftActions[3]} />
        <Button position="left" action={leftActions[4]} />
      </div>
      <div className="grow h-[400px] bg-[#80b2d1] flex flex-col border-8 border-[#e1e1d6]">
        <h1 className="text-center text-7xl text-amber-50 font-bold">
          {title}{" "}
        </h1>

        <div
          style={{
            flexGrow: 1,
            width: "60%",
            margin: "auto",
          }}
        >
          <Outlet />
        </div>
      </div>
      <div className={SIDE_CLOCK_CLASS}>
        <Button position="right" action={rightActions[1]} />
        <Button position="right" action={rightActions[2]} />
        <Button position="right" action={rightActions[3]} />
        <Button position="right" action={rightActions[4]} />
      </div>
    </div>
  );
};

export default ActionScreen;
