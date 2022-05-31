const summ = arra => arra.reduce( ( acc,ele ) => acc + parseInt(ele), 0);

const solution = arra => {
    
/*/ *** CONST's without fonts ? idk :P *** /*/
/*/*/const target = (summ(arra)/3),
           beg = [],
           mid = [],
           end = [],
           solves = [];
           
/*/ *** LET's getterdunn *** /*/
/*///*/let counter = 0;
             
/*/ *** Runtime = Funtime! *** /*/
/*////*/arra.reduce( (acc, ele) => {
    
            let begl=beg.length, 
                midl=mid.length,
                endl=end.length,
                begs,
                mids,
                ends;
                console.log('ele :', ele);
            if (begl > 0) begs = summ(beg);
            if (midl > 0) mids = summ(mid);
            if (endl > 0) ends = summ(end);
    
            if (begl === 0 && midl === 0) {
                if (ends === target) 
                    mid.push(ele)
                    
                if (ends !== target)
                    end.push(ele)
            
            } else if (begl === 0 && ends === target) {
                if (mids === target) 
                    beg.push(ele)
                    
                if (mids !== target)
                    mid.push(ele)
            
            } else if (mids === target && ends === target) 
                    beg.push(ele)    
            
            
            
            return acc; 
        }, 0);
        
        if (summ([summ(beg), summ(mid), summ(end)]) === summ(arra)) 
            solves.push([beg, mid, end]);
            
console.log("beg: ", beg);
console.log("mid: ", mid);
console.log("end: ", end);

console.log("target: ", target);
console.log("solves: ", solves);
};