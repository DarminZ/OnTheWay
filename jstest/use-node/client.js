import * as axios from "axios";

axios.get("http://127.0.0.1:8081/process_get?first_name=darmin&last_name=zhou").then(res => {
   console.log('1:',res.data);
}).catch(err => {
    console.log(err);
});

axios.get("http://127.0.0.1:8081/").then(res => {
   console.log("2:",res.data);
}).catch(err => {
    console.log(err);
});

axios.post("http://127.0.0.1:8081/login",{username: 'jack', password: '123321'}).then(res => {
   console.log("3:",res.data);
}).catch(err => {
    console.log(err);
});

