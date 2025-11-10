import{i as p,x as h,r as f,a as v,n as l,b as y,O as b,d as g,c as _,H as $}from"./header-element-BNX6fcYA.js";var x=Object.defineProperty,c=(a,r,t,s)=>{for(var e=void 0,n=a.length-1,i;n>=0;n--)(i=a[n])&&(e=i(r,t,e)||e);return e&&x(r,t,e),e};const m=class m extends p{render(){return h`
      <svg class="icon">
        <use href="/icons/football.svg#icon-player" />
      </svg>
      <a href="${this.href}">${this.name}</a>
      <span class="separator"> - </span>
      <span class="team">${this.team}</span>
    `}};m.styles=[f.styles,v`
      :host {
        display: flex;
        align-items: center;
        gap: 0.5em;
        margin-bottom: 0.5em;
        font-size: 1.2rem;
      }

      .icon {
        display: inline-block;
        height: 2em;
        width: 2em;
        vertical-align: top;
        fill: currentColor;
        flex-shrink: 0;
      }

      a {
        color: var(--color-link);
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      .team {
        color: var(--color-text);
      }
    `];let o=m;c([l()],o.prototype,"href");c([l()],o.prototype,"name");c([l()],o.prototype,"team");var k=Object.defineProperty,u=(a,r,t,s)=>{for(var e=void 0,n=a.length-1,i;n>=0;n--)(i=a[n])&&(e=i(r,t,e)||e);return e&&k(r,t,e),e};class d extends p{constructor(){super(...arguments),this.players=[],this._authObserver=new b(this,"ffl:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{this._user=r.user,this.src&&this.hydrate(this.src)})}get authorization(){return this._user?.authenticated&&{Authorization:`Bearer ${this._user.token}`}}hydrate(r){fetch(r,{headers:this.authorization||{}}).then(t=>t.json()).then(t=>{if(t){const s=t;this.players=s.map(e=>({href:`player.html?name=${encodeURIComponent(e.name)}`,name:e.name,team:e.team}))}}).catch(t=>{console.error("Failed to fetch player data:",t)})}render(){const{players:r}=this;function t(s){return h`
        <player-item
          href=${s.href}
          name=${s.name}
          team=${s.team}
        ></player-item>
      `}return h`
      ${r.map(t)}
    `}}u([l()],d.prototype,"src");u([y()],d.prototype,"players");g({"player-item":o,"player-list":d,"header-element":$,"mu-auth":_.Provider});document.body.addEventListener("lightmode:toggle",a=>{a.detail.checked?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode")});
