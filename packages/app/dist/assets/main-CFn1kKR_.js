import{a as f,i as v,x as p,r as $,b as m,n as o,h,V as k,d as j,f as M,c as F,H as z,s as L,_ as q}from"./header-element-DiHYK0oZ.js";const D={};function J(s,e,a){const[r,t,n]=s;switch(r){case"player/request":{const{name:i}=t;if(e.player?.name===i)break;return[{...e,player:{name:i}},Y(t,a).then(b=>["player/load",{name:i,player:b}])]}case"player/load":{const{player:i}=t;return{...e,player:i}}case"player/save":{const{name:i}=t;return[e,A(t,a,n||{}).then(b=>["player/load",{name:i,player:b}])]}case"players/request":{if(e.players)break;return[e,B(a).then(i=>["players/load",{players:i}])]}case"players/load":{const{players:i}=t;return{...e,players:i}}default:{const i=r;throw new Error(`Unhandled message type "${i}"`)}}return e}function Y(s,e){return fetch(`/api/players/${s.name}`,{headers:f.headers(e)}).then(a=>{if(a.status===200)return a.json();throw`Failed to fetch player: ${a.status}`}).then(a=>{if(a)return a;throw"No JSON in response from server"})}function A(s,e,a){return fetch(`/api/players/${s.name}`,{method:"PUT",headers:{"Content-Type":"application/json",...f.headers(e)},body:JSON.stringify(s.player)}).then(r=>{if(r.status===200)return r.json();throw new Error(`Failed to save player for ${s.name}`)}).then(r=>{if(r)return a.onSuccess&&a.onSuccess(),r;throw new Error("No JSON in API response")}).catch(r=>{throw a.onFailure&&a.onFailure(r),r})}function B(s){return fetch("/api/players",{headers:f.headers(s)}).then(e=>{if(e.status===200)return e.json();throw`Failed to fetch players: ${e.status}`}).then(e=>{if(e)return e;throw"No JSON in response from server"})}var U=Object.defineProperty,d=(s,e,a,r)=>{for(var t=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(t=i(e,a,t)||t);return t&&U(e,a,t),t};const N=class N extends v{get imageSrc(){return this.image?.startsWith("/")?this.image:`/${this.image}`}render(){return p`
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
    `}};N.styles=[$.styles,m`
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
    `];let l=N;d([o()],l.prototype,"name");d([o()],l.prototype,"image");d([o()],l.prototype,"position");d([o({attribute:"jersey-number"})],l.prototype,"jerseyNumber");d([o()],l.prototype,"team");d([o({attribute:"games-played"})],l.prototype,"gamesPlayed");d([o()],l.prototype,"receptions");d([o({attribute:"receiving-yards"})],l.prototype,"receivingYards");d([o({attribute:"receiving-touchdowns"})],l.prototype,"receivingTouchdowns");d([o({attribute:"fantasy-points"})],l.prototype,"fantasyPoints");var G=Object.defineProperty,P=(s,e,a,r)=>{for(var t=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(t=i(e,a,t)||t);return t&&G(e,a,t),t};const C=class C extends v{handleClick(e){e.preventDefault(),this.href&&h.dispatch(this,"history/navigate",{href:this.href})}render(){return p`
      <svg class="icon">
        <use href="/icons/football.svg#icon-player" />
      </svg>
      <a href="${this.href}" @click=${this.handleClick}>${this.name}</a>
      <span class="separator"> - </span>
      <span class="team">${this.team}</span>
    `}};C.styles=[$.styles,m`
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
    `];let c=C;P([o()],c.prototype,"href");P([o()],c.prototype,"name");P([o()],c.prototype,"team");var H=Object.defineProperty,W=(s,e,a,r)=>{for(var t=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(t=i(e,a,t)||t);return t&&H(e,a,t),t};class O extends k{get players(){return(this.model.players||[]).map(e=>({href:`/app/player/${encodeURIComponent(e.name)}`,name:e.name,team:e.team}))}constructor(){super("ffl:model")}connectedCallback(){super.connectedCallback(),this.dispatchMessage(["players/request",{}])}render(){const{players:e}=this;function a(r){return p`
        <player-item
          href=${r.href}
          name=${r.name}
          team=${r.team}
        ></player-item>
      `}return p`
      ${e.map(a)}
    `}}W([o()],O.prototype,"src");const _=class _ extends v{render(){return p`
      <span class="stat-label"><slot name="label"></slot>:</span>
      <span class="stat-value"><slot name="value"></slot></span>
    `}};_.styles=[$.styles,m`
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
    `];let x=_;const R=class R extends v{render(){return p`
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
    `}};R.styles=m`
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
  `;let w=R;var I=Object.defineProperty,K=(s,e,a,r)=>{for(var t=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(t=i(e,a,t)||t);return t&&I(e,a,t),t};const S=class S extends k{get player(){return this.model.player}constructor(){super("ffl:model")}attributeChangedCallback(e,a,r){super.attributeChangedCallback(e,a,r),e==="player-name"&&a!==r&&r&&this.dispatchMessage(["player/request",{name:r}])}handleNavigate(e,a){e.preventDefault(),h.dispatch(this,"history/navigate",{href:a})}render(){const{player:e}=this;return e?p`
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
            <a href="/app" @click=${a=>this.handleNavigate(a,"/app")}>Home</a>
          </nav>
        </aside>

        <main>
          <div class="player-actions">
            <a href="/app/player/${e.name}/edit" class="edit-button" @click=${a=>this.handleNavigate(a,`/app/player/${e.name}/edit`)}>Edit Player</a>
          </div>
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
    `:p`<p>Loading player data...</p>`}};S.styles=m`
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

    .player-actions {
      margin-bottom: 1.5rem;
    }

    .edit-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: var(--color-accent);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: opacity 0.2s;
    }

    .edit-button:hover {
      opacity: 0.9;
    }
  `;let g=S;K([o({attribute:"player-name"})],g.prototype,"playerName");var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,T=(s,e,a,r)=>{for(var t=r>1?void 0:r?X(e,a):e,n=s.length-1,i;n>=0;n--)(i=s[n])&&(t=(r?i(e,a,t):i(t))||t);return r&&t&&Q(e,a,t),t};const y=class y extends k{get player(){return this.model.player}constructor(){super("ffl:model")}handleNavigate(e,a){e.preventDefault(),h.dispatch(this,"history/navigate",{href:a})}attributeChangedCallback(e,a,r){super.attributeChangedCallback(e,a,r),e==="player-name"&&a!==r&&r&&this.dispatchMessage(["player/request",{name:r}])}render(){return p`
      <main class="page">
        <section class="edit-section">
          <h2>Edit Player Profile</h2>
          <mu-form
            .init=${this.player}
            @mu-form:submit=${this.handleSubmit}>
            <label>
              <span>Name</span>
              <input name="name" />
            </label>
            <label>
              <span>Image URL</span>
              <input name="image" />
            </label>
            <label>
              <span>Position</span>
              <input name="position" />
            </label>
            <label>
              <span>Jersey Number</span>
              <input name="jerseyNumber" />
            </label>
            <label>
              <span>Team</span>
              <input name="team" />
            </label>
            <label>
              <span>Games Played</span>
              <input name="gamesPlayed" />
            </label>
            <label>
              <span>Receptions</span>
              <input name="receptions" />
            </label>
            <label>
              <span>Receiving Yards</span>
              <input name="receivingYards" />
            </label>
            <label>
              <span>Receiving Touchdowns</span>
              <input name="receivingTouchdowns" />
            </label>
            <label>
              <span>Fantasy Points</span>
              <input name="fantasyPoints" />
            </label>
            <div class="form-actions">
              <a href="/app/player/${this.playerName}" class="action-button back-button" @click=${e=>this.handleNavigate(e,`/app/player/${this.playerName}`)}>Back</a>
            </div>
          </mu-form>
        </section>
      </main>
    `}handleSubmit(e){this.dispatchMessage(["player/save",{name:this.playerName,player:e.detail},{onSuccess:()=>h.dispatch(this,"history/navigate",{href:`/app/player/${this.playerName}`}),onFailure:a=>console.log("ERROR:",a)}])}};y.uses=j({"mu-form":M.Element}),y.styles=m`
    :host {
      display: block;
      grid-area: content;
      height: 100%;
    }

    main {
      padding: 2rem;
      overflow-y: auto;
    }

    .edit-section {
      max-width: 600px;
      margin: 0 auto;
      background-color: var(--color-background-sidebar);
      padding: 2rem;
      border-radius: 8px;
    }

    h2 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: 1.5rem;
    }

    mu-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    label span {
      color: var(--color-text-header);
      font-weight: 500;
    }

    input {
      padding: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.2);
      color: var(--color-text-header);
      font-size: 1rem;
    }

    input:focus {
      outline: none;
      border-color: var(--color-accent);
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .action-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: var(--color-accent);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: opacity 0.2s;
      cursor: pointer;
      border: none;
      font-size: 1rem;
    }

    .action-button:hover {
      opacity: 0.9;
    }

    .back-button {
      background-color: #6c757d;
    }

    /* Style the submit button provided by mu-form */
    mu-form::part(submit) {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: var(--color-accent);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: opacity 0.2s;
      cursor: pointer;
      border: none;
      font-size: 1rem;
    }

    mu-form::part(submit):hover {
      opacity: 0.9;
    }
  `;let u=y;T([o({attribute:"player-name"})],u.prototype,"playerName",2);T([F()],u.prototype,"player",1);const Z=[{path:"/app/player/:name/edit",view:s=>p`
      <player-edit player-name=${s.name}></player-edit>
    `},{path:"/app/player/:name",view:s=>p`
      <player-view player-name=${s.name}></player-view>
    `},{path:"/app",view:()=>p`
      <home-view></home-view>
    `},{path:"/",redirect:"/app"}];j({"mu-auth":f.Provider,"mu-history":h.Provider,"mu-switch":class extends q.Element{constructor(){super(Z,"ffl:history","ffl:auth")}},"mu-store":class extends L.Provider{constructor(){super(J,D,"ffl:auth")}},"header-element":z,"player-card":l,"player-item":c,"player-list":O,"stat-item":x,"home-view":w,"player-view":g,"player-edit":u});document.body.addEventListener("lightmode:toggle",s=>{s.detail.checked?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode")});
