function numberLineJump(x1,v1,x2,v2){
   const answer = (x1 - x2) % (v2 - v1) 
   
   if ( answer == 0)return("YES")
   else return("NO")
}



const result = numberLineJump(0 ,2 ,5 ,3);
console.log(result);