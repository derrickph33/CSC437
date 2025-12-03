import{i as h,x as l,r as y,a as u,n as i,b as P,O as z,d as O,_ as j,h as R,c as M,H as T}from"./header-element-CeQS7Na3.js";var L=Object.defineProperty,p=(r,e,t,d)=>{for(var a=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(a=n(e,t,a)||a);return a&&L(e,t,a),a};const x=class x extends h{get imageSrc(){return this.image?.startsWith("/")?this.image:`/${this.image}`}render(){return l`
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
    `}};x.styles=[y.styles,u`
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
    `];let o=x;p([i()],o.prototype,"name");p([i()],o.prototype,"image");p([i()],o.prototype,"position");p([i({attribute:"jersey-number"})],o.prototype,"jerseyNumber");p([i()],o.prototype,"team");p([i({attribute:"games-played"})],o.prototype,"gamesPlayed");p([i()],o.prototype,"receptions");p([i({attribute:"receiving-yards"})],o.prototype,"receivingYards");p([i({attribute:"receiving-touchdowns"})],o.prototype,"receivingTouchdowns");p([i({attribute:"fantasy-points"})],o.prototype,"fantasyPoints");var B=Object.defineProperty,f=(r,e,t,d)=>{for(var a=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(a=n(e,t,a)||a);return a&&B(e,t,a),a};const w=class w extends h{render(){return l`
      <svg class="icon">
        <use href="/icons/football.svg#icon-player" />
      </svg>
      <a href="${this.href}">${this.name}</a>
      <span class="separator"> - </span>
      <span class="team">${this.team}</span>
    `}};w.styles=[y.styles,u`
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
    `];let c=w;f([i()],c.prototype,"href");f([i()],c.prototype,"name");f([i()],c.prototype,"team");var F=Object.defineProperty,C=(r,e,t,d)=>{for(var a=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(a=n(e,t,a)||a);return a&&F(e,t,a),a};class b extends h{constructor(){super(...arguments),this.players=[],this._authObserver=new z(this,"ffl:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user,this.src&&this.hydrate(this.src)})}get authorization(){return this._user?.authenticated&&{Authorization:`Bearer ${this._user.token}`}}hydrate(e){fetch(e,{headers:this.authorization||{}}).then(t=>t.json()).then(t=>{if(t){const d=t;this.players=d.map(a=>({href:`/app/player/${encodeURIComponent(a.name)}`,name:a.name,team:a.team}))}}).catch(t=>{console.error("Failed to fetch player data:",t)})}render(){const{players:e}=this;function t(d){return l`
        <player-item
          href=${d.href}
          name=${d.name}
          team=${d.team}
        ></player-item>
      `}return l`
      ${e.map(t)}
    `}}C([i()],b.prototype,"src");C([P()],b.prototype,"players");const $=class $ extends h{render(){return l`
      <span class="stat-label"><slot name="label"></slot>:</span>
      <span class="stat-value"><slot name="value"></slot></span>
    `}};$.styles=[y.styles,u`
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
    `];let g=$;const k=class k extends h{render(){return l`
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
    `}};k.styles=u`
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
  `;let v=k;var A=Object.defineProperty,N=(r,e,t,d)=>{for(var a=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(a=n(e,t,a)||a);return a&&A(e,t,a),a};const _=class _ extends h{constructor(){super(...arguments),this._authObserver=new z(this,"ffl:auth")}get src(){return`/api/players/${encodeURIComponent(this.playerName||"")}`}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user,this.playerName&&this.hydrate(this.src)})}get authorization(){return this._user?.authenticated&&{Authorization:`Bearer ${this._user.token}`}}hydrate(e){fetch(e,{headers:this.authorization||{}}).then(t=>t.json()).then(t=>{t&&(this.playerData=t)}).catch(t=>{console.error("Failed to fetch player data:",t)})}render(){const{playerData:e}=this;return e?l`
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
    `:l`<p>Loading player data...</p>`}};_.styles=u`
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
  `;let m=_;N([i({attribute:"player-name"})],m.prototype,"playerName");N([P()],m.prototype,"playerData");const D=[{path:"/app/player/:name",view:r=>l`
      <player-view player-name=${r.name}></player-view>
    `},{path:"/app",view:()=>l`
      <home-view></home-view>
    `},{path:"/",redirect:"/app"}];O({"mu-auth":M.Provider,"mu-history":R.Provider,"mu-switch":class extends j.Element{constructor(){super(D,"ffl:history","ffl:auth")}},"header-element":T,"player-card":o,"player-item":c,"player-list":b,"stat-item":g,"home-view":v,"player-view":m});document.body.addEventListener("lightmode:toggle",r=>{r.detail.checked?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode")});
