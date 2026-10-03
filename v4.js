const ASSETS=window.NURAN_ASSETS||{};
const STORE={freeShippingAt:299,shippingFee:25};
const CATEGORIES=[
{id:'all',ar:'الكل',en:'ALL',asset:null},
{id:'protein',ar:'البروتين',en:'PROTEIN',asset:'whey'},
{id:'creatine',ar:'الكرياتين',en:'CREATINE',asset:'creatine'},
{id:'daily',ar:'الفيتامينات',en:'VITAMINS',asset:'daily'},
{id:'omega',ar:'أوميغا',en:'OMEGA-3',asset:'omega'},
{id:'sleep',ar:'النوم والاسترخاء',en:'SLEEP',asset:'sleep'},
{id:'hydration',ar:'الترطيب',en:'HYDRATION',asset:'hydration'}
];

const PRODUCTS=[
{id:1,cat:'protein',ar:'واي بروتين 24 — فانيلا',en:'WHEY 24 · VANILLA',variant:'فانيلا',price:219,old:249,rating:4.9,reviews:318,badge:'الأكثر مبيعًا',size:'900 جم',servings:'30 حصة',key:'24g Protein',asset:'whey'},
{id:2,cat:'protein',ar:'واي بروتين 24 — شوكولاتة',en:'WHEY 24 · CHOCOLATE',variant:'شوكولاتة',price:219,old:null,rating:4.8,reviews:264,badge:'مميز',size:'900 جم',servings:'30 حصة',key:'24g Protein',asset:'whey'},
{id:3,cat:'protein',ar:'واي بروتين 24 — كوكيز',en:'WHEY 24 · COOKIES',variant:'كوكيز',price:225,old:null,rating:4.8,reviews:173,badge:'جديد',size:'900 جم',servings:'30 حصة',key:'24g Protein',asset:'whey'},
{id:4,cat:'protein',ar:'واي بروتين 24 — فراولة',en:'WHEY 24 · STRAWBERRY',variant:'فراولة',price:219,old:null,rating:4.7,reviews:142,badge:'',size:'900 جم',servings:'30 حصة',key:'24g Protein',asset:'whey'},
{id:5,cat:'protein',ar:'واي بروتين 24 — عبوة كبيرة',en:'WHEY 24 · VALUE SIZE',variant:'عبوة كبيرة',price:379,old:419,rating:4.9,reviews:201,badge:'وفر أكثر',size:'1.8 كجم',servings:'60 حصة',key:'24g Protein',asset:'whey'},

{id:6,cat:'creatine',ar:'كرياتين مونوهيدرات CREA 5',en:'CREA 5 · MONOHYDRATE',variant:'300 جم',price:129,old:null,rating:4.9,reviews:402,badge:'الأكثر مبيعًا',size:'300 جم',servings:'60 حصة',key:'5g Creatine',asset:'creatine'},
{id:7,cat:'creatine',ar:'كرياتين CREA 5 — 500 جم',en:'CREA 5 · 500G',variant:'500 جم',price:179,old:199,rating:4.8,reviews:246,badge:'وفر أكثر',size:'500 جم',servings:'100 حصة',key:'5g Creatine',asset:'creatine'},
{id:8,cat:'creatine',ar:'كرياتين CREA 5 — 150 جم',en:'CREA 5 · COMPACT',variant:'150 جم',price:79,old:null,rating:4.7,reviews:118,badge:'',size:'150 جم',servings:'30 حصة',key:'5g Creatine',asset:'creatine'},
{id:9,cat:'creatine',ar:'CREA 5 — عبوتان',en:'CREA 5 · DOUBLE PACK',variant:'عبوتان',price:239,old:258,rating:4.9,reviews:166,badge:'باقة',size:'2 × 300 جم',servings:'120 حصة',key:'5g Creatine',asset:'creatine'},
{id:10,cat:'creatine',ar:'CREA 5 — ثلاث عبوات',en:'CREA 5 · TRIPLE PACK',variant:'3 عبوات',price:339,old:387,rating:4.8,reviews:96,badge:'أفضل قيمة',size:'3 × 300 جم',servings:'180 حصة',key:'5g Creatine',asset:'creatine'},

{id:11,cat:'daily',ar:'DAILY 01 مالتي فيتامين',en:'DAILY 01 · MULTIVITAMIN',variant:'60 قرص',price:149,old:169,rating:4.9,reviews:278,badge:'يومي',size:'60 قرص',servings:'30 حصة',key:'Daily Multi',asset:'daily'},
{id:12,cat:'daily',ar:'DAILY 01 — عبوة 120 قرص',en:'DAILY 01 · VALUE SIZE',variant:'120 قرص',price:229,old:249,rating:4.8,reviews:181,badge:'وفر أكثر',size:'120 قرص',servings:'60 حصة',key:'Daily Multi',asset:'daily'},
{id:13,cat:'daily',ar:'DAILY 01 — باقة شهرين',en:'DAILY 01 · 2 MONTHS',variant:'شهران',price:269,old:298,rating:4.8,reviews:144,badge:'باقة',size:'2 × 60 قرص',servings:'60 حصة',key:'Daily Multi',asset:'daily'},
{id:14,cat:'daily',ar:'DAILY 01 — باقة عائلية',en:'DAILY 01 · FAMILY',variant:'عائلية',price:399,old:447,rating:4.7,reviews:89,badge:'قيمة',size:'3 × 60 قرص',servings:'90 حصة',key:'Daily Multi',asset:'daily'},
{id:15,cat:'daily',ar:'DAILY 01 — حجم السفر',en:'DAILY 01 · TRAVEL',variant:'30 قرص',price:89,old:null,rating:4.6,reviews:73,badge:'',size:'30 قرص',servings:'15 حصة',key:'Daily Multi',asset:'daily'},

{id:16,cat:'omega',ar:'OMEGA PURE أوميغا 3',en:'OMEGA PURE · 90 SOFTGELS',variant:'90 كبسولة',price:159,old:179,rating:4.9,reviews:264,badge:'الأكثر مبيعًا',size:'90 سوفتجيل',servings:'45 حصة',key:'Omega-3',asset:'omega'},
{id:17,cat:'omega',ar:'OMEGA PURE — 180 كبسولة',en:'OMEGA PURE · 180 SOFTGELS',variant:'180 كبسولة',price:269,old:299,rating:4.9,reviews:188,badge:'وفر أكثر',size:'180 سوفتجيل',servings:'90 حصة',key:'Omega-3',asset:'omega'},
{id:18,cat:'omega',ar:'OMEGA PURE — عبوتان',en:'OMEGA PURE · DOUBLE',variant:'عبوتان',price:289,old:318,rating:4.8,reviews:131,badge:'باقة',size:'2 × 90',servings:'90 حصة',key:'Omega-3',asset:'omega'},
{id:19,cat:'omega',ar:'OMEGA PURE — حجم صغير',en:'OMEGA PURE · COMPACT',variant:'60 كبسولة',price:119,old:null,rating:4.7,reviews:91,badge:'',size:'60 سوفتجيل',servings:'30 حصة',key:'Omega-3',asset:'omega'},
{id:20,cat:'omega',ar:'OMEGA PURE — ثلاث عبوات',en:'OMEGA PURE · TRIPLE',variant:'3 عبوات',price:419,old:477,rating:4.8,reviews:76,badge:'أفضل قيمة',size:'3 × 90',servings:'135 حصة',key:'Omega-3',asset:'omega'},

{id:21,cat:'sleep',ar:'SLEEP SUPPORT دعم النوم',en:'SLEEP SUPPORT · 60 CAPS',variant:'60 كبسولة',price:149,old:169,rating:4.9,reviews:213,badge:'مسائي',size:'60 كبسولة',servings:'30 حصة',key:'Evening Formula',asset:'sleep'},
{id:22,cat:'sleep',ar:'SLEEP SUPPORT — عبوة شهرين',en:'SLEEP SUPPORT · 120 CAPS',variant:'120 كبسولة',price:249,old:279,rating:4.8,reviews:157,badge:'وفر أكثر',size:'120 كبسولة',servings:'60 حصة',key:'Evening Formula',asset:'sleep'},
{id:23,cat:'sleep',ar:'SLEEP SUPPORT — عبوتان',en:'SLEEP SUPPORT · DOUBLE',variant:'عبوتان',price:279,old:298,rating:4.8,reviews:118,badge:'باقة',size:'2 × 60',servings:'60 حصة',key:'Evening Formula',asset:'sleep'},
{id:24,cat:'sleep',ar:'SLEEP SUPPORT — حجم السفر',en:'SLEEP SUPPORT · TRAVEL',variant:'30 كبسولة',price:89,old:null,rating:4.6,reviews:64,badge:'',size:'30 كبسولة',servings:'15 حصة',key:'Evening Formula',asset:'sleep'},
{id:25,cat:'sleep',ar:'SLEEP SUPPORT — ثلاث عبوات',en:'SLEEP SUPPORT · TRIPLE',variant:'3 عبوات',price:399,old:447,rating:4.8,reviews:92,badge:'أفضل قيمة',size:'3 × 60',servings:'90 حصة',key:'Evening Formula',asset:'sleep'},

{id:26,cat:'hydration',ar:'HYDRATION — ليمون ولايم',en:'HYDRATION · LEMON LIME',variant:'ليمون ولايم',price:109,old:129,rating:4.8,reviews:187,badge:'Zero Sugar',size:'330 جم',servings:'30 حصة',key:'Electrolytes',asset:'hydration'},
{id:27,cat:'hydration',ar:'HYDRATION — توت',en:'HYDRATION · BERRY',variant:'توت',price:109,old:null,rating:4.7,reviews:126,badge:'',size:'330 جم',servings:'30 حصة',key:'Electrolytes',asset:'hydration'},
{id:28,cat:'hydration',ar:'HYDRATION — برتقال',en:'HYDRATION · ORANGE',variant:'برتقال',price:109,old:null,rating:4.7,reviews:103,badge:'',size:'330 جم',servings:'30 حصة',key:'Electrolytes',asset:'hydration'},
{id:29,cat:'hydration',ar:'HYDRATION — عبوتان',en:'HYDRATION · DOUBLE',variant:'عبوتان',price:199,old:218,rating:4.8,reviews:96,badge:'باقة',size:'2 × 330 جم',servings:'60 حصة',key:'Electrolytes',asset:'hydration'},
{id:30,cat:'hydration',ar:'HYDRATION — ثلاث عبوات',en:'HYDRATION · TRIPLE',variant:'3 عبوات',price:289,old:327,rating:4.8,reviews:74,badge:'أفضل قيمة',size:'3 × 330 جم',servings:'90 حصة',key:'Electrolytes',asset:'hydration'}
];

