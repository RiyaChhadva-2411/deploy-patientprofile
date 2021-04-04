import axios from 'axios';

export const sendRelationshipData= async(data)=>{
    
    return axios
    .post("https://project31-heroku.herokuapp.com/api/v11/user/patient/relative/", data)
    // .then((response)=>{
    //     console.log(response);
    //     return response.data;
    // })
    // .catch((err)=>{
    //     console.log(err);
    //     return null;
    // });
}