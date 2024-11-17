import Header from "./components/Header";
import Footer from "./components/Footer";
// import { useUser } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  // const { user, isLoaded, isSignedIn } = useUser();
  // console.log(isSignedIn);

  // if (!isSignedIn && isLoaded) {
  //   // return <Navigate to={"/login"} />;
  // }

  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
