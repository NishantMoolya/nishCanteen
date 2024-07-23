const usePost = (url) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const postData = async (data) => {
        try {
        let options = {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        };
            const res = await fetch(baseUrl+url,options);
            const resData = await res.json();
            if (res.status === 201) {   
                return resData;
            }else throw new Error(`${resData?.message}`);
        } catch (err) {
            console.log(`hook:an error occurred cannot post data:${err}`);
            return null;
        }
    }
    return postData;
}

export default usePost;