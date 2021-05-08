if (1 > 3) {
  console.log("if statement is excuted");

  if (1 > 0) {
    console.log("nested if statement is excuted");
  }
} else {
  console.log("else statement is excuted");
}
  
/* the first condition TRUE or FALSE? is 1 greater than 3 (1>3), no its not, first statement is false, JS then jumps onto the ELSE statement, it dosent even look at the code in the 'if' block, since the condition is FALSE. the nested statement in the code block of the 'if' statement can be TRUE,, but it will be ignored, and the code will not run bacuase of the outer condition is FALSE */

