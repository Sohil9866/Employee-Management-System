import { Button } from "./Components/button";
import { ButtonProps } from "./Types/Data";

function App() {
  const buttonProps: ButtonProps = {
    text:"Submit",height: 50, width: 200,
  }
  return <Button {...buttonProps}/> 
}

export default App;
