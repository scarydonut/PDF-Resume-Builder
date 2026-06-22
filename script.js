const form =document.getElementById("resume-form");
form.addEventListener("submit",async(e)=>{
    e.preventDefault();

const name=document.getElementById('name').value;
const email=document.getElementById('email').value;
const summary=document.getElementById('summary').value;
const skills=document.getElementById('skills').value;
const experience=document.getElementById('experience').value;
const education=document.getElementById('education').value;

document.getElementById("preview-name").textContent=name;
document.getElementById("preview-email").textContent=email;
document.getElementById("preview-summary").textContent=summary;
document.getElementById("preview-skills").textContent=skills;
document.getElementById("preview-experience").textContent=experience;
document.getElementById("preview-education").textContent=education;

const {jsPDF} =window.pdf;
const doc =new jsPDF();

doc.setFontSize(14);
doc.text(`Name:${name}`,10,10);
doc.text(`Email:${email}`,10,20);
doc.text("Summary:",10,30);
doc.text(summary,10,40);

doc.text("Skills:",10,60);
doc.text(skills,10,70);

doc.text("Experience:",10,90);
doc.text(experience,10,100);

doc.text("Education:",10,120);
doc.text(education,10,130);
doc.save("resume.pdf");
});