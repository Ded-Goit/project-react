import { createPortal } from "react-dom";
import css from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <button
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2>Modal Title</h2>
        <p>This is some content inside the modal</p>
      </div>
    </div>,
    document.body
  );
}
