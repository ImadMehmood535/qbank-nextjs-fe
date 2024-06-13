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
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputField from "../InputField";

const SubscriptionModal = ({
  loading,
  handlSubscription,
  id,
  authorized,
  activeSubsription,
  error,
  text,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    handlSubscription(id, data);
  };

  return (
    <>
      <Button
        onPress={onOpen}
        isDisabled={activeSubsription === id}
        className="bg-themeButton-0 text-white hover:bg-themeButtonHover-0 !opacity-100 text-[13px] px-6 !py-[10px] !rounded-[8px] w-fit font-semibold"
      >
        {activeSubsription === id ? "Current Plan" : text}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Subscription
              </ModalHeader>
              <ModalBody>
                {authorized ? (
                  <form
                    className="grid grid-col-1 gap-2"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <InputField
                      label="Promo Code if you have any"
                      type="text"
                      placeholder="enter promo code"
                      name="promoCode"
                      register={register}
                    />
                    {error && (
                      <p className="text-tiny text-danger pl-1 mt-1">{error}</p>
                    )}
                    <ModalFooter className=" flex justify-end w-full px-0">
                      <Button
                        isDisabled={loading}
                        type="submit"
                        className="bg-themeButton-0 text-white hover:bg-themeButtonHover-0 !opacity-100 text-[13px] px-6 !py-[10px] !rounded-[8px] w-fit font-semibold"
                      >
                        Proceed
                      </Button>
                    </ModalFooter>
                  </form>
                ) : (
                  <>
                    <p>Please login first to continue</p>
                    <ModalFooter className=" flex justify-end w-full px-0">
                      <Button
                        onClick={() => navigate("/sign-in")}
                        className="bg-themeButton-0 text-white hover:bg-themeButtonHover-0 !opacity-100 text-[13px] px-6 !py-[10px] !rounded-[8px] w-fit font-semibold"
                        onPress={onClose}
                      >
                        Login
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubscriptionModal;
