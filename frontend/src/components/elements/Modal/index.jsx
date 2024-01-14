const CustomModal = ({ change, type, element, children }) => {
  return (
    <article>
      <div
        className="fixed z-50 inset-0 p-2"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center  sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity backdrop-filter backdrop-blur-sm"
            aria-hidden="true"
          ></div>

          <div className=" inline-block align-bottom bg-white bg-opacity-20 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex justify-between">
                <h1
                  id="modal-title"
                  className="text-lg leading-6 font-medium text-white"
                >
                  {`${type} ${element}`}
                </h1>
                <button type="button" className="text-white" onClick={change}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Modal content goes here */}
              {children}
            </div>
            {/* <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-blue-600 bg-opacity-80 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={change}
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CustomModal;
