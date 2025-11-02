import { useAccount, type AccountDetails } from "@/store";
import { AccountApi } from "@/utils/api";
import { useState } from "react";

const Balance = () => {
  const { accountDetails, setAccount } = useAccount();
  const [total, setTotal] = useState(0);
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setTotal(parseInt(ev.target.value));
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const acc = AccountApi.deposit(
      (accountDetails as AccountDetails).pin,
      total
    );
    if (acc === null) {
      alert("User not found");
      return;
    }
    setAccount(acc);
    setTotal(0)
  };
  return (
    <div>
      <p className="text-3xl text-center">
        Your Balance is: ${accountDetails?.balance}
      </p>

      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">
          Enter an amount:{" "}
          <input
            type="number"
            min={0}
            onChange={handleChange}
            value={total}
          />
        </label>
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
};

export default Balance;
