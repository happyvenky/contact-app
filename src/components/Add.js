import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Add = () => {
    const [name, setname] = useState("");
    const [number, setnumber] = useState("");
    const [mail, setmail] = useState("");

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const history  = useHistory();

    const handleSubmit =(e)=>{
        e.preventDefault(); 

    
    const checkmail = contacts.find(contact=> contact.mail === mail && contact);
    const checknumber = contacts.find(contact=> contact.number === parseInt(number));
    

        if(!mail || !number || !name){
            return toast.warning("please Fill in all fields")
        }

        if(checkmail){
            toast.error("email already Exists")
        }
        if(checknumber){
            toast.error("Number already Exists")
        }
        const data ={
            id : contacts[contacts.length - 1].id + 1,
            name,
            mail,
            number,
        }
        console.log('data',data);
        dispatch({type: "ADD_CONTECT",payload : data})
        toast.success('user can be Added')
        history.push("/");
    };

    return (
        <div className="container">
            <div className="box">
                <h1>Add contect</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="form-label"> Name</label>
                            <input
                             type="text" 
                             className="form-control"
                             placeholder="Name"
                             value={name}
                             onChange={e=>setname(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label className="form-label"> Number</label>
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={number}
                            onChange={e=>setnumber(e.target.value)}
                            />
                        </div>
                        <div className="mb-5">
                            <label className="form-label"> Mail</label>
                            <input 
                            type="mail" 
                            className="form-control" 
                            placeholder="mail"
                            value={mail}
                            onChange={e=>setmail(e.target.value)}/>
                        </div>
                        <div className="d-grid gap-2">
                          <input type="submit" value="Submit" className="btn-primary"/>
                        </div>
                    
                    </form>
            </div>
        </div>
    )
}
