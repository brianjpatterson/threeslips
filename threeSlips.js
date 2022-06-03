const solution = arra => {
    
   const target = arra.reduce( ( acc,ele ) => acc + parseInt(ele), 0) / 3
   
     let count = 0, current = 0, retern = 0
     
     for (let i of arra.slice(0,-1)) {
         current += i
         retern = current === (target*2) ? retern + count : retern
         count = current === target ? count + 1 : count
     }

     return retern
}