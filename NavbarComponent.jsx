import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavbarComponent() {

const [scrolled,setScrolled] = useState(false);
const [active,setActive] = useState("home");
const [expanded,setExpanded] = useState(false);


const scrollToSection = (id)=>{

document.getElementById(id).scrollIntoView({
behavior:"smooth"
});

setActive(id);
setExpanded(false); // Close mobile menu

};



useEffect(()=>{

const handleScroll = ()=>{

// Glass navbar only after scrolling
if(window.scrollY === 0){
setScrolled(false);
}
else{
setScrolled(true);
}


// Active section highlight
const sections=[
"home",
"about",
"education",
"skills",
"projects",
"certification",
"contact"
];


sections.forEach(section=>{

const element=document.getElementById(section);

if(element){

if(window.scrollY >= element.offsetTop - 200){

setActive(section);

}

}

});

};

window.addEventListener("scroll",handleScroll);

handleScroll();

return()=>window.removeEventListener("scroll",handleScroll);

},[]);



return(

<Navbar

expand="lg"

fixed="top"

expanded={expanded}

onToggle={(value)=>setExpanded(value)}

style={{

background: scrolled
? "rgba(0,0,0,0.5)"
: "transparent",

backdropFilter: scrolled
? "blur(10px)"
: "none",

WebkitBackdropFilter: scrolled
? "blur(10px)"
: "none",

transition:"all 0.4s ease",

boxShadow: scrolled
? "0px 2px 10px rgba(0,0,0,0.3)"
: "none"

}}

>

<Container>


{/* LOGO */}

<img

src="/logo.jpeg"

alt="logo"

style={{

width:"40px",

cursor:"pointer",

filter:"invert(1) brightness(2)",

mixBlendMode:"screen"

}}

onClick={()=>scrollToSection("home")}

/>



{/* MOBILE MENU BUTTON */}

<Navbar.Toggle

style={{

background:"white"

}}

/>



<Navbar.Collapse>



<Nav

className="mx-auto"

style={{

gap:"30px",

fontSize:"18px",

fontWeight:"500"

}}

>



<Nav.Link

className={active==="home"?"active-nav":""}

onClick={()=>scrollToSection("home")}

>

Home

</Nav.Link>



<Nav.Link

className={active==="about"?"active-nav":""}

onClick={()=>scrollToSection("about")}

>

About

</Nav.Link>



<Nav.Link

className={active==="education"?"active-nav":""}

onClick={()=>scrollToSection("education")}

>

Education

</Nav.Link>



<Nav.Link

className={active==="skills"?"active-nav":""}

onClick={()=>scrollToSection("skills")}

>

Skills

</Nav.Link>



<Nav.Link

className={active==="projects"?"active-nav":""}

onClick={()=>scrollToSection("projects")}

>

Projects

</Nav.Link>



<Nav.Link

className={active==="certification"?"active-nav":""}

onClick={()=>scrollToSection("certification")}

>

Certification

</Nav.Link>



<Nav.Link

className={active==="contact"?"active-nav":""}

onClick={()=>scrollToSection("contact")}

>

Contact

</Nav.Link>



</Nav>



</Navbar.Collapse>



</Container>

</Navbar>

);

}

export default NavbarComponent;