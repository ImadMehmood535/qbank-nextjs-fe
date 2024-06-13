import React, { useEffect, useState } from "react";
import { API } from "../../api";

const DiscountBar = () => {
  const [discountPromo, setDiscountPromo] = useState(null);
  const [discountPromoType, setDiscountPromoType] = useState(null);

  const getData = async () => {
    try {
      const response = await API.getAllPromo();
      const data = response?.data?.data?.find(
        (item) => item?.discountAd && item?.isGlobal
      );
      setDiscountPromo(data);
      const type = data?.type === "percentage" ? "%" : "$";
      setDiscountPromoType(type);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    // Check if the screen width is greater than a certain threshold (e.g., 768px for tablets)
    if (screenWidth > 768) {
      // Execute the API call only if the screen width is greater than the threshold
      getData();
    }
  }, []);

  return (
    <>
      {discountPromo?.name && (
        <div className="w-full  bg-themeSecondry-0 py-3">
          <p className="text-center text-white text-sm capitalize">
            Use Promo Code{" "}
            <span className="font-bold capitalize">{discountPromo?.name}</span> and get{" "}
            <span className="font-bold capitalize">
              {discountPromo?.typeValue + discountPromoType}
            </span>{" "}
            Off on subscription
          </p>
        </div>
      )}
    </>
  );
};

export default DiscountBar;
