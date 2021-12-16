import React, { useEffect, useState } from "react";
import Input from "./Input";
import "./SignIn.css";

const SignIn = () => {
  useEffect(() => {
    console.log(form);
  });
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    radio: "male",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className='sign-in-container'>
      <p className='sign-in-title'>Sign In</p>
      <div className='f-l-name'>
        <input
          autocomplete='autocomplete_off_hack_xfr4!k'
          name='hidden'
          type='text'
          style={{ display: "none" }}
        />
        <Input
          type='text'
          label='first name'
          value={form.fName}
          onChange={handleFormChange}
          name='fName'
          id='fName'
        />
        <Input
          type='text'
          id='lName'
          label='last name'
          value={form.lName}
          onChange={handleFormChange}
          name='lName'
        />
      </div>
      <Input
        type='email'
        label='Email Adress'
        id='email'
        name='email'
        value={form.email}
        onChange={handleFormChange}
      />
      <Input
        type='password'
        label='Password'
        id='password'
        name='password'
        value={form.password}
        onChange={handleFormChange}
      />
      <div className='radio-container'>
        <div className='radio-btn'>
          <label className='radio' for='male'>
            male
          </label>
          <input
            type='radio'
            id='male'
            name='radio'
            value='male'
            onChange={handleFormChange}
            checked={form.radio === "male"}
          />
        </div>
        <div className='radio-btn'>
          <label className='radio' for='female'>
            female
          </label>
          <input
            type='radio'
            id='female'
            name='radio'
            value='female'
            onChange={handleFormChange}
            checked={form.radio === "female"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
