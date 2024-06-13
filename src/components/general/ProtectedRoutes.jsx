import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.authorized) {
      navigate("/sign-in");
    } else if (!user?.otpVerified) {
      navigate("/user/verify-otp");
    }
  }, [user, navigate]);

  return user.authorized && user?.otpVerified ? children : null;
};

export default ProtectedRoutes;
