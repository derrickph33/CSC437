import{a as c,i as u,x as p,r as f,b as m,n as h,d as b,H as g,c as y}from"./header-element-CeQS7Na3.js";const v=c`
  h1, h2, h3, h4 {
    font-family: var(--font-family-display, sans-serif);
    line-height: var(--font-line-height-display, 1.2);
  }
`,x={styles:v},w=c`
  :host {
    display: block;
  }

  form {
    max-width: 400px;
    margin: 4rem auto;
    padding: 2rem;
    background-color: var(--color-background-sidebar);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  ::slotted(label) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  ::slotted(span) {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--color-text);
    font-weight: 500;
  }

  ::slotted(input) {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: var(--color-background-header);
    color: var(--color-text-header);
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
    font-family: 'Open Sans', sans-serif;
  }

  button:hover {
    opacity: 0.9;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .error:not(:empty) {
    color: #ff4444;
    background-color: #ffe0e0;
    padding: 0.75rem;
    border-radius: 4px;
    margin-top: 1rem;
  }
`,k={styles:w};var S=Object.defineProperty,n=(a,o,t,i)=>{for(var e=void 0,s=a.length-1,l;s>=0;s--)(l=a[s])&&(e=l(o,t,e)||e);return e&&S(o,t,e),e};const d=class d extends u{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return p`
      <form
        @change=${o=>this.handleChange(o)}
        @submit=${o=>this.handleSubmit(o)}
      >
        <slot></slot>
        <slot name="button">
          <button
            ?disabled=${!this.canSubmit}
            type="submit">
            Login
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(o){const t=o.target,i=t?.name,e=t?.value,s=this.formData;switch(i){case"username":this.formData={...s,username:e};break;case"password":this.formData={...s,password:e};break}}handleSubmit(o){o.preventDefault(),this.canSubmit&&fetch(this?.api||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:i}=t,e=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:i,redirect:this.redirect}]});console.log("dispatching message",e),this.dispatchEvent(e)}).catch(t=>{console.log(t),this.error=t.toString()})}};d.styles=[f.styles,x.styles,k.styles];let r=d;n([m()],r.prototype,"formData");n([h()],r.prototype,"api");n([h()],r.prototype,"redirect");n([m()],r.prototype,"error");b({"mu-auth":y.Provider,"login-form":r,"header-element":g});document.body.addEventListener("lightmode:toggle",a=>{a.detail.checked?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode")});
