import { useAccount } from "@/store";

const Balance = () => {
  const { accountDetails } = useAccount();
  return (
    <div>
      <p className="text-3xl text-center">Your Balance is: ${accountDetails?.balance}</p>
    </div>
  );
};

export default Balance;
