const fs = require('fs');
const append=()=>{
    const data="i am new data";
    fs.appendFileSync('./data.txt',data,(err)=>{
        if(err) throw err;
            console.log("data appended");
        
    })
}
write();
