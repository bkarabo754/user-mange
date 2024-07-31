import React from "react";
import { Input } from "@/components/ui/input";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='relative w-full max-w-md'>
      <Input
        type='text'
        placeholder='Search by name...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full px-4 py-3 border-none rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-blue-100 to-white text-gray-800 placeholder-gray-600 outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300'
      />
    </div>
  );
};

export default SearchBar;
