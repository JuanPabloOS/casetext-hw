import { useAccount } from "@/store";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }: React.PropsWithChildren) => {
  const { accountDetails } = useAccount();
  const navigate = useNavigate();
  useEffect(() => {
    if (!accountDetails) {
      navigate("/");
    }
  }, [accountDetails, navigate]);
  return children;
};

export default PrivateRoute;
