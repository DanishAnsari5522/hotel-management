import logo from './logo.svg';
import './App.css';
import Dashbord from './contaner/screen/dashbord';
import { NextUIProvider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Screen from './contaner/screen';

function App() {
  return (
    <NextUIProvider>
      <div className='bg-gray-100 h-screen'>
        <Screen />
      </div>
    </NextUIProvider>
  );
}

export default App;
