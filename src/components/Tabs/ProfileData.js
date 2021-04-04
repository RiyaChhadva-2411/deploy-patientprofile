import axios from 'axios';
export const sendPatientProfileData= async(data)=>{
    return await axios
    .post("https://project31-heroku.herokuapp.com/api/v11/user/patient/")
    .then((response)=>{
        console.log(response);
        return response;
    })
    .catch((err)=>{
        console.log(err);
        //return null;
    });
}