let arr=[];
function recordAnswers(questionNo,answer,nextQuestionNo){
   arr[questionNo]=answer;
   if(nextQuestionNo>0){
      console.log(nextQuestionNo);
      $('.question .row').removeClass("active");
      $('.q'+nextQuestionNo).addClass("active");
   }
   else{
      // Result Calculation:
      // If q1, q2, q4, q8, q9, q6 = yes and q3, q5, q7, q10 = yes/no then result 1 
      // If q2, q1, q4 = yes and q3, q6, q5, q7, q10 = yes/no and q8, q9 = yes/no then result 2 
      // Otherwise show the result 3
      if((arr[1],arr[2],arr[4],arr[8],arr[9],arr[6]==1) && (arr[3],arr[5],arr[7],arr[10]==1||2)){
         $('.question .row').removeClass("active");
         $('.result-1').addClass("active");   
      }
      else if((arr[2],arr[1],arr[4]==1) && (arr[3],arr[6],arr[5],arr[7],arr[10]==1||2) && (arr[8],arr[9]==1||2)){
         $('.question .row').removeClass("active");
         $('.result-2').addClass("active");   
      }
      else{
         $('.question .row').removeClass("active");
         $('.result-3').addClass("active");   
      }
   }
}
