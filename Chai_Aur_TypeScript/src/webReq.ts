import axios  from "axios"
import type { AxiosResponse } from "axios";

interface Todo{
    userId:number;
    id:number;
    title:string;
    completed:boolean
}


const fetchData= async ()=>{
     try{
       const response: AxiosResponse <Todo> = await axios.
       get(
        "https://jsonplaceholder.typicode.com/todos/1"
       )
       console.log("Todo", response.data)
     }
     catch(error: any){
          if(axios.isAxiosError(error)){
            console.log("Axios Error",error.message);
            if(error.response){
                console.log(error.response.status)
            }
          }
     }
}




// import axios from "axios";

// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const fetchData = async (): Promise<void> => {
//   try {
//     const response = await axios.get<Todo>(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     console.log("Todo:", response.data);

//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.log("Axios Error:", error.message);
//       if (error.response) {
//         console.log("Status:", error.response.status);
//       }
//     } else {
//       console.log("Unexpected Error:", error);
//     }
//   }
// };

// fetchData();