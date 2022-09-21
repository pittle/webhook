import { useEffect,useState } from "react";
import {getAllStudents} from "../service/index"

export function useAllStudents(){
    const [students,setStudents] = useState([]);
    useEffect(() => {
        (async () => {
            const stu = await getAllStudents(); 
            // return stu;
            setStudents(stu);
        })()
    },[])
    return students
}