const BUNDLES=[
{id:'performance',title:'باقة الأداء',en:'PERFORMANCE ROUTINE',ids:[1,6,26],price:399},
{id:'daily',title:'باقة العافية اليومية',en:'DAILY WELLNESS',ids:[11,16,26],price:369},
{id:'evening',title:'باقة الروتين المسائي',en:'EVENING ROUTINE',ids:[21,11],price:269}
];

let cart=load('nuranV4Cart',{}),wishlist=load('nuranV4Wish',[]),activeCat='all';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const money=n=>new Intl.NumberFormat('ar-SA',{style:'currency',currency:'SAR',maximumFractionDigits:0}).format(n);
function load(k,f){try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch{return f}}
function asset(key){return ASSETS[key]||''}
function save(){localStorage.setItem('nuranV4Cart',JSON.stringify(cart));localStorage.setItem('nuranV4Wish',JSON.stringify(wishlist));updateCounts()}
function updateCounts(){$('#cartCount').textContent=Object.values(cart).reduce((a,b)=>a+b,0);$('#wishCount').textContent=wishlist.length}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),1800)}

function initImages(){
  $('#heroImage').src=asset('hero');
  $('#promoDaily').src=asset('daily');$('#promoWhey').src=asset('whey');$('#promoHydration').src=asset('hydration');
  $('#storyWhey').src=asset('whey');$('#storyCreatine').src=asset('creatine');
}

