import{i as m,x as c,r as y,a as v,n as l,d as u,H as g}from"./header-element-CzA7NLWL.js";import{r as b}from"./state-DmKpXURm.js";var $=Object.defineProperty,d=(a,r,e,n)=>{for(var t=void 0,s=a.length-1,i;s>=0;s--)(i=a[s])&&(t=i(r,e,t)||t);return t&&$(r,e,t),t};const p=class p extends m{render(){return c`
      <svg class="icon">
        <use href="/icons/football.svg#icon-player" />
      </svg>
      <a href="${this.href}">${this.name}</a>
      <span class="separator"> - </span>
      <span class="team">${this.team}</span>
    `}};p.styles=[y.styles,v`
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
    `];let o=p;d([l()],o.prototype,"href");d([l()],o.prototype,"name");d([l()],o.prototype,"team");var x=Object.defineProperty,f=(a,r,e,n)=>{for(var t=void 0,s=a.length-1,i;s>=0;s--)(i=a[s])&&(t=i(r,e,t)||t);return t&&x(r,e,t),t};class h extends m{constructor(){super(...arguments),this.players=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(r){fetch(r).then(e=>e.json()).then(e=>{e&&(this.players=e)}).catch(e=>{console.error("Failed to fetch player data:",e)})}render(){const{players:r}=this;function e(n){return c`
        <player-item
          href=${n.href}
          name=${n.name}
          team=${n.team}
        ></player-item>
      `}return c`
      ${r.map(e)}
    `}}f([l()],h.prototype,"src");f([b()],h.prototype,"players");u({"player-item":o,"player-list":h,"header-element":g});document.body.addEventListener("lightmode:toggle",a=>{a.detail.checked?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode")});
