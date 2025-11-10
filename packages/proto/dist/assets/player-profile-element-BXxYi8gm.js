import{i as c,x as p,r as v,a as u,n as i,b,O as x}from"./header-element-BNX6fcYA.js";const h=class h extends c{render(){return p`
      <span class="stat-label"><slot name="label"></slot></span>
      <span class="stat-value"><slot name="value"></slot></span>
    `}};h.styles=[v.styles,u`
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
    `];let m=h;var $=Object.defineProperty,r=(n,t,a,f)=>{for(var e=void 0,o=n.length-1,l;o>=0;o--)(l=n[o])&&(e=l(t,a,e)||e);return e&&$(t,a,e),e};const d=class d extends c{render(){return p`
      <h1>${this.name}</h1>
      <img src="${this.image}" style="width: 300px;">

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

      <p><a href="index.html">← Back to Home</a></p>
    `}};d.styles=[v.styles,u`
      :host {
        display: block;
      }

      h1 {
        font-size: var(--font-size-xxxl);
        font-weight: var(--font-weight-bold);
        color: var(--color-heading);
        margin-bottom: var(--spacing-2xl);
      }

      img {
        margin-bottom: var(--spacing-2xl);
        border-radius: var(--border-radius);
      }

      h2 {
        font-size: var(--font-size-xxl);
        font-weight: var(--font-weight-semibold);
        color: var(--color-heading);
        margin-top: var(--spacing-2xl);
        margin-bottom: var(--spacing-xl);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--spacing-xl);
        margin-bottom: var(--spacing-2xl);
      }

      p {
        margin-top: var(--spacing-2xl);
      }

      a {
        color: var(--color-link);
        text-decoration: none;
        font-weight: var(--font-weight-semibold);
      }

      a:hover {
        text-decoration: underline;
      }
    `];let s=d;r([i()],s.prototype,"name");r([i()],s.prototype,"image");r([i()],s.prototype,"position");r([i({attribute:"jersey-number"})],s.prototype,"jerseyNumber");r([i()],s.prototype,"team");r([i({attribute:"games-played"})],s.prototype,"gamesPlayed");r([i()],s.prototype,"receptions");r([i({attribute:"receiving-yards"})],s.prototype,"receivingYards");r([i({attribute:"receiving-touchdowns"})],s.prototype,"receivingTouchdowns");r([i({attribute:"fantasy-points"})],s.prototype,"fantasyPoints");var w=Object.defineProperty,g=(n,t,a,f)=>{for(var e=void 0,o=n.length-1,l;o>=0;o--)(l=n[o])&&(e=l(t,a,e)||e);return e&&w(t,a,e),e};class y extends c{constructor(){super(...arguments),this._authObserver=new x(this,"ffl:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{this._user=t.user,this.src&&this.hydrate(this.src)})}get authorization(){return this._user?.authenticated&&{Authorization:`Bearer ${this._user.token}`}}hydrate(t){fetch(t,{headers:this.authorization||{}}).then(a=>a.json()).then(a=>{a&&(this.playerData=a)}).catch(a=>{console.error("Failed to fetch player data:",a)})}render(){const{playerData:t}=this;return t?p`
      <player-card
        name=${t.name}
        image=${t.image}
        position=${t.position}
        jersey-number=${t.jerseyNumber}
        team=${t.team}
        games-played=${t.gamesPlayed}
        receptions=${t.receptions}
        receiving-yards=${t.receivingYards}
        receiving-touchdowns=${t.receivingTouchdowns}
        fantasy-points=${t.fantasyPoints}
      ></player-card>
    `:p``}}g([i()],y.prototype,"src");g([b()],y.prototype,"playerData");export{y as P,m as S,s as a};
