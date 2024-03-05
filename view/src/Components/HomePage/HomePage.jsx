import React, { useContext, useEffect } from 'react'
import "./HomePage.css"
import Question from '../Question/Question';
import { userProvider } from '../../Context/UserProvider';
import { useNavigate } from 'react-router-dom';
import axios from "../axios"
import { QuestionContext } from '../../Context/QuestionContext';
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const navigate=useNavigate()
  const [user, setUser] = useContext(userProvider);
  const {questions,setQuestions}=useContext(QuestionContext)
   const token=localStorage.getItem("token")


  function handleClick(){
    navigate("/ask")
  }

  useEffect(()=>{
   
     async function Allquestion(){

     
   
      try {
  const response=await axios.get("/question/all_questions",{
  headers:{
    Authorization:`Bearer ${token}`
  }
 });
 setQuestions(response.data.data)
 console.log(questions)
        
      } catch (error) {
        
      }
     }
 Allquestion()

  },[])

  
  // console.log(user)
  return (
    <div className="container">
      <div className="homp ">
        <div className="row hed mb-5">
          <div className="col-md-6   ">
            <button onClick={handleClick} className="qb   ">
              Ask Question
            </button>
          </div>
          <div className="col-md-6 ">
            <h4 className="wel  text-md-end">Welcome : {user.userName}</h4>
          </div>
        </div>
        <h3 className="ns ">Questions</h3>
      </div>
      {questions.map((question, index) => (
        <Question
        key={index}
        title={question.title}
        username={question.username}
        questionid={question.questionid}
        
        />
      ))}
    </div>
  );
}

export default HomePage