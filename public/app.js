(() => {
const C = {white:'#FAF7F2', oat:'#EDE6DA', oat2:'#F4EFE6', coral:'#E8664A', deep:'#B8452D', rose:'#E9A6B3', blush:'#F3D3D9', sage:'#B7C9A8', sageL:'#E3EBDD', butter:'#F2D98B', butterL:'#F8EDC8', lilac:'#C9B6D9', lilacL:'#E7DEEF', pine:'#2F5D50', ink:'#2B2B2B', wood:'#D9C2A3', woodD:'#C4A67F', paper:'#FFFDF9'};

const HOLIDAYS = {
  valentines:{name:"Valentine's Day", date:new Date(2027,1,14), tint:C.blush, blurb:"Small, thoughtful things for the people who make ordinary days feel less ordinary."},
  easter:{name:'Easter', date:new Date(2027,2,28), tint:C.sageL, blurb:'Soft colors, natural textures and a table worth gathering around.'},
  mothers:{name:"Mother's Day", date:new Date(2027,4,9), tint:C.lilacL, blurb:'For the one who taught you that little things matter.'},
  everyday:{name:'Everyday Celebrations', date:null, tint:C.butterL, blurb:'Birthdays, dinners, small wins. Color for the days you decide to celebrate.'}
};
const SEASON = 'valentines';

const SOURCES = {
  tn:{label:'Ships from Tennessee', proc:2, min:2, max:5},
  us:{label:'Ships from our US warehouse', proc:2, min:3, max:7},
  cn:{label:'Ships from our partner studio', proc:3, min:8, max:15}
};
const CNY = {start:new Date(2027,0,25), end:new Date(2027,1,15), days:21};

const PRODUCTS = [
  {id:'heart-candle-set', name:'Ceramic Heart Candle Set', price:48, hol:'valentines', src:'tn', tags:['her'], art:'candle', c:[C.rose,C.coral], bg:C.blush, colors:[['Blush',C.rose],['Coral',C.coral],['Oat',C.wood]], line:'For the friend who remembers every little thing.', love:['Two soy candles in hand-glazed ceramic cups','Soft notes of rose and cedar, about 30 hours each','Cups become little dishes once the candle is gone'], details:'Large cup 3.1" × 3.5", small cup 2.4" × 2.4". Soy wax blend, cotton wick, glazed stoneware.', care:'Trim wick to 1/4" before each burn. Wipe cups clean with a damp cloth.', safety:true, isNew:true},
  {id:'blush-linen-runner', name:'Blush Linen Table Runner', price:42, hol:'valentines', src:'us', tags:['hosts','her'], art:'runner', c:[C.rose,C.white], bg:C.oat2, colors:[['Blush',C.rose],['Oat',C.wood]], line:'Dinner at home, but make it a date.', love:['Stonewashed linen that gets softer every wash','Hand-knotted fringe ends','Fits tables for 4–6'], details:'14" × 90". 100% linen.', care:'Machine wash cold, tumble dry low.'},
  {id:'love-notes-cards', name:'Little Love Notes Card Set', price:24, hol:'valentines', src:'tn', tags:['her','him'], art:'cards', c:[C.coral,C.rose], bg:C.butterL, colors:[['Mixed',C.coral]], line:'Twelve reasons, one envelope at a time.', love:['12 letterpress-style cards with blush envelopes','Prompts on the back for when words are hard','Tucks into any gift'], details:'Cards 4.25" × 5.5". FSC-certified paper.', care:'Keep dry.'},
  {id:'glass-bud-vases', name:'Coral Glass Bud Vase Trio', price:56, hol:'valentines', src:'cn', tags:['her','hosts'], art:'vases', c:[C.coral,C.rose], bg:C.oat2, colors:[['Coral',C.coral],['Rose',C.rose],['Sage',C.sage]], line:'Three small vases, endless little bouquets.', love:['Mouth-blown tinted glass','Three heights that look good together or apart','Just enough room for a single stem'], details:'Heights 4", 5.5", 7". Glass.', care:'Hand wash only.'},
  {id:'valentines-gift-set', name:'The Valentine\u2019s Gift Set', price:89, hol:'valentines', src:'tn', tags:['her','sets'], art:'giftbox', c:[C.coral,C.rose], bg:C.blush, colors:[['As shown',C.coral]], line:'Everything in one box. Just add the card.', love:['Ceramic heart candle, love notes and a paper heart garland','Packed by hand in our signature gift box','Handwritten note included'], details:'Box 12" × 9" × 4".', care:'See individual items.', safety:true, badge:'Gift Set'},
  {id:'paper-heart-garland', name:'Paper Heart Garland', price:28, hol:'valentines', src:'tn', tags:['hosts'], art:'garland', c:[C.rose,C.coral], bg:C.white, colors:[['Blush & Coral',C.rose]], line:'Turn any doorway into a little celebration.', love:['Thick textured paper hearts on cotton string','Reusable year after year','Arrives flat, hangs in a minute'], details:'Length 9 ft, 18 hearts.', care:'Store flat.'},
  {id:'felted-egg-set', name:'Felted Wool Egg Set', price:36, hol:'easter', src:'us', tags:['hosts'], art:'eggs', c:[C.sage,C.butter], bg:C.sageL, colors:[['Spring mix',C.sage]], line:'Made to be kept, not found once.', love:['Six soft wool eggs in spring colors','A gentle centerpiece for the Easter table','Pack away and bring back every year'], details:'Each egg about 2.4" tall. Wool felt.', care:'Spot clean.', isNew:true},
  {id:'rattan-basket', name:'Woven Rattan Basket', price:52, hol:'easter', src:'cn', tags:['hosts','her'], art:'basket', c:[C.wood,C.sage], bg:C.oat2, colors:[['Natural',C.wood]], line:'An Easter basket that stays out all year.', love:['Hand-woven natural rattan','Sturdy handle, soft linen liner','Doubles as a bread or plant basket'], details:'10" × 7" × 5" without handle.', care:'Dust with a dry brush.'},
  {id:'sage-linen-napkins', name:'Sage Linen Napkins, Set of 4', price:38, hol:'easter', src:'us', tags:['hosts'], art:'napkins', c:[C.sage,C.white], bg:C.white, colors:[['Sage',C.sage],['Butter',C.butter],['Blush',C.rose]], line:'For long lunches and second helpings.', love:['Stonewashed linen, relaxed and soft','Generous 18" size','Mix with our runner'], details:'18" × 18", set of 4. 100% linen.', care:'Machine wash cold.'},
  {id:'pressed-flower-frame', name:'Pressed Flower Frame', price:64, hol:'mothers', src:'cn', tags:['her'], art:'frame', c:[C.lilac,C.rose], bg:C.lilacL, colors:[['Lilac',C.lilac]], line:'Flowers that last as long as the thank you.', love:['Real pressed flowers between two glass panes','Solid oak frame, stands or hangs','Every piece is a little different'], details:'8" × 10". Oak, glass, dried flowers.', care:'Keep out of direct sun.'},
  {id:'lilac-soy-candle', name:'Lilac Soy Candle', price:34, hol:'mothers', src:'tn', tags:['her'], art:'candle', c:[C.lilac,C.butter], bg:C.lilacL, colors:[['Lilac',C.lilac]], line:'A quiet hour, just for her.', love:['Lilac and white tea','About 45 hours burn time','Reusable frosted vessel'], details:'3.3" × 3.8". Soy wax blend.', care:'Trim wick to 1/4" before each burn.', safety:true},
  {id:'confetti-garland', name:'Confetti Dot Party Garland', price:26, hol:'everyday', src:'tn', tags:['hosts'], art:'garland', c:[C.butter,C.coral], bg:C.butterL, colors:[['Confetti',C.butter]], line:'Instant party, zero balloons.', love:['Hand-strung paper dots in five colors','Birthdays, showers, small wins','Reusable and recyclable'], details:'Length 10 ft.', care:'Store flat.'},
  {id:'celebration-gift-set', name:'The Celebration Gift Set', price:79, hol:'everyday', src:'tn', tags:['her','him','sets'], art:'giftbox', c:[C.butter,C.coral], bg:C.butterL, colors:[['As shown',C.butter]], line:'For birthdays, promotions and "just because".', love:['Confetti garland, candle holders and a card','Packed by hand in our signature gift box','Handwritten note included'], details:'Box 12" × 9" × 4".', care:'See individual items.', badge:'Gift Set'},
  {id:'ceramic-ring-dish', name:'Ceramic Ring Dish', price:29, hol:'everyday', src:'cn', tags:['her'], art:'dish', c:[C.coral,C.blush], bg:C.oat2, colors:[['Coral',C.coral],['Sage',C.sage],['Lilac',C.lilac]], line:'A small home for the things that matter.', love:['Hand-glazed stoneware','Perfect for rings, keys or a tealight','Comes boxed and ready to give'], details:'4.5" diameter.', care:'Wipe clean.'},
  {id:'candle-holder-set', name:'Ceramic Candle Holder Set', price:32, hol:'everyday', src:'us', tags:['him','hosts'], art:'holders', c:[C.pine,C.butter], bg:C.sageL, colors:[['Pine',C.pine],['Oat',C.wood]], line:'Make any dinner feel like an occasion.', love:['Four matte ceramic holders','Fits standard taper candles','Mix and match heights'], details:'Heights 1.5"–3". Stoneware. Candles not included.', care:'Wipe clean.', isNew:true}
];
const GIFTWRAP = {id:'giftwrap', name:'Gift wrap + handwritten note', price:5};
const byId = id => id === 'giftwrap' ? GIFTWRAP : PRODUCTS.find(p => p.id === id);

/* ---------- dates ---------- */
const DAY = 864e5;
const startOfDay = d => { const x = new Date(d); x.setHours(0,0,0,0); return x; };
const TODAY = startOfDay(new Date());
const addDays = (d,n) => new Date(d.getFullYear(), d.getMonth(), d.getDate()+n);
const addBiz = (d,n) => { let x = new Date(d); while (n > 0) { x = addDays(x,1); if (x.getDay() % 6) n--; } return x; };
const fmt = d => d.toLocaleDateString('en-US',{month:'short', day:'numeric'});
function estimate(src, from = TODAY) {
  const s = SOURCES[src];
  const ship = addBiz(from, s.proc);
  let min = addDays(ship, s.min), max = addDays(ship, s.max);
  const cny = src === 'cn' && from <= CNY.end && max >= CNY.start;
  if (cny) { min = addDays(min, CNY.days); max = addDays(max, CNY.days); }
  return {min, max, cny};
}
function cutoff(src, hDate) {
  let last = null;
  for (let i = 0, d = TODAY; i < 240; i++, d = addDays(d,1)) {
    if (estimate(src, d).max < hDate) last = d; else if (last) break;
  }
  return last;
}
const daysUntil = d => Math.ceil((d - TODAY) / DAY);
function etaInfo(p) {
  const e = estimate(p.src);
  const h = HOLIDAYS[p.hol];
  const late = h.date && h.date > TODAY && e.max >= h.date;
  const text = p.src === 'cn' ? `Arrives ${fmt(e.min)} – ${fmt(e.max)}` : `Arrives by ${fmt(e.max)}`;
  return {e, late, text, holiday:h};
}

/* ---------- art ---------- */
const heart = (x,y,s,f) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 .9C-1.25 0-.62-.95 0-.38C.62-.95 1.25 0 0 .9Z" fill="${f}"/>`;
const flame = (x,y,s=1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0-22C9-10 9 0 0 4C-9 0-9-10 0-22Z" fill="${C.butter}"/><path d="M0-10C4-4 4 0 0 2C-4 0-4-4 0-10Z" fill="${C.coral}"/></g>`;
const shadow = (rx=120) => `<ellipse cx="200" cy="306" rx="${rx}" ry="12" fill="#2B2B2B" opacity=".07"/>`;
const shade = (hex, amt) => { const n = parseInt(hex.slice(1),16); const f = v => Math.max(0,Math.min(255, Math.round(v*(1+amt)))); return '#' + [n>>16,(n>>8)&255,n&255].map(f).map(v=>v.toString(16).padStart(2,'0')).join(''); };
const SHAPES = {
  candle:([a,b]) => `${shadow(115)}<rect x="125" y="175" width="100" height="130" rx="12" fill="${a}"/><ellipse cx="175" cy="178" rx="50" ry="10" fill="${shade(a,-.12)}"/><line x1="175" y1="178" x2="175" y2="160" stroke="${C.ink}" stroke-width="2"/>${flame(175,158)}<rect x="238" y="225" width="64" height="80" rx="9" fill="${b}"/><ellipse cx="270" cy="227" rx="32" ry="7" fill="${shade(b,-.12)}"/><line x1="270" y1="227" x2="270" y2="214" stroke="${C.ink}" stroke-width="2"/>${flame(270,212,.75)}${heart(175,245,16,C.white)}`,
  runner:([a,b]) => `<g transform="rotate(-14 200 200)"><rect x="140" y="20" width="120" height="360" fill="${a}"/>${[60,120,180,240,300].map(y=>`<line x1="140" y1="${y}" x2="260" y2="${y}" stroke="${b}" stroke-width="2" opacity=".5"/>`).join('')}${[...Array(12)].map((_,i)=>`<line x1="${145+i*10}" y1="380" x2="${145+i*10}" y2="396" stroke="${a}" stroke-width="2"/>`).join('')}</g>${heart(300,110,18,C.coral)}<circle cx="95" cy="290" r="26" fill="${C.white}" stroke="${C.wood}" stroke-width="5"/>`,
  cards:([a,b]) => `${shadow(110)}<g transform="rotate(-12 200 230)"><rect x="110" y="165" width="150" height="110" rx="4" fill="${b}"/></g><g transform="rotate(5 200 230)"><rect x="130" y="155" width="150" height="110" rx="4" fill="${C.paper}"/><path d="M130 155L205 215L280 155" fill="none" stroke="${C.oat}" stroke-width="2"/></g><g transform="rotate(14 230 220)"><rect x="160" y="140" width="120" height="150" rx="4" fill="${C.white}" stroke="${C.oat}"/>${heart(220,205,22,a)}<line x1="185" y1="250" x2="255" y2="250" stroke="${C.oat}" stroke-width="3"/><line x1="195" y1="262" x2="245" y2="262" stroke="${C.oat}" stroke-width="3"/></g>`,
  vases:([a,b]) => { const v=(x,w,h,f,o)=>`<path d="M${x-w*.32} 305Q${x-w} ${305-h*.45} ${x-w*.22} ${305-h}L${x+w*.22} ${305-h}Q${x+w} ${305-h*.45} ${x+w*.32} 305Z" fill="${f}" opacity="${o}"/><line x1="${x}" y1="${305-h}" x2="${x+6}" y2="${305-h-60}" stroke="${C.pine}" stroke-width="2.5"/><circle cx="${x+6}" cy="${305-h-64}" r="9" fill="${b}"/>`; return `${shadow(125)}${v(130,48,120,a,.85)}${v(205,56,165,b,.9)}${v(280,42,95,a,.6)}`; },
  giftbox:([a,b]) => `${shadow(120)}<rect x="115" y="195" width="170" height="110" fill="${a}"/><rect x="105" y="170" width="190" height="34" fill="${shade(a,-.1)}"/><rect x="190" y="170" width="20" height="135" fill="${b}"/><ellipse cx="180" cy="158" rx="24" ry="13" transform="rotate(-25 180 158)" fill="none" stroke="${b}" stroke-width="9"/><ellipse cx="220" cy="158" rx="24" ry="13" transform="rotate(25 220 158)" fill="none" stroke="${b}" stroke-width="9"/><rect x="230" y="240" width="40" height="26" rx="3" fill="${C.paper}"/><circle cx="240" cy="253" r="3" fill="${a}"/>`,
  garland:([a,b]) => { const pt=t=>[(1-t)**2*30+2*(1-t)*t*200+t*t*370,(1-t)**2*110+2*(1-t)*t*270+t*t*110]; let s=`<path d="M30 110Q200 270 370 110" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`; for(let i=1;i<10;i++){const [x,y]=pt(i/10); s+= i%2? heart(x,y+14,22,i%3?a:b) : `<circle cx="${x}" cy="${y+12}" r="12" fill="${b}"/>`;} return s+`<circle cx="30" cy="110" r="4" fill="${C.ink}"/><circle cx="370" cy="110" r="4" fill="${C.ink}"/>`; },
  eggs:([a,b]) => `${shadow(130)}${[[130,265,a],[200,250,b],[268,265,C.blush],[165,282,C.white],[238,284,a]].map(([x,y,f])=>`<ellipse cx="${x}" cy="${y-20}" rx="34" ry="44" fill="${f}" stroke="${shade(f,-.08)}" stroke-width="2"/>`).join('')}`,
  basket:([a,b]) => `${shadow(120)}<path d="M135 200Q200 60 265 200" fill="none" stroke="${C.woodD}" stroke-width="9"/><ellipse cx="160" cy="195" rx="22" ry="28" fill="${b}"/><ellipse cx="205" cy="190" rx="22" ry="28" fill="${C.butter}"/><ellipse cx="245" cy="196" rx="22" ry="28" fill="${C.blush}"/><path d="M110 200L290 200L270 305L130 305Z" fill="${a}"/>${[220,240,260,280].map(y=>`<line x1="${112+(y-200)*.2}" y1="${y}" x2="${288-(y-200)*.2}" y2="${y}" stroke="${C.woodD}" stroke-width="3"/>`).join('')}`,
  napkins:([a]) => `${shadow(130)}${[0,1,2].map(i=>`<rect x="${110+i*12}" y="${250-i*22}" width="180" height="40" rx="3" fill="${i===1?shade(a,.12):a}" stroke="${shade(a,-.1)}"/>`).join('')}<circle cx="290" cy="210" r="26" fill="none" stroke="${C.woodD}" stroke-width="7"/>`,
  frame:([a,b]) => `${shadow(110)}<rect x="120" y="85" width="160" height="215" fill="${C.paper}" stroke="${C.woodD}" stroke-width="12"/>${[[170,a],[200,b],[230,a]].map(([x,f],i)=>`<path d="M200 260Q${x} ${200-i*10} ${x} ${150+i*8}" fill="none" stroke="${C.pine}" stroke-width="2.5"/>${[0,72,144,216,288].map(r=>`<ellipse cx="${x}" cy="${142+i*8}" rx="5" ry="10" transform="rotate(${r} ${x} ${150+i*8})" fill="${f}"/>`).join('')}`).join('')}`,
  dish:([a,b]) => `${shadow(120)}<ellipse cx="200" cy="270" rx="110" ry="42" fill="${a}"/><ellipse cx="200" cy="262" rx="88" ry="28" fill="${b}"/><circle cx="185" cy="258" r="12" fill="none" stroke="${C.butter}" stroke-width="5"/><circle cx="185" cy="246" r="4" fill="${C.white}"/>`,
  holders:([a,b]) => `${shadow(130)}${[[115,60,a],[175,85,C.wood],[235,70,a],[290,50,C.wood]].map(([x,h,f],i)=>`<rect x="${x-20}" y="${305-h*.5}" width="40" height="${h*.5}" rx="6" fill="${f}"/><rect x="${x-5}" y="${305-h*.5-h-40}" width="10" height="${h+40}" fill="${[b,C.white,C.blush,b][i]}"/>${flame(x,305-h*.5-h-42,.6)}`).join('')}`
};
function art(p, view = 'main', label = '') {
  const shape = SHAPES[p.art](p.c);
  const aria = `role="img" aria-label="${label || p.name}"`;
  if (view === 'scene') {
    return `<svg viewBox="0 0 400 400" ${aria} preserveAspectRatio="xMidYMid slice"><rect width="400" height="400" fill="${C.oat}"/><rect y="290" width="400" height="110" fill="${C.wood}"/><rect y="290" width="400" height="6" fill="${C.woodD}" opacity=".5"/><path d="M50 290Q45 230 60 190" stroke="${C.pine}" stroke-width="2" fill="none"/><ellipse cx="62" cy="200" rx="7" ry="14" fill="${C.sage}" transform="rotate(20 62 200)"/><ellipse cx="50" cy="235" rx="7" ry="14" fill="${C.sage}" transform="rotate(-25 50 235)"/><g transform="translate(40 20) scale(.85)">${shape}</g></svg>`;
  }
  if (view === 'detail') {
    return `<svg viewBox="0 0 400 400" ${aria}><rect width="400" height="400" fill="${p.bg}"/><g transform="translate(-180 -230) scale(1.9)">${shape}</g></svg>`;
  }
  if (view === 'gift') {
    return `<svg viewBox="0 0 400 400" ${aria}><rect width="400" height="400" fill="${C.oat}"/>${SHAPES.giftbox([C.white, C.coral])}<text x="200" y="262" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="20" fill="${C.ink}">Hue &amp; Joy</text><circle cx="182" cy="280" r="3" fill="${C.rose}"/><circle cx="200" cy="277" r="3" fill="${C.coral}"/><circle cx="218" cy="280" r="3" fill="${C.sage}"/></svg>`;
  }
  return `<svg viewBox="0 0 400 400" ${aria}><rect width="400" height="400" fill="${p.bg}"/>${shape}</svg>`;
}
function heroArt() {
  const g = (t, s) => `<g transform="${t}">${s}</g>`;
  return `<svg viewBox="0 0 600 480" role="img" aria-label="A Valentine's table with a gift box, candles and bud vases" preserveAspectRatio="xMidYMid slice">
  <rect width="600" height="480" fill="${C.blush}"/><rect y="330" width="600" height="150" fill="${C.wood}"/><rect y="330" width="600" height="6" fill="${C.woodD}" opacity=".5"/>
  ${g('translate(100 -40) scale(1)', SHAPES.garland([C.rose, C.coral]))}
  ${g('translate(-40 40) scale(.95)', SHAPES.vases([C.coral, C.rose]))}
  ${g('translate(150 25) scale(1)', SHAPES.giftbox([C.coral, C.rose]))}
  ${g('translate(330 75) scale(.82)', SHAPES.candle([C.white, C.rose]))}
  </svg>`;
}
const disc = (shapeKey, c, bg, label) => `<svg viewBox="0 0 400 400" role="img" aria-label="${label}"><rect width="400" height="400" fill="${bg}"/><g transform="translate(20 10) scale(.9)">${SHAPES[shapeKey](c)}</g></svg>`;

/* ---------- cart ---------- */
const store = {
  get cart(){ try { return JSON.parse(localStorage.getItem('hj-cart')) || []; } catch { return []; } },
  set cart(v){ localStorage.setItem('hj-cart', JSON.stringify(v)); updateCount(); },
  get note(){ return localStorage.getItem('hj-note') || ''; },
  set note(v){ localStorage.setItem('hj-note', v); }
};
const FREE_SHIP = 59;
const money = n => '$' + (Number.isInteger(n) ? n : n.toFixed(2));
const esc = s => String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function addToCart(id, color, qty = 1) {
  const cart = store.cart;
  const hit = cart.find(l => l.id === id && l.color === color);
  if (hit) hit.qty += qty; else cart.push({id, color, qty});
  store.cart = cart;
}
function updateCount() {
  const n = store.cart.reduce((a,l) => a + l.qty, 0);
  const el = document.getElementById('cartCount');
  el.textContent = n; el.hidden = n === 0;
}
const subtotal = () => store.cart.reduce((a,l) => a + byId(l.id).price * l.qty, 0);

function renderDrawer() {
  const cart = store.cart;
  const sub = subtotal();
  const left = Math.max(0, FREE_SHIP - sub);
  const sources = new Set(cart.filter(l => l.id !== 'giftwrap').map(l => byId(l.id).src));
  const upsell = PRODUCTS.filter(p => p.price <= 30 && !cart.some(l => l.id === p.id)).sort((a,b) => a.price - b.price)[0];
  const lines = cart.map((l,i) => {
    const p = byId(l.id);
    const thumb = l.id === 'giftwrap' ? art(PRODUCTS[4], 'gift', 'Gift wrap') : art(p);
    const meta = l.id === 'giftwrap' ? 'Packed by hand in Tennessee' : `${esc(l.color)} · ${etaInfo(p).text}`;
    return `<div class="line"><div class="thumb">${thumb}</div><div><h4>${esc(p.name)}</h4><small>${meta}</small>
      <div class="mini-qty"><button data-act="qty" data-i="${i}" data-d="-1" aria-label="Decrease quantity">−</button><span>${l.qty}</span><button data-act="qty" data-i="${i}" data-d="1" aria-label="Increase quantity">+</button></div>
      <br><button class="remove" data-act="remove" data-i="${i}">Remove</button></div><div>${money(p.price * l.qty)}</div></div>`;
  }).join('');
  document.getElementById('drawer').innerHTML = `
    <div class="drawer-head"><h2>Your Cart${cart.length ? ` (${cart.reduce((a,l)=>a+l.qty,0)})` : ''}</h2><button class="icon-btn" data-act="close" aria-label="Close cart"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button></div>
    <div class="drawer-body">
      ${cart.length ? `
      <div class="ship-bar">${left ? `You're <b>${money(left)}</b> away from free shipping` : '<b>You\u2019ve unlocked free shipping.</b>'}<div class="track"><div class="fill" style="width:${Math.min(100, sub / FREE_SHIP * 100)}%"></div></div></div>
      ${lines}
      ${sources.size > 1 ? '<p class="split-note">Your items ship from different places and will arrive in separate packages.</p>' : ''}
      <div class="gift-toggle"><label class="giftwrap"><input type="checkbox" id="isGift" ${store.note ? 'checked' : ''}> <span>This is a gift — add a message (free)</span></label>
      <textarea id="giftNote" maxlength="200" placeholder="Your message, printed on our card" ${store.note ? '' : 'hidden'}>${esc(store.note)}</textarea></div>
      ${upsell ? `<div class="upsell"><div class="thumb">${art(upsell)}</div><div><b>Complete the gift</b><br>${esc(upsell.name)} · ${money(upsell.price)}</div><button data-act="upsell" data-id="${upsell.id}">Add</button></div>` : ''}
      ` : `<div class="empty"><p>Your cart is empty.</p><a href="#/collection/${SEASON}" class="btn" data-act="close">Shop ${HOLIDAYS[SEASON].name}</a></div>`}
    </div>
    ${cart.length ? `<div class="drawer-foot"><div class="subtotal"><span>Subtotal</span><span>${money(sub)}</span></div><div class="tax-note">Taxes calculated at checkout. ${left ? 'Shipping from $5.95.' : 'Free US shipping.'}</div>
      <button class="btn btn-block" data-act="checkout">Checkout</button>
      <div class="express"><span>Shop Pay</span><span>PayPal</span><span>Apple Pay</span></div></div>` : ''}`;
}
function openDrawer() {
  renderDrawer();
  const d = document.getElementById('drawer');
  d.classList.add('open'); d.setAttribute('aria-hidden','false');
  document.getElementById('overlay').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeAll() {
  const d = document.getElementById('drawer');
  d.classList.remove('open'); d.setAttribute('aria-hidden','true');
  document.getElementById('nav').classList.remove('open');
  document.body.classList.remove('menu-open');
  document.getElementById('menuBtn').setAttribute('aria-expanded','false');
  document.getElementById('overlay').hidden = true;
  document.body.style.overflow = '';
}
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- views ---------- */
function card(p) {
  const eta = etaInfo(p);
  const badge = p.badge || (p.src === 'tn' ? 'Ships from TN' : p.isNew ? 'New' : '');
  return `<a class="card" href="#/product/${p.id}">
    <div class="card-media">${badge ? `<span class="badge">${badge}</span>` : ''}${art(p)}<div class="alt">${art(p,'scene')}</div></div>
    <h3 class="card-title">${p.name}</h3><div class="card-price">${money(p.price)}</div>
    <div class="card-eta ${eta.late ? 'warn' : ''}">${eta.late ? `May arrive after ${eta.holiday.name}` : eta.text}</div></a>`;
}
function homeView() {
  const h = HOLIDAYS[SEASON];
  const favs = PRODUCTS.filter(p => p.hol === SEASON).sort((a,b) => (a.src === 'tn' ? 0 : 1) - (b.src === 'tn' ? 0 : 1));
  const set = byId('valentines-gift-set');
  return `
  <section class="hero">
    <div class="hero-art">${heroArt()}</div>
    <div class="hero-copy">
      <span class="countdown">${h.name} is in ${daysUntil(h.date)} days</span>
      <h1>For the few days that matter.</h1>
      <p>Design-led gifts and decor in colors that feel like a celebration. Thoughtfully chosen, packed by hand, delivered in time.</p>
      <a href="#/collection/${SEASON}" class="btn">Shop ${h.name}</a>
    </div>
  </section>
  <section class="trust" aria-label="Why shop with us"><ul><li>Ships from Tennessee</li><li>Gift-ready packaging</li><li>30-day easy returns</li><li>Delivery dates you can trust</li></ul></section>
  <section class="section"><div class="wrap">
    <p class="eyebrow">Find the right gift</p><h2>Shop by Recipient</h2>
    <div class="recipients">
      <a class="recipient" href="#/collection/all?f=her"><div class="disc">${disc('vases',[C.coral,C.rose],C.blush,'')}</div>For Her</a>
      <a class="recipient" href="#/collection/all?f=him"><div class="disc">${disc('holders',[C.pine,C.butter],C.sageL,'')}</div>For Him</a>
      <a class="recipient" href="#/collection/all?f=hosts"><div class="disc">${disc('napkins',[C.butter],C.butterL,'')}</div>For Hosts</a>
      <a class="recipient" href="#/collection/all?f=sets"><div class="disc">${disc('giftbox',[C.coral,C.rose],C.oat,'')}</div>Gift Sets</a>
    </div>
  </div></section>
  <section class="section" style="padding-top:0"><div class="wrap">
    <div class="section-head"><div><p class="eyebrow">${h.name}</p><h2>Valentine's Favorites</h2></div><a class="link" href="#/collection/${SEASON}">View all</a></div>
    <div class="grid">${favs.map(card).join('')}${PRODUCTS.filter(p=>p.hol==='everyday').slice(0,2).map(card).join('')}</div>
  </div></section>
  <section class="section" style="padding-top:0"><div class="wrap">
    <a class="banner" href="#/product/${set.id}" style="text-decoration:none">
      <div class="art">${art(set,'scene')}</div>
      <div class="copy"><p class="eyebrow">The Gift Sets</p><h2>Ready to give.<br>No wrapping required.</h2><p>Curated sets in our signature box, with a handwritten note from Tennessee.</p><span class="btn" style="align-self:flex-start">Shop Gift Sets</span></div>
    </a>
  </div></section>
  <section class="section" style="padding-top:20px"><div class="wrap story-short">
    <div class="art">${disc('cards',[C.coral,C.rose],C.butterL,'Love note cards')}</div>
    <div><p class="eyebrow">Our Story</p><blockquote>“Life is mostly ordinary days. We make the few that matter full of color.”</blockquote><p style="color:var(--muted)">Hue &amp; Joy is a small team choosing pieces we would be proud to give, and packing them by hand in Tennessee.</p><a href="#/story" class="link">Read our story</a></div>
  </div></section>
  <section class="section newsletter"><div class="wrap">
    <h2>Never miss the days that matter.</h2>
    <p>We'll send a gentle reminder before every holiday, plus free shipping on your first order.</p>
    <form class="nl-form" data-form="newsletter"><label class="skip" for="nlEmail">Email</label><input id="nlEmail" type="email" required placeholder="Your email"><button class="btn">Remind me</button></form>
  </div></section>`;
}

const FILTERS = [['all','All'],['her','For Her'],['him','For Him'],['hosts','For Hosts'],['sets','Gift Sets'],['u40','Under $40'],['u75','Under $75'],['tn','Ships from TN']];
const matchFilter = (p,f) => f === 'all' || (f === 'u40' ? p.price < 40 : f === 'u75' ? p.price < 75 : f === 'tn' ? p.src === 'tn' : p.tags.includes(f));
function collectionView(slug, q) {
  const h = HOLIDAYS[slug];
  const f = q.get('f') || 'all', sort = q.get('sort') || 'featured';
  let list = PRODUCTS.filter(p => (slug === 'all' || p.hol === slug) && matchFilter(p, f));
  if (sort === 'price-asc') list.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (sort === 'new') list.sort((a,b) => (b.isNew?1:0) - (a.isNew?1:0));
  let cut = '';
  if (h && h.date && h.date > TODAY) {
    const std = cutoff('us', h.date), tn = cutoff('tn', h.date);
    cut = `<div class="cutoff">Order by <b>${std ? fmt(std) : '—'}</b> (standard) · <b>${tn ? fmt(tn) : '—'}</b> (Ships from Tennessee)</div>`;
  }
  const title = h ? h.name : 'Shop All';
  const chipHref = v => `#/collection/${slug}?f=${v}${sort !== 'featured' ? '&sort=' + sort : ''}`;
  return `
  <section class="col-hero tinted" style="--tint:${h ? h.tint : C.oat}"><div class="wrap">
    ${h && h.date ? `<p class="eyebrow">${h.name} is in ${daysUntil(h.date)} days</p>` : '<p class="eyebrow">Hue &amp; Joy</p>'}
    <h1>${title}</h1><p>${h ? h.blurb : 'Every piece we carry, chosen for color, quality and the joy of giving.'}</p>${cut}
  </div></section>
  <div class="wrap">
    <div class="chips" role="group" aria-label="Filter">${FILTERS.map(([v,l]) => `<a class="chip" href="${chipHref(v)}" aria-pressed="${f === v}" style="text-decoration:none">${l}</a>`).join('')}</div>
    <div class="toolbar"><span>${list.length} product${list.length === 1 ? '' : 's'}</span>
      <label>Sort <select data-act="sort" data-slug="${slug}" data-f="${f}">${[['featured','Featured'],['new','New'],['price-asc','Price: low to high'],['price-desc','Price: high to low']].map(([v,l]) => `<option value="${v}" ${v === sort ? 'selected' : ''}>${l}</option>`).join('')}</select></label></div>
    ${list.length ? `<div class="grid">${list.map(card).join('')}</div>` : '<p class="empty">Nothing here yet. Try another filter.</p>'}
    <div class="section" style="padding-bottom:70px">
      <h2 style="font-size:1.5rem">Good to know</h2>
      <details><summary>Will it arrive in time?</summary><p>Every product shows an estimated delivery date before you buy. Items marked "Ships from TN" are packed in Tennessee and arrive fastest.</p></details>
      <details><summary>Can I add a gift message?</summary><p>Yes. Tick "This is a gift" in your cart and we'll print your message on our card. Hand-written notes are available on Tennessee-shipped items.</p></details>
      <details><summary>What if they don't love it?</summary><p>Returns are easy within 30 days of delivery.</p></details>
    </div>
  </div>`;
}

function productView(id) {
  const p = byId(id);
  if (!p || id === 'giftwrap') return notFound();
  const eta = etaInfo(p), h = eta.holiday, src = SOURCES[p.src];
  const related = PRODUCTS.filter(x => x.id !== p.id && (x.hol === p.hol || x.tags.some(t => p.tags.includes(t)))).slice(0,4);
  const views = [['main','Product'],['scene','In a room'],['detail','Detail'],['gift','Gift packaging']];
  return `
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a> / <a href="#/collection/${p.hol}">${h.name}</a> / ${p.name}</nav>
    <div class="pdp">
      <div>
        <div class="gallery-main" id="galleryMain">${art(p)}</div>
        <div class="thumbs">${views.map(([v,l],i) => `<button data-act="view" data-v="${v}" aria-label="${l}" aria-current="${i === 0}">${art(p, v, l)}</button>`).join('')}</div>
      </div>
      <div>
        <p class="eyebrow">${h.name}${p.tags.includes('her') ? ' · Gifts for Her' : p.tags.includes('hosts') ? ' · For Hosts' : ''}</p>
        <h1>${p.name}</h1>
        <div class="reviews-mini">New arrival · <a class="link" href="#reviews">Be the first to review</a></div>
        <div class="price">${money(p.price)}</div>
        <div class="installments">or 4 interest-free payments of ${money(Math.round(p.price / 4 * 100) / 100)} with Shop Pay</div>
        ${p.colors.length > 1 ? `<div class="opt-label">Color: <b id="colorName">${p.colors[0][0]}</b></div><div class="swatches">${p.colors.map(([n,hex],i) => `<button class="swatch" style="background:${hex}" data-act="color" data-n="${n}" aria-label="${n}" aria-pressed="${i === 0}"></button>`).join('')}</div>` : ''}
        <div class="opt-label">Quantity</div>
        <div class="qty"><button data-act="pqty" data-d="-1" aria-label="Decrease">−</button><span id="pqty">1</span><button data-act="pqty" data-d="1" aria-label="Increase">+</button></div>
        <div class="eta-box">
          <div class="row"><span class="dot ${eta.late ? 'warn' : ''}"></span><div><b>${eta.text}</b> if you order today<small>${src.label}${eta.e.cny ? ' · includes Lunar New Year studio closure' : ''}</small>${eta.late ? `<small style="color:var(--deep)">May arrive after ${h.name}. Need it sooner? Try items marked "Ships from TN".</small>` : ''}</div></div>
          ${p.src === 'tn' ? `<div class="row"><label class="giftwrap"><input type="checkbox" id="wrap"> <span><b>Add gift wrap + handwritten note (+$5)</b><small>Wrapped by hand in our signature paper</small></span></label></div>` : ''}
        </div>
        <button class="btn btn-block" data-act="add" data-id="${p.id}">Add to Cart</button>
        <button class="btn btn-block btn-shop" data-act="checkout">Buy with Shop Pay</button>
        <ul class="perks"><li>Free US shipping over $${FREE_SHIP}</li><li>30-day easy returns</li><li>Secure checkout</li></ul>
        <p class="gift-line">${p.line}</p>
        <ul class="love">${p.love.map(x => `<li>${x}</li>`).join('')}</ul>
        <details><summary>Details &amp; Dimensions</summary><p>${p.details}</p></details>
        <details><summary>Materials &amp; Care</summary><p>${p.care}</p></details>
        <details><summary>Shipping &amp; Delivery</summary><p>${src.label}. Processing ${src.proc} business days, then ${p.src === 'cn' ? `${src.min}–${src.max}` : `${src.min}–${src.max}`} days in transit. <a class="link" href="#/shipping">See holiday cutoffs</a></p></details>
        <details><summary>Returns</summary><p>Return within 30 days of delivery. Unused items in original packaging.</p></details>
        ${p.safety ? `<details><summary>Safety</summary><p>Never leave a burning candle unattended. Burn within sight, away from things that catch fire, children and pets. Burn no longer than 4 hours at a time.</p></details>` : ''}
      </div>
    </div>
    <section class="section" style="padding-top:20px"><h2>Complete the gift</h2><div class="grid">${related.map(card).join('')}</div></section>
    <section class="section" id="reviews" style="padding-top:0"><h2>Reviews</h2><div class="no-reviews">No reviews yet. Reviews will appear here after customers receive their orders.</div></section>
  </div>`;
}

function storyView() {
  return `
  <section class="story-hero"><p class="eyebrow">Our Story</p><h1>For the few days that matter.</h1><p>Why we started Hue &amp; Joy.</p></section>
  <div class="story-body">
    <p class="big">Life is mostly ordinary days. Work, errands, dishes, sleep. And that's fine.</p>
    <p>But every year there are a few days that ask for more. A birthday. The first warm Sunday of spring. The evening you finally say what you've been meaning to say. Those days deserve a little color.</p>
    <p>Hue &amp; Joy exists to make those days easier to get right. We choose pieces we would be proud to give, wrap them with care, and make sure they arrive when they're supposed to.</p>
    <div class="values">
      <div><h3>Chosen for color</h3><p>Calm, modern design with one bright note. Things that feel like a celebration without shouting.</p></div>
      <div><h3>Made to be given</h3><p>Every piece is checked against a sample we approved, then packed to arrive gift-ready.</p></div>
      <div><h3>On time, honestly</h3><p>We show a real delivery date before you buy, and tell you if something might arrive late.</p></div>
    </div>
    <h2>Packed by hand in Tennessee</h2>
    <p>Our favorite pieces ship from a small packing table in Tennessee, where each gift is wrapped and every handwritten note is written by a real person.</p>
    <p style="margin-top:30px"><a href="#/collection/${SEASON}" class="btn">Shop the season</a></p>
  </div>`;
}
function shippingView() {
  const rows = Object.entries(HOLIDAYS).filter(([,h]) => h.date && h.date > TODAY).map(([,h]) => {
    const c = s => { const d = cutoff(s, h.date); return d ? fmt(d) : 'Passed'; };
    return `<tr><td>${h.name} (${fmt(h.date)})</td><td>${c('tn')}</td><td>${c('us')}</td><td>${c('cn')}</td></tr>`;
  }).join('');
  return `<div class="page"><h1>Shipping &amp; Delivery</h1>
  <p>Every product page shows an estimated delivery date before you buy. Free US shipping on orders over $${FREE_SHIP}; otherwise from $5.95.</p>
  <h2>Holiday order-by dates</h2>
  <table class="table"><thead><tr><th>Holiday</th><th>Ships from TN</th><th>US warehouse</th><th>Partner studio</th></tr></thead><tbody>${rows}</tbody></table>
  <h2>Where your order ships from</h2>
  <table class="table"><thead><tr><th>Ships from</th><th>Processing</th><th>In transit</th></tr></thead><tbody>
  ${Object.entries(SOURCES).map(([k,s]) => `<tr><td>${{tn:'Tennessee',us:'US warehouse',cn:'Partner studio'}[k]}</td><td>${s.proc} business days</td><td>${s.min}–${s.max} days</td></tr>`).join('')}
  </tbody></table>
  <p>Orders with items from different places arrive in separate packages at no extra cost. We currently ship within the United States.</p></div>`;
}
const returnsView = () => `<div class="page"><h1>Returns</h1><p>If something isn't right, you can return unused items in their original packaging within 30 days of delivery.</p><h2>How to return</h2><ol><li>Email hello@hueandjoy.com with your order number.</li><li>We'll send a prepaid return label to our Tennessee address.</li><li>Refunds are issued to your original payment method within 5 business days of arrival.</li></ol><p>Damaged on arrival? Send us a photo within 7 days and we'll replace it right away.</p></div>`;
const faqView = () => `<div class="page"><h1>FAQ</h1>
  ${[['When will my order arrive?','Each product shows an estimated delivery date. See Shipping & Delivery for holiday order-by dates.'],['Can I send a gift directly to someone?','Yes. Enter their address at checkout and add a gift message in your cart. Prices are never included in the package.'],['Do you offer gift wrapping?','Tennessee-shipped items can be gift wrapped with a handwritten note for $5. Gift Sets come wrapped.'],['Do you ship outside the US?','Not yet. We hope to ship to Canada soon.'],['How do I contact you?','Email hello@hueandjoy.com. We reply within one business day.']].map(([q,a]) => `<details><summary>${q}</summary><p>${a.replace('&','&amp;')}</p></details>`).join('')}</div>`;
const contactView = () => `<div class="page"><h1>Contact</h1><p>We're a small team and read every message. Expect a reply within one business day (Mon–Fri, 9am–5pm Central).</p><p>Email: hello@hueandjoy.com</p>
  <form class="form" data-form="contact"><label class="skip" for="cName">Name</label><input id="cName" required placeholder="Name"><label class="skip" for="cEmail">Email</label><input id="cEmail" type="email" required placeholder="Email"><label class="skip" for="cMsg">Message</label><textarea id="cMsg" rows="5" required placeholder="How can we help?"></textarea><button class="btn">Send message</button></form></div>`;
const policyView = () => `<div class="page"><h1>Policies</h1><p>Privacy Policy and Terms of Service will be generated from Shopify's templates and reviewed before launch.</p></div>`;
const notFound = () => `<div class="page" style="text-align:center"><div style="max-width:220px;margin:0 auto 20px">${disc('garland',[C.rose,C.coral],C.white,'')}</div><h1>This page took a day off.</h1><p>Let's find you something nice instead.</p><a href="#/collection/${SEASON}" class="btn">Shop ${HOLIDAYS[SEASON].name}</a></div>`;

/* ---------- router ---------- */
const pstate = {qty:1, color:null};
function render() {
  const raw = location.hash.slice(1) || '/';
  const [path, qs] = raw.split('?');
  const q = new URLSearchParams(qs || '');
  const parts = path.split('/').filter(Boolean);
  let html, title = 'Hue & Joy — For the few days that matter';
  if (!parts.length) html = homeView();
  else if (parts[0] === 'collection' && (HOLIDAYS[parts[1]] || parts[1] === 'all')) { html = collectionView(parts[1], q); title = `${HOLIDAYS[parts[1]] ? HOLIDAYS[parts[1]].name : 'Shop All'} — Hue & Joy`; }
  else if (parts[0] === 'product') { const p = byId(parts[1]); pstate.qty = 1; pstate.color = p && p.colors ? p.colors[0][0] : null; html = productView(parts[1]); if (p) title = `${p.name} — Hue & Joy`; }
  else html = ({story:storyView, shipping:shippingView, returns:returnsView, faq:faqView, contact:contactView, policy:policyView}[parts[0]] || notFound)();
  const app = document.getElementById('app');
  app.innerHTML = html;
  document.title = title;
  closeAll();
  if (!q.has('f') && !q.has('sort')) window.scrollTo(0,0);
}

function announce() {
  const h = HOLIDAYS[SEASON];
  const d = cutoff('tn', h.date);
  document.getElementById('announce').innerHTML = d
    ? `Order by <b>${fmt(d)}</b> for ${h.name} delivery · Free US shipping over $${FREE_SHIP}`
    : `Free US shipping over $${FREE_SHIP}`;
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]');
  if (!t) return;
  const act = t.dataset.act;
  if (act === 'close') { closeAll(); return; }
  if (act === 'checkout') { closeAll(); document.getElementById('modal').hidden = false; document.getElementById('modalClose').focus(); return; }
  if (act === 'view') {
    const p = byId(location.hash.split('/')[2]);
    document.getElementById('galleryMain').innerHTML = art(p, t.dataset.v);
    document.querySelectorAll('.thumbs button').forEach(b => b.setAttribute('aria-current', b === t));
  }
  if (act === 'color') {
    pstate.color = t.dataset.n;
    document.getElementById('colorName').textContent = t.dataset.n;
    document.querySelectorAll('.swatch').forEach(b => b.setAttribute('aria-pressed', b === t));
  }
  if (act === 'pqty') { pstate.qty = Math.max(1, Math.min(10, pstate.qty + Number(t.dataset.d))); document.getElementById('pqty').textContent = pstate.qty; }
  if (act === 'add') {
    addToCart(t.dataset.id, pstate.color || 'Default', pstate.qty);
    const wrap = document.getElementById('wrap');
    if (wrap && wrap.checked) addToCart('giftwrap', 'Default', pstate.qty);
    openDrawer();
  }
  if (act === 'qty') { const cart = store.cart; const l = cart[t.dataset.i]; l.qty += Number(t.dataset.d); if (l.qty < 1) cart.splice(t.dataset.i, 1); store.cart = cart; renderDrawer(); }
  if (act === 'remove') { const cart = store.cart; cart.splice(t.dataset.i, 1); store.cart = cart; renderDrawer(); }
  if (act === 'upsell') { const p = byId(t.dataset.id); addToCart(p.id, p.colors[0][0], 1); renderDrawer(); }
});
document.addEventListener('change', e => {
  if (e.target.matches('[data-act="sort"]')) { const s = e.target; location.hash = `#/collection/${s.dataset.slug}?f=${s.dataset.f}&sort=${s.value}`; }
  if (e.target.id === 'isGift') { const n = document.getElementById('giftNote'); n.hidden = !e.target.checked; if (!e.target.checked) { store.note = ''; n.value = ''; } else n.focus(); }
});
document.addEventListener('input', e => { if (e.target.id === 'giftNote') store.note = e.target.value; });
document.addEventListener('submit', e => {
  const f = e.target.closest('[data-form]');
  if (!f) return;
  e.preventDefault();
  f.reset();
  toast(f.dataset.form === 'newsletter' ? "You're on the list. We'll remind you before every holiday." : 'Thanks! This is a demo, so the message was not sent.');
});
document.getElementById('cartBtn').addEventListener('click', openDrawer);
document.getElementById('overlay').addEventListener('click', closeAll);
document.getElementById('modalClose').addEventListener('click', () => { document.getElementById('modal').hidden = true; });
document.getElementById('menuBtn').addEventListener('click', e => {
  const nav = document.getElementById('nav');
  const open = !nav.classList.contains('open');
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  e.currentTarget.setAttribute('aria-expanded', open);
  document.getElementById('overlay').hidden = !open;
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeAll(); document.getElementById('modal').hidden = true; } });
window.addEventListener('hashchange', render);

announce(); updateCount(); render();
})();
