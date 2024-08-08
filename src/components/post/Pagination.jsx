import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="mx-auto w-[395px] h-[41px] flex items-center justify-between">
      {/* Previous Button */}
      <button
        className={`flex items-center justify-center w-[103px] h-[41px] rounded-lg text-[15px] ${
          currentPage > 1 ? 'bg-[#111111] text-white' : 'bg-white text-black border border-black'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="mr-2">&#9664;</span> Prev.
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-[41px] h-[41px] border rounded-lg flex items-center justify-center text-[15px] ${
              currentPage === index + 1 ? 'bg-[#111111] text-white' : 'border-[#111111] text-[#111111]'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        className={`flex items-center justify-center w-[103px] h-[41px] rounded-lg text-[15px] ${
          currentPage < totalPages ? 'bg-[#111111] text-white' : 'bg-white text-black border border-black'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next <span className="ml-2">&#9654;</span>
      </button>
    </div>
  );
};

export default Pagination;
