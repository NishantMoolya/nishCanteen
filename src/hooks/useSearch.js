import { useEffect, useState } from "react";

const useSearch = (link) => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selected, setSelected] = useState(false);
    const getData = async (link) => {
        const url = `${process.env.REACT_APP_BASE_URL}${link}?search=${search}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (res.status === 200) {
                console.log(data);
                setSuggestions(data.data);
            }else{
                throw new Error("An fetch error");
            }
        } catch (err) {
            console.log(`an error occurred in fetch hook:${err}`);
        }
    }
    const changeSearchText = (e) => {
        setSearch(e.target.value);
        setSelected(false);
    }
    const selectSuggestion = (e) => {
        setSearch(e.target.innerText);
        setSelected(true);
    }
    const [lock,setLock] = useState(false);
    useEffect(() => {
        if(!lock){
            if (search !== '') {    
                let timer = setTimeout(() => {console.log("hello"); getData(link); setLock(true)},1000);
                return () => clearTimeout(timer);
            }
        }
    },[search]);
    return { search,suggestions,changeSearchText,selectSuggestion,selected };
}

export { useSearch };