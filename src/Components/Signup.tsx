import { Button } from "./button";
import Input from "./input";
import { useNavigate } from "react-router-dom";
import { SignupSchema } from "../schemas";
import { useFormik } from "formik";

const SignupForm = () => {
  const navigate = useNavigate();

  const initialValue = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    department: "",
  };

  const {initialValues, handleBlur, handleChange, handleSubmit,values, errors, touched} = useFormik({
    initialValues : initialValue,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/");
    },
  });

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 flex-col px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label="first-name"
            name="firstname"
            type="text"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            err={
              errors.firstname && touched.firstname
                ? `${errors.firstname}`
                : null
            }
          />
          <Input
            label="last-name"
            name="lastname"
            type="text"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            err={
              errors.lastname && touched.lastname
                ? `${errors.lastname}`
                : null
            }
          />
          <Input
            label="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            err={
              errors.email && touched.email
                ? `${errors.email}`
                : null
            }
          />
          <Input
            label="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            err={
              errors.password && touched.password
                ? `${errors.password}`
                : null
            }
          />
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-sm text-black mb-2 mr-4">
              Department
            </label>
            <select
              name="Department"
              className="w-6/12 h-8 border"
              value={values.department}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select Department</option>
              <option value="Finance">Finance</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="IT">IT</option>
            </select>
          </div>
            <div className="text-xs text-red-500 ">
            {errors.department && touched.department ? (
              <div>{errors.department}</div>
            ) : null}
            </div>
          <Button type="submit" name="Signup" />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
