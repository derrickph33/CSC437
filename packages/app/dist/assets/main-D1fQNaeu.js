import{a as h,i as v,x as o,b as d,r as A,n as l,h as p,V as u,c as J,d as O,f as H,H as X,s as Z,_ as V}from"./header-element-Ca3vyFbp.js";const ee={};function ae(s,e,a){const[t,r,n]=s;switch(t){case"player/request":{const{name:i}=r;if(e.player?.name===i)break;return[{...e,player:{name:i}},te(r,a).then(m=>["player/load",{name:i,player:m}])]}case"player/load":{const{player:i}=r;return{...e,player:i}}case"player/save":{const{name:i}=r;return[{...e,players:void 0},re(r,a,n||{}).then(m=>["player/load",{name:i,player:m}])]}case"player/create":return[{...e,players:void 0},ie(r,a,n||{}).then(i=>["player/load",{name:i.name,player:i}])];case"player/delete":{const{name:i}=r;return[{...e,players:void 0,player:void 0},se(r,a,n||{})]}case"players/request":{if(e.players)break;return[e,ne(a).then(i=>["players/load",{players:i}])]}case"players/load":{const{players:i}=r;return{...e,players:i}}case"team/request":{const{name:i}=r;if(e.team?.name===i)break;return[{...e,team:{name:i}},oe(r,a).then(m=>["team/load",{name:i,team:m}])]}case"team/load":{const{team:i}=r;return{...e,team:i}}case"team/save":{const{name:i}=r;return[{...e,teams:void 0},le(r,a,n||{}).then(m=>["team/load",{name:i,team:m}])]}case"teams/request":{if(e.teams)break;return[e,ce(a).then(i=>["teams/load",{teams:i}])]}case"teams/load":{const{teams:i}=r;return{...e,teams:i}}default:{const i=t;throw new Error(`Unhandled message type "${i}"`)}}return e}function te(s,e){return fetch(`/api/players/${s.name}`,{headers:h.headers(e)}).then(a=>{if(a.status===200)return a.json();throw`Failed to fetch player: ${a.status}`}).then(a=>{if(a)return a;throw"No JSON in response from server"})}function re(s,e,a){return fetch(`/api/players/${s.name}`,{method:"PUT",headers:{"Content-Type":"application/json",...h.headers(e)},body:JSON.stringify(s.player)}).then(t=>{if(t.status===200)return t.json();throw new Error(`Failed to save player for ${s.name}`)}).then(t=>{if(t)return a.onSuccess&&a.onSuccess(),t;throw new Error("No JSON in API response")}).catch(t=>{throw a.onFailure&&a.onFailure(t),t})}function ie(s,e,a){return fetch("/api/players",{method:"POST",headers:{"Content-Type":"application/json",...h.headers(e)},body:JSON.stringify(s.player)}).then(t=>{if(t.status===201)return t.json();throw new Error("Failed to create player")}).then(t=>{if(t)return a.onSuccess&&a.onSuccess(),t;throw new Error("No JSON in API response")}).catch(t=>{throw a.onFailure&&a.onFailure(t),t})}function se(s,e,a){return fetch(`/api/players/${s.name}`,{method:"DELETE",headers:h.headers(e)}).then(t=>{if(t.status===204){a.onSuccess&&a.onSuccess();return}throw new Error(`Failed to delete player ${s.name}`)}).catch(t=>{throw a.onFailure&&a.onFailure(t),t})}function ne(s){return fetch("/api/players",{headers:h.headers(s)}).then(e=>{if(e.status===200)return e.json();throw`Failed to fetch players: ${e.status}`}).then(e=>{if(e)return e;throw"No JSON in response from server"})}function oe(s,e){return fetch(`/api/teams/${s.name}`,{headers:h.headers(e)}).then(a=>{if(a.status===200)return a.json();throw`Failed to fetch team: ${a.status}`}).then(a=>{if(a)return a;throw"No JSON in response from server"})}function le(s,e,a){return fetch(`/api/teams/${s.name}`,{method:"PUT",headers:{"Content-Type":"application/json",...h.headers(e)},body:JSON.stringify(s.team)}).then(t=>{if(t.status===200)return t.json();throw new Error(`Failed to save team for ${s.name}`)}).then(t=>{if(t)return a.onSuccess&&a.onSuccess(),t;throw new Error("No JSON in API response")}).catch(t=>{throw a.onFailure&&a.onFailure(t),t})}function ce(s){return fetch("/api/teams",{headers:h.headers(s)}).then(e=>{if(e.status===200)return e.json();throw`Failed to fetch teams: ${e.status}`}).then(e=>{if(e)return e;throw"No JSON in response from server"})}const D=class D extends v{render(){return o`
      <footer>
        <div class="footer-content">
          <p>&copy; 2025 Wide Receiver University. All rights reserved.</p>
          <p class="footer-update">*Statistics and Rankings last updated Week 13 2025 NFL Season*</p>
        </div>
      </footer>
    `}};D.styles=d`
    :host {
      display: block;
    }

    footer {
      background-color: var(--color-background-header);
      color: var(--color-text-header);
      padding: 1.5rem 2rem;
    }

    .footer-content {
      max-width: 1600px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 5rem;
    }

    p {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .footer-update {
      font-style: italic;
      opacity: 0.8;
    }

    @media (max-width: 767px) {
      .footer-content {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
      }
    }
  `;let N=D;var de=Object.defineProperty,g=(s,e,a,t)=>{for(var r=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=i(e,a,r)||r);return r&&de(e,a,r),r};const B=class B extends v{get imageSrc(){return this.image?.startsWith("http://")||this.image?.startsWith("https://")?this.image:this.image?.startsWith("/")?this.image:`/${this.image}`}render(){return o`
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
    `}};B.styles=[A.styles,d`
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
    `];let c=B;g([l()],c.prototype,"name");g([l()],c.prototype,"image");g([l()],c.prototype,"position");g([l({attribute:"jersey-number"})],c.prototype,"jerseyNumber");g([l()],c.prototype,"team");g([l({attribute:"games-played"})],c.prototype,"gamesPlayed");g([l()],c.prototype,"receptions");g([l({attribute:"receiving-yards"})],c.prototype,"receivingYards");g([l({attribute:"receiving-touchdowns"})],c.prototype,"receivingTouchdowns");g([l({attribute:"fantasy-points"})],c.prototype,"fantasyPoints");var pe=Object.defineProperty,W=(s,e,a,t)=>{for(var r=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=i(e,a,r)||r);return r&&pe(e,a,r),r};const _=class _ extends v{handleClick(e){e.preventDefault(),this.href&&p.dispatch(this,"history/navigate",{href:this.href})}render(){return o`
      <svg class="icon">
        <use href="/icons/football.svg#icon-player" />
      </svg>
      <a href="${this.href}" @click=${this.handleClick}>${this.name}</a>
      <span class="separator"> - </span>
      <span class="team">${this.team}</span>
    `}};_.styles=[A.styles,d`
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
    `];let f=_;W([l()],f.prototype,"href");W([l()],f.prototype,"name");W([l()],f.prototype,"team");var me=Object.defineProperty,j=(s,e,a,t)=>{for(var r=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=i(e,a,r)||r);return r&&me(e,a,r),r};class C extends u{constructor(){super("ffl:model"),this.sortBy="fantasyPoints"}get players(){let e=(this.model.players||[]).sort((a,t)=>{if(this.sortBy==="alphabetical")return a.name.localeCompare(t.name);{const r=parseFloat(a.fantasyPoints)||0;return(parseFloat(t.fantasyPoints)||0)-r}});return this.limit&&(e=e.slice(0,this.limit)),e.map(a=>({href:`/app/player/${encodeURIComponent(a.name)}`,name:a.name,team:a.team}))}connectedCallback(){super.connectedCallback(),this.dispatchMessage(["players/request",{}])}render(){const{players:e}=this;function a(t){return o`
        <player-item
          href=${t.href}
          name=${t.name}
          team=${t.team}
        ></player-item>
      `}return o`
      ${e.map(a)}
    `}}j([l()],C.prototype,"src");j([l({type:Number})],C.prototype,"limit");j([l()],C.prototype,"sortBy");const q=class q extends v{render(){return o`
      <span class="stat-label"><slot name="label"></slot>:</span>
      <span class="stat-value"><slot name="value"></slot></span>
    `}};q.styles=[A.styles,d`
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
    `];let F=q;const M=class M extends v{render(){return o`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Fantasy Football</h3>
          <nav>
            <a href="/app/players">
              <svg class="nav-icon">
                <use href="/icons/football.svg#icon-player" />
              </svg>
              All Players
            </a>
            <a href="/app/rankings">
              <img src="/icons/rankings.svg" class="nav-icon-img" alt="rankings">
              Player Rankings
            </a>
            <a href="/app/matchups">
              <img src="/icons/matchups.svg" class="nav-icon-img" alt="matchups">
              Fantasy Matchups
            </a>
          </nav>

          <h3>Trending Players</h3>
          <nav>
            <a href="/app/player/Rashee%20Rice">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              Rashee Rice
            </a>
            <a href="/app/player/Davante%20Adams">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              Davante Adams
            </a>
            <a href="/app/player/A.J.%20Brown">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              A.J. Brown
            </a>
          </nav>

          <h3>Falling Players</h3>
          <nav>
            <a href="/app/player/Justin%20Jefferson">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Justin Jefferson
            </a>
            <a href="/app/player/Emeka%20Egbuka">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Emeka Egbuka
            </a>
            <a href="/app/player/Rome%20Odunze">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Rome Odunze
            </a>
          </nav>
        </aside>

        <main>
          <h1 class="welcome-heading">Welcome to Wide Receiver University!</h1>
          <p class="welcome-subheading">Track, analyze, and compare the top Wide Receivers in Fantasy Football. Get real-time rankings, player stats, and matchup insights to dominate your league.</p>

          <img src="/images/wrs.jpg" class="hero-image">

          <h1>
            <img src="/icons/trophy.svg" class="trophy-icon" alt="trophy">
            Top Receivers
          </h1>
          <ul class="player-list">
            <player-list src="/api/players" limit="5"></player-list>
          </ul>
        </main>
      </div>
    `}};M.styles=d`
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
      grid-column: span 3;
      background-color: var(--color-background-sidebar);
      padding: 1.5rem 1.5rem 1.5rem 2rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: var(--spacing-lg, 1rem);
      font-size: 1.3rem;
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
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.1rem;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .fire-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      filter: brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(5000%) hue-rotate(350deg) brightness(0.9);
    }

    .cold-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      filter: brightness(0) saturate(100%) invert(60%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(1.2);
    }

    .nav-icon {
      display: inline-block;
      height: 1.2em;
      width: 1.2em;
      vertical-align: top;
      fill: currentColor;
      flex-shrink: 0;
    }

    .nav-icon-img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    main {
      grid-column: span 8;
      padding: 0 1.5rem 1.5rem 1.5rem;
      overflow-y: auto;
    }

    h1 {
      color: var(--color-heading);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .welcome-heading {
      color: var(--color-heading);
      font-size: 2.5rem;
      margin: 0 auto 0.5rem auto;
      text-align: center;
      max-width: 800px;
      display: block;
      width: 100%;
    }

    .welcome-subheading {
      color: #e0e0e0;
      font-size: 1.2rem;
      text-align: center;
      margin: 0 auto 2rem auto;
      line-height: 1.6;
      max-width: 800px;
      display: block;
    }

    .hero-image {
      width: 100%;
      max-width: 900px;
      height: auto;
      display: block;
      margin: 0 auto 1rem auto;
    }

    .trophy-icon {
      width: 40px;
      height: 40px;
      filter: brightness(0) saturate(100%) invert(70%) sepia(80%) saturate(400%) hue-rotate(10deg);
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
        grid-template-columns: repeat(4, 1fr);
      }

      aside.sidebar {
        grid-column: span 1;
        padding: 1rem;
      }

      main {
        grid-column: span 3;
        padding: var(--spacing-lg, 1rem);
      }
    }
  `;let z=M;const U=class U extends v{handleNavigate(e,a){e.preventDefault(),p.dispatch(this,"history/navigate",{href:a})}render(){return o`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Fantasy Football</h3>
          <nav>
            <a href="/app/players">
              <svg class="nav-icon">
                <use href="/icons/football.svg#icon-player" />
              </svg>
              All Players
            </a>
            <a href="/app/rankings">
              <img src="/icons/rankings.svg" class="nav-icon-img" alt="rankings">
              Player Rankings
            </a>
            <a href="/app/matchups">
              <img src="/icons/matchups.svg" class="nav-icon-img" alt="matchups">
              Fantasy Matchups
            </a>
          </nav>

          <h3>Trending Players</h3>
          <nav>
            <a href="/app/player/Rashee%20Rice">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              Rashee Rice
            </a>
            <a href="/app/player/Davante%20Adams">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              Davante Adams
            </a>
            <a href="/app/player/A.J.%20Brown">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              A.J. Brown
            </a>
          </nav>

          <h3>Falling Players</h3>
          <nav>
            <a href="/app/player/Justin%20Jefferson">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Justin Jefferson
            </a>
            <a href="/app/player/Emeka%20Egbuka">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Emeka Egbuka
            </a>
            <a href="/app/player/Rome%20Odunze">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Rome Odunze
            </a>
          </nav>
        </aside>

        <main>
          <div class="header-section">
            <div class="title-section">
              <h1>Wide Receivers List</h1>
              <p class="subtitle">Browse information for all of the top wide receivers!</p>
            </div>
            <a href="/app/players/add" class="add-button" @click=${e=>this.handleNavigate(e,"/app/players/add")}>
              + Add Player
            </a>
          </div>

          <div class="content-grid">
            <ul class="player-list">
              <player-list src="/api/players" sortBy="alphabetical"></player-list>
            </ul>

            <div class="image-container">
              <img src="/images/wru.png" class="wru-image" alt="Wide Receiver University">
            </div>
          </div>
        </main>
      </div>
    `}};U.styles=d`
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
      grid-column: span 3;
      background-color: var(--color-background-sidebar);
      padding: 1.5rem 1.5rem 1.5rem 2rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: var(--spacing-lg, 1rem);
      font-size: 1.3rem;
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
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.1rem;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .fire-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      filter: brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(5000%) hue-rotate(350deg) brightness(0.9);
    }

    .cold-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      filter: brightness(0) saturate(100%) invert(60%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(1.2);
    }

    .nav-icon {
      display: inline-block;
      height: 1.2em;
      width: 1.2em;
      vertical-align: top;
      fill: currentColor;
      flex-shrink: 0;
    }

    .nav-icon-img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    main {
      grid-column: span 9;
      padding: var(--spacing-xl, 1.5rem);
      overflow-y: auto;
    }

    .header-section {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
      gap: 2rem;
    }

    .title-section {
      flex: 1;
    }

    h1 {
      color: var(--color-heading);
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      margin-top: 0;
    }

    .subtitle {
      color: var(--color-text);
      font-size: 1.1rem;
      opacity: 0.8;
      margin: 0;
    }

    .add-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: var(--color-accent);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: opacity 0.2s;
      cursor: pointer;
      white-space: nowrap;
    }

    .add-button:hover {
      opacity: 0.9;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 2rem;
      align-items: start;
    }

    ul.player-list {
      list-style: none;
      padding-left: 0;
      margin: 0;
    }

    .image-container {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      position: sticky;
      top: 1rem;
    }

    .wru-image {
      width: 100%;
      max-width: 350px;
      height: auto;
      border-radius: 8px;
    }

    @media (max-width: 1023px) {
      aside.sidebar {
        grid-column: span 2;
      }

      main {
        grid-column: span 10;
      }
    }

    @media (max-width: 767px) {
      .content-wrapper {
        grid-template-columns: repeat(4, 1fr);
      }

      aside.sidebar {
        grid-column: span 1;
        padding: 1rem;
      }

      main {
        grid-column: span 3;
        padding: var(--spacing-lg, 1rem);
      }

      .header-section {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
      }

      h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      .add-button {
        text-align: center;
      }

      .content-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .image-container {
        position: static;
        order: -1;
      }

      .wru-image {
        max-width: 100%;
      }
    }
  `;let S=U;var ge=Object.defineProperty,he=(s,e,a,t)=>{for(var r=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=i(e,a,r)||r);return r&&ge(e,a,r),r};const G=class G extends u{constructor(){super("ffl:model"),this.selectedCategory="fantasyPoints"}connectedCallback(){super.connectedCallback(),this.dispatchMessage(["players/request",{}])}handleCategoryChange(e){this.selectedCategory=e}get categoryLabel(){return{fantasyPoints:"Fantasy Points",fantasyPointsPerGame:"Fantasy Points Per Game",receivingYards:"Receiving Yards",receptions:"Receptions",receivingTouchdowns:"Touchdowns"}[this.selectedCategory]}get categoryUnit(){return{fantasyPoints:"pts",fantasyPointsPerGame:"pts/game",receivingYards:"yds",receptions:"rec",receivingTouchdowns:"TD"}[this.selectedCategory]}get rankedPlayers(){return[...this.model.players||[]].sort((t,r)=>{let n,i;if(this.selectedCategory==="fantasyPointsPerGame"){const m=parseFloat(t.gamesPlayed)||1,Q=parseFloat(r.gamesPlayed)||1;n=(parseFloat(t.fantasyPoints)||0)/m,i=(parseFloat(r.fantasyPoints)||0)/Q}else n=parseFloat(t[this.selectedCategory])||0,i=parseFloat(r[this.selectedCategory])||0;return i-n}).map((t,r)=>{let n;if(this.selectedCategory==="fantasyPointsPerGame"){const i=parseFloat(t.gamesPlayed)||1;n=((parseFloat(t.fantasyPoints)||0)/i).toFixed(2)}else n=t[this.selectedCategory];return{rank:r+1,href:`/app/player/${encodeURIComponent(t.name)}`,name:t.name,team:t.team,statValue:n}})}render(){const{rankedPlayers:e}=this;return o`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Fantasy Football</h3>
          <nav>
            <a href="/app/players">
              <svg class="nav-icon">
                <use href="/icons/football.svg#icon-player" />
              </svg>
              All Players
            </a>
            <a href="/app/rankings">
              <img src="/icons/rankings.svg" class="nav-icon-img" alt="rankings">
              Player Rankings
            </a>
            <a href="/app/matchups">
              <img src="/icons/matchups.svg" class="nav-icon-img" alt="matchups">
              Fantasy Matchups
            </a>
          </nav>

          <h3>Trending Players</h3>
          <nav>
            <a href="/app/player/Rashee%20Rice">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              Rashee Rice
            </a>
            <a href="/app/player/Davante%20Adams">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              Davante Adams
            </a>
            <a href="/app/player/A.J.%20Brown">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              A.J. Brown
            </a>
          </nav>

          <h3>Falling Players</h3>
          <nav>
            <a href="/app/player/Justin%20Jefferson">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Justin Jefferson
            </a>
            <a href="/app/player/Emeka%20Egbuka">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Emeka Egbuka
            </a>
            <a href="/app/player/Rome%20Odunze">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Rome Odunze
            </a>
          </nav>
        </aside>

        <main>
          <h1>Wide Receiver Rankings</h1>
          <p class="subtitle">View Wide Receivers rankings by statistical categories!</p>

          <div class="filter-buttons">
            <button
              class="${this.selectedCategory==="fantasyPoints"?"active":""}"
              @click=${()=>this.handleCategoryChange("fantasyPoints")}
            >
              Fantasy Points
            </button>
            <button
              class="${this.selectedCategory==="fantasyPointsPerGame"?"active":""}"
              @click=${()=>this.handleCategoryChange("fantasyPointsPerGame")}
            >
              Fantasy Points Per Game
            </button>
            <button
              class="${this.selectedCategory==="receivingYards"?"active":""}"
              @click=${()=>this.handleCategoryChange("receivingYards")}
            >
              Receiving Yards
            </button>
            <button
              class="${this.selectedCategory==="receptions"?"active":""}"
              @click=${()=>this.handleCategoryChange("receptions")}
            >
              Receptions
            </button>
            <button
              class="${this.selectedCategory==="receivingTouchdowns"?"active":""}"
              @click=${()=>this.handleCategoryChange("receivingTouchdowns")}
            >
              Touchdowns
            </button>
          </div>

          <h2 class="category-heading">Rankings by ${this.categoryLabel}</h2>

          <ul class="rankings-list">
            ${e.map(a=>{let t;return a.rank===1?t=o`<img src="/icons/first.svg" class="rank-icon" alt="first place">`:a.rank===2?t=o`<img src="/icons/second.svg" class="rank-icon" alt="second place">`:a.rank===3?t=o`<img src="/icons/third.svg" class="rank-icon" alt="third place">`:t=o`<svg class="icon">
                  <use href="/icons/football.svg#icon-player" />
                </svg>`,o`
                <li class="ranking-item">
                  <span class="rank">#${a.rank}</span>
                  ${t}
                  <a href="${a.href}">${a.name}</a>
                  <span class="separator"> - </span>
                  <span class="team">${a.team}</span>
                  <span class="points">${a.statValue} ${this.categoryUnit}</span>
                </li>
              `})}
          </ul>
        </main>
      </div>
    `}};G.styles=d`
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
      grid-column: span 3;
      background-color: var(--color-background-sidebar);
      padding: 1.5rem 1.5rem 1.5rem 2rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: var(--spacing-lg, 1rem);
      font-size: 1.3rem;
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
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.1rem;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .fire-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      filter: brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(5000%) hue-rotate(350deg) brightness(0.9);
    }

    .cold-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      filter: brightness(0) saturate(100%) invert(60%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(1.2);
    }

    .nav-icon {
      display: inline-block;
      height: 1.2em;
      width: 1.2em;
      vertical-align: top;
      fill: currentColor;
      flex-shrink: 0;
    }

    .nav-icon-img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    main {
      grid-column: span 9;
      padding: var(--spacing-xl, 1.5rem);
      overflow-y: auto;
    }

    h1 {
      color: var(--color-heading);
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      margin-top: 0;
    }

    .subtitle {
      color: var(--color-text);
      font-size: 1.1rem;
      opacity: 0.8;
      margin: 0 0 2rem 0;
    }

    .filter-buttons {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .filter-buttons button {
      padding: 0.75rem 1.5rem;
      background-color: var(--color-background-sidebar);
      color: var(--color-text);
      border: 2px solid var(--color-background-sidebar);
      border-radius: 4px;
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }

    .filter-buttons button:hover {
      background-color: var(--color-accent);
      border-color: var(--color-accent);
      color: white;
    }

    .filter-buttons button.active {
      background-color: var(--color-accent);
      border-color: var(--color-accent);
      color: white;
    }

    .category-heading {
      color: var(--color-heading);
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0 0 1.5rem 0;
    }

    ul.rankings-list {
      list-style: none;
      padding-left: 0;
    }

    .ranking-item {
      display: flex;
      align-items: center;
      gap: 0.5em;
      margin-bottom: 0.5em;
      font-size: 1.2rem;
    }

    .rank {
      font-weight: bold;
      color: var(--color-accent);
      min-width: 3em;
      text-align: right;
    }

    .icon {
      display: inline-block;
      height: 2em;
      width: 2em;
      vertical-align: top;
      fill: currentColor;
      flex-shrink: 0;
    }

    .rank-icon {
      display: inline-block;
      height: 2em;
      width: 2em;
      flex-shrink: 0;
      object-fit: contain;
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

    .points {
      margin-left: auto;
      font-weight: 600;
      color: var(--color-accent);
    }

    @media (max-width: 1023px) {
      aside.sidebar {
        grid-column: span 2;
      }

      main {
        grid-column: span 10;
      }
    }

    @media (max-width: 767px) {
      .content-wrapper {
        grid-template-columns: repeat(4, 1fr);
      }

      aside.sidebar {
        grid-column: span 1;
        padding: 1rem;
      }

      main {
        grid-column: span 3;
        padding: var(--spacing-lg, 1rem);
      }

      h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      .ranking-item {
        font-size: 1rem;
      }

      .filter-buttons button {
        flex: 1;
        min-width: calc(50% - 0.375rem);
      }

      .category-heading {
        font-size: 1.25rem;
      }
    }
  `;let y=G;he([J()],y.prototype,"selectedCategory");var ue=Object.defineProperty,fe=(s,e,a,t)=>{for(var r=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=i(e,a,r)||r);return r&&ue(e,a,r),r};const L=class L extends u{constructor(){super("ffl:model"),this.sortBy="defensiveRank"}connectedCallback(){super.connectedCallback(),this.dispatchMessage(["teams/request",{}])}getSortedTeams(){const a=[...this.model.teams||[]];return this.sortBy==="defensiveRank"?a.sort((t,r)=>{const n=t.defensiveRank==="N/A"?-1:parseInt(t.defensiveRank);return(r.defensiveRank==="N/A"?-1:parseInt(r.defensiveRank))-n}):a.sort((t,r)=>{const n=t.rankVsWRs==="N/A"?-1:parseInt(t.rankVsWRs);return(r.rankVsWRs==="N/A"?-1:parseInt(r.rankVsWRs))-n})}handleSortChange(e){this.sortBy=e}render(){const e=this.getSortedTeams();return o`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Fantasy Football</h3>
          <nav>
            <a href="/app/players">
              <svg class="nav-icon">
                <use href="/icons/football.svg#icon-player" />
              </svg>
              All Players
            </a>
            <a href="/app/rankings">
              <img src="/icons/rankings.svg" class="nav-icon-img" alt="rankings">
              Player Rankings
            </a>
            <a href="/app/matchups">
              <img src="/icons/matchups.svg" class="nav-icon-img" alt="matchups">
              Fantasy Matchups
            </a>
          </nav>

          <h3>Trending Players</h3>
          <nav>
            <a href="/app/player/Rashee%20Rice">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              Rashee Rice
            </a>
            <a href="/app/player/Davante%20Adams">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              Davante Adams
            </a>
            <a href="/app/player/A.J.%20Brown">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              A.J. Brown
            </a>
          </nav>

          <h3>Falling Players</h3>
          <nav>
            <a href="/app/player/Justin%20Jefferson">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Justin Jefferson
            </a>
            <a href="/app/player/Emeka%20Egbuka">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Emeka Egbuka
            </a>
            <a href="/app/player/Rome%20Odunze">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Rome Odunze
            </a>
          </nav>
        </aside>

        <main>
          <div class="page-header">
            <div class="header-content">
              <h1>Matchups by Teams</h1>
              <p class="subtitle">Ranking Matchups versus all 32 NFL Teams!</p>

              <div class="filter-controls">
                <button
                  class="${this.sortBy==="defensiveRank"?"active":""}"
                  @click=${()=>this.handleSortChange("defensiveRank")}>
                  Sort by NFL Defensive Rank
                </button>
                <button
                  class="${this.sortBy==="rankVsWRs"?"active":""}"
                  @click=${()=>this.handleSortChange("rankVsWRs")}>
                  Sort by Rank vs WRs
                </button>
              </div>
            </div>

            <div class="image-container">
              <img src="/images/fantasy.png" class="fantasy-image" alt="Fantasy Football">
            </div>
          </div>

          <ul class="teams-list">
            ${e.map((a,t)=>{const r=t+1;let n="";return r<=10?n="tier-green":r<=22?n="tier-silver":n="tier-red",o`
                <li class="team-item ${n}">
                  <span class="rank">#${r}</span>
                  <img src="/icons/team.svg" class="team-icon" alt="team">
                  <a href="/app/team/${encodeURIComponent(a.name)}" class="team-link">
                    ${a.name}
                  </a>
                </li>
              `})}
          </ul>
        </main>
      </div>
    `}};L.styles=d`
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
      grid-column: span 3;
      background-color: var(--color-background-sidebar);
      padding: 1.5rem 1.5rem 1.5rem 2rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: var(--spacing-lg, 1rem);
      font-size: 1.3rem;
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
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.1rem;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .fire-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      filter: brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(5000%) hue-rotate(350deg) brightness(0.9);
    }

    .cold-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      filter: brightness(0) saturate(100%) invert(60%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(1.2);
    }

    .nav-icon {
      display: inline-block;
      height: 1.2em;
      width: 1.2em;
      vertical-align: top;
      fill: currentColor;
      flex-shrink: 0;
    }

    .nav-icon-img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    main {
      grid-column: span 9;
      padding: var(--spacing-xl, 1.5rem);
      overflow-y: auto;
    }

    .page-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
      align-items: start;
    }

    .header-content {
      display: flex;
      flex-direction: column;
    }

    h1 {
      color: var(--color-heading);
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      margin-top: 0;
    }

    .subtitle {
      color: var(--color-text);
      font-size: 1.1rem;
      opacity: 0.8;
      margin: 0 0 1.5rem 0;
    }

    .filter-controls {
      display: flex;
      gap: 1rem;
      margin-bottom: 0;
    }

    .filter-controls button {
      padding: 0.75rem 1.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--color-text);
      border: 2px solid transparent;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }

    .filter-controls button:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }

    .filter-controls button.active {
      background-color: var(--color-accent);
      border-color: var(--color-accent);
      color: white;
    }

    .image-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    .fantasy-image {
      width: 100%;
      max-width: 400px;
      height: auto;
      border-radius: 8px;
    }

    .teams-list {
      list-style: none;
      padding-left: 0;
      color: var(--color-text);
      margin: 0;
    }

    .team-item {
      display: flex;
      align-items: center;
      gap: 0.5em;
      margin-bottom: 0.5em;
      font-size: 1.2rem;
    }

    .rank {
      font-weight: bold;
      color: var(--color-accent);
      min-width: 3em;
      text-align: right;
    }

    .team-icon {
      display: inline-block;
      height: 2em;
      width: 2em;
      flex-shrink: 0;
    }

    .team-link {
      color: var(--color-link);
      text-decoration: none;
    }

    .team-link:hover {
      text-decoration: underline;
    }

    .tier-green .rank,
    .tier-green .team-link {
      color: #4ade80;
    }

    .tier-green .team-icon {
      filter: brightness(0) saturate(100%) invert(77%) sepia(29%) saturate(963%) hue-rotate(82deg) brightness(95%);
    }

    .tier-silver .rank,
    .tier-silver .team-link {
      color: #a8a8a8;
    }

    .tier-silver .team-icon {
      filter: brightness(0) saturate(0%) invert(70%);
    }

    .tier-red .rank,
    .tier-red .team-link {
      color: #ef4444;
    }

    .tier-red .team-icon {
      filter: brightness(0) saturate(100%) invert(39%) sepia(86%) saturate(2589%) hue-rotate(342deg) brightness(96%);
    }

    @media (max-width: 1023px) {
      aside.sidebar {
        grid-column: span 2;
      }

      main {
        grid-column: span 10;
      }
    }

    @media (max-width: 767px) {
      .content-wrapper {
        grid-template-columns: repeat(4, 1fr);
      }

      aside.sidebar {
        grid-column: span 1;
        padding: 1rem;
      }

      main {
        grid-column: span 3;
        padding: var(--spacing-lg, 1rem);
      }

      .page-header {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .image-container {
        order: -1;
      }

      h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      .team-item {
        font-size: 1rem;
      }

      .fantasy-image {
        max-width: 100%;
      }
    }
  `;let k=L;fe([J()],k.prototype,"sortBy");var ve=Object.defineProperty,be=(s,e,a,t)=>{for(var r=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=i(e,a,r)||r);return r&&ve(e,a,r),r};const I=class I extends u{constructor(){super("ffl:model")}connectedCallback(){super.connectedCallback(),this.teamName&&this.dispatchMessage(["team/request",{name:this.teamName}])}attributeChangedCallback(e,a,t){super.attributeChangedCallback(e,a,t),e==="team-name"&&a!==t&&t&&this.dispatchMessage(["team/request",{name:t}])}get team(){return this.model.team||{name:this.teamName||"",image:"",defensiveRank:"N/A",rankVsWRs:"N/A"}}handleNavigate(e,a){e.preventDefault(),p.dispatch(this,"history/navigate",{href:a})}render(){return o`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Fantasy Football</h3>
          <nav>
            <a href="/app/players" @click=${e=>this.handleNavigate(e,"/app/players")}>
              <svg class="nav-icon">
                <use href="/icons/football.svg#icon-player" />
              </svg>
              All Players
            </a>
            <a href="/app/rankings" @click=${e=>this.handleNavigate(e,"/app/rankings")}>
              <img src="/icons/rankings.svg" class="nav-icon-img" alt="rankings">
              Player Rankings
            </a>
            <a href="/app/matchups" @click=${e=>this.handleNavigate(e,"/app/matchups")}>
              <img src="/icons/matchups.svg" class="nav-icon-img" alt="matchups">
              Fantasy Matchups
            </a>
          </nav>

          <h3>Navigation</h3>
          <nav>
            <a href="/app" @click=${e=>this.handleNavigate(e,"/app")}>Home</a>
            <a href="/app/matchups" @click=${e=>this.handleNavigate(e,"/app/matchups")}>All Teams</a>
          </nav>
        </aside>

        <main>
          <div class="team-actions">
            <a href="/app/team/${encodeURIComponent(this.team.name)}/edit" class="edit-button"
               @click=${e=>this.handleNavigate(e,`/app/team/${encodeURIComponent(this.team.name)}/edit`)}>
              Edit Team Stats
            </a>
          </div>

          <div class="team-card">
            ${this.team.image?o`
              <img src="${this.team.image}" alt="${this.team.name}" class="team-image">
            `:""}
            <h1>${this.team.name}</h1>

            <div class="stats-container">
              <div class="stat-item">
                <span class="stat-label">Defensive Rank:</span>
                <span class="stat-value">${this.team.defensiveRank}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Rank vs WRs:</span>
                <span class="stat-value">${this.team.rankVsWRs}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    `}};I.styles=d`
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
      padding: 1.5rem 1.5rem 1.5rem 2rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.3rem;
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
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .nav-icon {
      display: inline-block;
      height: 1.2em;
      width: 1.2em;
      vertical-align: top;
      fill: currentColor;
      flex-shrink: 0;
    }

    .nav-icon-img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    main {
      grid-column: span 10;
      padding: 1.5rem;
      overflow-y: auto;
    }

    .team-actions {
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

    .team-card {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 2rem;
    }

    .team-image {
      width: 200px;
      height: 200px;
      object-fit: contain;
      border-radius: 8px;
      margin-bottom: 1.5rem;
    }

    h1 {
      color: var(--color-heading);
      font-size: 2.5rem;
      margin-top: 0;
      margin-bottom: 2rem;
    }

    .stats-container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .stat-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }

    .stat-label {
      color: var(--color-text);
      font-size: 1.2rem;
      font-weight: 500;
    }

    .stat-value {
      color: var(--color-accent);
      font-size: 1.5rem;
      font-weight: 700;
    }
  `;let x=I;be([l({attribute:"team-name"})],x.prototype,"teamName");var ye=Object.defineProperty,ke=(s,e,a,t)=>{for(var r=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=i(e,a,r)||r);return r&&ye(e,a,r),r};const Y=class Y extends u{constructor(){super("ffl:model")}connectedCallback(){super.connectedCallback(),this.teamName&&this.dispatchMessage(["team/request",{name:this.teamName}])}attributeChangedCallback(e,a,t){super.attributeChangedCallback(e,a,t),e==="team-name"&&a!==t&&t&&this.dispatchMessage(["team/request",{name:t}])}get team(){return this.model.team||{name:this.teamName||"",image:"",defensiveRank:"",rankVsWRs:""}}handleSubmit(e){e.preventDefault();const a=e.target,t=new FormData(a),r={name:this.team.name,image:t.get("image"),defensiveRank:t.get("defensiveRank"),rankVsWRs:t.get("rankVsWRs")};this.dispatchMessage(["team/save",{name:this.team.name,team:r},{onSuccess:()=>{p.dispatch(this,"history/navigate",{href:`/app/team/${encodeURIComponent(this.team.name)}`})},onFailure:n=>{console.error("Error saving team:",n)}}])}handleNavigate(e,a){e.preventDefault(),p.dispatch(this,"history/navigate",{href:a})}render(){return o`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Fantasy Football</h3>
          <nav>
            <a href="/app/players" @click=${e=>this.handleNavigate(e,"/app/players")}>
              <svg class="nav-icon">
                <use href="/icons/football.svg#icon-player" />
              </svg>
              All Players
            </a>
            <a href="/app/rankings" @click=${e=>this.handleNavigate(e,"/app/rankings")}>
              <img src="/icons/rankings.svg" class="nav-icon-img" alt="rankings">
              Player Rankings
            </a>
            <a href="/app/matchups" @click=${e=>this.handleNavigate(e,"/app/matchups")}>
              <img src="/icons/matchups.svg" class="nav-icon-img" alt="matchups">
              Fantasy Matchups
            </a>
          </nav>

          <h3>Navigation</h3>
          <nav>
            <a href="/app" @click=${e=>this.handleNavigate(e,"/app")}>Home</a>
            <a href="/app/matchups" @click=${e=>this.handleNavigate(e,"/app/matchups")}>All Teams</a>
          </nav>
        </aside>

        <main>
          <h1>Edit ${this.team.name}</h1>

          <form @submit=${this.handleSubmit}>
            <div class="form-group">
              <label for="image">Team Logo URL:</label>
              <input
                type="text"
                id="image"
                name="image"
                .value=${this.team.image}
                placeholder="https://example.com/team-logo.png"
              />
            </div>

            <div class="form-group">
              <label for="defensiveRank">Defensive Rank:</label>
              <input
                type="text"
                id="defensiveRank"
                name="defensiveRank"
                .value=${this.team.defensiveRank}
                required
              />
            </div>

            <div class="form-group">
              <label for="rankVsWRs">Rank vs WRs:</label>
              <input
                type="text"
                id="rankVsWRs"
                name="rankVsWRs"
                .value=${this.team.rankVsWRs}
                required
              />
            </div>

            <div class="button-group">
              <button type="submit" class="submit-button">Save Changes</button>
              <a
                href="/app/team/${encodeURIComponent(this.team.name)}"
                class="cancel-button"
                @click=${e=>this.handleNavigate(e,`/app/team/${encodeURIComponent(this.team.name)}`)}>
                Cancel
              </a>
            </div>
          </form>
        </main>
      </div>
    `}};Y.styles=d`
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
      padding: 1.5rem 1.5rem 1.5rem 2rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.3rem;
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
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .nav-icon {
      display: inline-block;
      height: 1.2em;
      width: 1.2em;
      vertical-align: top;
      fill: currentColor;
      flex-shrink: 0;
    }

    .nav-icon-img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    main {
      grid-column: span 10;
      padding: 1.5rem;
      overflow-y: auto;
    }

    h1 {
      color: var(--color-heading);
      font-size: 2.5rem;
      margin-bottom: 2rem;
      margin-top: 0;
    }

    form {
      max-width: 600px;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      color: var(--color-text);
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.05);
      color: var(--color-text);
      font-family: inherit;
    }

    input:focus {
      outline: none;
      border-color: var(--color-accent);
    }

    .button-group {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .submit-button {
      padding: 0.75rem 1.5rem;
      background-color: var(--color-accent);
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .submit-button:hover {
      opacity: 0.9;
    }

    .cancel-button {
      padding: 0.75rem 1.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--color-text);
      text-decoration: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.2s;
      display: inline-block;
    }

    .cancel-button:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  `;let w=Y;ke([l({attribute:"team-name"})],w.prototype,"teamName");var xe=Object.defineProperty,we=(s,e,a,t)=>{for(var r=void 0,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=i(e,a,r)||r);return r&&xe(e,a,r),r};const E=class E extends u{get player(){return this.model.player}constructor(){super("ffl:model")}attributeChangedCallback(e,a,t){super.attributeChangedCallback(e,a,t),e==="player-name"&&a!==t&&t&&this.dispatchMessage(["player/request",{name:t}])}handleNavigate(e,a){e.preventDefault(),p.dispatch(this,"history/navigate",{href:a})}render(){const{player:e}=this;return e?o`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Fantasy Football</h3>
          <nav>
            <a href="/app/players" @click=${a=>this.handleNavigate(a,"/app/players")}>
              <svg class="nav-icon">
                <use href="/icons/football.svg#icon-player" />
              </svg>
              All Players
            </a>
            <a href="/app/rankings" @click=${a=>this.handleNavigate(a,"/app/rankings")}>
              <img src="/icons/rankings.svg" class="nav-icon-img" alt="rankings">
              Player Rankings
            </a>
            <a href="/app/matchups" @click=${a=>this.handleNavigate(a,"/app/matchups")}>
              <img src="/icons/matchups.svg" class="nav-icon-img" alt="matchups">
              Fantasy Matchups
            </a>
          </nav>

          <h3>Navigation</h3>
          <nav>
            <a href="/app" @click=${a=>this.handleNavigate(a,"/app")}>Home</a>
            <a href="/app/players" @click=${a=>this.handleNavigate(a,"/app/players")}>Players</a>
            <a href="/app/rankings" @click=${a=>this.handleNavigate(a,"/app/rankings")}>Rankings</a>
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
    `:o`<p>Loading player data...</p>`}};E.styles=d`
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
      padding: 1.5rem 1.5rem 1.5rem 2rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.3rem;
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
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .nav-icon {
      display: inline-block;
      height: 1.2em;
      width: 1.2em;
      vertical-align: top;
      fill: currentColor;
      flex-shrink: 0;
    }

    .nav-icon-img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
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
  `;let $=E;we([l({attribute:"player-name"})],$.prototype,"playerName");var $e=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,K=(s,e,a,t)=>{for(var r=t>1?void 0:t?Re(e,a):e,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=(t?i(e,a,r):i(r))||r);return t&&r&&$e(e,a,r),r};const R=class R extends u{get player(){return this.model.player}constructor(){super("ffl:model")}handleNavigate(e,a){e.preventDefault(),p.dispatch(this,"history/navigate",{href:a})}attributeChangedCallback(e,a,t){super.attributeChangedCallback(e,a,t),e==="player-name"&&a!==t&&t&&this.dispatchMessage(["player/request",{name:t}])}render(){return o`
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
              <button type="button" class="action-button delete-button" @click=${this.handleDelete}>Delete Player</button>
            </div>
          </mu-form>
        </section>
      </main>
    `}handleSubmit(e){const a=e.detail;this.dispatchMessage(["player/save",{name:this.playerName,player:a},{onSuccess:()=>p.dispatch(this,"history/navigate",{href:`/app/player/${a.name}`}),onFailure:t=>console.log("ERROR:",t)}])}handleDelete(){window.confirm(`Are you sure you want to delete ${this.playerName}? This action cannot be undone.`)&&this.dispatchMessage(["player/delete",{name:this.playerName},{onSuccess:()=>{p.dispatch(this,"history/navigate",{href:"/app/players"})},onFailure:a=>{console.error("Failed to delete player:",a),alert("Failed to delete player. Please try again.")}}])}};R.uses=O({"mu-form":H.Element}),R.styles=d`
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

    .delete-button {
      background-color: #dc3545;
      margin-left: auto;
    }

    .delete-button:hover {
      background-color: #c82333;
      opacity: 1;
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
  `;let b=R;K([l({attribute:"player-name"})],b.prototype,"playerName",2);K([J()],b.prototype,"player",1);const P=class P extends u{constructor(){super("ffl:model")}handleNavigate(e,a){e.preventDefault(),p.dispatch(this,"history/navigate",{href:a})}render(){return o`
      <main class="page">
        <section class="add-section">
          <h2>Add New Wide Receiver</h2>
          <mu-form @mu-form:submit=${this.handleSubmit}>
            <label>
              <span>Name</span>
              <input name="name" required />
            </label>
            <label>
              <span>Image URL (PNG or JPG)</span>
              <input name="image" />
            </label>
            <label>
              <span>Position</span>
              <input name="position" value="Wide Receiver" />
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
              <a href="/app/players" class="action-button back-button" @click=${e=>this.handleNavigate(e,"/app/players")}>Cancel</a>
            </div>
          </mu-form>
        </section>
      </main>
    `}handleSubmit(e){this.dispatchMessage(["player/create",{player:e.detail},{onSuccess:()=>p.dispatch(this,"history/navigate",{href:"/app/players"}),onFailure:a=>console.log("ERROR:",a)}])}};P.uses=O({"mu-form":H.Element}),P.styles=d`
    :host {
      display: block;
      grid-area: content;
      height: 100%;
    }

    main {
      padding: 2rem;
      overflow-y: auto;
    }

    .add-section {
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
  `;let T=P;const Pe=[{path:"/app/team/:name/edit",view:s=>o`
      <team-edit team-name=${s.name}></team-edit>
    `},{path:"/app/team/:name",view:s=>o`
      <team-view team-name=${s.name}></team-view>
    `},{path:"/app/player/:name/edit",view:s=>o`
      <player-edit player-name=${s.name}></player-edit>
    `},{path:"/app/player/:name",view:s=>o`
      <player-view player-name=${s.name}></player-view>
    `},{path:"/app/players/add",view:()=>o`
      <player-add></player-add>
    `},{path:"/app/players",view:()=>o`
      <players-view></players-view>
    `},{path:"/app/rankings",view:()=>o`
      <rankings-view></rankings-view>
    `},{path:"/app/matchups",view:()=>o`
      <matchups-view></matchups-view>
    `},{path:"/app",view:()=>o`
      <home-view></home-view>
    `},{path:"/",redirect:"/app"}];O({"mu-auth":h.Provider,"mu-history":p.Provider,"mu-switch":class extends V.Element{constructor(){super(Pe,"ffl:history","ffl:auth")}},"mu-store":class extends Z.Provider{constructor(){super(ae,ee,"ffl:auth")}},"header-element":X,"footer-element":N,"player-card":c,"player-item":f,"player-list":C,"stat-item":F,"home-view":z,"players-view":S,"rankings-view":y,"matchups-view":k,"team-view":x,"team-edit":w,"player-view":$,"player-edit":b,"player-add":T});document.body.addEventListener("lightmode:toggle",s=>{s.detail.checked?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode")});
