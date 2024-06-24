import { Button } from "./button";
import Input from "./input";

const LoginForm = () => {
  return (
    <div className="absolute bg-white px-11 w-[420px] rounded-md py-7 top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2">
      <div className="">
        <div className="mb-4 text-center font-bold text-[32px]">
          <h1>Employee Login</h1>
        </div>
        <form className="grid">
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
          <Button
            name="Login" />
        </form>
        <div className="mt-3 text-[14px]">
          <p className="text-center">Don't have Account?<a href="#" className="font-bold"><span> Sign Up</span></a></p>
                  
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
