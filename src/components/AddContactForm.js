import { useEffect, useState } from "react";
import React from 'react';
import {FaRegAddressBook} from "react-icons/fa";
import { FaPhoneAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import '../index.css';




   export default function AddContactForm(){
	   
   let dataObj1 = [{ id: 1,
    firstName: "Steve",
    lastName: "Jobs",
	phoneNumber: "245-334-6022"
  },
  { id: 2,
    firstName: "Eric",
    lastName: "Elliot",
	phoneNumber: "222-368-8985"
  },
  
  { id: 3,
    firstName: "Steve",
    lastName: "Wozniak",
	phoneNumber: "223-345-7848"
  }];
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
	const [id, setId] = useState("")
	const [message, setMessage] = useState("")
	const [lastname, setLastname] = useState("")
	const [query, setQuery] = useState("")

    interface FormDataType {firstName:string, lastName: string, phoneNumber: string, lastname: string, id: string}
    const responseBody: FormDataType = {firstName: "", lastName: "", phoneNumber: "", lastname: "", id: ""}
      
	    
       const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
		try {
		responseBody.firstName = firstName
        responseBody.lastName = lastName
        responseBody.phoneNumber = phoneNumber
        //console.log(JSON.stringify(responseBody))
      const res = await fetch("http://localhost:9000/save", {
        method: "POST",
		headers: {
        accept: "application/json",
		'content-type': "application/json",
		
      },
	  
        body: JSON.stringify(responseBody),
		
      });
      if (res.status === 200) {
		setMessage("Contact saved successfully");
      } else {
        setMessage("Failed to save contact");
      }
    } catch (err) {
      console.log(err);
    }
        
  
}


const onSubmitHandler2 = async (event: React.FormEvent<HTMLFormElement>) => {
	     event.preventDefault();
        //if(event === 'Enter' )
		//{ 
		try {
        responseBody.lastname = lastname
        //console.log(JSON.stringify(responseBody))
      const res = await fetch("http://localhost:9000/findall", {
        method: "POST",
		headers: {
        accept: "application/json",
		'content-type': "application/json",
		
      },
	  
        body: JSON.stringify(responseBody),
		
      });
	  
	  
      if (res.status === 200) {
		  const data = await res.json();
		  let jsonObj = JSON.stringify(data);
		  console.log(`jsonObj: ${jsonObj}`);
		  jsonObj = JSON.parse(jsonObj);
	      console.log(`jsonObj: ${jsonObj}`);
		  jsonObj = JSON.stringify(jsonObj);
		  console.log(`jsonObj: ${jsonObj}`);
		  /*const dataObj = JSON.stringify(data);
		  console.log(`datObj: ${dataObj}`);
		  const dataObj2 = jsonObj;
		  const dataObj0 = JSON.stringify(dataObj2);
		  console.log(`jsonDatObj1: ${dataObj0}`);
		  dataObj1 = JSON.parse(dataObj0);
		  console.log(`jsonDatObj2: ${dataObj1}`);*/
		document.getElementById("first_name").value=jsonObj.firstName;
		document.getElementById("last_name").value=jsonObj.lastName;
		document.getElementById("phone_number").value=jsonObj.phoneNumber;
		document.getElementById("id").value=jsonObj._id;
		setFirstName(firstName);
		setLastName(lastName);
		setPhoneNumber(phoneNumber);
		setId(id);
		setMessage("Data fetched successfully");
      } else {
        setMessage("Failed to fetch data");
      }
    } catch (err) {
      console.log(err);
    }
	
		//}
     //else{setMessage("Failed to fetch data...");
	 //}		
}

const onSubmitHandler3 = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
		try {
		responseBody.id = id
		responseBody.firstName = firstName
        responseBody.lastName = lastName
        responseBody.phoneNumber = phoneNumber
		setFirstName(firstName);
		setFirstName(lastName);
		setFirstName(phoneNumber);
		setId(id);

        //console.log(JSON.stringify(responseBody))
      const res = await fetch("http://localhost:9000/update", {
        method: "PUT",
		headers: {
        accept: "application/json",
		'content-type': "application/json",
		
      },
	  
        body: JSON.stringify(responseBody),
		
      });
	  
	  
      if (res.status === 200) {
		  //const data = await res.json();
		  //const dataObj = JSON.parse(data);
		  //console.log(data);
		  //console.log(dataObj);
		setMessage("Data updated successfully");
      } else {
        setMessage("Failed to update data");
      }
    } catch (err) {
      console.log(err);
    }
	
          
}

