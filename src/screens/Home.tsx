import MainLayout from "@/layout/MainLayout";
import ActionScreen from "@/layout/ActionScreen";
import { useNavigate } from "react-router";
import { useAccount } from "@/store";

const Home = () => {
  const { setAccount, accountDetails } = useAccount();
  const handleExit = () => {
    setAccount(null);
  };
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(`/home/${path}`);
  };
  return (
    <MainLayout>
      <ActionScreen
        leftActions={{
          3: {
            label: "Withdraw",
            action: () => handleNavigation("withdraw"),
          },
          4: {
            label: "Deposit",
            action: () => handleNavigation("deposit"),
          },
        }}
        rightActions={{
          2: {
            label: "Exit",
            action: handleExit,
          },
          3: {
            label: "Balance",
            action: () => handleNavigation("balance"),
          },
          4: {
            label: "Re-Enter PIN",
            action: () => handleNavigation("re-enter"),
          
          },
        }}
        title={`Hi ${accountDetails?.name}! Please make a choice...`}
      />
    </MainLayout>
  );
};

export default Home;
