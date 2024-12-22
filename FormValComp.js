import React, { useState } from 'react'

const FormValComp = () => {
    const [user,setUser]=useState({
        fname:"",
        term:false
    });
    const changeInput=(event)=>{
        // console.log(event.target.type);
        // console.log(event.target.name);
        // console.log(event.target.value);
        const {type,name,value,checked}=event.target;
        setUser({...user,[name]:type==="checkbox"?checked:value});

    }
    const checkData=(event)=>{
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("fname is required");
            return false;
        }
        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("Fullname must contain min 3 characters and max 20 characters");
            return false;
        }
        if(user.term===false){
            window.alert("please accect terms and condition");
            return false;
        }
        window.alert(JSON.stringify(user));
    }
    return (
        <div>
            <h2>This is form validation</h2>
            <form onSubmit={{checkData}}>
                <div>
                    <label>Enter first name:</label>
                    <input type='text' name='fname' onChange={changeInput} value={user.fname}></input>
                </div>
                <div>
                    <input type='checkbox' name='term' onChange={changeInput} value={user.term}>Accept terms and condition</input>
                </div>
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default FormValComp
