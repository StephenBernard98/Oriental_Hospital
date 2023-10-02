interface CustomModalProps {
  children: React.ReactNode;
  // closeModal: () => void;
}

const CustomModal = ({ children }: CustomModalProps) => {
  return (
    <div>
      <div className="w-full h-screen fixed top-0 left-0 bg-black/80 flex justify-center overflow-y-scroll items-start z-20">
        <div className="md:w-[90%] lg:w-[70%] max-w-[100%] bg-white shadow-lg shadow-gray-600 rounded-lg p-4 my-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
