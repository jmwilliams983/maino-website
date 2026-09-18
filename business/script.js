const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const inquiryForm=document.querySelector('#inquiry-form');
if(inquiryForm){
  inquiryForm.addEventListener('submit',event=>{
    event.preventDefault();
    const data=new FormData(inquiryForm);
    const subject='JW Legacy Enterprises Inquiry - '+data.get('service');
    const body='JW LEGACY ENTERPRISES — BUSINESS INQUIRY\n\n'
      +'Name: '+data.get('name')+'\n'
      +'Email: '+data.get('email')+'\n'
      +'Service: '+data.get('service')+'\n\n'
      +'Project Details:\n'+data.get('message');
    const mailto='mailto:jwlegacyenterprises@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
    window.location.href=mailto;
    const note=document.querySelector('#form-note');
    if(note)note.textContent='Your email app should open with the inquiry addressed to jwlegacyenterprises@gmail.com.';
  });
}