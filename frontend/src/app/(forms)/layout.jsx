import Link from "next/link";

const formLayout = ({ children }) => {
  return (
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <div className="inline-block align-bottom bg-white bg-opacity-20 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full backdrop-filter backdrop-blur-lg">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          
            {/* Modal content goes here */}
            {children}
          </div>
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse backdrop-filter backdrop-blur-lg">
            <Link
              href="/"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-50 bg-opacity-20 text-base font-medium text-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default formLayout;
