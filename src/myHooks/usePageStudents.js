import { useEffect,useState } from "react";
import {getStudents} from "../service/index"

export function usePageStudents(page,limit){
    const [resp,setResp] = useState({});
    useEffect(() => {
        (async () => {
            const resp = await getStudents(page,limit); 
            // return stu;
            setResp(resp);
        })()
    },[page,limit])
    return resp;
} 