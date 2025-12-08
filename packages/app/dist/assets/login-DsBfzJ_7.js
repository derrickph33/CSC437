import{i as u,x as c,r as p,c as m,n as l,d as f,H as b,a as g}from"./header-element-Ca3vyFbp.js";import{h as y,l as v}from"./login.css-CXP7EpDp.js";var D=Object.defineProperty,n=(o,s,t,i)=>{for(var e=void 0,r=o.length-1,d;r>=0;r--)(d=o[r])&&(e=d(s,t,e)||e);return e&&D(s,t,e),e};const h=class h extends u{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return c`
      <form
        @change=${s=>this.handleChange(s)}
        @submit=${s=>this.handleSubmit(s)}
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
    `}handleChange(s){const t=s.target,i=t?.name,e=t?.value,r=this.formData;switch(i){case"username":this.formData={...r,username:e};break;case"password":this.formData={...r,password:e};break}}handleSubmit(s){s.preventDefault(),this.canSubmit&&fetch(this?.api||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:i}=t,e=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:i,redirect:this.redirect}]});this.dispatchEvent(e)}).catch(t=>{this.error=t.toString()})}};h.styles=[p.styles,y.styles,v.styles];let a=h;n([m()],a.prototype,"formData");n([l()],a.prototype,"api");n([l()],a.prototype,"redirect");n([m()],a.prototype,"error");f({"mu-auth":g.Provider,"login-form":a,"header-element":b});document.body.addEventListener("lightmode:toggle",o=>{o.detail.checked?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode")});
