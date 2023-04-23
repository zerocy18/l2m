import React, { ReactNode } from "react";
import { ModalContainer, OutLayer } from "./style";
interface ModalProps {
  isOpen?: boolean;
  onClose: (e: any) => void;
  children: ReactNode;
}

const Modal = ({ isOpen = true, onClose, children }: ModalProps) => {
  const handleCloseModal = (e: any) => {
    if (onClose) onClose(e);
  };

  return (
    <>
      {isOpen ? (
        <>
          <OutLayer onClick={handleCloseModal} />
          <ModalContainer>{children}</ModalContainer>
        </>
      ) : null}
    </>
  );
};

export default Modal;
