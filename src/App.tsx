

import DarkModeToggle from './hooks/DarkModeToggle';
import { useDarkMode } from './hooks/useDarkMode';

import {ToastContainer} from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import Router from './redux/Router/Router';
import LanguageToggle from './hooks/LanguageToggle';
import i18n from './i18n'; 

function App() {
  const isDarkMode = useDarkMode();
  return (
    <div
    className={` ${
      isDarkMode ? "bg-black text-white" : "bg-white text-black"
    }`}
  >
    <DarkModeToggle />
    <LanguageToggle />
    <Analytics />

    <ToastContainer />
    <Router />
    </div>
   
  )
}

export default App
