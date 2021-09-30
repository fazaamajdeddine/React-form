import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateChange(event){
      const {name, value} = event.target;

      setContact((pervValue) => {
        if (name ==="fName"){
            return{
                fName: value,
                lName: pervValue.lName,
                email: pervValue.email
            }
        }else if (name ==="lName"){
            return{
              fName: pervValue.fName,
              lName: value,
              email: pervValue.email
            }
        }else if (name ==="email"){
            return{
              fName: pervValue.fName,
              lName: pervValue.lName,
              email: value
            }
        }
      })
      
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={updateChange} name="fName" placeholder="First Name" value={contact.fName}/>
        <input onChange={updateChange} name="lName" placeholder="Last Name" value={contact.lName}/>
        <input onChange={updateChange} name="email" placeholder="Email"  value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
