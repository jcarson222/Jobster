import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(`name: ${name}, value: ${value}`);
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, isMember, name } = values;
    if (!email || !password || (!isMember && !name)) {
      console.log("ERROR: Provide all values");
      return;
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {/* name */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button className="btn btn-block" type="submit">
          submit
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button className="member-btn" type="button" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
