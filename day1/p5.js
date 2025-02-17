const fs=require('fs');
const write=()=>{
    const data="i am new data";
    fs.writeFileSync('./data.txt',data);
}
write();