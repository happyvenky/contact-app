import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link,useHistory,useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

export const Edit = () => {
    const {id}= useParams();
    const [name, setname] = useState("");
    const [number, setnumber] = useState("");
    const [mail, setmail] = useState("");

    const contacts = useSelector(state => state);
    const currentcontact = contacts.find((contacts) => contacts.id === parseInt(id))
    const dispatch = useDispatch();
    const history = useHistory();
   

    useEffect(() => {
       if(currentcontact){
        setname(currentcontact.name);
        setnumber(currentcontact.number);
        setmail(currentcontact.mail);
       }
    }, [currentcontact]);

    const handleSubmit =(e)=>{
        e.preventDefault(); 

    
    const checkmail = contacts.find(contact=> contact.id !== parseInt(id) && contact.mail === mail);
    const checknumber = contacts.find(contact=> contact.id !== parseInt(id) && contact.number === parseInt(number));
    

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
            id : parseInt(id),
            name,
            mail,
            number,
        }
        dispatch({type:"UPDATE_CONTACT",payload : data})
        toast.success('User value Update');
        history.push('/')
    }

    return (
        <div className="container">
          {
              currentcontact ? ( 
              <div className="box">
                  <h1>Edit contect {id}</h1>
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
                          <Link to="/">Cancel</Link>
                        </div>
                    
                    </form>
          </div>
          ) : (
              <h1>User Id {id} not Exists</h1>
          ) }  
       
    </div>
    )
}
