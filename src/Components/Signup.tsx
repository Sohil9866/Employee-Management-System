import { Button } from "./button";
import Input from "./input";

const SignupForm = () => {
  return (
    <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 flex-col px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <Input type="text" label="First Name" name="firstName" />
          <Input type="text" label="Last Name" name="lastName" />
          <Input type="email" label="Email" name="email" />
          <Input type="password" label="Password" name="password" />
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-sm text-black mb-2 mr-4">
              Department
            </label>
            <select className=" w-6/12 h-8 border">
              <option>Select Department</option>
              <option value="Finance">Finance</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="IT">IT</option>
            </select>
          </div>
          <Button name="Signup" />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
