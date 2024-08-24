const scrollAboutMe=function(){
    document.querySelector('.aboutMe').scrollIntoView({behavior:"smooth"})
}

const scrollSkills=function(){
    document.querySelector('.skills').scrollIntoView({behavior:"smooth"})
}

const scrollProjects=function(){
    document.querySelector('.projects').scrollIntoView({behavior:"smooth"})
}

const scrollContact=function(){
    document.querySelector('.contact').scrollIntoView({behavior:"smooth"})
}

const handleSubmit=function(e){
  e.preventDefault();
  const email=document.getElementById('email').value;
  const number=document.getElementById('contact').value;
  const error=document.getElementById('error')
  if(email===''||!email.includes('.com')){
    error.innerText="Enter a valid email!"
  }
  else if(number.length!=10){
    error.innerText="Enter a valid number!"
 }
  else{
    error.innerText="";
    alert('I will reach out to you shortly!')
  }
}
const text = "Hello there, I'm Aayush Jha, currently in my 3rd semester of BCA in IMED, Pune. I have a strong passion for web development and enjoy creating engaging and user-friendly websites.";
const aboutMe = document.querySelector('.aboutMeBox');
let count = 0;
function type() {
    if (count < text.length) {
        aboutMe.innerHTML += text.charAt(count);
        count++;
        setTimeout(type, 50);
    }
}
type();
