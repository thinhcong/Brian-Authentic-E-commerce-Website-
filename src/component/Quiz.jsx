// // import { useState } from 'react' // 1. Nhớ import useState

// import { use, useState } from "react";

 
 
//     const [userName,setUserName] = useState("")
//     const [passWord,setPassword]  = useState("")
//     const [isValid,setIsValid] = useState(null)
//    const handelChangeName = (e) => {
//     setUserName(e.target.value)
    
//    };
//    const handleChangePass = (e) =>{
//     setPassword(e.target.value)
//    };
//    const checkValid  = (e) => {
//      e.preventDefault() 
//      const foundUser = userData.find(item => item.username == userName && item.password == passWord)
//      console.log ({foundUser})
//      if(foundUser){
//         setIsValid(true)
//      }
//      else {
//         setIsValid(false)
//      }

//    };
  


   
    
   
//    <></>

//   return (
//     // Container căn giữa màn hình (nếu muốn bỏ nền xám thì xóa class bg-gray-100)
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
      
//       {/* Khung Form (Card) */}
//       <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Đăng Nhập</h2>

//         {/* Thanh nhập Username */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Tài khoản
//           </label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//             placeholder="Nhập tài khoản"
//              onChange={handelChangeName}
            

//           />
//         </div>

//         {/* Thanh nhập Password */}
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Mật khẩu
//           </label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//             placeholder="******************"
//             onChange={handleChangePass}
         
            
//           />
//         </div>
// { isValid === false ? (
//     <p className="text-red-500 text-center mb-4">
//         Login thất bại! Kiểm tra lại thông tin.
//     </p>
// ) : <p className="text-green-500 text-center mb-4">
//         Login thành công
//     </p> }
//         {/* Nút Submit */}
//         <button
//           type="submit"
//         onClick={checkValid}
        
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
//         >
//           Đăng Nhập
//         </button>
    
        
//       </form>
//     </div>
//   );





    
 

        



// const quizData = [
//     {
//         id: 1,
//         question: "Thủ đô của Việt Nam là gì?",
//         answers: ["Thành phố Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ"],
//         correctAnswer: "Hà Nội"
//     },
//     {
//         id: 2,
//         question: "Trong Node.js, 'npm' là viết tắt của từ gì?",
//         answers: ["Node Project Manager", "New Package Manager", "Node Package Manager", "No Problem Man"],
//         correctAnswer: "Node Package Manager"
//     },
//     {
//         id: 3,
//         question: "Kết quả của phép tính: 2 + '2' trong JavaScript là gì?",
//         answers: ["4", "22", "NaN", "Error"],
//         correctAnswer: "22"
//     },
//     {
//         id: 4,
//         question: "Đâu KHÔNG phải là một hệ điều hành?",
//         answers: ["Linux", "Windows", "MacOS", "HTML"],
//         correctAnswer: "HTML"
//     },
//     {
//         id: 5,
//         question: "Con vật nào sau đây được xem là 'Vua của rừng xanh'?",
//         answers: ["Hổ", "Sư tử", "Voi", "Gấu Trúc"],
//         correctAnswer: "Sư tử"
//     }
// ]

// const Quiz = () =>  {

// const [answerSelected, setAnswerSelected] = useState("");
// const [currentQuestion, setCurrentQuestion] = useState(0);
// const [userAnswers, setUserAnswers] = useState(Array.from({ length: quizData.length }));
//  const handleAnswerClick = (answer, index) => {
//     // Xử lý khi người dùng chọn câu trả l
//     setAnswerSelected(answer);
    
//     const newUserAnswers = [...userAnswers];
//     newUserAnswers[currentQuestion] = index;
//     setUserAnswers(newUserAnswers);

// };
// const goNext = () => {
  
//     setCurrentQuestion((prev) => prev + 1);
//     const answer = Number(userAnswers[currentQuestion+1]);
//     const pastAnswerSelected = quizData[currentQuestion+1].option[answer]
//     if (answer !== undefined) {
//        setAnswerSelected(pastAnswerSelected)
//     } 
//       else {
//           setAnswerSelected("")
//       }
      
// }

// const goPrevious = () => {
  
//     setCurrentQuestion((prev) => prev - 1);
//     const answer = Number(userAnswers[currentQuestion-1]);
//     const pastAnswerSelected = quizData[currentQuestion-1].option[answer]
//     if (answer !== undefined) {
//        setAnswerSelected(pastAnswerSelected)
       
//     } 
//       else {
//           setAnswerSelected("")
//       }
      
// }
   
//     return(
//         <>
    
//         <div>
//             <h2>cau {currentQuestion + 1}</h2>
//             <p className='question'>{quizData[currentQuestion].question}</p>
//         {quizData[currentQuestion].answers.map((answer, index) => (
//             <button
//              key={index}
//             className={`option ${answerSelected === answer ? "selected" : ""}`}
//             // disabled={!!answerSelected && answerSelected !== answer}
//              onClick={() => handleAnswerClick(answer, index)}

//             >{answer}</button>
           
//         ))}
//         {}
//         </div>
//         {answerSelected === quizData[currentQuestion].correctAnswer ? (
//             <p className='correct-answer'>Bạn đã trả lời đúng!</p>) :(
//                 <p className='incorrect-answer'>Bạn chưa trả lời đúng!</p>)}
//       <p>Câu trả lời của bạn là : {answerSelected}</p>
//         <div className='nav-buttons'>
          
//         <button onClick={goPrevious}>Previous</button>
//         <button onClick={goNext}>Next</button>
//         </div>
        
//         </>
//     )



// }
// import React from 'react'
// const data = [
//   {
//     id: 1,
//     questions: "1 + 1 = ?",
//     options: ["1", "2", "3"],
//     correctIndex: 1
//   }
  
// ];
//  const Quiz = () => {
//   const [currentSelected,setCurentSelected]  = useState(null)
// const [checkAnswer,setCheckAnswer] = useState(null)
//   const handleOnClick = (item,index) =>{
//     setCurentSelected(index)
//     setCheckAnswer(null)
//     // const currentCorrectIndex = data[0].correctIndex
//     // if ( currentCorrectIndex === index ){
//     //   setCheckAnswer(true)
//     // } else 
//     //   {
//     //    setCheckAnswer(false)
//     // }



    

//   }
//   const handleCheck = (currentSelected)=>{
    
//     if(currentSelected===data[0].correctIndex) {
//       setCheckAnswer(true)

//     } else {
//       setCheckAnswer(false)
//     }
//   }
  
    
//   return (
//     <>
//     <h1>cau 1</h1>
//     <h2>{data[0].questions}</h2>
//     {data[0].options.map((item,index) => (
// <div key = {index}>
//   <button  onClick={() => handleOnClick(item,index)}  style={{  backgroundColor: currentSelected === index ?'blue' : 'white' }}>{item}</button>
// </div>

// ))}
// <button onClick={()=>handleCheck(currentSelected)}>SUBMIT</button>


//  {checkAnswer !== null && (
        
//         // Bước 2: Dùng toán tử 3 ngôi: (Điều kiện ? Đúng : Sai)
//         checkAnswer === true ? (
//             // Nếu True
//             <div style={{ color: 'green', fontWeight: 'bold' }}>
//                 Bạn đã trả lời đúng! 🎉
//             </div>
//         ) : (
//             // Nếu False
//             <div style={{ color: 'red', fontWeight: 'bold' }}>
//                 Bạn trả lời sai rồi! 😢
//             </div>
//         )

//       )} 

   
//     </>
   
//     )
// }
// }
// export default Quiz