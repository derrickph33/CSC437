import{i as c,x as m,r as h,a as p,n as a,d as f,H as v}from"./header-element-CzA7NLWL.js";var g=Object.defineProperty,r=(o,n,l,y)=>{for(var e=void 0,s=o.length-1,d;s>=0;s--)(d=o[s])&&(e=d(n,l,e)||e);return e&&g(n,l,e),e};const i=class i extends c{render(){return m`
      <svg class="icon">
        <use href="/icons/football.svg#icon-player" />
      </svg>
      <a href="${this.href}">${this.name}</a>
      <span class="separator"> - </span>
      <span class="team">${this.team}</span>
    `}};i.styles=[h.styles,p`
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
    `];let t=i;r([a()],t.prototype,"href");r([a()],t.prototype,"name");r([a()],t.prototype,"team");f({"player-item":t,"header-element":v});document.body.addEventListener("lightmode:toggle",o=>{o.detail.checked?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode")});
