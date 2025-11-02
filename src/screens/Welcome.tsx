import MainLayout from "@/layout/MainLayout";
import ActionScreen from "@/layout/ActionScreen";
import { useNavigate } from "react-router";
import { useAccount } from "@/store";
import { useEffect } from "react";

const Welcome = () => {
  const navigate = useNavigate();
  const { accountDetails } = useAccount();
  useEffect(() => {
    if (accountDetails) {
      navigate("/home", {replace: true});
    }
  }, [accountDetails, navigate]);

  return (
    <MainLayout>
      <ActionScreen
        leftActions={{}}
        rightActions={{
          4: {
            label: "Enter your PIN",
            action: () => navigate("/pin"),
          },
        }}
        title="Welcome to the ATM"
      />
    </MainLayout>
  );
};

export default Welcome;

// TODO:
