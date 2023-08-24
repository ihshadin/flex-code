import React from "react";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  return (
    <div>
      <h1>payment success {tranId}</h1>
    </div>
  );
};

export default PaymentSuccess;
