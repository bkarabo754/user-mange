import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "@/api/userApi";
import UserForm from "@/components/UserForm";
import { toast } from "sonner";
import ReCAPTCHAComponent from "@/components/ReCAPTCHAComponent";

const AddUser = () => {
  const navigate = useNavigate();
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const handleAddUser = async (data) => {
    if (!recaptchaValue) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }

    try {
      await addUser({ ...data, recaptchaToken: recaptchaValue });
      toast.success("User added successfully! Redirecting to User Table...");
      navigate("/");
    } catch (error) {
      toast.error("Failed to add user.");
      console.error("Failed to add user", error);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6'>
      <div className='bg-white rounded-lg shadow-2xl p-10 max-w-xl w-full'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
          Add User
        </h2>
        <UserForm
          onSubmit={handleAddUser}
          renderExtraFields={() => (
            <ReCAPTCHAComponent
              onChange={(value) => {
                setRecaptchaValue(value);
                setIsRecaptchaVerified(!!value);
              }}
            />
          )}
          isSubmitDisabled={!isRecaptchaVerified}
        />
      </div>
    </div>
  );
};

export default AddUser;
