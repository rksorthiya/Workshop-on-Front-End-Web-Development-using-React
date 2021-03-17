import React,{useState} from 'react'

function ControlledForm() {

    //person = {username:"Divya", password="123"}
    const[Person, setPerson] = useState({
        username:"",
        password:""
    })

    const[records, setRecords] = useState([])

    let handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        // console.log(name,value);

        setPerson({...Person,[name]:value})
        console.log(Person);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = {...Person};
        setRecords([...records,newRecord]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{width:"400px", margin:"auto"}}>
            <h1>Registration</h1>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" onChange={handleInput} className="form-control" name="username" id="username" placeholder="Enter username"></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={handleInput} className="form-control" name="password" id="password" placeholder="Enter Pasword"></input>
            </div>
            <button className="btn btn-primary m-3">Register</button>
            </form>

            {records.map((record,index)=>{
                return(
                    <div style={{backgroundColor:"#b8c5cf",padding:"10px",borderRadius:"5px", margin:"auto",marginTop:"10px", width:"30%",boxShadow:"1px 3px 1px #9ca7f0"}} key={index} >
                        {record.username}

                        {/* {record.password} */}
                    </div>
                )
            })}

        </div>
    )
}

export default ControlledForm