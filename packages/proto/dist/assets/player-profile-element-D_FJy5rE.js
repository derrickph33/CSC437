import{i as c,x as p,r as v,a as g,n as i}from"./header-element-CzA7NLWL.js";import{r as b}from"./state-DmKpXURm.js";const m=class m extends c{render(){return p`
      <span class="stat-label"><slot name="label"></slot></span>
      <span class="stat-value"><slot name="value"></slot></span>
    `}};m.styles=[v.styles,g`
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
    `];let h=m;var x=Object.defineProperty,o=(n,t,e,u)=>{for(var a=void 0,r=n.length-1,l;r>=0;r--)(l=n[r])&&(a=l(t,e,a)||a);return a&&x(t,e,a),a};const d=class d extends c{render(){return p`
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
    `}};d.styles=[v.styles,g`
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
    `];let s=d;o([i()],s.prototype,"name");o([i()],s.prototype,"image");o([i()],s.prototype,"position");o([i({attribute:"jersey-number"})],s.prototype,"jerseyNumber");o([i()],s.prototype,"team");o([i({attribute:"games-played"})],s.prototype,"gamesPlayed");o([i()],s.prototype,"receptions");o([i({attribute:"receiving-yards"})],s.prototype,"receivingYards");o([i({attribute:"receiving-touchdowns"})],s.prototype,"receivingTouchdowns");o([i({attribute:"fantasy-points"})],s.prototype,"fantasyPoints");var $=Object.defineProperty,y=(n,t,e,u)=>{for(var a=void 0,r=n.length-1,l;r>=0;r--)(l=n[r])&&(a=l(t,e,a)||a);return a&&$(t,e,a),a};class f extends c{connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(e=>e.json()).then(e=>{e&&(this.playerData=e)}).catch(e=>{console.error("Failed to fetch player data:",e)})}render(){const{playerData:t}=this;return t?p`
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
    `:p``}}y([i()],f.prototype,"src");y([b()],f.prototype,"playerData");export{f as P,h as S,s as a};
