// module require

const fs =  require('fs')


// 1.open file
// async

//  let sync =  fs.open('./NodeCore/dum.txt','r+',(error,data)=>{
//  if(error){
//     console.log(`your file not open ${error}`);
//  }else{
//     console.log(`open succesfully..`);
//  }
// }) 
 
// sync
// const sysnc = fs.openSync('./NodeCore/dum.txt','r+')
// console.log('open file suceesfully',sysnc);




// 2.write file
// sync
// const data = `hello my name is smit nice to meet you`
//  fs.writeFileSync('./NodeCore/yuu.txt',data)

// aync
// fs.writeFile('./NodeCore/new.txt',data,(error)=>{
//    if(error){
//           console.log(`your file not write${error}`);
//        }else{
//           console.log(`write file suceesfully..`);
//        }
// })



// 3.read file
// sync

// const read = fs.readFileSync('./NodeCore/dum.txt','utf-8')
// console.log(read);

// async
// fs.readFile('./NodeCore/dum.txt','utf-8',(error,data)=>{
//    if(error){
//       (error);
//    }else{
//       console.log(data);
//    }
// })




// 4.appendfile
// sync
// const data = "ds;f,asldf,l;sdmvl;dsvmlsd;m,fclsk,vslksalkfdasklvaskfcsdkvsdkspvkds"
// fs.appendFileSync('./NodeCore/dum.txt',data)
// console.log("succesfully append");

// async
// fs.appendFile('./NodeCore/yuu.txt',data,(error)=>{
//    if(error){
//      console.log(error);
//    }
//    else{
//       console.log("sucessfully apend file");
//    }
// })

// 5.close file
// fs.close(sysnc,(error)=>{
// if(error){
//     console.log(error);
// }else{
//     console.log("close file suceesfully");
// }
// })


// 6.unlink mens delete 
// fs.unlink('./NodeCore/new.txt',(error)=>{
//     if(error){
//         console.log('file was not deleted',error);
//     }
//     else{
//         console.log('suceesfulyy deleted');
//     }
// })



// read and write sucessfully
// const data = 'asdaslskdsaldkwpdkpqwdqwpdlasd;,; das as;dasdpqwlewpd';

// fs.writeFile('./NodeCore/yuu.txt',data,(error)=>{
//           if(error){
//                console.log(`not write file ${error}`)
//           }else{
//             console.log('file was write sucessfully')
//           }
                    
// })

// fs.readFile('./NodeCore/yuu.txt','utf-8',(error,data)=>{
// if(error){
//     console.log(error);
// }else{
//     console.log('read and write sucessfully \n',data);
// }
// })


// import and export
// NodeCore
// const {sum,multi} = require('./own_module.js')
// console.log(sum(45,70));

// es6
// import {sum,multi} from './lib.js';
// sum(500,600)
// multi(800,500)


// rename file using rename
// fs.renameSync('./NodeCore/dum.txt' , './NodeCore/smit.txt')
// console.log('rename this file sucessfully');