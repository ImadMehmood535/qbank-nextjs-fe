import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Button, Tooltip } from "@nextui-org/react";
import { API } from "../../api";
import LinkComponent from "./LinkComponent";
import { useDispatch } from "react-redux";
import { createUserExam } from "../../store/slices/userExam";
import InvoiceModal from "./Modal/InvoiceModal";

const Tableactionsicons = ({
  id,
  resultPreview,
  deletePreview,
  handleDelete,
  invoicePreview,
  subscriptionId,
  result = null,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [invoiceData , setInvoiceData] = useState(null)

 
  const getUserExamData = async () => {
    setLoading(true);
    try {
      const response = await API.getSingleUserExam(id);
      dispatch(createUserExam(response?.data?.data));
      setLoading(false);
      navigate("/user/attempt/exam");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getUserBillInvoice = async() => {
    try {

      const response = await API.getUserBillInvoice(subscriptionId);
      setInvoiceData(response?.data?.data)

      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-start items-center gap-4">
      {resultPreview && (
        <>
          {result ? (
            <>
              <LinkComponent to={`/user/result?id=${result}`} text={"Result"} />
            </>
          ) : (
            <Button
              isLoading={loading}
              variant="bordered"
             className="text-themeButton-0 border-themeButton-0"
              onClick={getUserExamData}
            >
              Continue
            </Button>
          )}
        </>
      )}
      {deletePreview && (
        <Tooltip
          showArrow={true}
          color="danger"
          placement="left-start"
          content="Are you sure to delete this? "
        >
          <div
            onClick={() => {
              handleDelete(id);
            }}
          >
            <RiDeleteBin6Line className="text-red-500 text-2xl cursor-pointer hover:scale-150 transition-all" />
          </div>
        </Tooltip>
      )}
      {invoicePreview && <InvoiceModal getUserBillInvoice={getUserBillInvoice} data={invoiceData}  />}
    </div>
  );
};

export default Tableactionsicons;