function renderNav(){
  $('#categoryNav').innerHTML=`<button data-nav-cat="all" class="active">الرئيسية</button>`+CATEGORIES.slice(1).map(c=>`<button data-nav-cat="${c.id}">${c.ar}</button>`).join('')+`<button data-scroll="#offers">العروض</button><button data-scroll="#bundles">الباقات</button>`;
}
function renderCategories(){
  $('#categoryCircles').innerHTML=CATEGORIES.slice(1).map(c=>`<button class="category-circle" data-cat="${c.id}"><div class="category-thumb"><img src="${asset(c.asset)}" alt="${c.ar}"></div><b>${c.ar}</b><small>${c.en}</small></button>`).join('');
}
function badgeClass(p){return p.old?'product-badge sale':'product-badge'}
function productCard(p){const cat=CATEGORIES.find(c=>c.id===p.cat);return `
<article class="product-card" data-id="${p.id}">
  <div class="product-image">
    ${p.badge?`<span class="${badgeClass(p)}">${p.badge}</span>`:''}
    <button class="wish ${wishlist.includes(p.id)?'active':''}" data-wish="${p.id}" aria-label="المفضلة">${wishlist.includes(p.id)?'♥':'♡'}</button>
    <img src="${asset(p.asset)}" alt="${p.ar}" loading="lazy">
    <span class="variant-chip">${p.variant}</span>
  </div>
  <div class="product-info">
    <div class="product-category">${cat?.en||''}</div>
    <h3>${p.ar}</h3>
    <div class="product-en">${p.en}</div>
    <div class="rating">★★★★★ <span>${p.rating} · ${p.reviews} تقييم</span></div>
    <div class="price-row"><div><span class="price">${money(p.price)}</span>${p.old?`<span class="old">${money(p.old)}</span>`:''}</div><button class="add-btn" data-add="${p.id}">أضف للسلة +</button></div>
  </div>
</article>`}
function renderFeatured(){
  const ids=[1,6,11,16,21,26,5,17];
  $('#featuredGrid').innerHTML=ids.map(id=>productCard(PRODUCTS.find(p=>p.id===id))).join('');
}
function renderFilters(){
  $('#filterChips').innerHTML=CATEGORIES.map(c=>`<button class="filter-chip ${c.id===activeCat?'active':''}" data-filter="${c.id}">${c.ar}</button>`).join('');
}
function renderProducts(){
  let list=activeCat==='all'?[...PRODUCTS]:PRODUCTS.filter(p=>p.cat===activeCat);
  const s=$('#sortSelect').value;
  if(s==='low')list.sort((a,b)=>a.price-b.price);else if(s==='high')list.sort((a,b)=>b.price-a.price);else if(s==='rating')list.sort((a,b)=>b.rating-a.rating);
  $('#resultCount').textContent=`${list.length} منتج`;
  $('#productGrid').innerHTML=list.map(productCard).join('');
  renderFilters();
}
function renderBundles(){
  $('#bundleGrid').innerHTML=BUNDLES.map(b=>{const ps=b.ids.map(id=>PRODUCTS.find(p=>p.id===id));return `
  <article class="bundle-card">
    <div class="bundle-visual">${ps.map(p=>`<img src="${asset(p.asset)}" alt="${p.ar}">`).join('')}</div>
    <div class="bundle-copy"><small>${b.en}</small><h3>${b.title}</h3><p>${ps.map(p=>p.ar).join(' + ')}</p><div class="bundle-bottom"><strong>${money(b.price)}</strong><button data-bundle="${b.id}">أضف الباقة +</button></div></div>
  </article>`}).join('');
}

