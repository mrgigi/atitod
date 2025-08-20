(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".hamburger"),t=document.querySelector(".nav-menu");e.addEventListener("click",function(){e.classList.toggle("active"),t.classList.toggle("active")}),document.querySelectorAll(".nav-menu a").forEach(s=>{s.addEventListener("click",()=>{e.classList.remove("active"),t.classList.remove("active")})})});document.querySelectorAll(".faq-question").forEach(e=>{e.addEventListener("click",()=>{const t=e.parentElement,s=t.classList.contains("active");document.querySelectorAll(".faq-item").forEach(r=>{r.classList.remove("active")}),s||t.classList.add("active")})});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const s=document.querySelector(this.getAttribute("href"));if(s){const r=s.offsetTop-80;window.scrollTo({top:r,behavior:"smooth"})}})});window.addEventListener("scroll",function(){const e=document.querySelector(".navbar");window.scrollY>50?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.15)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)")});const i={threshold:.1,rootMargin:"0px 0px -50px 0px"},a=new IntersectionObserver(function(e){e.forEach(t=>{t.isIntersecting&&t.target.classList.add("visible")})},i);document.addEventListener("DOMContentLoaded",function(){[".benefit-card",".solution-category",".step",".testimonial",".faq-item"].forEach(t=>{document.querySelectorAll(t).forEach(s=>{s.classList.add("fade-in"),a.observe(s)})})});function d(){const e=document.createElement("button");e.innerHTML='<i class="fas fa-arrow-up"></i>',e.className="scroll-to-top",e.style.cssText=`
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
    `,e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",()=>{window.scrollY>300?e.style.display="block":e.style.display="none"}),document.body.appendChild(e)}document.addEventListener("DOMContentLoaded",d);function l(e,t={}){console.log("Event tracked:",e,t),typeof gtag<"u"&&gtag("event",e,t)}document.addEventListener("click",function(e){var t;e.target.matches(".btn-primary")&&l("cta_click",{button_text:e.target.textContent.trim(),page_section:((t=e.target.closest("section"))==null?void 0:t.id)||"unknown"})});function u(){const e=document.querySelectorAll("img[data-src]"),t=new IntersectionObserver((s,r)=>{s.forEach(o=>{if(o.isIntersecting){const n=o.target;n.src=n.dataset.src,n.classList.remove("lazy"),t.unobserve(n)}})});e.forEach(s=>t.observe(s))}document.addEventListener("DOMContentLoaded",u);document.addEventListener("keydown",function(e){if(e.key==="Tab"&&!e.shiftKey&&document.activeElement===document.body){const t=document.querySelector("main")||document.querySelector("#home");t&&(t.focus(),e.preventDefault())}});document.addEventListener("DOMContentLoaded",function(){const e=document.createElement("style");e.textContent=`
        .btn:focus,
        .nav-menu a:focus,
        .faq-question:focus {
            outline: 2px solid #007bff;
            outline-offset: 2px;
        }
        
        .btn:focus:not(:focus-visible),
        .nav-menu a:focus:not(:focus-visible),
        .faq-question:focus:not(:focus-visible) {
            outline: none;
        }
    `,document.head.appendChild(e),typeof AOS<"u"&&AOS.init({duration:800,easing:"ease-in-out",once:!0,offset:100})});
