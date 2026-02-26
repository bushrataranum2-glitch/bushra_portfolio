import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {

const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm(
"service_ju4seha",
"template_9482i5t",
form.current,
"XSdh5cxaIUz4OAsZL"
)
.then(() => {
alert("Message Sent Successfully!");
})
.catch(() => {
alert("Failed to send message");
});

e.target.reset();
};

return (

<div
id="contact"
style={{
minHeight:"100vh",
color:"white",
padding:"100px 8%",   // Responsive padding
position:"relative",
zIndex:1
}}
>

<h1 style={{
textAlign:"center",
fontSize:"clamp(30px,5vw,50px)",
marginBottom:"60px"
}}>
Contact Me
</h1>



{/* MAIN LAYOUT */}

<div style={mainContainer}>


{/* LEFT SIDE BOXES */}

<div style={leftContainer}>





<div style={boxStyle}>

<FaEnvelope size={40} color="#ff2abf"/>

<h3>Email</h3>

<p>
bushrataranum2@gmail.com
</p>

</div>



<div style={boxStyle}>

<FaLinkedin size={40} color="#ff2abf"/>

<h3>LinkedIn</h3>

<p>
bushra-taranum
</p>

</div>


</div>



{/* RIGHT SIDE FORM */}

<form
ref={form}
onSubmit={sendEmail}
style={formStyle}
>


<input
type="text"
name="name"
placeholder="Your Name"
required
style={inputStyle}
/>


<input
type="email"
name="email"
placeholder="Your Email"
required
style={inputStyle}
/>


<textarea
name="message"
placeholder="Your Message"
rows="6"
required
style={inputStyle}
/>



<button
type="submit"
style={buttonStyle}
>
Send Message
</button>


</form>


</div>

</div>

);
}



const mainContainer = {

display:"flex",
flexWrap:"wrap",   // Makes responsive
justifyContent:"center",
alignItems:"center",
gap:"60px"

};


const leftContainer = {

display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"25px",
maxWidth:"500px"

};


const formStyle = {

display:"flex",
flexDirection:"column",
width:"100%",
maxWidth:"420px",
gap:"20px"

};


const boxStyle = {

padding:"25px",
borderRadius:"15px",
border:"1px solid rgba(255,255,255,0.3)",
background:"rgba(255,255,255,0.05)",
backdropFilter:"blur(10px)",
color:"white",
textAlign:"center"

};


const inputStyle = {

padding:"18px",
borderRadius:"10px",
border:"1px solid rgba(255,255,255,0.3)",
background:"rgba(255,255,255,0.05)",
color:"white",
outline:"none",
fontSize:"16px"

};


const buttonStyle = {

padding:"14px",
borderRadius:"10px",
border:"none",
background:"#8b5cf6",
color:"white",
fontSize:"18px",
cursor:"pointer"

};


export default Contact;