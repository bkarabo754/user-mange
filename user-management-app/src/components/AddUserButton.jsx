import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AddUserButton = () => {
  return (
    <div className='ml-auto'>
      <Link to='/add-user'>
        <Button className='bg-black text-white hover:bg-black'>Add User</Button>
      </Link>
    </div>
  );
};

export default AddUserButton;
