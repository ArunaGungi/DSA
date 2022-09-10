var array=[1,2,3,5,9]
var N=array[array.length-1];
var result=[]
for(let i=0; i<N; i++) {
    result[i]=i+1
}

for(let i=0; i<result.length; i++) {
    var count=0;
    for(let j=0; j<N; j++) {
        if(result[i]==array[j]) {
            break;
        }
        else {
            count+=1;
        }
    }
    if(count==result.length) {
        console.log(result[i]);
    }
}
