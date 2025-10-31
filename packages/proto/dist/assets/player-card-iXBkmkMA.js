import{i as v,x as g,r as d,a as h,n as s}from"./header-element-CzA7NLWL.js";const o=class o extends v{render(){return g`
      <span class="stat-label"><slot name="label"></slot></span>
      <span class="stat-value"><slot name="value"></slot></span>
    `}};o.styles=[d.styles,h`
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
    `];let c=o;var u=Object.defineProperty,a=(r,l,p,b)=>{for(var e=void 0,i=r.length-1,m;i>=0;i--)(m=r[i])&&(e=m(l,p,e)||e);return e&&u(l,p,e),e};const n=class n extends v{render(){return g`
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
    `}};n.styles=[d.styles,h`
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
    `];let t=n;a([s()],t.prototype,"name");a([s()],t.prototype,"image");a([s()],t.prototype,"position");a([s({attribute:"jersey-number"})],t.prototype,"jerseyNumber");a([s()],t.prototype,"team");a([s({attribute:"games-played"})],t.prototype,"gamesPlayed");a([s()],t.prototype,"receptions");a([s({attribute:"receiving-yards"})],t.prototype,"receivingYards");a([s({attribute:"receiving-touchdowns"})],t.prototype,"receivingTouchdowns");a([s({attribute:"fantasy-points"})],t.prototype,"fantasyPoints");export{t as P,c as S};