const onSubmitHandler4 = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
		try {
		responseBody.id = id
		responseBody.firstName = firstName
        responseBody.lastName = lastName
        responseBody.phoneNumber = phoneNumber
		setFirstName(firstName);
		setFirstName(lastName);
		setFirstName(phoneNumber);
		setId(id);

        //console.log(JSON.stringify(responseBody))
      const res = await fetch("http://localhost:9000/update", {
        method: "PUT",
		headers: {
        accept: "application/json",
		'content-type': "application/json",
		
      },
	  
        body: JSON.stringify(responseBody),
		
      });
	  
	  
      if (res.status === 200) {
		  //const data = await res.json();
		  //const dataObj = JSON.parse(data);
		  //console.log(data);
		  //console.log(dataObj);
		setMessage("Data updated successfully");
      } else {
        setMessage("Failed to update data");
      }
    } catch (err) {
      console.log(err);
    }
	
          
}

    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value);
		setQuery(event.target.value);
    }
	
    return(
	<div align="center">
        <div className="flex-container" ><form id="form" >
		    <input id="lastname" onChange={(e)=>inputChangeHandler(setLastname, e)} type="text" placeholder="&#xF002; Search for contacts by last name..." name="lastname" style={{fontFamily: 'FontAwesome' , width: '660px', height: '28px' }} onSubmit={onSubmitHandler2}/><button id="search" style={{borderRadius:'15px', background: 'grey', color: 'white', fontSize:'20px', width: '120px', height: '30px'}} type="button" onClick={onSubmitHandler2}>Search</button>
			
			<div>{ dataObj1.filter(p => {
            if (query === '') {
            return p;
            } else if (p.lastName.toLowerCase().includes(query.toLowerCase())) {
            return p;
            }
            }).map((p, index) => (
           <div className="card" key={index}>
           <p>{`${p.firstName} ${p.lastName}`}<br /><FaPhoneAlt style={{background: 'white', color: 'gray', fontSize:'15px'}} />{` ${p.phoneNumber}`}</p>
		   <p><FaTrashAlt size={30} style={{background: 'red', color: 'white'}} /></p>
           </div>
            ))
			}</div>
			
			<div>{
				
	   async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
		try {
        responseBody.lastname = lastname
      const res = await fetch("http://localhost:9000/findone", {
        method: "POST",
		headers: {
        accept: "application/json",
		'content-type': "application/json",
		
      },
	  
        body: JSON.stringify(responseBody),
		
      });
	  
	  
      if (res.status === 200) {
		  const data = await res.json();
		  dataObj1 = JSON.parse(data);
		  //console.log(data);
		   console.log(dataObj);
	      dataObj1.filter(p => {
    if (query === '') {
      return p;
    } else if (p.lastName.toLowerCase().includes(query.toLowerCase())) {
      return p;
    }
  }).map((p, index) => (
    <div className="card" key={index}>
      <p>{`${p.firstName} ${p.lastName}`}</p>
    </div>
  ))
  
		document.getElementById("first_name").value=dataObj.firstName;
		document.getElementById("last_name").value=dataObj.lastName;
		document.getElementById("phone_number").value=dataObj.phoneNumber;
		setFirstName(firstName);
		setFirstName(lastName);
		setFirstName(phoneNumber);
		
		setMessage("Data fetched successfully");
      } else {
        setMessage("Failed to fetch data");
      }
    } catch (err) {
      console.log(err);
    }
            
          
			}}</div>
            <div><tr><td><label htmlFor="first_name">First Name: </label></td>
            <td><input id="first_name" onChange={(e)=>inputChangeHandler(setFirstName, e)} type="text"/></td></tr></div>
            <div><tr><td><label htmlFor="last_name">Last Name: </label></td>
            <td><input id="last_name" onChange={(e)=>inputChangeHandler(setLastName, e)} type="text"/></td></tr></div>
            <div><tr><td><label htmlFor="phone_number">Phone No.:   </label></td>
            <td><input id="phone_number" onChange={(e)=>inputChangeHandler(setPhoneNumber, e)} type="text"/></td></tr></div>
			<div><tr><td><label htmlFor="id">ID: </label></td>
            <td><input id="id" onChange={(e)=>inputChangeHandler(setId, e)} type="text"/></td></tr></div>
			<div><button id="save" style={{borderRadius:'15px', background: 'grey', color: 'white', fontSize:'20px', width: '120px', height: '30px'}} type="button" onClick={onSubmitHandler}>Save</button><button id="update" style={{borderRadius:'15px', background: 'grey', color: 'white', fontSize:'20px', width: '120px', height: '30px'}} type="button" onClick="">Update</button><button id="delete" style={{borderRadius:'15px', background: 'grey', color: 'white', fontSize:'20px', width: '120px', height: '30px'}} type="button" onClick="">Delete</button></div>
			<div>{message ? <p>{message}</p> : null}</div>
       </form></div>
		
		
		</div>
    )
	
	
	useEffect(() => {
  onSubmitHandler2();
}, []);

   useEffect(() => {
  onSubmitHandler();
}, []);


}

