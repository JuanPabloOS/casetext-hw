import { useAccount } from "@/store";
import { AccountApi } from "@/utils/api";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const PinBox = () => {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const { setAccount } = useAccount();
  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    try {
      const acc = AccountApi.getAccount(pin);
      setAccount(acc);
      navigate("/home");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error ocurred in the server");
      }
    }
  };

  const handlePinChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setPin(ev.target.value);
  };

  return (
    <div className="h-full">
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="pin">
          Enter your Pin
          <input
            type="text"
            id="pin"
            value={pin}
            onChange={handlePinChange}
            maxLength={4}
            placeholder="Enter your PIN"
            className="border"
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default PinBox;
