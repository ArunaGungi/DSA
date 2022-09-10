var array = [1,3,3,4,2,3,6,6,1,0,9]

for(let i=0; i<array.length; i++) {
    var count=0;
    for(let j=i; j<array.length; j++) {
        if(array[i]==array[j]) {
            count+=1;
        }
    }
    console.log(array[i],"=",count);
}


