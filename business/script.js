const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const inquiryForm=document.querySelector('#inquiry-form');
if(inquiryForm){
  inquiryForm.addEventListener('submit',async event=>{
    event.preventDefault();
    const data=new FormData(inquiryForm);
    const message='JW LEGACY ENTERPRISES — BUSINESS INQUIRY\n\n'
      +'Name: '+data.get('name')+'\n'
      +'Email: '+data.get('email')+'\n'
      +'Service: '+data.get('service')+'\n\n'
      +'Project Details:\n'+data.get('message');
    const note=document.querySelector('#form-note');
    try{
      await navigator.clipboard.writeText(message);
      note.textContent='Inquiry copied. Open your email app and paste the message when you are ready to send it.';
    }catch{
      note.textContent='Your inquiry is ready. Copy the information from the form and send it from your preferred email app.';
    }
  });
}