function addToCart(id,q=1){cart[id]=(cart[id]||0)+q;save();renderCart();toast('تمت الإضافة إلى السلة')}
function toggleWish(id){wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];save();renderProducts();renderFeatured();toast(wishlist.includes(id)?'تم الحفظ في المفضلة':'تمت الإزالة من المفضلة')}
function totals(){let subtotal=0;Object.entries(cart).forEach(([id,q])=>{const p=PRODUCTS.find(x=>x.id==id);if(p)subtotal+=p.price*q});const shipping=subtotal===0?0:(subtotal>=STORE.freeShippingAt?0:STORE.shippingFee);return{subtotal,shipping,total:subtotal+shipping}}
function renderCart(){
  const entries=Object.entries(cart).filter(([,q])=>q>0);
  if(!entries.length){$('#cartItems').innerHTML='<div class="empty">سلتك فارغة.<br>ابدأ بإضافة منتجات NŪRAN.</div>';$('#cartSubtotal').textContent=money(0);$('#shippingNote').textContent='';return}
  $('#cartItems').innerHTML=entries.map(([id,q])=>{const p=PRODUCTS.find(x=>x.id==id);return `<div class="cart-item"><div class="cart-thumb"><img src="${asset(p.asset)}" alt=""></div><div><h4>${p.ar}</h4><small>${money(p.price)}</small><div class="qty"><button data-dec="${p.id}">−</button><span>${q}</span><button data-inc="${p.id}">+</button></div></div><button class="remove" data-remove="${p.id}">×</button></div>`}).join('');
  const t=totals();$('#cartSubtotal').textContent=money(t.subtotal);$('#shippingNote').textContent=t.shipping===0?'الشحن مجاني لهذا الطلب':`أضف ${money(Math.max(0,STORE.freeShippingAt-t.subtotal))} للحصول على شحن مجاني`;
}

