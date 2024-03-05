import Header from "./Components/Header/Header.jsx";
// import Home from "./Components/Home.jsx";
import Home from "./Components/Home/Home.jsx"
// import Footer from "./Components/Footer.js";
import Footer from "./Components/Footer/Footer.js"
import { Route, Routes, useNavigate} from "react-router-dom";
// import HomePage from "./Components/HomePage.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx"
import QuestionDetail from "./Components/QuestionDetial/QuestionDetail.js";
import AskQuestion from "./Components/AskQuestion/AskQuestion.js";
import SignUp from "./Components/SignUp/SignUp.js";
import { UserProvider, userProvider } from "./Context/UserProvider.js";
import axios from "./Components/axios.js"
import { useContext, useEffect } from "react";
import { QuestionContext } from "./Context/QuestionContext.js";




function App() {
 
const {questions,setQuestions}=useContext(QuestionContext)
const [user,setUser]=useContext(userProvider)

  const token=localStorage.getItem("token")

  const navigate = useNavigate();

  function logOut() {
    setUser({});
    localStorage.setItem("token", "");
    navigate("/")
  }

 async function checkUser(){


try {
  const {data}=await axios.get("/users/check",{
    headers:{
      Authorization:"Bearer "+token
    }
  })
 
  setUser({userName:data.username,userId:data.userid})
  console.log(user)

  //get all questions
  const res = await axios.get("/question/all_questions", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  setQuestions(res.data.data);
} catch (error) {
  // console.log(error.response)
  console.log(error)
  navigate("/")
  
}
}

useEffect(() => {checkUser()},

  []
);


  return (
    <>
      <Header logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/question/:questionid" element={<QuestionDetail />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
