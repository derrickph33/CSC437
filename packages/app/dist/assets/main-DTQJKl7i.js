import{a as u,i as g,x as p,r as f,b as m,n as o,V as N,d as _,s as j,_ as M,h as T,H as S}from"./header-element-DSbsAAny.js";const O={};function R(s,e,a){const[i,t]=s;switch(i){case"player/request":{const{name:r}=t;if(e.player?.name===r)break;return[{...e,player:{name:r}},z(t,a).then(n=>["player/load",{name:r,player:n}])]}case"player/load":{const{player:r}=t;return{...e,player:r}}case"player/save":{const{name:r}=t;return[e,F(t,a).then(n=>["player/load",{name:r,player:n}])]}case"players/request":{if(e.players)break;return[e,L(a).then(r=>["players/load",{players:r}])]}case"players/load":{const{players:r}=t;return{...e,players:r}}default:{const r=i;throw new Error(`Unhandled message type "${r}"`)}}return e}function z(s,e){return fetch(`/api/players/${s.name}`,{headers:u.headers(e)}).then(a=>{if(a.status===200)return a.json();throw`Failed to fetch player: ${a.status}`}).then(a=>{if(a)return a;throw"No JSON in response from server"})}function F(s,e){return fetch(`/api/players/${s.name}`,{method:"PUT",headers:{"Content-Type":"application/json",...u.headers(e)},body:JSON.stringify(s.player)}).then(a=>{if(a.status===200)return a.json();throw`Failed to save player: ${a.status}`}).then(a=>{if(a)return a;throw"No JSON in response from server"})}function L(s){return fetch("/api/players",{headers:u.headers(s)}).then(e=>{if(e.status===200)return e.json();throw`Failed to fetch players: ${e.status}`}).then(e=>{if(e)return e;throw"No JSON in response from server"})}var q=Object.defineProperty,d=(s,e,a,i)=>{for(var t=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(t=n(e,a,t)||t);return t&&q(e,a,t),t};const w=class w extends g{get imageSrc(){return this.image?.startsWith("/")?this.image:`/${this.image}`}render(){return p`
      <h1>${this.name}</h1>
      <img src="${this.imageSrc}" style="width: 300px;">

      <h2>Basic Information</h2>
      <div class="stats-grid">
        <stat-item>
          <span slot="label">Position</span>
          <span slot="value">${this.position}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Jersey Number</span>
          <span slot="value">${this.jerseyNumber}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Team</span>
          <span slot="value">${this.team}</span>
        </stat-item>
      </div>

      <h2>2025 Statistics</h2>
      <div class="stats-grid">
        <stat-item>
          <span slot="label">Games Played</span>
          <span slot="value">${this.gamesPlayed}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Receptions</span>
          <span slot="value">${this.receptions}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Receiving Yards</span>
          <span slot="value">${this.receivingYards}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Receiving Touchdowns</span>
          <span slot="value">${this.receivingTouchdowns}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Fantasy Points</span>
          <span slot="value">${this.fantasyPoints}</span>
        </stat-item>
      </div>

      <p><a href="/app">← Back to Home</a></p>
    `}};w.styles=[f.styles,m`
      :host {
        display: block;
      }

      h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--color-heading);
        margin-bottom: 2rem;
      }

      img {
        margin-bottom: 2rem;
        border-radius: 8px;
      }

      h2 {
        font-size: 1.75rem;
        font-weight: 600;
        color: var(--color-heading);
        margin-top: 2rem;
        margin-bottom: 1.5rem;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      p {
        margin-top: 2rem;
      }

      a {
        color: var(--color-link);
        text-decoration: none;
        font-weight: 600;
      }

      a:hover {
        text-decoration: underline;
      }
    `];let l=w;d([o()],l.prototype,"name");d([o()],l.prototype,"image");d([o()],l.prototype,"position");d([o({attribute:"jersey-number"})],l.prototype,"jerseyNumber");d([o()],l.prototype,"team");d([o({attribute:"games-played"})],l.prototype,"gamesPlayed");d([o()],l.prototype,"receptions");d([o({attribute:"receiving-yards"})],l.prototype,"receivingYards");d([o({attribute:"receiving-touchdowns"})],l.prototype,"receivingTouchdowns");d([o({attribute:"fantasy-points"})],l.prototype,"fantasyPoints");var J=Object.defineProperty,b=(s,e,a,i)=>{for(var t=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(t=n(e,a,t)||t);return t&&J(e,a,t),t};const $=class $ extends g{render(){return p`
      <svg class="icon">
        <use href="/icons/football.svg#icon-player" />
      </svg>
      <a href="${this.href}">${this.name}</a>
      <span class="separator"> - </span>
      <span class="team">${this.team}</span>
    `}};$.styles=[f.styles,m`
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
    `];let c=$;b([o()],c.prototype,"href");b([o()],c.prototype,"name");b([o()],c.prototype,"team");var A=Object.defineProperty,B=(s,e,a,i)=>{for(var t=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(t=n(e,a,t)||t);return t&&A(e,a,t),t};class C extends N{get players(){return(this.model.players||[]).map(e=>({href:`/app/player/${encodeURIComponent(e.name)}`,name:e.name,team:e.team}))}constructor(){super("ffl:model")}connectedCallback(){super.connectedCallback(),this.dispatchMessage(["players/request",{}])}render(){const{players:e}=this;function a(i){return p`
        <player-item
          href=${i.href}
          name=${i.name}
          team=${i.team}
        ></player-item>
      `}return p`
      ${e.map(a)}
    `}}B([o()],C.prototype,"src");const x=class x extends g{render(){return p`
      <span class="stat-label"><slot name="label"></slot>:</span>
      <span class="stat-value"><slot name="value"></slot></span>
    `}};x.styles=[f.styles,m`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
      }

      .stat-label {
        font-weight: 600;
        color: var(--color-text);
        font-size: 0.9rem;
      }

      .stat-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-heading);
      }
    `];let y=x;const k=class k extends g{render(){return p`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Featured Matchups</h3>
          <nav>
            <a href="#">Team Matchups</a>
            <a href="#">Position Matchups</a>
            <a href="#">Matchup Rankings</a>
          </nav>

          <h3>Featured Players</h3>
          <nav>
            <a href="/app/player/CeeDee%20Lamb">CeeDee Lamb</a>
            <a href="/app/player/Puka%20Nacua">Puka Nacua</a>
            <a href="/app/player/Amon-Ra%20St.%20Brown">Amon-Ra St. Brown</a>
          </nav>
        </aside>

        <main>
          <img src="/images/fantasy.png" style="width: 600px; margin-bottom: 2rem;">

          <h1>Top Players</h1>
          <ul class="player-list">
            <player-list src="/api/players"></player-list>
          </ul>
        </main>
      </div>
    `}};k.styles=m`
    :host {
      display: block;
      grid-area: content;
      height: 100%;
    }

    .content-wrapper {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1rem;
      padding: 1rem;
      overflow: hidden;
      height: 100%;
    }

    aside.sidebar {
      grid-column: span 2;
      background-color: var(--color-background-sidebar);
      padding: 1.5rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: var(--spacing-lg, 1rem);
      font-size: 1.1rem;
    }

    aside.sidebar h3:not(:first-child) {
      margin-top: var(--spacing-2xl, 2rem);
    }

    aside.sidebar nav {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm, 0.5rem);
    }

    aside.sidebar nav a {
      color: var(--color-text-header);
      text-decoration: none;
      padding: var(--spacing-sm, 0.5rem) var(--spacing-md, 0.75rem);
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    main {
      grid-column: span 9;
      padding: var(--spacing-xl, 1.5rem);
      overflow-y: auto;
    }

    h1 {
      color: var(--color-heading);
    }

    ul.player-list {
      list-style: none;
      padding-left: 0;
    }

    @media (max-width: 1023px) {
      aside.sidebar {
        grid-column: span 2;
      }

      main {
        grid-column: span 6;
      }
    }

    @media (max-width: 767px) {
      .content-wrapper {
        grid-template-rows: auto 1fr;
      }

      aside.sidebar {
        grid-column: span 4;
        grid-row: 1;
      }

      main {
        grid-column: span 4;
        grid-row: 2;
        padding: var(--spacing-lg, 1rem);
      }
    }
  `;let v=k;var Y=Object.defineProperty,U=(s,e,a,i)=>{for(var t=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(t=n(e,a,t)||t);return t&&Y(e,a,t),t};const P=class P extends N{get player(){return this.model.player}constructor(){super("ffl:model")}attributeChangedCallback(e,a,i){super.attributeChangedCallback(e,a,i),e==="player-name"&&a!==i&&i&&this.dispatchMessage(["player/request",{name:i}])}render(){const{player:e}=this;return e?p`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Featured Matchups</h3>
          <nav>
            <a href="#">Team Matchups</a>
            <a href="#">Position Matchups</a>
            <a href="#">Matchup Rankings</a>
          </nav>

          <h3>Navigation</h3>
          <nav>
            <a href="/app">Home</a>
          </nav>
        </aside>

        <main>
          <player-card
            name=${e.name}
            image=${e.image}
            position=${e.position}
            jersey-number=${e.jerseyNumber}
            team=${e.team}
            games-played=${e.gamesPlayed}
            receptions=${e.receptions}
            receiving-yards=${e.receivingYards}
            receiving-touchdowns=${e.receivingTouchdowns}
            fantasy-points=${e.fantasyPoints}
          ></player-card>
        </main>
      </div>
    `:p`<p>Loading player data...</p>`}};P.styles=m`
    :host {
      display: block;
      grid-area: content;
      height: 100%;
    }

    .content-wrapper {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1rem;
      padding: 1rem;
      overflow: hidden;
      height: 100%;
    }

    aside.sidebar {
      grid-column: span 2;
      background-color: var(--color-background-sidebar);
      padding: 1.5rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    aside.sidebar h3:not(:first-child) {
      margin-top: 2rem;
    }

    aside.sidebar nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    aside.sidebar nav a {
      color: var(--color-text-header);
      text-decoration: none;
      padding: 0.5rem 0.75rem;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    main {
      grid-column: span 10;
      padding: 1.5rem;
      overflow-y: auto;
    }
  `;let h=P;U([o({attribute:"player-name"})],h.prototype,"playerName");const D=[{path:"/app/player/:name",view:s=>p`
      <player-view player-name=${s.name}></player-view>
    `},{path:"/app",view:()=>p`
      <home-view></home-view>
    `},{path:"/",redirect:"/app"}];_({"mu-auth":u.Provider,"mu-history":T.Provider,"mu-switch":class extends M.Element{constructor(){super(D,"ffl:history","ffl:auth")}},"mu-store":class extends j.Provider{constructor(){super(R,O,"ffl:auth")}},"header-element":S,"player-card":l,"player-item":c,"player-list":C,"stat-item":y,"home-view":v,"player-view":h});document.body.addEventListener("lightmode:toggle",s=>{s.detail.checked?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode")});
