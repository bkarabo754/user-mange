import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchBar from "./SearchBar";
import AddUserButton from "./AddUserButton";

// UserTable component that takes users and onDelete as props
const UserTable = ({ users, onDelete, onSort }) => {
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("id");
  const [searchTerm, setSearchTerm] = useState("");

  // Sort the users based on the current sort criteria
  const sortedUsers = [...users].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];
    if (fieldA < fieldB) return sortDirection === "asc" ? -1 : 1;
    if (fieldA > fieldB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  // Filter users based on the search term
  const filteredUsers = sortedUsers.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Handle sorting by a specific field
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
    if (onSort) onSort(sortField, sortDirection);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className='px-6 py-4'>
      <div className='mb-6 flex justify-between items-center'>
        <div className='relative w-full max-w-md'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className='ml-auto'>
          <AddUserButton />
        </div>
      </div>
      <div className='max-h-[600px] overflow-y-auto custom-scrollbar'>
        <Table className='min-w-full bg-white border border-gray-200 rounded-lg shadow-md'>
          <TableHeader className='py-3 px-4 text-left font-semibold text-sm text-gray-500'>
            <TableRow className='bg-gray-900 text-gray-700'>
              <TableHead
                onClick={() => handleSort("id")}
                className='cursor-pointer hover:bg-gray-200 transition-colors duration-200'
              >
                ID
              </TableHead>
              <TableHead
                onClick={() => handleSort("firstName")}
                className='cursor-pointer hover:bg-gray-200 transition-colors duration-200'
              >
                First Name
              </TableHead>
              <TableHead
                onClick={() => handleSort("lastName")}
                className='cursor-pointer hover:bg-gray-200 transition-colors duration-200'
              >
                Last Name
              </TableHead>
              <TableHead
                onClick={() => handleSort("email")}
                className='cursor-pointer hover:bg-gray-200 transition-colors duration-200'
              >
                Email
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id} className='border-b border-gray-200'>
                <TableCell className='py-3 px-4 text-sm text-gray-800'>
                  {user.id}
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-gray-800'>
                  {user.firstName}
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-gray-800'>
                  {user.lastName}
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-gray-800'>
                  {user.email}
                </TableCell>
                <TableCell className='py-3 px-4 space-x-4 flex items-center'>
                  <Link to={`/edit-user/${user.id}`}>
                    <Button className='bg-black text-white hover:bg-black'>
                      Edit
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(user.id)}
                    className='bg-transparent border-2 border-destructive text-destructive hover:bg-red-100 p-2 rounded-full'
                  >
                    <FiTrash2 className='text-lg' />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserTable;
