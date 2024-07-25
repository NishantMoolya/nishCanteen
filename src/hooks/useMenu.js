const useMenu = (url) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const getData = async (page,filter) => {
        try {
            let options = {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(filter)
            };
                const res = await fetch(baseUrl+url+`?page=${page}`,options);
                const resData = await res.json();
                if (res.status === 200) {   
                    return resData;
                }else throw new Error(`${resData?.message}`);
            } catch (err) {
                console.log(`hook:an error occurred cannot post data:${err}`);
                return null;
            }
    }
    return getData;
}

export default useMenu;