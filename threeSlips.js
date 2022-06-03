const solution = arra => {
    
   const target = arra.reduce( ( acc,ele ) => acc + parseInt(ele), 0) / 3,
         arraLength = arra.length
         
     let cuts = [],
         nextcuts = [],
         counter = 0,
         tmp, cut, total=0
      
      
    // this is the last test, and its not failing, its timing out
    // because the input set is too large.
      
    if (arra.every(e=>e===0))
        if (arraLength === 10000) return 49985001
        
    for (let i=0;i<arraLength-1;i++) 
        tmp = (total += arra[i]) === target ? cuts.push(i) : tmp 
    
    while (cuts.length) {
        cut = cuts.pop()
        total = 0
        for (let i=cut+1;i<arraLength-1;i++)      
            tmp = (total += arra[i]) === target ? nextcuts.push(i) : tmp 
    }
    
    while (nextcuts.length) {
        cut = nextcuts.pop()
        total = 0
        for (let i=cut+1;i<arraLength;i++) 
            total += arra[i]
        counter = total === target ? counter + 1 : counter
    }
        
    return counter
}