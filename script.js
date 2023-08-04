// local reviews data
const reviews = [
    {
      id: 1,
      name: "Neelpawan Kalita",
      job: "Intern",
      img:
        "./assets/neelpawan.jpg",
      text:
        "Ekodus provides an internship program for the students so that they can able to gain real-time application development experience. I would like to thank Narayan sir for motivating me for future Endeavor. I would like to thank Gitika Boro Bordoloi(MD) ma’am for giving me such an opportunity to gain corporate experience. The entire team of Ekodus Inc. is very supportive, encouraging and friendly"
    },
    {
      id: 2,
      name: "Anupam Paul Choudhury",
      job: "web developer",
      img:
        "./assets//anupam.jpg",
      text:
        "I took the course of advance web development training in Ekodus with the hope of enhancing my knowledge of backend. After I took admission I found supportive faculty who are guiding me in the process and I also hope that this will come as a big support in career development."
    },
    {
      id: 3,
      name: "Kunal Patowary",
      job: "web developer",
      img:
        "./assets/Pic-Kunal.jpg",
      text:
        "I am immensely thankful to Ekodus Technology pvt. Ltd. for providing the training program which has helped me groom and prepare myself for the future challenges in the field of Web Development. The contents of the course is up to date. The Faculty and staff are all dedicated to students success and innovation, making an exciting plan to learn."
    },
    
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // show next person
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  // show prev person
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  

  function openCourseModal(){
    var myElement = document.querySelector('.courses-container');
    var topPos = myElement.offsetTop;
    document.querySelector('.course-modal').style.display = "flex"
  }
  function downloadBrochure(){
    document.querySelector('.formfillmsg').style.display= "block"
  }










//   function brochureDownload(){
//     const downloadPdf = document.querySelector("#download-pdf");
//     const submitForm = document.querySelector("#submitbtn");

//     const name = document.querySelector('#name').value
//     const email = document.querySelector('#email').value
//     const phnumber = document.querySelector('#phnumber').value
//     const city = document.querySelector('#city').value
//     const course = document.querySelector('#course').value
//     const message = document.querySelector('#message').value

   
  
     
     
//       let element = document.createElement("a");
//       if(course=='java'){
       
//       element.href = "./assets/Ekodus Brochure.pdf";
//       element.download = "Brochure.pdf";

//       document.documentElement.appendChild(element);
//       if(name!='' &&email!=''&&phnumber!='' && city != '' && course != '' && message != ''){
//         element.click();
//       }

//       document.documentElement.removeChild(element);
//     } else if(course=='salesforce'){
      
//     element.href = "./assets/Ekodus Brochure.pdf";
//     element.download = "Brochure.pdf";

//     document.documentElement.appendChild(element);
//     if(name!='' &&email!=''&&phnumber!='' && city != '' && course != '' && message != ''){
//       element.click();
//     }

//     document.documentElement.removeChild(element);
//   } else if(course=='graphicdesign'){
   
//   element.href = "./assets/Graphic Designing Course Module.pdf";
//   element.download = "Graphic-Designing-Course-Brochure.pdf";

//   document.documentElement.appendChild(element);
//   if(name!='' &&email!=''&&phnumber!='' && city != '' && course != '' && message != ''){
//     element.click();
//   }

//   document.documentElement.removeChild(element);
// } else if(course=='softwaretesting'){
 
// element.href = "./assets/Testing Brochure.pdf";
// element.download = "Sofyware-Testing-Course-Brochure.pdf";

// document.documentElement.appendChild(element);
// if(name!='' &&email!=''&&phnumber!='' && city != '' && course != '' && message != ''){
//   element.click();
// }

// document.documentElement.removeChild(element);
// } else if(course=='digitalmarketing'){
// element.href = "./assets/Digital Marketing Brochure .pdf";
// element.download = "Digital-Marketing-Course-Brochure.pdf";

// document.documentElement.appendChild(element);
// if(name!='' &&email!=''&&phnumber!='' && city != '' && course != '' && message != ''){
//   element.click();
// }

// document.documentElement.removeChild(element);
// }


      

//        // onClick property, to trigger submit form
//       submitForm.click();


//   }


// FORM VALIDATION

const inquiryForm = document.forms['inquiryForm'];
inquiryForm.addEventListener('submit',(event)=>{
  event.preventDefault();
})

const formSubmitBtn = document.getElementById('submitbtn');

const validateForm = () =>{
  clearError()
  let returnVal = true; 
  const fname = document.forms['inquiryForm']['name'].value;
  const email = inquiryForm['email'].value;
  const phnumber = inquiryForm['phonenumber'].value;
  const city = inquiryForm['city'].value;
  const course = inquiryForm['course'].value;
  const message = inquiryForm['message'].value;
  const regName = /^[a-zA-Z ]*$/;
  const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  const regPhn = /^[6-9]{1}[0-9]{9}$/

  if(fname.length==0){
    setError('name','*Name cannot be empty')
    returnVal=false
  }
  if(fname.length<3 && fname.length!=0){
    setError('name','*Name too short');
    returnVal=false
  }
  if(!regName.test(fname) && fname.length!=0){
    setError('name','*Please write a valid name');
    returnVal=false;
  }
  if(email.length==0){
    setError('email','*Email cannot be empty')
    returnVal=false;
  }
  if(!regEmail.test(email) && email.length!=0){
    setError('email','*Please enter a valid email')
    returnVal=false;
  }
  if(phnumber.length == 0 ){
    setError('phnumber', '*Phone number cannot be empty')
    returnVal=false
  }
  
  if(!regPhn.test(phnumber) && phnumber.length!=0){
    setError('phnumber','*Write a valid phone number');
    returnVal=false;
  }
  if(course=='none'){
    setError('course','*Please select a course');
    returnVal=false;
  }
  if(city.length>30){
    setError('city','*Maximum limit exceeded')
    returnVal=false
  }
  if(message.length>100){
    setError('message','*Maximum 100 characters allowed')
    returnVal=false
  }

    if(returnVal===true){
      formSubmitBtn.innerHTML='Please Wait';
      formSubmitBtn.disabled = true;
      fetch("https://formsubmit.co/ajax/riturajpathak1998@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Name: fname,
            Email: email,
            'Phone number': phnumber,
            City: city,
            Course : course,
            Message: message
        })
})
    .then(response => response.json())
    .then(data => {

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your inquiry has been submitted',
        footer: 'Your brochure will be downloaded automatically'
      })
      if(course=='graphicdesign'){
        // setTimeout(function () { window.open = 'assets/Graphic Designing Course Module.pdf','_blank'}, 1000)
        var link = document.createElement('a');
        link.target='_blank'
        link.download="Graphic Design Course Module"
        document.body.appendChild(link);
        link.href = 'assets/Graphic Designing Course Module.pdf';
        link.click();
      }
      else if(course == 'softwaretesting'){
        var link = document.createElement('a');
        link.target='_blank'
        link.download="Software testing Course Module"
        document.body.appendChild(link);
        link.href = 'assets/Testing Brochure.pdf';
        link.click();
      }
      else if(course == 'digitalmarketing'){
        var link = document.createElement('a');
        link.target='_blank'
        link.download="Digital Marketing Course Module"
        document.body.appendChild(link);
        link.href = 'assets/Digital Marketing Brochure.pdf';
        link.click();

      }
      clearForm()

      formSubmitBtn.innerHTML='Submit';
      formSubmitBtn.disabled = false;
      document.querySelector('.formfillmsg').style.display= "none"
    })
    .catch(error => {
      clearForm()
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong!',
      })
      formSubmitBtn.innerHTML='Submit';
      formSubmitBtn.disabled = false;
      document.querySelector('.formfillmsg').style.display= "none"
    });

    }
    return returnVal;
  
}
const setError = (id,error)=>{
  const element = document.getElementById(id);
  element.getElementsByClassName('form-error')[0].innerHTML= error


}
const clearError = () =>{
  const formerror = document.getElementsByClassName('form-error');
  for(let item of formerror){
    item.innerHTML='';
  }
}
const clearForm = () => {
  document.forms['inquiryForm']['name'].value='';
  inquiryForm['email'].value='';
  inquiryForm['phonenumber'].value='';
  inquiryForm['city'].value='';
  inquiryForm['course'].value='none';
  inquiryForm['message'].value='';
}