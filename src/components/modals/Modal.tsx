interface CustomModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const CustomModal = ({ children }: CustomModalProps) => {
  return (
    <div>
      <div className="z-50">{children}</div>
    </div>
  );
};

export default CustomModal;
