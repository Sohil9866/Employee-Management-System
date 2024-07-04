import { Button } from "./button";
import { NavLink } from "react-router-dom";
import Input from "./input";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
const LoginForm = () => {

  const initialValue = {
    email: "",
    password: "",
  };

  const {
    values,
    initialValues,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues : initialValue,
    validationSchema: loginSchema,
    
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 flex-col px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Log In
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            err={errors.email && touched.email ? `${errors.email}` : null}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            err={
              errors.password && touched.password ? `${errors.password}` : null
            }
          />
          <div>
            <Button name="Login" />
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Not a member?
          <NavLink
            to={"/signup"}
            className="leading-6 text-indigo-600 hover:text-indigo-500"
          >
            SignUp
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
