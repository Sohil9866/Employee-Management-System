import { Button } from "./button";
import Input from "./input";

const LoginForm = () => {
  return (
    <div className="absolute bg-white px-11 w-[420px] rounded-md py-11 top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2">
      <div className="">
        <div className="mb-4 text-center font-bold text-[32px]">
          <h1>Log in</h1>
        </div>
        <form className="grid ">
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
          <Button
            name="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
