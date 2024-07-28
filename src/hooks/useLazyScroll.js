import { useRef, useState } from "react";

const useLazyScroll = () => {
    const frameRef = useRef(null);
    const [scrollData,setScrollData] = useState({
        isLoading:true,
        isError:null,
        page:1,
        canScroll:true
    });

    // const toggleLoading = () => {
    //     scrollData.isLoading?setScrollData(data => ({...data,isLoading:false})):setScrollData(data => ({...data,isLoading:true}));
    // };

    const endOfPage = () => {
        setScrollData(data => ({...data,canScroll:false}));
    };

    const setError = () => {
        setScrollData(data => ({...data,isError:true}));
    };

    const resetPage = () => {
        setScrollData(data => ({...data,page:1,canScroll:true,isLoading:true}));
    };


    const handleScroll = () => {
        if(frameRef.current.clientHeight + frameRef.current.scrollTop+1 >= frameRef.current.scrollHeight){
          if(scrollData.canScroll) setScrollData(data => ({...data,page:data.page+1}));
        }
      }

    const lazyLoadData = async (url,method = 'GET',postData=null,validStatus = 200) => {
        try {
            setScrollData(prev => ({...prev,isLoading:true}));
            let options = {
                method:method,
                headers:{
                    'Content-Type':'application/json'
                },
                crendentials:'include'
            };

            if (method !== 'GET') {
                options = {...options,body:JSON.stringify(postData)};                
            }
            const res = await fetch(url,options);
            const data = await res.json();
            if (res.status === validStatus) {
                if (data.data.length === 0) {
                    endOfPage();
                    return null;
                }else return data;
            }else{
                throw new Error('Invalid status code and response');
            }
        } catch (err) {
            console.log(`lazyScroll:an error occurred in getting data:${err}`);
            setError();
            return null;
        }finally{
            setScrollData(prev => ({...prev,isLoading:false}));
        }
    }

    return { scrollData,frameRef,handleScroll,lazyLoadData,resetPage };
}

export default useLazyScroll