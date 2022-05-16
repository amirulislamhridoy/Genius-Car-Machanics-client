import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/service`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please add a service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="my-1" placeholder="Name" {...register("name")} />
        <textarea
          className="my-1"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="my-1"
          placeholder="Price"
          type="Number"
          {...register("price")}
        />
        <input
          className="my-1"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="my-1" type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddService;
