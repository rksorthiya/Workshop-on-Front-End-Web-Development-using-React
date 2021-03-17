import React,{useEffect,useState} from 'react'

function Post() {
    const[todos, settodos]=useState([])

    useEffect(()=>{
        async function fetchdata(){
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            res.json()
            .then((res)=>{settodos(res)})
            .catch((err)=>{console.log(err)})
        }
        fetchdata();
    }
    )
    return (
        <div>
            <h1>Post</h1>
            {todos.map((item,index)=>{
                return(
                    <div style={{backgroundColor:"#f1f1f1",padding:"20px",margin:"20px",boxShadow:"1px 3px 1px #9E9E9E"}} key={index}>
                       <b>UserID:{item.userId}</b>
                    <br/>
                    <b>Id:{item.id}</b>
                    <br/>
                    <b>Title:{item.title}</b>
                    <br/>
                    <b>Completed:{item.Completed ? "true" : "false"}</b>
                        <br/>
                    </div>
                )
            }
            )

            }
        </div>
    )
}

export default Post
