import { useState } from "react";

const useRegister = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const handleUserInput = (e) => {
    const { name,value } = e.target;
    setFormData({
      ...formData,[name]:value
    });
  }
  //const baseURL = process.env.REACT_APP_BASE_URL;
  const registerData = async (url,method = 'GET',postData=null,validStatus = 200) => {
    try {
        let options = {
            method:method,
            headers:{
                'Content-Type':'application/json'
            },
            credentials:'include'
        };
        if (postData === null) {
            postData={message:'body is empty'};
        }
        if (method !== 'GET') {
            options = {...options,body:JSON.stringify(postData)};                
        }
        const res = await fetch(url,options);
        let data = await res.json();
        data.status = res.status;
        return data;
    } catch (err) {
        console.log(`fetch:an error occurred in getting data:${err}`);
        return null;
    }
}
  return { formData,handleUserInput,registerData };
}

export default useRegister