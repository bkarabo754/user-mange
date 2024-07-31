import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const UserForm = ({
  onSubmit,
  defaultValues,
  renderExtraFields,
  isSubmitDisabled,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues || {},
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-6 bg-white p-6 rounded-lg shadow-lg'
    >
      <div>
        <Label
          htmlFor='firstName'
          className='block text-sm font-medium text-gray-700'
        >
          First Name
        </Label>
        <Input
          type='text'
          id='firstName'
          {...register("firstName", { required: "First name is required" })}
          className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.firstName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.firstName && (
          <p className='text-red-500 text-sm mt-1'>
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <Label
          htmlFor='lastName'
          className='block text-sm font-medium text-gray-700'
        >
          Last Name
        </Label>
        <Input
          type='text'
          id='lastName'
          {...register("lastName", { required: "Last name is required" })}
          className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.lastName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.lastName && (
          <p className='text-red-500 text-sm mt-1'>{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </Label>
        <input
          type='email'
          id='email'
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          })}
          className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor='phone'
          className='block text-sm font-medium text-gray-700'
        >
          Phone
        </Label>
        <Input
          type='tel'
          id='phone'
          {...register("phone", { required: "Phone number is required" })}
          className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.phone && (
          <p className='text-red-500 text-sm mt-1'>{errors.phone.message}</p>
        )}
      </div>

      {renderExtraFields && renderExtraFields()}

      <Button
        type='submit'
        disabled={isSubmitDisabled}
        className='bg-black text-white hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'
      >
        Submit
      </Button>
    </form>
  );
};

export default UserForm;
