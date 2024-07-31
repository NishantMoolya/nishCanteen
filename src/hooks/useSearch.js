import { useEffect, useState } from "react";

const useSearch = (link) => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selected, setSelected] = useState(false);

    const getData = async () => {
        const url = `${link}?query=${search}`;
        let options = {
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            },
            credentials:'include'
        };
        try {
            const res = await fetch(url,options);
            const data = await res.json();
            if (res.status === 200) {
                //console.log(data);
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

    const selectSuggestion = (text) => {
        //console.log(text);
        setSearch(text);
        setSelected(true);
    }

    useEffect(() => {
            if (search !== '') {    
                let timer = setTimeout(() => getData(),1000);
                return () => clearTimeout(timer);
            }
    },[search]);

    return { search,suggestions,changeSearchText,selectSuggestion,selected };
}

export { useSearch };