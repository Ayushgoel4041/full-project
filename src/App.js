import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import  "./styling/index.scss"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import ImgIconpage from "./components/ImgIconpage";
import ImgRollerpen from "./components/ImgRollerpen";
import ImgEraser from "./components/ImgEraser";
import ImgHighlighter from "./components/ImgHighlighter";
import ImgPencils from "./components/ImgPencils";
import ImgFountainpen from "./components/ImgFountainpen";
import ImgNB from "./components/ImgNB";
import ImgPlanners from "./components/ImgPlanners";
import ImgSticky from "./components/ImgSticky";
import ImgCalcs from "./components/ImgCalcs";
import ImgFevicols from "./components/ImgFevicols";
import ImgPunching from "./components/ImgPunching";
import ImgSteppler from "./components/ImgSteppler";
import ImgScissors from "./components/ImgScissors";
import ImgPins from "./components/ImgPins";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import { toast } from 'react-hot-toast';
import { useDispatch } from "react-redux";

const dispatch = useDispatch
const addToCartHandler = (options) => {

  dispatch({ type: "addToCart", payload: options })
  dispatch({ type: "calculatePrice" });
  toast.success("Added To Cart");
};
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/Home" Component={Home}/>
        <Route exact path="/Login" Component={Login}/>
        <Route exact path="/Cart" Component={Cart}/>
        <Route exact path="/SignUp" Component={SignUp}/>

        <Route exact path="/ImgIconpage" Component={ImgIconpage}/>
        <Route exact path="/ImgRollerpen" Component={ImgRollerpen}/>
        <Route exact path="/ImgFountainpen" Component={ImgFountainpen}/>
        <Route exact path="/ImgPencils" Component={ImgPencils}/>
        <Route exact path="/ImgHighlighter" Component={ImgHighlighter}/>
        <Route exact path="/ImgNB" Component={ImgNB}/>
        <Route exact path="/ImgPlanners" Component={ImgPlanners}/>
        <Route exact path="/ImgSticky" Component={ImgSticky}/>
        <Route exact path="/ImgEraser" Component={ImgEraser}/>
        <Route exact path="/ImgCalcs" Component={ImgCalcs}/>
        <Route exact path="/ImgFevicols" Component={ImgFevicols}/>
        <Route exact path="/ImgPunching" Component={ImgPunching}/>
        <Route exact path="/ImgSteppler" Component={ImgSteppler}/>
        <Route exact path="/ImgScissors" Component={ImgScissors}/>
        <Route exact path="/ImgPins" Component={ImgPins}/>
        {/* <Route exact path="/Home" Component={Home}/> */}
       
      </Routes>  
      <Toaster/> 
    </Router>
  );
}

export default App;