function lock(v){document.body.classList.toggle('lock',v)}
function openCart(){renderCart();$('#cartDrawer').classList.add('open');$('#cartDrawer').setAttribute('aria-hidden','false');$('#backdrop').classList.add('show');lock(true)}
function closeDrawers(){$('#cartDrawer').classList.remove('open');$('#cartDrawer').setAttribute('aria-hidden','true');$('#mobileMenu').classList.remove('open');$('#mobileMenu').setAttribute('aria-hidden','true');$('#backdrop').classList.remove('show');lock(false)}
function openProduct(id){const p=PRODUCTS.find(x=>x.id===id);const cat=CATEGORIES.find(c=>c.id===p.cat);$('#productModalCard').innerHTML=`
<button class="modal-close" data-close-product>×</button>
<div class="modal-image"><img src="${asset(p.asset)}" alt="${p.ar}"></div>
<div class="modal-copy"><span class="eyebrow">${cat?.en||''}</span><h2>${p.ar}</h2><div class="modal-en">${p.en}</div><div class="rating">★★★★★ <span>${p.rating} · ${p.reviews} تقييم</span></div><p>منتج من عائلة NŪRAN بتصميم موحّد وبيانات عبوة مرتبة. تفاصيل التركيبة النهائية وطريقة الاستخدام تُعتمد حسب مواصفات المنتج والمصنّع قبل الإطلاق التجاري.</p><div class="facts"><div><span>الحجم</span><b>${p.size}</b></div><div><span>عدد الحصص</span><b>${p.servings}</b></div><div><span>الفئة</span><b>${cat?.ar||''}</b></div></div><div class="price-row"><strong class="price">${money(p.price)}</strong><button class="btn primary" data-modal-add="${p.id}">أضف للسلة +</button></div></div>`;
$('#productModal').classList.add('open');$('#productModal').setAttribute('aria-hidden','false');lock(true)}
function closeProduct(){$('#productModal').classList.remove('open');$('#productModal').setAttribute('aria-hidden','true');lock(false)}

function openSearch(term=''){$('#searchPanel').classList.add('open');$('#searchPanel').setAttribute('aria-hidden','false');lock(true);$('#searchInput').value=term;runSearch(term);setTimeout(()=>$('#searchInput').focus(),80)}
function closeSearch(){$('#searchPanel').classList.remove('open');$('#searchPanel').setAttribute('aria-hidden','true');lock(false)}
function runSearch(value){const t=value.trim().toLowerCase();const list=t?PRODUCTS.filter(p=>`${p.ar} ${p.en} ${p.variant} ${CATEGORIES.find(c=>c.id===p.cat)?.ar||''}`.toLowerCase().includes(t)):PRODUCTS.slice(0,7);$('#searchResults').innerHTML=list.map(p=>`<button class="search-result" data-search-id="${p.id}"><img src="${asset(p.asset)}" alt=""><span><strong>${p.ar}</strong><small>${p.en}</small></span><b>${money(p.price)}</b></button>`).join('')||'<div class="empty">لا توجد نتائج مطابقة.</div>'}

function applyCategory(cat){activeCat=cat;renderProducts();$$('[data-nav-cat]').forEach(x=>x.classList.toggle('active',x.dataset.navCat===cat));$('#shop').scrollIntoView({behavior:'smooth',block:'start'})}
function checkoutSummary(){const t=totals();$('#checkoutSummary').innerHTML=`<div><span>المنتجات</span><b>${money(t.subtotal)}</b></div><div><span>الشحن</span><b>${t.shipping?money(t.shipping):'مجاني'}</b></div><div><strong>الإجمالي</strong><strong>${money(t.total)}</strong></div>`}
function openCheckout(){if(!Object.keys(cart).length){toast('أضف منتجات للسلة أولًا');return}closeDrawers();checkoutSummary();$('#checkoutModal').classList.add('open');$('#checkoutModal').setAttribute('aria-hidden','false');lock(true)}
function closeCheckout(){$('#checkoutModal').classList.remove('open');$('#checkoutModal').setAttribute('aria-hidden','true');lock(false)}

