import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const InvoiceModal = ({ getUserBillInvoice, data }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Button
        variant="bordered"
        color="primary"
        onPress={async () => {
          await getUserBillInvoice();
          onOpen();
        }}
        className="px-4 py-2 border !opacity-100 border-themeButton-0 text-themeButton-0 hover:bg-themeButtonHover-0 hover:text-white transition-colors"
      >
        View Invoice
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"4xl"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 py-4 px-6 bg-themeSecondry-0 text-white">
                <h2 className="text-xl font-semibold">
                  Invoice #{data?.invoiceNumber}
                </h2>
              </ModalHeader>
              <ModalBody className="p-6 bg-gray-100">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    BILL FROM:
                  </h3>
                  <p className="text-blue-500">www.qbank.com</p>
                </div>
                <div className="flex justify-between flex-wrap sm:flex-nowrap gap-4 sm:gap-0 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      BILL TO:
                    </h3>
                    <p>{data?.userName}</p>
                    <p>{data?.userCountry}</p>
                    <p>{data?.userEmail}</p>
                  </div>
                  <div className="max-w-[400px] w-full">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-700">INVOICE #:</p>
                      <p>{data?.invoiceNumber}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-700">
                        INVOICE DATE:
                      </p>
                      <p>{data?.orderDate}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-700">AMOUNT DUE:</p>
                      <p className="text-xl font-bold text-themeSecondry-0">
                        ${data?.amount?.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <table className="w-full border-collapse mb-4 mt-8 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-themeSecondry-0 text-white">
                      <th className="py-2 text-start px-4 font-semibold">
                        ITEM DESCRIPTION
                      </th>
                      <th className="py-2 text-start px-4 font-semibold">
                        DURATION
                      </th>
                      <th className="py-2 text-start px-4 font-semibold">
                        COST
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200">
                        {data?.subscriptionName}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        {data?.subscriptionMode}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        ${data?.amount?.toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-between items-center flex-wrap sm:flex-nowrap gap-4 sm:gap-0">
                  <div className="max-w-[400px] w-full">
                    <div className="flex justify-start items-center gap-8">
                      <h3 className="text-lg font-semibold text-gray-700">
                        STATUS:
                      </h3>
                      <p
                        className={`${
                          data?.status ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {data?.status ? "Active" : "In Active"}
                      </p>
                    </div>
                    <p className="text-gray-600">
                      This is a computer-generated invoice and does not need
                      signatures.
                    </p>
                  </div>

                  <div className="max-w-[400px] w-full">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-700">SUB TOTAL:</p>
                      <p>${data?.subTotal?.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-700">DISCOUNT:</p>
                      <p>${data?.discount?.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-700">TOTAL:</p>
                      <p className="text-xl font-bold text-themeSecondry-0">
                        ${data?.amount?.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="px-6 py-4 bg-gray-100 border-t flex justify-end">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={handlePrint}
                  className="px-4 py-2 bg-themeButton-0 text-white !opacity-100 hover:bg-themeButtonHover-0 transition-colors"
                >
                  Print
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default InvoiceModal;
