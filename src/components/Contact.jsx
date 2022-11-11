
import React,{useState} from 'react';
import Img from '../assets/p-1.PNG';
import '../styles/Contact.css';



function Contact() {
    // const [state, setState] = useState('');
   const submitContact=()=>{
        alert('Your Message Sent Successfully')
    }
  
    const regex = /^@*$/; 
   
   const [email,setEmail] = useState('');
   const [errorEmail,setErrorEmail] = useState('');

   const checkEmail=(e)=>{
    setEmail(e.target.value);
    if(regex.test(email)=== false ){
      setErrorEmail('please enter valid email address');
    }else{
      setErrorEmail('');
      return true;
    }
   }
   
   const [message,setMessage] = useState('');
   const [errorMessage,setErrorMessage] = useState('');
   
   const checkMessage=(e)=>{
    setMessage(e.target.value);
    // console.log(message.length);
    if(message.length >20){
      setErrorMessage('max characters is 20');
    }else{
      setErrorEmail('');
      return true;
    }
   }
    return (
        <div className='container-fluid'>
          <div className="row">
            <div className=" col d-none d-sm-block">
                <img src={Img} alt=""  className='image-fluid rounded img_contact '/>
            </div>
            <div className="form-contact col">
            <h1>Contact US</h1>
            <form>
              <div className="form-group mt-4">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input type="name" className="form-control" id="exampleInputname1" aria-describedby="nameHelp" max={10} placeholder="Full Name.."/>
                {/* <small id="nameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small> */}
              </div>
              <div className="form-group mt-4">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email.." onChange={checkEmail}/>
                <small id="emailHelp" className="form-text text-danger">{errorEmail}</small>
              </div>
              <div className="form-group mt-4 ">
                <label htmlFor="message">Message</label>
                <br />
              <textarea name="text" className="form-control"  cols="50" rows="3" maxLength={25} onChange={checkMessage}></textarea>
                <small id="emailHelp" className="form-text text-danger"> { message.length>20?errorMessage:''}</small>
              </div>
              <button type="submit" className="btn  send_msg mt-3" onClick={submitContact}>Send Message</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Contact;