document.addEventListener('click',e=>{
  const t=e.target.closest('button,[data-id],a[data-scroll]');if(!t)return;
  if(t.dataset.add)addToCart(+t.dataset.add);
  else if(t.dataset.wish)toggleWish(+t.dataset.wish);
  else if(t.dataset.id&&!e.target.closest('[data-add],[data-wish]'))openProduct(+t.dataset.id);
  else if(t.dataset.cat)applyCategory(t.dataset.cat);
  else if(t.dataset.filter!==undefined){activeCat=t.dataset.filter;renderProducts()}
  else if(t.dataset.navCat!==undefined)applyCategory(t.dataset.navCat);
  else if(t.dataset.scroll){document.querySelector(t.dataset.scroll)?.scrollIntoView({behavior:'smooth'})}
  else if(t.dataset.promoCat)applyCategory(t.dataset.promoCat);
  else if(t.dataset.inc){cart[t.dataset.inc]=(cart[t.dataset.inc]||0)+1;save();renderCart()}
  else if(t.dataset.dec){cart[t.dataset.dec]=Math.max(0,(cart[t.dataset.dec]||0)-1);if(!cart[t.dataset.dec])delete cart[t.dataset.dec];save();renderCart()}
  else if(t.dataset.remove){delete cart[t.dataset.remove];save();renderCart();toast('تم حذف المنتج')}
  else if(t.dataset.modalAdd){addToCart(+t.dataset.modalAdd);closeProduct();setTimeout(openCart,80)}
  else if(t.dataset.closeProduct!==undefined)closeProduct();
  else if(t.dataset.closeCart!==undefined||t.dataset.closeMenu!==undefined)closeDrawers();
  else if(t.dataset.closeSearch!==undefined)closeSearch();
  else if(t.dataset.closeCheckout!==undefined)closeCheckout();
  else if(t.dataset.searchId){closeSearch();setTimeout(()=>openProduct(+t.dataset.searchId),70)}
  else if(t.dataset.bundle){const b=BUNDLES.find(x=>x.id===t.dataset.bundle);b.ids.forEach(id=>cart[id]=(cart[id]||0)+1);save();renderCart();toast('تمت إضافة الباقة إلى السلة')}
});

$('#cartBtn').addEventListener('click',openCart);
$('#menuBtn').addEventListener('click',()=>{$('#mobileMenu').classList.add('open');$('#mobileMenu').setAttribute('aria-hidden','false');$('#backdrop').classList.add('show');lock(true)});
$('#backdrop').addEventListener('click',closeDrawers);
$('#searchBtn').addEventListener('click',()=>openSearch(''));
$('#searchInput').addEventListener('input',e=>runSearch(e.target.value));
$('#headerSearch').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();openSearch(e.target.value)}});
$('#headerSearch').addEventListener('focus',e=>{if(e.target.value.trim())openSearch(e.target.value)});
$('#sortSelect').addEventListener('change',renderProducts);
$('#checkoutBtn').addEventListener('click',openCheckout);
$('#wishBtn').addEventListener('click',()=>{if(!wishlist.length){toast('المفضلة فارغة');return}activeCat='all';renderProducts();$('#shop').scrollIntoView({behavior:'smooth'});toast(`${wishlist.length} منتج في المفضلة`)});
$('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();e.target.reset();toast('تم تسجيل البريد في القائمة')});
$('#checkoutForm').addEventListener('submit',e=>{e.preventDefault();toast('الواجهة جاهزة — يلزم ربط نظام الطلبات وبوابة الدفع بحساب التاجر قبل الاستلام الفعلي للطلبات')});
$('#productModal').addEventListener('click',e=>{if(e.target===$('#productModal'))closeProduct()});
$('#searchPanel').addEventListener('click',e=>{if(e.target===$('#searchPanel'))closeSearch()});
$('#checkoutModal').addEventListener('click',e=>{if(e.target===$('#checkoutModal'))closeCheckout()});
$$('.mobile-menu a').forEach(a=>a.addEventListener('click',closeDrawers));
window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawers();closeProduct();closeSearch();closeCheckout()}});

initImages();renderNav();renderCategories();renderFeatured();renderFilters();renderProducts();renderBundles();renderCart();updateCounts();