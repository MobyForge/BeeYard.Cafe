/* ===== EDIT THESE ===== */
const CONFIG={
  whatsapp:'918197898209',            // country code + number, digits only
  phone:'+91 8197898209',
  address:'BeeYard.cafe 1503/30, Outer Ring Road, Kengunte, Mallathahalli, Opp Ambedhkar Institute,, Bengaluru',
  hours:'Mon–Sun · 10:30 AM – 10:30 PM',
  menuPages:11                        // menu images: assets/menu/menu-01.jpg … menu-11.jpg
};
/* ======================= */
const WA_ICON='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.79a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.48-8.41"/></svg>';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const page=document.body.dataset.page;
const waLink=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Hi BeeYard Café! I\'d like to know more.')}`;

document.body.insertAdjacentHTML('afterbegin',`
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="bee" viewBox="0 0 40 30">
<ellipse class="w" cx="15" cy="8" rx="7" ry="5" fill="#fff" fill-opacity=".8" stroke="#1c1c1c" stroke-width="1"/>
<ellipse class="w" cx="24" cy="7" rx="6" ry="4.5" fill="#fff" fill-opacity=".8" stroke="#1c1c1c" stroke-width="1"/>
<ellipse cx="19" cy="18" rx="12" ry="8" fill="#f2b008" stroke="#1c1c1c" stroke-width="1.5"/>
<path d="M15 10.5v15M21 10v16" stroke="#1c1c1c" stroke-width="3.2"/><circle cx="33" cy="17" r="4.5" fill="#1c1c1c"/><path d="M6 18l-4 1" stroke="#1c1c1c" stroke-width="2" stroke-linecap="round"/></symbol></svg>
<header class="nav"><div class="wrap">
<a class="brand" href="index.html" aria-label="BeeYard Café home"><img src="assets/logo.png" alt="BeeYard Café"></a>
<button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
<ul class="links">
<li><a href="index.html" ${page=='home'?'aria-current="page"':''}>Home</a></li>
<li><a href="menu.html" ${page=='menu'?'aria-current="page"':''}>Menu</a></li>
<li><a href="contact.html" ${page=='contact'?'aria-current="page"':''}>Contact</a></li></ul></div><span class="prog"></span></header>`);

document.body.insertAdjacentHTML('beforeend',`
<footer><div class="wrap"><div><img src="assets/logo.png" alt="BeeYard Café"><p>Pasta, pizzas, burgers and good company, near IIPM Bengaluru.</p></div>
<div><h3>Explore</h3><a href="index.html">Home</a><a href="menu.html">Menu</a><a href="contact.html">Contact</a></div>
<div><h3>Visit</h3><span>${CONFIG.address}</span><br><span>${CONFIG.hours}</span><a href="tel:${CONFIG.phone.replace(/[^+\d]/g,'')}">${CONFIG.phone}</a></div></div>
<p class="copy">© ${new Date().getFullYear()} BeeYard.Cafe · Bengaluru<br>Designed and Developed by <a class="mf" href="https://mobyforge.com" target="_blank" rel="noopener">MobyForge</a></p>
<a class="fab" data-wa href="${waLink}" aria-label="Chat on WhatsApp">${WA_ICON}</a>`);

$$('a[data-wa]').forEach(a=>a.href=waLink);
$$('.wa-icon').forEach(e=>e.innerHTML=WA_ICON);
$$('[data-cfg]').forEach(e=>e.textContent=CONFIG[e.dataset.cfg]);
$$('a[data-tel]').forEach(a=>{a.href='tel:'+CONFIG.phone.replace(/[^+\d]/g,'');a.textContent=CONFIG.phone});

const burger=$('.burger'),links=$('.links');
burger.onclick=()=>burger.setAttribute('aria-expanded',links.classList.toggle('open'));

/* images: drop a file at the data-img path and it replaces the placeholder */
const loadImgs=r=>$$('[data-img]',r).forEach(el=>{const i=new Image();i.onload=()=>{el.style.backgroundImage=`url(${el.dataset.img})`;el.classList.add('has')};i.src=el.dataset.img});

/* menu page: honeycomb photo pool */
const grid=$('#menu');
if(grid){
  const n=CONFIG.menuPages,p=i=>String(i).padStart(2,'0');
  const lb=$('#lb'),lbp=$('#lb .ph');
  const lay=()=>{
    const w=Math.min(210,Math.max(100,innerWidth*.25));
    const cols=Math.max(2,Math.floor(grid.clientWidth/w));let k=1,r=0,h='';
    while(k<=n){const c=Math.min(r%2?cols-1:cols,n-k+1);h+='<div class="hrow">';
      for(let q=0;q<c;q++,k++)h+=`<button class="hx" style="--i:${k}" aria-label="View menu page ${k}"><div class="ph" data-label="Menu ${k}" data-img="assets/menu/menu-${p(k)}.jpeg"></div></button>`;
      h+='</div>';r++}
    grid.innerHTML=h;loadImgs(grid)};
  let lw=0;lay();lw=innerWidth;
  addEventListener('resize',()=>{if(Math.abs(innerWidth-lw)>40){lw=innerWidth;lay()}});
  grid.onclick=e=>{const c=e.target.closest('.hx');if(!c)return;const s=$('.ph',c);lbp.className='ph '+(s.classList.contains('has')?'has':'');lbp.dataset.label=s.dataset.label;lbp.style.backgroundImage=s.style.backgroundImage;lb.classList.add('open')};
  lb.onclick=()=>lb.classList.remove('open');addEventListener('keydown',e=>e.key=='Escape'&&lb.classList.remove('open'));
}
loadImgs();

/* gentle reveal */
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');ro.unobserve(e.target)}}),{threshold:.15});
$$('.rv,.hexgrid,.cluster').forEach(e=>ro.observe(e));
const bee='<svg class="bee" viewBox="0 0 40 30"><use href="#bee"/></svg>';
$$('[data-bees]').forEach(el=>{for(let i=0;i<+el.dataset.bees;i++)el.insertAdjacentHTML('beforeend',`<svg class="fl bee ${i%2?'r':''}" viewBox="0 0 40 30" style="top:${8+(i*29)%78}%;width:${24+(i%3)*8}px;--t:${15+(i*7)%14}s;--dl:-${i*5}s"><use href="#bee"/></svg>`)});
$$('.cluster').forEach(c=>c.insertAdjacentHTML('beforeend',`<div class="orbit">${bee}</div><div class="orbit o2">${bee}</div>`));
let ci=0;$$('[data-split]').forEach(e=>{e.innerHTML=[...e.textContent].map(c=>`<span class="ch" style="--i:${ci++}">${c==' '?'&nbsp;':c}</span>`).join('')});
const hero=$('.hero'),prog=$('.prog');
addEventListener('scroll',()=>{prog.style.setProperty('--sp',scrollY/(document.body.scrollHeight-innerHeight)*100);hero&&scrollY<innerHeight&&hero.style.setProperty('--py',Math.min(scrollY*.2,100))},{passive:true});    
