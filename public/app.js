(() => {
const C = {white:'#FAF7F2', oat:'#EDE6DA', oat2:'#F4EFE6', coral:'#E8664A', deep:'#B8452D', rose:'#E9A6B3', blush:'#F3D3D9', sage:'#B7C9A8', sageL:'#E3EBDD', butter:'#F2D98B', butterL:'#F8EDC8', lilac:'#C9B6D9', lilacL:'#E7DEEF', pine:'#2F5D50', ink:'#2B2B2B', wood:'#D9C2A3', woodD:'#C4A67F', paper:'#FFFDF9', pumpkin:'#D9822B', cranberry:'#A63A3A', gold:'#C9A45C', blue:'#7C93A8', cream:'#F3EBDD'};
const d = (y,m,day) => new Date(y, m-1, day);

/* ---------- holidays ---------- */
const HOLIDAYS = {
  halloween:{name:'Halloween', dates:[d(2026,10,31), d(2027,10,31)], tint:'#F5E2CC', blurb:'Moody candlelight, velvet pumpkins and a little mischief. Spooky, but make it beautiful.',
    hero:[['bunting',[C.ink,C.pumpkin],'translate(100 -40)'], ['tapers',[C.ink,C.wood],-30,1], ['pumpkins',[C.pumpkin,C.cream],140,1], ['ghost',[C.paper],330,.85]]},
  thanksgiving:{name:'Thanksgiving', dates:[d(2026,11,26), d(2027,11,25)], tint:'#F1E4D0', blurb:'A table worth gathering around, and a few small ways to say thank you.',
    hero:[['bunting',[C.pumpkin,C.gold],'translate(100 -40)'], ['pumpkins',[C.pumpkin,C.sage],-20,1], ['tapers',[C.cream,C.woodD],190,1], ['cards',[C.pumpkin,C.gold],330,.8]]},
  christmas:{name:'Christmas', dates:[d(2026,12,25), d(2027,12,25)], tint:'#E1EBE5', blurb:'Gifts and decor in calm greens and warm reds, chosen to be kept and brought out year after year.',
    hero:[['wreath',[C.pine,C.cranberry],'translate(340 -10) scale(.62)'], ['tree',[C.pine,C.sage],-40,1], ['giftbox',[C.cranberry,C.gold],150,.95], ['candle',[C.white,C.pine],350,.8]]},
  newyear:{name:"New Year's Eve", dates:[d(2026,12,31), d(2027,12,31)], tint:'#EEE7D3', blurb:'Gold, glow and good company. Everything you need to count down in style.',
    hero:[['confetti',[C.gold,C.ink],'translate(100 -40)'], ['tapers',[C.ink,C.gold],-30,1], ['giftbox',[C.ink,C.gold],160,.95], ['holders',[C.gold,C.cream],350,.8]]},
  valentines:{name:"Valentine's Day", dates:[d(2027,2,14), d(2028,2,14)], tint:C.blush, blurb:'Small, thoughtful things for the people who make ordinary days feel less ordinary.',
    hero:[['garland',[C.rose,C.coral],'translate(100 -40)'], ['vases',[C.coral,C.rose],-40,.95], ['giftbox',[C.coral,C.rose],150,1], ['candle',[C.white,C.rose],330,.82]]},
  easter:{name:'Easter', dates:[d(2027,3,28), d(2028,4,16)], tint:C.sageL, blurb:'Soft colors, natural textures and a table worth gathering around.',
    hero:[['bunting',[C.sage,C.butter],'translate(100 -40)'], ['basket',[C.wood,C.sage],-20,1], ['eggs',[C.sage,C.butter],200,.95], ['vases',[C.butter,C.sage],370,.6]]},
  mothers:{name:"Mother's Day", dates:[d(2027,5,9), d(2028,5,14)], tint:C.lilacL, blurb:'For the one who taught you that little things matter.',
    hero:[['garland',[C.lilac,C.rose],'translate(100 -40)'], ['vases',[C.lilac,C.rose],-40,.95], ['frame',[C.lilac,C.rose],170,.85], ['candle',[C.lilac,C.butter],350,.8]]},
  fathers:{name:"Father's Day", dates:[d(2027,6,20), d(2028,6,18)], tint:'#E1E7EC', blurb:'Useful, good-looking things for the man who says he doesn\u2019t need anything.',
    hero:[['bunting',[C.blue,C.wood],'translate(100 -40)'], ['candle',[C.blue,C.woodD],-30,1], ['dish',[C.blue,C.cream],170,1], ['holders',[C.blue,C.cream],360,.75]]},
  everyday:{name:'Everyday Celebrations', dates:[], tint:C.butterL, blurb:'Birthdays, dinners, small wins. Color for the days you decide to celebrate.',
    hero:[['confetti',[C.butter,C.coral],'translate(100 -40)'], ['holders',[C.pine,C.butter],-30,1], ['giftbox',[C.butter,C.coral],160,.95], ['vases',[C.coral,C.butter],370,.6]]}
};

const SOURCES = {
  tn:{label:'Ships from Tennessee', short:'Tennessee', proc:2, min:2, max:5, buffer:1},
  tnx:{label:'Express from Tennessee', short:'Tennessee Express', proc:1, min:1, max:2, buffer:1, fee:14},
  us:{label:'Ships from our US warehouse', short:'US warehouse', proc:2, min:3, max:7, buffer:2},
  cn:{label:'Ships from our partner studio', short:'Partner studio', proc:3, min:8, max:15, buffer:3}
};
const CNY = [{start:d(2027,1,25), end:d(2027,2,15), days:21}];
const PEAK = [[d(2026,11,23), d(2026,12,24)], [d(2027,11,22), d(2027,12,24)]];
const PEAK_DAYS = 2;
const EXPRESS_FEE = 14;

/* ---------- products ---------- */
const PRODUCTS = [
  {id:'velvet-pumpkin-trio', name:'Velvet Pumpkin Trio', price:46, hol:'halloween', src:'tn', tags:['hosts','her'], art:'pumpkins', c:[C.pumpkin,C.cream], bg:'#F5E2CC', colors:[['Harvest',C.pumpkin],['Moonlight',C.cream]], line:'Soft, plush and staying out until Thanksgiving.', love:['Three plush velvet pumpkins with real dried stems','Looks right from October through November','Packs flat-ish, stores easily'], details:'Diameters 4", 5", 6". Polyester velvet, dried stems.', care:'Spot clean. Keep dry.', isNew:true},
  {id:'black-taper-set', name:'Black Taper Candle Set', price:28, hol:'halloween', src:'tn', tags:['hosts','him'], art:'tapers', c:[C.ink,C.wood], bg:C.oat2, colors:[['Midnight',C.ink]], line:'Instant atmosphere for dinner on the 31st.', love:['Six dripless taper candles in matte black','About 8 hours each','Fits standard holders'], details:'10" tall, set of 6. Paraffin-soy blend.', care:'Trim wick before lighting.', safety:true},
  {id:'ceramic-ghost-lantern', name:'Ceramic Ghost Lantern', price:34, hol:'halloween', src:'us', tags:['her','hosts'], art:'ghost', c:[C.paper], bg:'#F5E2CC', colors:[['Matte white',C.paper]], line:'The friendliest ghost on the block.', love:['Matte stoneware with cut-out eyes','Glows with a tealight or LED candle','Cute enough to keep out all fall'], details:'6.5" tall. Stoneware. Tealight not included.', care:'Wipe clean.', safety:true},
  {id:'harvest-linen-runner', name:'Harvest Linen Table Runner', price:46, hol:'thanksgiving', src:'us', tags:['hosts'], art:'runner', c:[C.pumpkin,C.cream], bg:'#F1E4D0', colors:[['Rust',C.pumpkin],['Oat',C.wood]], line:'Set the table once, get compliments all night.', love:['Stonewashed linen in a warm rust tone','Hand-knotted fringe','Fits tables for 6–8'], details:'14" × 108". 100% linen.', care:'Machine wash cold.'},
  {id:'gratitude-place-cards', name:'Gratitude Place Cards, Set of 12', price:22, hol:'thanksgiving', src:'tn', tags:['hosts'], art:'cards', c:[C.pumpkin,C.gold], bg:'#F1E4D0', colors:[['Harvest',C.pumpkin]], line:'A name for every seat, and a thank you inside.', love:['Folded place cards with a gratitude prompt inside','Guests take them home','Thick textured paper'], details:'3.5" × 2.5" folded. FSC-certified paper.', care:'Keep dry.'},
  {id:'felt-ball-wreath', name:'Felt Ball Wreath', price:68, hol:'christmas', src:'us', tags:['hosts','her'], art:'wreath', c:[C.pine,C.cranberry], bg:'#E1EBE5', colors:[['Evergreen',C.pine],['Snow',C.cream]], line:'Hand-felted, and it never drops a needle.', love:['Over 100 hand-felted wool balls','Linen bow, ready to hang','Comes out every December for years'], details:'14" diameter. Wool felt, linen.', care:'Dust gently. Store in its box.', isNew:true},
  {id:'ceramic-tree-trio', name:'Ceramic Tree Trio', price:49, hol:'christmas', src:'tn', tags:['her','hosts'], art:'tree', c:[C.pine,C.sage], bg:'#E1EBE5', colors:[['Forest',C.pine],['Snow',C.cream]], line:'A tiny forest for the mantel.', love:['Three matte stoneware trees','Mix of glaze tones','Gift-boxed'], details:'Heights 5", 7", 9". Stoneware.', care:'Wipe clean.'},
  {id:'glass-ornament-set', name:'Hand-Blown Glass Ornament Set', price:54, hol:'christmas', src:'cn', tags:['her'], art:'ornaments', c:[C.cranberry,C.gold], bg:'#E1EBE5', colors:[['Cranberry & Gold',C.cranberry],['Frost',C.cream]], line:'Ornaments that become family heirlooms.', love:['Six mouth-blown glass ornaments','Linen hanging loops','Stored in a keepsake box'], details:'3" diameter, set of 6. Glass.', care:'Handle with care. Store in box.'},
  {id:'christmas-gift-set', name:'The Christmas Gift Set', price:95, hol:'christmas', src:'tn', tags:['her','him','sets'], art:'giftbox', c:[C.cranberry,C.gold], bg:'#E1EBE5', colors:[['As shown',C.cranberry]], line:'Christmas morning, already wrapped.', love:['Ceramic tree, a pine candle and a card','Packed by hand in our signature gift box','Handwritten note included'], details:'Box 12" × 9" × 4".', care:'See individual items.', safety:true, badge:'Gift Set'},
  {id:'gold-confetti-garland', name:'Gold Confetti Garland', price:26, hol:'newyear', src:'tn', tags:['hosts'], art:'confetti', c:[C.gold,C.ink], bg:'#EEE7D3', colors:[['Gold',C.gold]], line:'Midnight, but make it sparkle.', love:['Metallic and matte paper dots','10 ft of countdown-ready color','Reusable all year'], details:'Length 10 ft.', care:'Store flat.'},
  {id:'heart-candle-set', name:'Ceramic Heart Candle Set', price:48, hol:'valentines', src:'tn', tags:['her'], art:'candle', c:[C.rose,C.coral], bg:C.blush, colors:[['Blush',C.rose],['Coral',C.coral],['Oat',C.wood]], line:'For the friend who remembers every little thing.', love:['Two soy candles in hand-glazed ceramic cups','Soft notes of rose and cedar, about 30 hours each','Cups become little dishes once the candle is gone'], details:'Large cup 3.1" × 3.5", small cup 2.4" × 2.4". Soy wax blend, cotton wick, glazed stoneware.', care:'Trim wick to 1/4" before each burn.', safety:true, isNew:true},
  {id:'blush-linen-runner', name:'Blush Linen Table Runner', price:42, hol:'valentines', src:'us', tags:['hosts','her'], art:'runner', c:[C.rose,C.white], bg:C.oat2, colors:[['Blush',C.rose],['Oat',C.wood]], line:'Dinner at home, but make it a date.', love:['Stonewashed linen that gets softer every wash','Hand-knotted fringe ends','Fits tables for 4–6'], details:'14" × 90". 100% linen.', care:'Machine wash cold, tumble dry low.'},
  {id:'love-notes-cards', name:'Little Love Notes Card Set', price:24, hol:'valentines', src:'tn', tags:['her','him'], art:'cards', c:[C.coral,C.rose], bg:C.butterL, colors:[['Mixed',C.coral]], line:'Twelve reasons, one envelope at a time.', love:['12 cards with blush envelopes','Prompts on the back for when words are hard','Tucks into any gift'], details:'Cards 4.25" × 5.5". FSC-certified paper.', care:'Keep dry.'},
  {id:'glass-bud-vases', name:'Coral Glass Bud Vase Trio', price:56, hol:'valentines', src:'cn', tags:['her','hosts'], art:'vases', c:[C.coral,C.rose], bg:C.oat2, colors:[['Coral',C.coral],['Rose',C.rose],['Sage',C.sage]], line:'Three small vases, endless little bouquets.', love:['Mouth-blown tinted glass','Three heights that look good together or apart','Just enough room for a single stem'], details:'Heights 4", 5.5", 7". Glass.', care:'Hand wash only.'},
  {id:'valentines-gift-set', name:'The Valentine\u2019s Gift Set', price:89, hol:'valentines', src:'tn', tags:['her','sets'], art:'giftbox', c:[C.coral,C.rose], bg:C.blush, colors:[['As shown',C.coral]], line:'Everything in one box. Just add the card.', love:['Ceramic heart candle, love notes and a paper heart garland','Packed by hand in our signature gift box','Handwritten note included'], details:'Box 12" × 9" × 4".', care:'See individual items.', safety:true, badge:'Gift Set'},
  {id:'paper-heart-garland', name:'Paper Heart Garland', price:28, hol:'valentines', src:'tn', tags:['hosts'], art:'garland', c:[C.rose,C.coral], bg:C.white, colors:[['Blush & Coral',C.rose]], line:'Turn any doorway into a little celebration.', love:['Thick textured paper hearts on cotton string','Reusable year after year','Arrives flat, hangs in a minute'], details:'Length 9 ft, 18 hearts.', care:'Store flat.'},
  {id:'felted-egg-set', name:'Felted Wool Egg Set', price:36, hol:'easter', src:'us', tags:['hosts'], art:'eggs', c:[C.sage,C.butter], bg:C.sageL, colors:[['Spring mix',C.sage]], line:'Made to be kept, not found once.', love:['Six soft wool eggs in spring colors','A gentle centerpiece for the Easter table','Pack away and bring back every year'], details:'Each egg about 2.4" tall. Wool felt.', care:'Spot clean.'},
  {id:'rattan-basket', name:'Woven Rattan Basket', price:52, hol:'easter', src:'cn', tags:['hosts','her'], art:'basket', c:[C.wood,C.sage], bg:C.oat2, colors:[['Natural',C.wood]], line:'An Easter basket that stays out all year.', love:['Hand-woven natural rattan','Sturdy handle, soft linen liner','Doubles as a bread or plant basket'], details:'10" × 7" × 5" without handle.', care:'Dust with a dry brush.'},
  {id:'sage-linen-napkins', name:'Sage Linen Napkins, Set of 4', price:38, hol:'easter', src:'us', tags:['hosts'], art:'napkins', c:[C.sage,C.white], bg:C.white, colors:[['Sage',C.sage],['Butter',C.butter],['Blush',C.rose]], line:'For long lunches and second helpings.', love:['Stonewashed linen, relaxed and soft','Generous 18" size','Mix with our runner'], details:'18" × 18", set of 4. 100% linen.', care:'Machine wash cold.'},
  {id:'pressed-flower-frame', name:'Pressed Flower Frame', price:64, hol:'mothers', src:'cn', tags:['her'], art:'frame', c:[C.lilac,C.rose], bg:C.lilacL, colors:[['Lilac',C.lilac]], line:'Flowers that last as long as the thank you.', love:['Real pressed flowers between two glass panes','Solid oak frame, stands or hangs','Every piece is a little different'], details:'8" × 10". Oak, glass, dried flowers.', care:'Keep out of direct sun.'},
  {id:'lilac-soy-candle', name:'Lilac Soy Candle', price:34, hol:'mothers', src:'tn', tags:['her'], art:'candle', c:[C.lilac,C.butter], bg:C.lilacL, colors:[['Lilac',C.lilac]], line:'A quiet hour, just for her.', love:['Lilac and white tea','About 45 hours burn time','Reusable frosted vessel'], details:'3.3" × 3.8". Soy wax blend.', care:'Trim wick to 1/4" before each burn.', safety:true},
  {id:'stoneware-valet-tray', name:'Stoneware Valet Tray', price:38, hol:'fathers', src:'cn', tags:['him'], art:'dish', c:[C.blue,C.cream], bg:'#E1E7EC', colors:[['Slate blue',C.blue],['Oat',C.wood]], line:'Keys, watch, wallet. Finally, a home for them.', love:['Hand-glazed stoneware','Weighty and calm on a dresser','Gift-boxed'], details:'7" diameter. Stoneware.', care:'Wipe clean.'},
  {id:'cedar-smoke-candle', name:'Cedar & Smoke Candle', price:36, hol:'fathers', src:'tn', tags:['him'], art:'candle', c:[C.blue,C.woodD], bg:'#E1E7EC', colors:[['Slate',C.blue]], line:'Smells like a cabin weekend.', love:['Cedarwood, smoke and black pepper','About 45 hours burn time','Matte ceramic vessel'], details:'3.3" × 3.8". Soy wax blend.', care:'Trim wick to 1/4" before each burn.', safety:true},
  {id:'confetti-garland', name:'Confetti Dot Party Garland', price:26, hol:'everyday', src:'tn', tags:['hosts'], art:'confetti', c:[C.butter,C.coral], bg:C.butterL, colors:[['Confetti',C.butter]], line:'Instant party, zero balloons.', love:['Hand-strung paper dots in five colors','Birthdays, showers, small wins','Reusable and recyclable'], details:'Length 10 ft.', care:'Store flat.'},
  {id:'celebration-gift-set', name:'The Celebration Gift Set', price:79, hol:'everyday', src:'tn', tags:['her','him','sets'], art:'giftbox', c:[C.butter,C.coral], bg:C.butterL, colors:[['As shown',C.butter]], line:'For birthdays, promotions and "just because".', love:['Confetti garland, candle holders and a card','Packed by hand in our signature gift box','Handwritten note included'], details:'Box 12" × 9" × 4".', care:'See individual items.', badge:'Gift Set'},
  {id:'ceramic-ring-dish', name:'Ceramic Ring Dish', price:29, hol:'everyday', src:'cn', tags:['her'], art:'dish', c:[C.coral,C.blush], bg:C.oat2, colors:[['Coral',C.coral],['Sage',C.sage],['Lilac',C.lilac]], line:'A small home for the things that matter.', love:['Hand-glazed stoneware','Perfect for rings, keys or a tealight','Comes boxed and ready to give'], details:'4.5" diameter.', care:'Wipe clean.'},
  {id:'candle-holder-set', name:'Ceramic Candle Holder Set', price:32, hol:'everyday', src:'us', tags:['him','hosts'], art:'holders', c:[C.pine,C.butter], bg:C.sageL, colors:[['Pine',C.pine],['Oat',C.wood]], line:'Make any dinner feel like an occasion.', love:['Four matte ceramic holders','Fits standard taper candles','Mix and match heights'], details:'Heights 1.5"–3". Stoneware. Candles not included.', care:'Wipe clean.'}
];
const GIFTWRAP = {id:'giftwrap', name:'Gift wrap + handwritten note', price:5};
const byId = id => id === 'giftwrap' ? GIFTWRAP : PRODUCTS.find(p => p.id === id);

/* ---------- dates ---------- */
const DAY = 864e5;
const TODAY = (() => { const x = new Date(); x.setHours(0,0,0,0); return x; })();
const addDays = (x,n) => new Date(x.getFullYear(), x.getMonth(), x.getDate()+n);
const addBiz = (x,n) => { let y = new Date(x); while (n > 0) { y = addDays(y,1); if (y.getDay() % 6) n--; } return y; };
const fmt = x => x.toLocaleDateString('en-US',{month:'short', day:'numeric'});
const daysUntil = x => Math.ceil((x - TODAY) / DAY);
const hDate = k => HOLIDAYS[k].dates.find(x => x >= TODAY) || null;
const inPeak = x => PEAK.some(([a,b]) => x >= a && x <= b);
function estimate(src, from = TODAY) {
  const s = SOURCES[src];
  const ship = addBiz(from, s.proc);
  const peak = inPeak(ship) ? PEAK_DAYS : 0;
  let min = addDays(ship, s.min), max = addDays(ship, s.max + peak);
  const cny = src === 'cn' && CNY.find(c => from <= c.end && max >= c.start);
  if (cny) { min = addDays(min, cny.days); max = addDays(max, cny.days); }
  return {min, max, cny:!!cny, peak:!!peak};
}
const safeBy = (src, from, h) => addDays(estimate(src, from).max, SOURCES[src].buffer) < h;
function cutoff(src, h) {
  let last = null;
  for (let i = 0, x = TODAY; i < 400 && x < h; i++, x = addDays(x,1)) { if (safeBy(src, x, h)) last = x; else if (last) break; }
  return last;
}
function etaInfo(p) {
  const e = estimate(p.src);
  const h = HOLIDAYS[p.hol], hd = hDate(p.hol);
  const cut = hd ? cutoff(p.src, hd) : null;
  const xcut = hd && p.src === 'tn' ? cutoff('tnx', hd) : null;
  const late = !!hd && !cut;
  const text = p.src === 'cn' ? `Arrives ${fmt(e.min)} – ${fmt(e.max)}` : `Arrives by ${fmt(e.max)}`;
  return {e, late, text, h, hd, cut, xcut};
}
const ORDERED = () => Object.keys(HOLIDAYS).filter(k => hDate(k)).sort((a,b) => hDate(a) - hDate(b));
function season() {
  const pick = sessionStorage.getItem('hj-season');
  if (pick && HOLIDAYS[pick]) return pick;
  return ORDERED().find(k => cutoff('tn', hDate(k))) || 'everyday';
}

/* ---------- logo ---------- */
function mark(size = 40, dark = false) {
  const blend = dark ? '' : 'style="mix-blend-mode:multiply"';
  return `<svg class="mark" viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true"><g style="isolation:isolate"><circle cx="24" cy="25" r="16" fill="${C.rose}" ${blend}/><circle cx="40" cy="25" r="16" fill="${C.coral}" ${blend} ${dark ? 'opacity=".9"' : ''}/><circle cx="32" cy="39" r="16" fill="${C.butter}" ${blend} ${dark ? 'opacity=".85"' : ''}/></g></svg>`;
}
const wordmark = () => `<span class="wm">Hue <em>&amp;</em> Joy</span>`;
function lockup(kind = 'h', dark = false) {
  if (kind === 'stack') return `<div class="lockup-stack ${dark ? 'dark' : ''}">${mark(96, dark)}<div class="wm-big">Hue <em>&amp;</em> Joy</div><div class="tagline">For the few days that matter</div></div>`;
  return `<div class="lockup ${dark ? 'dark' : ''}">${mark(72, dark)}<div><div class="wm-big">Hue <em>&amp;</em> Joy</div><div class="tagline">For the few days that matter</div></div></div>`;
}

/* ---------- art ---------- */
const heart = (x,y,s,f) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 .9C-1.25 0-.62-.95 0-.38C.62-.95 1.25 0 0 .9Z" fill="${f}"/>`;
const flame = (x,y,s=1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0-22C9-10 9 0 0 4C-9 0-9-10 0-22Z" fill="${C.butter}"/><path d="M0-10C4-4 4 0 0 2C-4 0-4-4 0-10Z" fill="${C.coral}"/></g>`;
const shadow = (rx=120) => `<ellipse cx="200" cy="306" rx="${rx}" ry="12" fill="#2B2B2B" opacity=".07"/>`;
const shade = (hex, amt) => { const n = parseInt(hex.slice(1),16); const f = v => Math.max(0,Math.min(255, Math.round(v*(1+amt)))); return '#' + [n>>16,(n>>8)&255,n&255].map(f).map(v=>v.toString(16).padStart(2,'0')).join(''); };
const curve = t => [(1-t)**2*30+2*(1-t)*t*200+t*t*370, (1-t)**2*110+2*(1-t)*t*270+t*t*110];
const string = `<path d="M30 110Q200 270 370 110" fill="none" stroke="${C.ink}" stroke-width="1.5"/><circle cx="30" cy="110" r="4" fill="${C.ink}"/><circle cx="370" cy="110" r="4" fill="${C.ink}"/>`;
const pk = (x,ry,rx,f) => { const y = 305-ry; return `<ellipse cx="${x-rx*.42}" cy="${y}" rx="${rx*.58}" ry="${ry}" fill="${shade(f,-.07)}"/><ellipse cx="${x+rx*.42}" cy="${y}" rx="${rx*.58}" ry="${ry}" fill="${shade(f,-.07)}"/><ellipse cx="${x}" cy="${y}" rx="${rx*.55}" ry="${ry*1.02}" fill="${f}"/><path d="M${x} ${y-ry+3}q-2 -16 9 -22" stroke="${C.woodD}" stroke-width="5" fill="none" stroke-linecap="round"/>`; };
const SHAPES = {
  candle:([a,b]) => `${shadow(115)}<rect x="125" y="175" width="100" height="130" rx="12" fill="${a}"/><ellipse cx="175" cy="178" rx="50" ry="10" fill="${shade(a,-.12)}"/><line x1="175" y1="178" x2="175" y2="160" stroke="${C.ink}" stroke-width="2"/>${flame(175,158)}<rect x="238" y="225" width="64" height="80" rx="9" fill="${b}"/><ellipse cx="270" cy="227" rx="32" ry="7" fill="${shade(b,-.12)}"/><line x1="270" y1="227" x2="270" y2="214" stroke="${C.ink}" stroke-width="2"/>${flame(270,212,.75)}<circle cx="175" cy="245" r="9" fill="${C.white}" opacity=".85"/>`,
  runner:([a,b]) => `<g transform="rotate(-14 200 200)"><rect x="140" y="20" width="120" height="360" fill="${a}"/>${[60,120,180,240,300].map(y=>`<line x1="140" y1="${y}" x2="260" y2="${y}" stroke="${b}" stroke-width="2" opacity=".5"/>`).join('')}${[...Array(12)].map((_,i)=>`<line x1="${145+i*10}" y1="380" x2="${145+i*10}" y2="396" stroke="${a}" stroke-width="2"/>`).join('')}</g><circle cx="300" cy="110" r="22" fill="${C.coral}" opacity=".8"/><circle cx="95" cy="290" r="26" fill="${C.white}" stroke="${C.wood}" stroke-width="5"/>`,
  cards:([a,b]) => `${shadow(110)}<g transform="rotate(-12 200 230)"><rect x="110" y="165" width="150" height="110" rx="4" fill="${b}"/></g><g transform="rotate(5 200 230)"><rect x="130" y="155" width="150" height="110" rx="4" fill="${C.paper}"/><path d="M130 155L205 215L280 155" fill="none" stroke="${C.oat}" stroke-width="2"/></g><g transform="rotate(14 230 220)"><rect x="160" y="140" width="120" height="150" rx="4" fill="${C.white}" stroke="${C.oat}"/>${heart(220,205,22,a)}<line x1="185" y1="250" x2="255" y2="250" stroke="${C.oat}" stroke-width="3"/><line x1="195" y1="262" x2="245" y2="262" stroke="${C.oat}" stroke-width="3"/></g>`,
  vases:([a,b]) => { const v=(x,w,h,f,o)=>`<path d="M${x-w*.32} 305Q${x-w} ${305-h*.45} ${x-w*.22} ${305-h}L${x+w*.22} ${305-h}Q${x+w} ${305-h*.45} ${x+w*.32} 305Z" fill="${f}" opacity="${o}"/><line x1="${x}" y1="${305-h}" x2="${x+6}" y2="${305-h-60}" stroke="${C.pine}" stroke-width="2.5"/><circle cx="${x+6}" cy="${305-h-64}" r="9" fill="${b}"/>`; return `${shadow(125)}${v(130,48,120,a,.85)}${v(205,56,165,b,.9)}${v(280,42,95,a,.6)}`; },
  giftbox:([a,b]) => `${shadow(120)}<rect x="115" y="195" width="170" height="110" fill="${a}"/><rect x="105" y="170" width="190" height="34" fill="${shade(a,-.1)}"/><rect x="190" y="170" width="20" height="135" fill="${b}"/><ellipse cx="180" cy="158" rx="24" ry="13" transform="rotate(-25 180 158)" fill="none" stroke="${b}" stroke-width="9"/><ellipse cx="220" cy="158" rx="24" ry="13" transform="rotate(25 220 158)" fill="none" stroke="${b}" stroke-width="9"/><rect x="230" y="240" width="40" height="26" rx="3" fill="${C.paper}"/><circle cx="240" cy="253" r="3" fill="${a}"/>`,
  garland:([a,b]) => { let s = string; for (let i=1;i<10;i++){ const [x,y]=curve(i/10); s += i%2 ? heart(x,y+14,22,i%3?a:b) : `<circle cx="${x}" cy="${y+12}" r="12" fill="${b}"/>`; } return s; },
  confetti:([a,b]) => { let s = string; const cs=[a,b,C.coral,C.rose,C.sage]; for (let i=1;i<14;i++){ const [x,y]=curve(i/14); s += `<circle cx="${x}" cy="${y+13}" r="${i%2?13:9}" fill="${cs[i%5]}"/>`; } return s; },
  bunting:([a,b]) => { let s = string; for (let i=1;i<10;i++){ const [x,y]=curve(i/10); s += `<path d="M${x-17} ${y-2}L${x+17} ${y-2}L${x} ${y+38}Z" fill="${i%2?a:b}"/>`; } return s; },
  eggs:([a,b]) => `${shadow(130)}${[[130,265,a],[200,250,b],[268,265,C.blush],[165,282,C.white],[238,284,a]].map(([x,y,f])=>`<ellipse cx="${x}" cy="${y-20}" rx="34" ry="44" fill="${f}" stroke="${shade(f,-.08)}" stroke-width="2"/>`).join('')}`,
  basket:([a,b]) => `${shadow(120)}<path d="M135 200Q200 60 265 200" fill="none" stroke="${C.woodD}" stroke-width="9"/><ellipse cx="160" cy="195" rx="22" ry="28" fill="${b}"/><ellipse cx="205" cy="190" rx="22" ry="28" fill="${C.butter}"/><ellipse cx="245" cy="196" rx="22" ry="28" fill="${C.blush}"/><path d="M110 200L290 200L270 305L130 305Z" fill="${a}"/>${[220,240,260,280].map(y=>`<line x1="${112+(y-200)*.2}" y1="${y}" x2="${288-(y-200)*.2}" y2="${y}" stroke="${C.woodD}" stroke-width="3"/>`).join('')}`,
  napkins:([a]) => `${shadow(130)}${[0,1,2].map(i=>`<rect x="${110+i*12}" y="${250-i*22}" width="180" height="40" rx="3" fill="${i===1?shade(a,.12):a}" stroke="${shade(a,-.1)}"/>`).join('')}<circle cx="290" cy="210" r="26" fill="none" stroke="${C.woodD}" stroke-width="7"/>`,
  frame:([a,b]) => `${shadow(110)}<rect x="120" y="85" width="160" height="215" fill="${C.paper}" stroke="${C.woodD}" stroke-width="12"/>${[[170,a],[200,b],[230,a]].map(([x,f],i)=>`<path d="M200 260Q${x} ${200-i*10} ${x} ${150+i*8}" fill="none" stroke="${C.pine}" stroke-width="2.5"/>${[0,72,144,216,288].map(r=>`<ellipse cx="${x}" cy="${142+i*8}" rx="5" ry="10" transform="rotate(${r} ${x} ${150+i*8})" fill="${f}"/>`).join('')}`).join('')}`,
  dish:([a,b]) => `${shadow(120)}<ellipse cx="200" cy="270" rx="110" ry="42" fill="${a}"/><ellipse cx="200" cy="262" rx="88" ry="28" fill="${b}"/><circle cx="185" cy="258" r="12" fill="none" stroke="${C.gold}" stroke-width="5"/><rect x="215" y="248" width="34" height="14" rx="3" fill="${C.woodD}"/>`,
  holders:([a,b]) => `${shadow(130)}${[[115,60,a],[175,85,C.wood],[235,70,a],[290,50,C.wood]].map(([x,h,f],i)=>`<rect x="${x-20}" y="${305-h*.5}" width="40" height="${h*.5}" rx="6" fill="${f}"/><rect x="${x-5}" y="${305-h*.5-h-40}" width="10" height="${h+40}" fill="${[b,C.white,C.blush,b][i]}"/>${flame(x,305-h*.5-h-42,.6)}`).join('')}`,
  tapers:([a,b]) => `${shadow(120)}${[[140,150],[200,190],[260,130]].map(([x,h])=>`<rect x="${x-24}" y="287" width="48" height="18" rx="8" fill="${b}"/><rect x="${x-13}" y="276" width="26" height="13" rx="4" fill="${shade(b,-.12)}"/><rect x="${x-6}" y="${276-h}" width="12" height="${h}" rx="3" fill="${a}"/>${flame(x,274-h,.7)}`).join('')}`,
  pumpkins:([a,b]) => `${shadow(135)}${pk(140,46,120,a)}${pk(262,34,92,b)}${pk(205,24,66,shade(a,.18))}`,
  ghost:([a]) => `${shadow(85)}<path d="M150 305V200a50 50 0 0 1 100 0V305l-17-13-16 13-17-13-17 13-16-13z" fill="${a}" stroke="${shade(a,-.1)}" stroke-width="2"/><ellipse cx="183" cy="212" rx="7" ry="10" fill="${C.ink}"/><ellipse cx="217" cy="212" rx="7" ry="10" fill="${C.ink}"/><ellipse cx="200" cy="262" rx="18" ry="12" fill="${C.butter}" opacity=".85"/><path d="M262 305V262a20 20 0 0 1 40 0V305l-7-6-6 6-7-6-7 6-6-6z" fill="${a}" stroke="${shade(a,-.1)}" stroke-width="2"/><circle cx="276" cy="265" r="3" fill="${C.ink}"/><circle cx="289" cy="265" r="3" fill="${C.ink}"/>`,
  ornaments:([a,b]) => [[120,170,40,a],[205,225,50,b],[290,150,36,a],[160,300,28,C.cream],[262,290,30,b]].map(([x,y,r,f])=>`<line x1="${x}" y1="0" x2="${x}" y2="${y-r-10}" stroke="${C.ink}" stroke-width="1.2"/><rect x="${x-7}" y="${y-r-10}" width="14" height="11" rx="2" fill="${C.gold}"/><circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/><path d="M${x-r*.55} ${y-r*.3}a${r*.7} ${r*.7} 0 0 1 ${r*.5} -${r*.45}" stroke="#fff" stroke-width="4" opacity=".4" fill="none" stroke-linecap="round"/>`).join(''),
  wreath:([a,b]) => { let s = `<line x1="200" y1="0" x2="200" y2="95" stroke="${C.ink}" stroke-width="1.5"/>`; const cs=[a, shade(a,.35), C.cream, a, C.sage]; for (let i=0;i<26;i++){ const t=i/26*Math.PI*2; s += `<circle cx="${200+95*Math.cos(t)}" cy="${195+95*Math.sin(t)}" r="18" fill="${cs[i%5]}"/>`; } return s + `<path d="M200 292l-28 40M200 292l28 40" stroke="${b}" stroke-width="9" stroke-linecap="round"/><ellipse cx="180" cy="290" rx="22" ry="12" transform="rotate(-20 180 290)" fill="none" stroke="${b}" stroke-width="8"/><ellipse cx="220" cy="290" rx="22" ry="12" transform="rotate(20 220 290)" fill="none" stroke="${b}" stroke-width="8"/>`; },
  tree:([a,b]) => `${shadow(130)}${[[135,150,96,a],[215,205,118,shade(a,.28)],[292,118,74,b]].map(([x,h,w,f])=>`<path d="M${x} ${305-h}Q${x+w*.18} ${305-h*.5} ${x+w/2} 305H${x-w/2}Q${x-w*.18} ${305-h*.5} ${x} ${305-h}Z" fill="${f}"/>`).join('')}<circle cx="215" cy="96" r="6" fill="${C.gold}"/>`
};
function art(p, view = 'main', label = '') {
  const shape = SHAPES[p.art](p.c);
  const aria = `role="img" aria-label="${label || p.name}"`;
  if (view === 'scene') return `<svg viewBox="0 0 400 400" ${aria} preserveAspectRatio="xMidYMid slice"><rect width="400" height="400" fill="${C.oat}"/><rect y="290" width="400" height="110" fill="${C.wood}"/><rect y="290" width="400" height="6" fill="${C.woodD}" opacity=".5"/><path d="M50 290Q45 230 60 190" stroke="${C.pine}" stroke-width="2" fill="none"/><ellipse cx="62" cy="200" rx="7" ry="14" fill="${C.sage}" transform="rotate(20 62 200)"/><ellipse cx="50" cy="235" rx="7" ry="14" fill="${C.sage}" transform="rotate(-25 50 235)"/><g transform="translate(40 20) scale(.85)">${shape}</g></svg>`;
  if (view === 'detail') return `<svg viewBox="0 0 400 400" ${aria}><rect width="400" height="400" fill="${p.bg}"/><g transform="translate(-180 -230) scale(1.9)">${shape}</g></svg>`;
  if (view === 'gift') return `<svg viewBox="0 0 400 400" ${aria}><rect width="400" height="400" fill="${C.oat}"/>${SHAPES.giftbox([C.white, C.coral])}<text x="200" y="262" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="20" fill="${C.ink}">Hue &amp; Joy</text><g transform="translate(184 268) scale(.5)" style="isolation:isolate"><circle cx="24" cy="25" r="16" fill="${C.rose}" style="mix-blend-mode:multiply"/><circle cx="40" cy="25" r="16" fill="${C.coral}" style="mix-blend-mode:multiply"/><circle cx="32" cy="39" r="16" fill="${C.butter}" style="mix-blend-mode:multiply"/></g></svg>`;
  return `<svg viewBox="0 0 400 400" ${aria}><rect width="400" height="400" fill="${p.bg}"/>${shape}</svg>`;
}
function heroArt(k) {
  const h = HOLIDAYS[k];
  const parts = h.hero.map(([s, c, x, sc]) => `<g transform="${typeof x === 'string' ? x : `translate(${x} ${330 - 305*sc}) scale(${sc})`}">${SHAPES[s](c)}</g>`).join('');
  return `<svg viewBox="0 0 600 480" role="img" aria-label="${h.name} table setting" preserveAspectRatio="xMidYMid slice"><rect width="600" height="480" fill="${h.tint}"/><rect y="330" width="600" height="150" fill="${C.wood}"/><rect y="330" width="600" height="6" fill="${C.woodD}" opacity=".5"/>${parts}</svg>`;
}
const mini = k => { const h = HOLIDAYS[k]; const [s,c] = h.hero[2]; return `<svg viewBox="0 0 400 400" aria-hidden="true"><rect width="400" height="400" fill="${h.tint}"/><g transform="translate(40 30) scale(.8)">${SHAPES[s](c)}</g></svg>`; };
const disc = (shapeKey, c, bg, label) => `<svg viewBox="0 0 400 400" role="img" aria-label="${label}"><rect width="400" height="400" fill="${bg}"/><g transform="translate(20 10) scale(.9)">${SHAPES[shapeKey](c)}</g></svg>`;

/* ---------- gift message ---------- */
const GREET = {halloween:'Happy Halloween', thanksgiving:'Happy Thanksgiving', christmas:'Merry Christmas', newyear:'Happy New Year', valentines:"Happy Valentine's Day", easter:'Happy Easter', mothers:"Happy Mother's Day", fathers:"Happy Father's Day", everyday:'Celebrating you today'};
const RELS = [['partner','My partner','my favorite person'],['mom','Mom','the best mom anyone could ask for'],['dad','Dad','the best dad around'],['friend','A friend','the kind of friend everyone wishes for'],['family','Family','family I\u2019m lucky to have'],['coworker','A coworker','the best teammate'],['host','A host','a wonderful host']];
const TONES = [['warm','Warm'],['romantic','Romantic'],['playful','Playful'],['simple','Short & simple']];
const DRAFTS = {
  warm:['{greet}, {to}! Thank you for being {rel}. The ordinary days are better with you in them. {kw}With love, {from}','Dear {to}, a little color for a day that matters, from someone who is grateful for you every day. {kw}{greet}! {sig}','{to}, some people make life brighter just by being there. You are one of them. {kw}{greet}. Love, {from}'],
  romantic:['{to}, every day with you is my favorite kind of ordinary. {kw}{greet}. All my love, {from}','To {to}: you are the color on my grey days. {kw}{greet}, always. {sig}','{to}, I would choose you on every one of the days that matter, and all the ones in between. {kw}Love, {from}'],
  playful:['{greet}, {to}! Consider this official proof that you are {rel}. No returns accepted. {kw}{sig}','{to}, I looked for something as great as you. This was the closest I could find. {kw}{greet}! {sig}','{greet}! {kw}You deserve all the confetti, {to}. Cheers, {from}'],
  simple:['{greet}, {to}. Thinking of you. {sig}','For {to}, with love and a little color. {greet}. {sig}','{to}, wishing you a day as bright as you are. {kw}{sig}']
};
const giftState = () => { try { return Object.assign({on:false, mode:'own', note:'', to:'', from:'', rel:'friend', tone:'warm', kw:'', n:0}, JSON.parse(localStorage.getItem('hj-gift')) || {}); } catch { return {on:false, mode:'own', note:'', to:'', from:'', rel:'friend', tone:'warm', kw:'', n:0}; } };
const saveGift = g => localStorage.setItem('hj-gift', JSON.stringify(g));
function cartOccasion() {
  const first = store.cart.map(l => byId(l.id)).find(p => p.hol);
  return first ? first.hol : season();
}
function draftText(g) {
  const list = DRAFTS[g.tone] || DRAFTS.warm;
  const rel = (RELS.find(r => r[0] === g.rel) || RELS[3])[2];
  const kw = g.kw.trim() ? `Here's to ${g.kw.trim().replace(/[.!]+$/,'')}. ` : '';
  return list[g.n % list.length].replace('{greet}', GREET[cartOccasion()]).replace(/\{to\}/g, g.to.trim() || 'you').replace('{from}', g.from.trim() || '(your name)').replace('{sig}', `— ${g.from.trim() || '(your name)'}`).replace('{rel}', rel).replace('{kw}', kw).replace(/\s+/g,' ').trim();
}

/* ---------- cart ---------- */
const store = {
  get cart(){ try { return JSON.parse(localStorage.getItem('hj-cart')) || []; } catch { return []; } },
  set cart(v){ localStorage.setItem('hj-cart', JSON.stringify(v)); updateCount(); }
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

function giftPanel() {
  const g = giftState();
  return `<div class="gift-card-box">
    <label class="giftwrap"><input type="checkbox" id="isGift" ${g.on ? 'checked' : ''}> <span><b>This is a gift — include a card (free)</b><small>Prices are never included in the package.</small></span></label>
    <div id="giftPanel" ${g.on ? '' : 'hidden'}>
      <div class="seg" role="group" aria-label="Who writes the message">
        <button data-act="gmode" data-m="own" aria-pressed="${g.mode === 'own'}">I'll write it</button>
        <button data-act="gmode" data-m="us" aria-pressed="${g.mode === 'us'}">Write it for me</button>
      </div>
      <div ${g.mode === 'own' ? '' : 'hidden'} data-pane="own">
        <textarea id="giftNote" maxlength="200" placeholder="Your message, printed on our card">${esc(g.note)}</textarea>
      </div>
      <div ${g.mode === 'us' ? '' : 'hidden'} data-pane="us">
        <p class="hint" style="margin-top:0">Tell us a little, and we'll write a message for you.</p>
        <div class="gift-grid">
          <label>To<input data-g="to" maxlength="30" value="${esc(g.to)}" placeholder="e.g. Emma"></label>
          <label>From<input data-g="from" maxlength="30" value="${esc(g.from)}" placeholder="e.g. Jake"></label>
          <label>They are<select data-g="rel">${RELS.map(([v,l]) => `<option value="${v}" ${g.rel === v ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
          <label>Tone<select data-g="tone">${TONES.map(([v,l]) => `<option value="${v}" ${g.tone === v ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
          <label class="full">Anything to mention? <span class="opt">(optional)</span><input data-g="kw" maxlength="60" value="${esc(g.kw)}" placeholder="e.g. our first year in the new house"></label>
        </div>
        <div class="draft"><span class="eyebrow" style="margin:0 0 6px;display:block">Your draft</span><p id="gDraft"></p><button class="link-btn" data-act="gnext">Try another version</button></div>
        <p class="hint">A real person on our team reviews every message and emails you a preview within 12 hours. Reply to change anything. If we don't hear back, we print it as shown.</p>
      </div>
    </div>
  </div>`;
}
function renderDrawer() {
  const cart = store.cart;
  const sub = subtotal();
  const left = Math.max(0, FREE_SHIP - sub);
  const sources = new Set(cart.filter(l => l.id !== 'giftwrap').map(l => byId(l.id).src));
  const upsell = PRODUCTS.filter(p => p.price <= 30 && !cart.some(l => l.id === p.id)).sort((a,b) => (a.hol === cartOccasion() ? -1 : 0) - (b.hol === cartOccasion() ? -1 : 0) || a.price - b.price)[0];
  const lines = cart.map((l,i) => {
    const p = byId(l.id);
    const thumb = l.id === 'giftwrap' ? art(PRODUCTS[0], 'gift', 'Gift wrap') : art(p);
    const meta = l.id === 'giftwrap' ? 'Packed by hand in Tennessee' : `${esc(l.color)} · ${etaInfo(p).text}`;
    return `<div class="line"><div class="thumb">${thumb}</div><div><h4>${esc(p.name)}</h4><small>${meta}</small>
      <div class="mini-qty"><button data-act="qty" data-i="${i}" data-d="-1" aria-label="Decrease quantity">−</button><span>${l.qty}</span><button data-act="qty" data-i="${i}" data-d="1" aria-label="Increase quantity">+</button></div>
      <br><button class="remove" data-act="remove" data-i="${i}">Remove</button></div><div>${money(p.price * l.qty)}</div></div>`;
  }).join('');
  const S = season();
  document.getElementById('drawer').innerHTML = `
    <div class="drawer-head"><h2>Your Cart${cart.length ? ` (${cart.reduce((a,l)=>a+l.qty,0)})` : ''}</h2><button class="icon-btn" data-act="close" aria-label="Close cart"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button></div>
    <div class="drawer-body">
      ${cart.length ? `
      <div class="ship-bar">${left ? `You're <b>${money(left)}</b> away from free shipping` : '<b>You\u2019ve unlocked free shipping.</b>'}<div class="track"><div class="fill" style="width:${Math.min(100, sub / FREE_SHIP * 100)}%"></div></div></div>
      ${lines}
      ${sources.size > 1 ? '<p class="split-note">Your items ship from different places and will arrive in separate packages.</p>' : ''}
      ${giftPanel()}
      ${upsell ? `<div class="upsell"><div class="thumb">${art(upsell)}</div><div><b>Complete the gift</b><br>${esc(upsell.name)} · ${money(upsell.price)}</div><button data-act="upsell" data-id="${upsell.id}">Add</button></div>` : ''}
      ` : `<div class="empty"><p>Your cart is empty.</p><a href="#/collection/${S}" class="btn" data-act="close">Shop ${HOLIDAYS[S].name}</a></div>`}
    </div>
    ${cart.length ? `<div class="drawer-foot"><div class="subtotal"><span>Subtotal</span><span>${money(sub)}</span></div><div class="tax-note">Taxes calculated at checkout. ${left ? 'Shipping from $5.95.' : 'Free US shipping.'} Covered by our <a class="link" href="#/shipping/promise" data-act="close">On-Time Promise</a>.</div>
      <button class="btn btn-block" data-act="checkout">Checkout</button>
      <div class="express"><span>Shop Pay</span><span>PayPal</span><span>Apple Pay</span></div></div>` : ''}`;
  const dr = document.getElementById('gDraft');
  if (dr) dr.textContent = draftText(giftState());
}
function openDrawer() {
  renderDrawer();
  const dEl = document.getElementById('drawer');
  dEl.classList.add('open'); dEl.setAttribute('aria-hidden','false');
  document.getElementById('overlay').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeAll() {
  const dEl = document.getElementById('drawer');
  dEl.classList.remove('open'); dEl.setAttribute('aria-hidden','true');
  document.getElementById('nav').classList.remove('open');
  document.body.classList.remove('menu-open');
  document.getElementById('menuBtn').setAttribute('aria-expanded','false');
  document.getElementById('overlay').hidden = true;
  document.body.style.overflow = '';
}
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ---------- chrome ---------- */
function renderChrome() {
  const S = season(), order = ORDERED();
  document.querySelectorAll('[data-logo]').forEach(el => { el.innerHTML = mark(el.hasAttribute('data-dark') ? 34 : 30, el.hasAttribute('data-dark')) + wordmark(); });
  document.getElementById('nav').innerHTML = `
    <a href="#/collection/${S}" class="nav-season">${HOLIDAYS[S].name}</a>
    <div class="nav-group"><button class="nav-toggle" aria-expanded="false">Shop by Holiday</button><div class="nav-menu">
      ${order.map(k => `<a href="#/collection/${k}">${HOLIDAYS[k].name} <span>${fmt(hDate(k))}</span></a>`).join('')}<a href="#/collection/everyday">Everyday Celebrations</a></div></div>
    <a href="#/gifts">Gift Finder</a>
    <a href="#/collection/all">Shop All</a>
    <a href="#/story">Our Story</a>`;
  document.getElementById('footShop').innerHTML = order.map(k => `<a href="#/collection/${k}">${HOLIDAYS[k].name}</a>`).join('') + '<a href="#/collection/everyday">Everyday Celebrations</a>';
  const sel = document.getElementById('seasonSel');
  const pick = sessionStorage.getItem('hj-season') || '';
  sel.innerHTML = `<option value="">Auto (by date)</option>` + [...order, 'everyday'].map(k => `<option value="${k}" ${pick === k ? 'selected' : ''}>${HOLIDAYS[k].name}</option>`).join('');
  const hd = hDate(S), cut = hd && cutoff('tn', hd);
  document.getElementById('announce').innerHTML = cut
    ? `Order by <b>${fmt(cut)}</b> for ${HOLIDAYS[S].name} delivery · Free US shipping over $${FREE_SHIP}`
    : `Free US shipping over $${FREE_SHIP} · On-Time Promise on every holiday order`;
}

/* ---------- views ---------- */
function card(p) {
  const eta = etaInfo(p);
  const badge = p.badge || (p.src === 'tn' ? 'Ships from TN' : p.isNew ? 'New' : '');
  const etaLine = eta.late ? (eta.xcut ? `Express by ${fmt(eta.xcut)} for ${eta.h.name}` : `Arrives after ${eta.h.name}`) : eta.text;
  return `<a class="card" href="#/product/${p.id}">
    <div class="card-media">${badge ? `<span class="badge">${badge}</span>` : ''}${art(p)}<div class="alt">${art(p,'scene')}</div></div>
    <h3 class="card-title">${p.name}</h3><div class="card-price">${money(p.price)}</div>
    <div class="card-eta ${eta.late ? 'warn' : ''}">${etaLine}</div></a>`;
}
function calendarStrip() {
  return `<section class="section cal-sec"><div class="wrap">
    <div class="section-head"><div><p class="eyebrow">Coming up</p><h2>The days that matter</h2></div><a class="link" href="#/shipping">All order-by dates</a></div>
    <div class="cal">${ORDERED().map(k => { const hd = hDate(k), cut = cutoff('tn', hd); return `<a class="cal-item" href="#/collection/${k}" style="--tint:${HOLIDAYS[k].tint}">
      <div class="cal-art">${mini(k)}</div><div class="cal-copy"><b>${HOLIDAYS[k].name}</b><span>${fmt(hd)} · in ${daysUntil(hd)} days</span><small>${cut ? `Order by ${fmt(cut)}` : 'Express only'}</small></div></a>`; }).join('')}</div>
  </div></section>`;
}
function homeView() {
  const S = season(), h = HOLIDAYS[S], hd = hDate(S);
  let favs = PRODUCTS.filter(p => p.hol === S).sort((a,b) => (a.src === 'tn' ? 0 : 1) - (b.src === 'tn' ? 0 : 1));
  const need = favs.length < 4 ? 4 - favs.length : favs.length % 2;
  if (need) favs = favs.concat(PRODUCTS.filter(p => p.hol === 'everyday').slice(0, need));
  const next = ORDERED().filter(k => k !== S).slice(0, 2);
  const nextProducts = PRODUCTS.filter(p => next.includes(p.hol)).slice(0, 4);
  const set = PRODUCTS.find(p => p.badge && p.hol === S) || PRODUCTS.find(p => p.badge && next.includes(p.hol)) || byId('celebration-gift-set');
  return `
  <section class="hero">
    <div class="hero-art">${heroArt(S)}</div>
    <div class="hero-copy">
      ${lockup()}
      ${hd ? `<span class="countdown">${h.name} is in ${daysUntil(hd)} days</span>` : ''}
      <h1>${S === 'everyday' ? 'Color for the days you celebrate.' : `${h.name}, full of color.`}</h1>
      <p>Design-led gifts and decor, thoughtfully chosen, packed by hand and delivered in time. Or your shipping back.</p>
      <a href="#/collection/${S}" class="btn">Shop ${h.name}</a>
    </div>
  </section>
  <section class="trust" aria-label="Why shop with us"><ul><li>Ships from Tennessee</li><li>Gift-ready packaging</li><li>Free card, we'll even write it</li><li><a href="#/shipping/promise">On-Time Promise</a></li><li>30-day easy returns</li></ul></section>
  ${calendarStrip()}
  <section class="section" style="padding-top:0"><div class="wrap">
    <div class="section-head"><div><p class="eyebrow">${h.name}</p><h2>${S === 'everyday' ? 'Favorites' : `${h.name} Favorites`}</h2></div><a class="link" href="#/collection/${S}">View all</a></div>
    <div class="grid">${favs.map(card).join('')}</div>
  </div></section>
  <section class="section" style="padding-top:0"><div class="wrap">
    <div class="section-head"><div><p class="eyebrow">Find the right gift</p><h2>Shop by Recipient</h2></div><a class="link" href="#/gifts">Try the Gift Finder</a></div>
    <div class="recipients">
      <a class="recipient" href="#/gifts?who=her"><div class="disc">${disc('vases',[C.coral,C.rose],C.blush,'')}</div>For Her</a>
      <a class="recipient" href="#/gifts?who=him"><div class="disc">${disc('dish',[C.blue,C.cream],'#E1E7EC','')}</div>For Him</a>
      <a class="recipient" href="#/gifts?who=hosts"><div class="disc">${disc('napkins',[C.butter],C.butterL,'')}</div>For Hosts</a>
      <a class="recipient" href="#/collection/all?f=sets"><div class="disc">${disc('giftbox',[C.coral,C.rose],C.oat,'')}</div>Gift Sets</a>
    </div>
  </div></section>
  <section class="section" style="padding-top:0"><div class="wrap">
    <a class="banner" href="#/product/${set.id}" style="text-decoration:none">
      <div class="art">${art(set,'scene')}</div>
      <div class="copy"><p class="eyebrow">The Gift Sets</p><h2>Ready to give.<br>No wrapping required.</h2><p>Curated sets in our signature box, with a handwritten note from Tennessee. Tell us who it's for and we'll even write the message.</p><span class="btn" style="align-self:flex-start">Shop Gift Sets</span></div>
    </a>
  </div></section>
  ${nextProducts.length ? `<section class="section" style="padding-top:0"><div class="wrap">
    <div class="section-head"><div><p class="eyebrow">Plan ahead</p><h2>Coming up next</h2></div></div>
    <div class="grid">${nextProducts.map(card).join('')}</div></div></section>` : ''}
  <section class="section" style="padding-top:20px"><div class="wrap story-short">
    <div class="art">${lockup('stack')}</div>
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
  const h = HOLIDAYS[slug], hd = h && hDate(slug);
  const f = q.get('f') || 'all', sort = q.get('sort') || 'featured';
  let list = PRODUCTS.filter(p => (slug === 'all' || p.hol === slug) && matchFilter(p, f));
  if (slug === 'all' && sort === 'featured') { const o = [...ORDERED(), 'everyday']; list.sort((a,b) => o.indexOf(a.hol) - o.indexOf(b.hol)); }
  if (sort === 'price-asc') list.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (sort === 'new') list.sort((a,b) => (b.isNew?1:0) - (a.isNew?1:0));
  let cut = '';
  if (hd) {
    const std = cutoff('us', hd), tn = cutoff('tn', hd), x = cutoff('tnx', hd);
    cut = `<div class="cutoff">Order by <b>${std ? fmt(std) : 'passed'}</b> standard · <b>${tn ? fmt(tn) : 'passed'}</b> from Tennessee · <b>${x ? fmt(x) : 'passed'}</b> Express <a class="link" href="#/shipping/promise">On-Time Promise</a></div>`;
  }
  const title = h ? h.name : 'Shop All';
  const chipHref = v => `#/collection/${slug}?f=${v}${sort !== 'featured' ? '&sort=' + sort : ''}`;
  return `
  <section class="col-hero tinted" style="--tint:${h ? h.tint : C.oat}"><div class="wrap">
    ${hd ? `<p class="eyebrow">${h.name} is in ${daysUntil(hd)} days</p>` : '<p class="eyebrow">Hue &amp; Joy</p>'}
    <h1>${title}</h1><p>${h ? h.blurb : 'Every piece we carry, chosen for color, quality and the joy of giving.'}</p>${cut}
  </div></section>
  <div class="wrap">
    <div class="chips" role="group" aria-label="Filter">${FILTERS.map(([v,l]) => `<a class="chip" href="${chipHref(v)}" aria-pressed="${f === v}">${l}</a>`).join('')}</div>
    <div class="toolbar"><span>${list.length} product${list.length === 1 ? '' : 's'}</span>
      <label>Sort <select data-act="sort" data-slug="${slug}" data-f="${f}">${[['featured','Featured'],['new','New'],['price-asc','Price: low to high'],['price-desc','Price: high to low']].map(([v,l]) => `<option value="${v}" ${v === sort ? 'selected' : ''}>${l}</option>`).join('')}</select></label></div>
    ${list.length ? `<div class="grid">${list.map(card).join('')}</div>` : '<p class="empty">Nothing here yet. Try another filter.</p>'}
    <div class="section" style="padding-bottom:70px">
      <h2 style="font-size:1.5rem">Good to know</h2>
      <details><summary>Will it arrive in time?</summary><p>Every product shows an estimated delivery date before you buy, and our order-by dates already include extra days for carrier delays. Order by the date shown and it's covered by our On-Time Promise.</p></details>
      <details><summary>Can you write the card for me?</summary><p>Yes. Tick "This is a gift" in your cart, choose "Write it for me", and tell us who it's for. We'll email you a preview before it ships.</p></details>
      <details><summary>What if they don't love it?</summary><p>Returns are easy within 30 days of delivery.</p></details>
    </div>
  </div>`;
}

function productView(id) {
  const p = byId(id);
  if (!p || id === 'giftwrap') return notFound();
  const eta = etaInfo(p), h = eta.h, src = SOURCES[p.src];
  const xe = p.src === 'tn' ? estimate('tnx') : null;
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
        <p class="eyebrow">${h.name}${p.tags.includes('her') ? ' · Gifts for Her' : p.tags.includes('him') ? ' · Gifts for Him' : p.tags.includes('hosts') ? ' · For Hosts' : ''}</p>
        <h1>${p.name}</h1>
        <div class="reviews-mini">New arrival · <a class="link" href="#reviews" data-act="toreviews">Be the first to review</a></div>
        <div class="price">${money(p.price)}</div>
        <div class="installments">or 4 interest-free payments of ${money(Math.round(p.price / 4 * 100) / 100)} with Shop Pay</div>
        ${p.colors.length > 1 ? `<div class="opt-label">Color: <b id="colorName">${p.colors[0][0]}</b></div><div class="swatches">${p.colors.map(([n,hex],i) => `<button class="swatch" style="background:${hex}" data-act="color" data-n="${n}" aria-label="${n}" aria-pressed="${i === 0}"></button>`).join('')}</div>` : ''}
        <div class="opt-label">Quantity</div>
        <div class="qty"><button data-act="pqty" data-d="-1" aria-label="Decrease">−</button><span id="pqty">1</span><button data-act="pqty" data-d="1" aria-label="Increase">+</button></div>
        <div class="eta-box">
          <div class="row"><span class="dot ${eta.late ? 'warn' : ''}"></span><div><b>${eta.text}</b> if you order today<small>${src.label}${eta.e.peak ? ' · includes holiday-season carrier buffer' : ''}${eta.e.cny ? ' · includes Lunar New Year studio closure' : ''}</small>
            ${eta.hd ? (eta.cut ? `<small class="ok">Order by <b>${fmt(eta.cut)}</b> for ${h.name}. Covered by our <a class="link" href="#/shipping/promise">On-Time Promise</a>.</small>` : `<small class="bad">Standard shipping won't make ${h.name}.${eta.xcut ? '' : ' Try items marked "Ships from TN".'}</small>`) : ''}</div></div>
          ${xe ? `<div class="row"><span class="dot"></span><div><b>Need it faster?</b> Express arrives by ${fmt(xe.max)} (+$${EXPRESS_FEE} at checkout)${eta.hd && eta.xcut ? `<small>Express order-by date for ${h.name}: <b>${fmt(eta.xcut)}</b></small>` : ''}</div></div>` : ''}
          ${p.src === 'tn' ? `<div class="row"><label class="giftwrap"><input type="checkbox" id="wrap"> <span><b>Add gift wrap + handwritten note (+$5)</b><small>Wrapped by hand in our signature paper</small></span></label></div>` : ''}
        </div>
        <button class="btn btn-block" data-act="add" data-id="${p.id}">Add to Cart</button>
        <button class="btn btn-block btn-shop" data-act="checkout">Buy with Shop Pay</button>
        <ul class="perks"><li>Free US shipping over $${FREE_SHIP}</li><li>Free gift card: write your own, or let us write it for you</li><li>30-day easy returns</li></ul>
        <p class="gift-line">${p.line}</p>
        <ul class="love">${p.love.map(x => `<li>${x}</li>`).join('')}</ul>
        <details><summary>Details &amp; Dimensions</summary><p>${p.details}</p></details>
        <details><summary>Materials &amp; Care</summary><p>${p.care}</p></details>
        <details><summary>Shipping &amp; On-Time Promise</summary><p>${src.label}. Processing ${src.proc} business days, then ${src.min}–${src.max} days in transit. Our holiday order-by dates include ${src.buffer} extra day${src.buffer > 1 ? 's' : ''} of buffer. If an order placed by the order-by date misses the holiday, we refund your shipping, send a printable "gift on its way" card and add a $15 credit, or refund in full if you prefer. <a class="link" href="#/shipping/promise">Read the promise</a></p></details>
        <details><summary>Returns</summary><p>Return within 30 days of delivery. Unused items in original packaging.</p></details>
        ${p.safety ? `<details><summary>Safety</summary><p>Never leave a burning candle unattended. Burn within sight, away from things that catch fire, children and pets. Burn no longer than 4 hours at a time.</p></details>` : ''}
      </div>
    </div>
    <section class="section" style="padding-top:20px"><h2>Complete the gift</h2><div class="grid">${related.map(card).join('')}</div></section>
    <section class="section" id="reviews" style="padding-top:0"><h2>Reviews</h2><div class="no-reviews">No reviews yet. Reviews will appear here after customers receive their orders.</div></section>
  </div>`;
}

const WHO = [['any','Anyone'],['her','Her'],['him','Him'],['hosts','A host']];
const BUDGET = [['any','Any budget'],['u30','Under $30'],['30-60','$30–60'],['60','$60+']];
function giftFinderView(q) {
  const who = q.get('who') || 'any', occ = q.get('occ') || 'any', bud = q.get('budget') || 'any';
  const occs = [['any','Any occasion'], ...ORDERED().slice(0,4).map(k => [k, HOLIDAYS[k].name]), ['everyday','Birthday & everyday']];
  const href = (k, v) => { const o = {who, occ, budget:bud}; o[k] = v; return '#/gifts?' + new URLSearchParams(o).toString(); };
  const group = (label, key, cur, opts) => `<div class="gf-q"><h3>${label}</h3><div class="chips gf-chips">${opts.map(([v,l]) => `<a class="chip" href="${href(key, v)}" aria-pressed="${cur === v}">${l}</a>`).join('')}</div></div>`;
  const inBudget = p => bud === 'any' || (bud === 'u30' ? p.price < 30 : bud === '30-60' ? p.price >= 30 && p.price <= 60 : p.price > 60);
  const order = [...ORDERED(), 'everyday'];
  const list = PRODUCTS.filter(p => (who === 'any' || p.tags.includes(who)) && (occ === 'any' || p.hol === occ) && inBudget(p))
    .sort((a,b) => (etaInfo(a).late - etaInfo(b).late) || (order.indexOf(a.hol) - order.indexOf(b.hol)) || (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
  return `
  <section class="col-hero tinted" style="--tint:${C.butterL}"><div class="wrap">
    <p class="eyebrow">Gift Finder</p><h1>Three questions. One great gift.</h1>
    <p>Tell us who it's for, the occasion and your budget. We'll show what arrives in time first, and we can even write the card.</p>
  </div></section>
  <div class="wrap gf">
    ${group('Who is it for?', 'who', who, WHO)}
    ${group('What\u2019s the occasion?', 'occ', occ, occs)}
    ${group('Your budget', 'budget', bud, BUDGET)}
    <div class="toolbar"><span>${list.length} gift idea${list.length === 1 ? '' : 's'}${occ !== 'any' && hDate(occ) ? ` for ${HOLIDAYS[occ].name}` : ''}</span>${who !== 'any' || occ !== 'any' || bud !== 'any' ? '<a class="link" href="#/gifts">Start over</a>' : ''}</div>
    ${list.length ? `<div class="grid">${list.map(card).join('')}</div>` : `<div class="empty"><p>Nothing matches all three yet. Try a different budget, or browse our Gift Sets.</p><a class="btn" href="${href('budget','any')}">Show any budget</a></div>`}
    <div class="gf-help"><b>Still not sure?</b> Gift Sets come wrapped with a handwritten note. <a class="link" href="#/collection/all?f=sets">See Gift Sets</a></div>
  </div>`;
}

function storyView() {
  return `
  <section class="story-hero">${lockup('stack')}<h1 style="margin-top:28px">For the few days that matter.</h1><p>Why we started Hue &amp; Joy.</p></section>
  <div class="story-body">
    <p class="big">Life is mostly ordinary days. Work, errands, dishes, sleep. And that's fine.</p>
    <p>But every year there are a few days that ask for more. A birthday. Christmas morning. The first warm Sunday of spring. The evening you finally say what you've been meaning to say. Those days deserve a little color.</p>
    <p>Hue &amp; Joy exists to make those days easier to get right. We choose pieces we would be proud to give, help you find the words for the card, and make sure everything arrives when it's supposed to.</p>
    <div class="values">
      <div><h3>Chosen for color</h3><p>Calm, modern design with one bright note. Things that feel like a celebration without shouting.</p></div>
      <div><h3>Made to be given</h3><p>Every piece is checked against a sample we approved, then packed to arrive gift-ready.</p></div>
      <div><h3>On time, honestly</h3><p>We show a real delivery date before you buy, and if we miss the day, we make it right.</p></div>
    </div>
    <h2>The meaning of the mark</h2>
    <p>Three colors overlap and make new ones where they meet, the way people do on the days that matter. That's the hue, and the joy.</p>
    <h2>Packed by hand in Tennessee</h2>
    <p>Our favorite pieces ship from a small packing table in Tennessee, where each gift is wrapped and every handwritten note is written by a real person.</p>
    <p style="margin-top:30px"><a href="#/collection/${season()}" class="btn">Shop the season</a></p>
  </div>`;
}
function shippingView(sub) {
  const rows = ORDERED().map(k => {
    const hd = hDate(k), c = s => { const x = cutoff(s, hd); return x ? fmt(x) : '—'; };
    return `<tr><td>${HOLIDAYS[k].name} <small>(${fmt(hd)})</small></td><td>${c('tn')}</td><td>${c('tnx')}</td><td>${c('us')}</td><td>${c('cn')}</td></tr>`;
  }).join('');
  if (sub === 'promise') setTimeout(() => { const el = document.getElementById('promise'); if (el) el.scrollIntoView(); }, 0);
  return `<div class="page"><h1>Shipping &amp; Delivery</h1>
  <p>Every product page shows an estimated delivery date before you buy. Free US shipping on orders over $${FREE_SHIP}; otherwise from $5.95. Express from Tennessee +$${EXPRESS_FEE}.</p>
  <h2>Holiday order-by dates</h2>
  <p>These dates already include extra buffer days for carrier delays, so you're not cutting it close.</p>
  <div class="table-wrap"><table class="table"><thead><tr><th>Holiday</th><th>Ships from TN</th><th>TN Express</th><th>US warehouse</th><th>Partner studio</th></tr></thead><tbody>${rows}</tbody></table></div>
  <h2>Where your order ships from</h2>
  <div class="table-wrap"><table class="table"><thead><tr><th>Ships from</th><th>Processing</th><th>In transit</th><th>Holiday buffer</th></tr></thead><tbody>
  ${Object.values(SOURCES).map(s => `<tr><td>${s.short}</td><td>${s.proc} business day${s.proc > 1 ? 's' : ''}</td><td>${s.min}–${s.max} days</td><td>+${s.buffer} day${s.buffer > 1 ? 's' : ''}</td></tr>`).join('')}
  </tbody></table></div>
  <p><small>From late November to Christmas Eve, carriers are busier, so we add ${PEAK_DAYS} more days to every estimate. Partner-studio items also account for the Lunar New Year closure.</small></p>
  <section class="promise" id="promise">
    <p class="eyebrow">Our On-Time Promise</p>
    <h2 style="margin-top:0">If we miss the day, we make it right.</h2>
    <p>Order by the order-by date shown for your holiday. If your gift still doesn't arrive in time, you choose:</p>
    <ol>
      <li><b>Keep it, with our apologies:</b> we refund your shipping and add a $15 credit to your account.</li>
      <li><b>Or a full refund</b>, and you keep the item if it arrives later.</li>
    </ol>
    <p>And so you're never empty-handed, we'll email you a printable <b>"Your gift is on its way"</b> card, with your message on it, to give on the day.</p>
    <h3>What we do behind the scenes</h3>
    <ul>
      <li>We check every tracking number daily. If a package hasn't moved for 2 days, we email you before you have to ask.</li>
      <li>If a package is lost or damaged, we reship right away, by Express from Tennessee when we can.</li>
      <li>If a partner-studio item is running late, we try to switch it to stock in the US.</li>
    </ul>
  </section></div>`;
}
const returnsView = () => `<div class="page"><h1>Returns</h1><p>If something isn't right, you can return unused items in their original packaging within 30 days of delivery.</p><h2>How to return</h2><ol><li>Email hello@hueandjoy.com with your order number.</li><li>We'll send a prepaid return label to our Tennessee address.</li><li>Refunds are issued to your original payment method within 5 business days of arrival.</li></ol><p>Damaged on arrival? Send us a photo within 7 days and we'll replace it right away.</p></div>`;
const faqView = () => `<div class="page"><h1>FAQ</h1>
  ${[['When will my order arrive?','Each product shows an estimated delivery date. See Shipping & Delivery for holiday order-by dates.'],['What if my gift arrives late?','Orders placed by the order-by date are covered by our On-Time Promise: a shipping refund plus a $15 credit, or a full refund, and a printable card to give on the day.'],['Can you write the card for me?','Yes, for free. Choose "Write it for me" in your cart, tell us who it\u2019s for and the tone you like. A real person reviews every message and emails you a preview.'],['Can I send a gift directly to someone?','Yes. Enter their address at checkout. Prices are never included in the package.'],['Do you offer gift wrapping?','Tennessee-shipped items can be gift wrapped with a handwritten note for $5. Gift Sets come wrapped.'],['Do you ship outside the US?','Not yet. We hope to ship to Canada soon.']].map(([q,a]) => `<details><summary>${q}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
const contactView = () => `<div class="page"><h1>Contact</h1><p>We're a small team and read every message. Expect a reply within one business day (Mon–Fri, 9am–5pm Central).</p><p>Email: hello@hueandjoy.com</p>
  <form class="form" data-form="contact"><label class="skip" for="cName">Name</label><input id="cName" required placeholder="Name"><label class="skip" for="cEmail">Email</label><input id="cEmail" type="email" required placeholder="Email"><label class="skip" for="cMsg">Message</label><textarea id="cMsg" rows="5" required placeholder="How can we help?"></textarea><button class="btn">Send message</button></form></div>`;
const policyView = () => `<div class="page"><h1>Policies</h1><p>Privacy Policy and Terms of Service will be generated from Shopify's templates and reviewed before launch.</p></div>`;
function brandView() {
  const sw = [['Warm White',C.white],['Oat',C.oat],['Charcoal',C.ink],['Joy Coral',C.coral],['Deep Coral',C.deep],['Rose',C.rose],['Butter',C.butter],['Sage',C.sage]];
  const hol = [['Halloween',C.pumpkin],['Christmas',C.pine],['Christmas',C.cranberry],['New Year',C.gold],['Mother\u2019s Day',C.lilac],['Father\u2019s Day',C.blue]];
  return `<div class="page brand"><p class="eyebrow">Brand kit · draft</p><h1>Hue &amp; Joy</h1>
  <p>The mark: three colors overlap and create new hues where they meet, like people coming together on the days that matter.</p>
  <h2>Logo</h2>
  <div class="brand-grid">
    <div class="brand-tile" id="logo-h">${lockup()}</div>
    <div class="brand-tile" id="logo-stack">${lockup('stack')}</div>
    <div class="brand-tile dark" id="logo-dark">${lockup('h', true)}</div>
    <div class="brand-tile coral" id="logo-mark"><div class="mark-solo">${mark(120)}</div></div>
  </div>
  <h2>Core colors</h2><div class="swatch-row">${sw.map(([n,h]) => `<div><span style="background:${h}"></span><b>${n}</b><small>${h}</small></div>`).join('')}</div>
  <h2>Holiday accents</h2><div class="swatch-row">${hol.map(([n,h]) => `<div><span style="background:${h}"></span><b>${n}</b><small>${h}</small></div>`).join('')}</div>
  <h2>Type</h2><p><span style="font-family:var(--serif);font-size:2rem">Fraunces</span> for headings · <span style="font-size:1.3rem">DM Sans</span> for text</p>
  <p><small>Draft for review. Final vector files to be refined by a designer before printing packaging.</small></p></div>`;
}
const notFound = () => `<div class="page" style="text-align:center"><div style="max-width:220px;margin:0 auto 20px">${disc('confetti',[C.rose,C.coral],C.white,'')}</div><h1>This page took a day off.</h1><p>Let's find you something nice instead.</p><a href="#/collection/${season()}" class="btn">Shop ${HOLIDAYS[season()].name}</a></div>`;

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
  else if (parts[0] === 'product') { const p = byId(parts[1]); pstate.qty = 1; pstate.color = p && p.colors ? p.colors[0][0] : null; html = productView(parts[1]); if (p && p.colors) title = `${p.name} — Hue & Joy`; }
  else if (parts[0] === 'shipping') html = shippingView(parts[1]);
  else if (parts[0] === 'gifts') { html = giftFinderView(q); title = 'Gift Finder — Hue & Joy'; }
  else html = ({story:storyView, returns:returnsView, faq:faqView, contact:contactView, policy:policyView, brand:brandView}[parts[0]] || notFound)();
  document.getElementById('app').innerHTML = html;
  document.title = title;
  closeAll();
  if (path !== render.last && parts[1] !== 'promise') window.scrollTo(0,0);
  render.last = path;
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]');
  if (!t) return;
  const act = t.dataset.act;
  if (act === 'close') { closeAll(); return; }
  if (act === 'toreviews') { e.preventDefault(); document.getElementById('reviews').scrollIntoView({behavior:'smooth'}); return; }
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
  if (act === 'gmode') { const g = giftState(); g.mode = t.dataset.m; saveGift(g); renderDrawer(); }
  if (act === 'gnext') { const g = giftState(); g.n = (g.n + 1) % 3; saveGift(g); document.getElementById('gDraft').textContent = draftText(g); }
});
document.addEventListener('change', e => {
  if (e.target.matches('[data-act="sort"]')) { const s = e.target; location.hash = `#/collection/${s.dataset.slug}?f=${s.dataset.f}&sort=${s.value}`; }
  if (e.target.id === 'isGift') { const g = giftState(); g.on = e.target.checked; saveGift(g); document.getElementById('giftPanel').hidden = !g.on; }
  if (e.target.id === 'seasonSel') { if (e.target.value) sessionStorage.setItem('hj-season', e.target.value); else sessionStorage.removeItem('hj-season'); renderChrome(); render(); }
  if (e.target.matches('select[data-g]')) { const g = giftState(); g[e.target.dataset.g] = e.target.value; saveGift(g); document.getElementById('gDraft').textContent = draftText(g); }
});
document.addEventListener('input', e => {
  if (e.target.id === 'giftNote') { const g = giftState(); g.note = e.target.value; saveGift(g); }
  if (e.target.matches('input[data-g]')) { const g = giftState(); g[e.target.dataset.g] = e.target.value; saveGift(g); document.getElementById('gDraft').textContent = draftText(g); }
});
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

renderChrome(); updateCount(); render();
})();
