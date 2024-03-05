import React, { useContext, useState } from 'react'
import { userProvider } from '../../Context/UserProvider';
import { v4 as uuidv4 } from 'uuid'
import axios from "../axios"
import { useForm } from "react-hook-form";
import "./AskQuestion.css"


function AskQuestion() {
  

    const {
      register,
      trigger,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();


  const [user ,setUser]=useContext(userProvider)
  console.log(user)


  const token=localStorage.getItem("token")



  async function handlePost(data){

          const questionId = uuidv4();

    try {
     await axios.post(
       "/question/post",
       {
         tag: data.tag,
         title: data.title,
         description: data.question,
         questionId: questionId,
         userId: user.userId
       },
       {
         headers: {
           Authorization: "Bearer " + token,
           
         },
       }
     );
  reset()

    

    } catch (error) {
      console.log(error.response)
      
    }
  }






  return (
    <div className="top container text-center">
      <div className="py-5">
        <h2>Steps to Write a good question</h2>
        <ol className="text-start mx-auto" style={{ maxWidth: "450px" }}>
          <li>Add a more price tag about the question type.</li>
          <li>Summerize your problem in one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ol>
      </div>
      <div>
        <h2 className="pb-2">Ask a public question</h2>
        <p>Go to Question page</p>
        <textarea
          placeholder="Tag"
          className={`w-75 ${errors.tag && "invalid"}
`}
          rows="2"
          {...register("tag", {
            required: "Tag is required.",
            minLength: {
              value: 3,
              message: "Minimum tag  length is 3", // JS only: <p>error message</p> TS only support string
            },
          })}
          onKeyUp={() => {
            trigger("tag");
          }}
        />
        {errors.tag && (
          <div>
            <small className="text-danger">{errors.tag.message}</small>
          </div>
        )}
        <textarea
          className={`w-75 ${errors.title && "invalid"}`}
          rows="2"
          placeholder="Title"
          {...register("title", {
            required: "Title is required",
            maxLength: {
              value: 200,
              message: "Maximum length is 200", // JS only: <p>error message</p> TS only support string
            },
          })}
          onKeyUp={() => {
            trigger("title");
          }}
        />
        {errors.title && (
          <div>
            <small className="text-danger">{errors.title.message}</small>
          </div>
        )}
        <textarea
          className={`w-75 ${errors.question && "invalid"}`}
          rows="6"
          placeholder="Question Description..."
          {...register("question", {
            required: "Question is required",
            maxLength: {
              value: 300,
              message: "Maximum allowed length is 300", // JS only: <p>error message</p> TS only support string
            },
          })}
          onKeyUp={() => {
            trigger("question");
          }}
        />
        {errors.question && (
          <div>
            <small className="text-danger">{errors.question.message}</small>
          </div>
        )}
      </div>
      <div>
        <button
          className="btn btn-success mb-5 mt-3"
          onClick={handleSubmit(handlePost)}
        >
          Post Your Question
        </button>
      </div>
    </div>
  );
}


export default AskQuestion