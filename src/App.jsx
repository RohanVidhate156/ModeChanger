import "./App.css";
import AboutUs from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// var a = 78;
let obj = {
  name: "Rohan",
  age: 23,
  city: "Satara",
};
const link =
  "https://www.youtube.com/watch?v=xvm3X1oyTL8&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=6";
function App() {
  return (
    <>
      <Navbar
        title="TextUtils"
        dropdown="Heyy add a dropdown text"
        details={obj}
        href={link}></Navbar>
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze"></TextForm> */}
        <AboutUs></AboutUs>
      </div>
    </>
  );
}

export default App;
