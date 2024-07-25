const useFetch = (url) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const getData = async () => {
        try {
            let options = {
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            };
                const res = await fetch(baseUrl+url,options);
                const resData = await res.json();
                if (res.status === 200) {   
                    return resData;
                }else throw new Error(`${resData?.message}`);
            } catch (err) {
                console.log(`hook:an error occurred cannot get data:${err}`);
                return null;
            }
    }
    return getData;
}

export default useFetch;