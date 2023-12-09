import logo from './logo.svg';
import './App.css';
import Dashbord from './contaner/screen/dashbord';
import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Dashbord />
      <Button color="primary">
      Button
    </Button>
    </NextUIProvider>
  );
}

export default App;
