const PRODUCTS=[
  {id:1,name:'Daily Multi 01',ar:'مالتي فيتامين يومي',cat:'daily',price:149,old:169,rating:4.9,reviews:184,badge:'BESTSELLER',dose:'2 كبسولة',servings:'30 حصة',key:'Vitamins + Minerals',kicker:'EVERYDAY',image:'https://images.unsplash.com/photo-1763667926453-6a992d38ac43?auto=format&fit=crop&w=1000&q=88',position:'center',desc:'تركيبة يومية تجريبية ضمن نموذج العرض، مصممة ببطاقة معلومات واضحة وتجربة شراء راقية.'},
  {id:2,name:'D3 + K2',ar:'فيتامين D3 + K2',cat:'daily',price:119,old:null,rating:4.8,reviews:96,badge:'DAILY',dose:'1 كبسولة',servings:'60 حصة',key:'D3 + K2',kicker:'ESSENTIAL',image:'https://images.unsplash.com/photo-1763668177859-0ed5669a795e?auto=format&fit=crop&w=1000&q=88',position:'center',desc:'منتج تجريبي لعرض كيفية تقديم المكونات والجرعات والمعلومات الأساسية بصورة مختصرة.'},
  {id:3,name:'Whey 24',ar:'بروتين واي 24',cat:'performance',price:219,old:249,rating:4.9,reviews:241,badge:'PERFORMANCE',dose:'1 مكيال',servings:'30 حصة',key:'24g Protein',kicker:'RECOVERY',image:'https://images.unsplash.com/photo-1775200279682-cf9af4cb2e4e?auto=format&fit=crop&w=1000&q=88',position:'center',desc:'تصميم منتج رياضي تجريبي يبرز كمية البروتين والحصص مع إضافة سريعة للسلة.'},
  {id:4,name:'Crea 5',ar:'كرياتين مونوهيدرات',cat:'performance',price:129,old:null,rating:4.8,reviews:151,badge:'5G CREATINE',dose:'5 جم',servings:'60 حصة',key:'Creatine Mono',kicker:'STRENGTH',image:'https://images.unsplash.com/photo-1693996046744-d7d7434bc777?auto=format&fit=crop&w=1000&q=88',position:'center',desc:'نموذج لمنتج أحادي المكوّن بمعلومات مباشرة وتجربة شراء مناسبة لمنتجات الأداء الرياضي.'},
  {id:5,name:'Hydra',ar:'إلكترولايتس هيدرا',cat:'energy',price:109,old:129,rating:4.7,reviews:77,badge:'HYDRATION',dose:'1 ظرف',servings:'20 حصة',key:'Electrolytes',kicker:'ZERO SUGAR',image:'https://images.unsplash.com/photo-1775199603318-7f8a9a63b40d?auto=format&fit=crop&w=1000&q=88',position:'center',desc:'منتج تجريبي لفئة الترطيب والطاقة، بواجهة تساعد العميل على فهم الاستخدام والحصص سريعاً.'},
  {id:6,name:'B12 Active',ar:'فيتامين B12 أكتف',cat:'energy',price:89,old:null,rating:4.7,reviews:68,badge:'ENERGY',dose:'1 قرص',servings:'60 حصة',key:'Vitamin B12',kicker:'ACTIVE',image:'https://images.unsplash.com/photo-1596177583101-26b7dada4f5c?auto=format&fit=crop&w=1000&q=88',position:'center',desc:'نموذج عرض لفئة الطاقة اليومية مع تنظيم بسيط للبيانات والسعر والتقييم.'},
  {id:7,name:'Mag 03',ar:'ماغنيسيوم 03',cat:'sleep',price:139,old:null,rating:4.9,reviews:133,badge:'EVENING',dose:'2 كبسولة',servings:'30 حصة',key:'Magnesium',kicker:'NIGHT ROUTINE',image:'https://images.unsplash.com/photo-1697273245326-1a3736f6f428?auto=format&fit=crop&w=1000&q=88',position:'center',desc:'نموذج لفئة الروتين المسائي، مع التأكيد أن هذا المحتوى تجريبي وليس توصية صحية شخصية.'},
  {id:8,name:'Omega Pure',ar:'أوميغا بيور',cat:'daily',price:159,old:179,rating:4.8,reviews:112,badge:'OMEGA-3',dose:'2 كبسولة',servings:'45 حصة',key:'Omega-3',kicker:'DAILY',image:'https://images.unsplash.com/photo-1772191399367-91ed8d95664b?auto=format&fit=crop&w=1000&q=88',position:'center',desc:'منتج تجريبي يكمل مجموعة العافية اليومية ويعرض بنية صفحة منتج واضحة ومختصرة.'}
];

let cart=safeParse('nuranCart',{});
let wishlist=safeParse('nuranWish',[]);
let activeFilter='all';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const money=n=>new Intl.NumberFormat('ar-SA',{style:'currency',currency:'SAR',maximumFractionDigits:0}).format(n);

function safeParse(key,fallback){try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}}
function image(p,cls=''){return `<img class="${cls}" src="${p.image}" alt="${p.ar}" loading="lazy" style="object-position:${p.position||'center'}">`}
function persist(){localStorage.setItem('nuranCart',JSON.stringify(cart));localStorage.setItem('nuranWish',JSON.stringify(wishlist));updateCounts()}
function updateCounts(){const count=Object.values(cart).reduce((a,b)=>a+b,0);$('#cartCount').textContent=count;$('#wishCount').textContent=wishlist.length}
function toast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>t.classList.remove('show'),1900)}

function renderProducts(){
  let list=[...PRODUCTS];
  if(activeFilter!=='all')list=list.filter(p=>p.cat===activeFilter);
  const sort=$('#sortSelect').value;
  if(sort==='low')list.sort((a,b)=>a.price-b.price);
  if(sort==='high')list.sort((a,b)=>b.price-a.price);
  if(sort==='rating')list.sort((a,b)=>b.rating-a.rating);
  $('#productCount').textContent=`${list.length} ${list.length===1?'منتج':'منتجات'}`;
  $('#productGrid').innerHTML=list.length?list.map(p=>`
    <article class="product-card reveal visible" data-id="${p.id}">
      <div class="product-media">
        ${image(p)}
        <span class="badge">${p.badge}</span>
        <button class="wish-btn ${wishlist.includes(p.id)?'active':''}" data-wish="${p.id}" aria-label="${wishlist.includes(p.id)?'إزالة من':'إضافة إلى'} المفضلة">${wishlist.includes(p.id)?'♥':'♡'}</button>
        <button class="product-quick" data-view="${p.id}">عرض سريع</button>
      </div>
      <div class="product-info">
        <div class="product-kicker"><span>${p.kicker}</span><span>${p.servings}</span></div>
        <h3>${p.ar}</h3><div class="en-name">${p.name}</div>
        <div class="product-rating"><span>★★★★★</span><small>${p.rating} · ${p.reviews} تقييم تجريبي</small></div>
        <div class="price-row">
          <div><span class="price">${money(p.price)}</span>${p.old?`<span class="old-price">${money(p.old)}</span>`:''}</div>
          <button class="quick-add" data-add="${p.id}">أضف للسلة +</button>
        </div>
      </div>
    </article>`).join(''):'<div class="no-results">لا توجد منتجات في هذا التصنيف حاليًا.</div>';
}

function addCart(id,q=1){cart[id]=(cart[id]||0)+q;persist();renderCart();toast('تمت الإضافة إلى السلة')}
function toggleWish(id){wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];persist();renderProducts();toast(wishlist.includes(id)?'تمت الإضافة للمفضلة':'تمت الإزالة من المفضلة')}

function renderCart(){
  const entries=Object.entries(cart).filter(([,q])=>q>0);
  if(!entries.length){$('#cartItems').innerHTML='<div class="empty">سلتك فارغة.<br><small>ابدأ باختيار منتجاتك من مجموعة نوران.</small></div>';$('#cartTotal').textContent=money(0);return}
  let total=0;
  $('#cartItems').innerHTML=entries.map(([id,q])=>{const p=PRODUCTS.find(x=>x.id==id);if(!p)return'';total+=p.price*q;return `
    <div class="cart-item">
      <div class="cart-thumb">${image(p)}</div>
      <div><h4>${p.ar}</h4><small>${money(p.price)}</small><div class="cart-qty"><button data-dec="${p.id}">−</button><span>${q}</span><button data-inc="${p.id}">+</button></div></div>
      <button class="remove" data-remove="${p.id}" aria-label="حذف المنتج">×</button>
    </div>`}).join('');
  $('#cartTotal').textContent=money(total);
}

function setOverlay(open){document.body.classList.toggle('no-scroll',open)}
function openCart(){renderCart();closeMenuOnly();$('#cartDrawer').classList.add('open');$('#cartDrawer').setAttribute('aria-hidden','false');$('#backdrop').classList.add('show');setOverlay(true)}
function closeMenuOnly(){$('#mobileMenu').classList.remove('open');$('#mobileMenu').setAttribute('aria-hidden','true')}
function closeDrawers(){$('#cartDrawer').classList.remove('open');$('#cartDrawer').setAttribute('aria-hidden','true');closeMenuOnly();$('#backdrop').classList.remove('show');setOverlay(false)}

function openProduct(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  $('#modalCard').innerHTML=`
    <button class="icon-btn modal-close" data-close-modal aria-label="إغلاق">×</button>
    <div class="modal-art">${image(p)}</div>
    <div class="modal-copy">
      <span class="eyebrow dark">${p.badge}</span>
      <h2>${p.ar}</h2><div class="modal-en">${p.name.toUpperCase()}</div>
      <div class="modal-rating">★★★★★ &nbsp; ${p.rating} · ${p.reviews} تقييم تجريبي</div>
      <p>${p.desc}</p>
      <div class="facts"><div><span>الجرعة على العبوة</span><b>${p.dose}</b></div><div><span>عدد الحصص</span><b>${p.servings}</b></div><div><span>المكوّن الرئيسي</span><b>${p.key}</b></div></div>
      <div class="modal-price-row"><strong>${money(p.price)}</strong><button class="btn btn-dark" data-modal-add="${p.id}"><span>أضف للسلة</span><b>+</b></button></div>
      <p class="modal-disclaimer">محتوى تجريبي لأغراض العرض فقط، وليس نصيحة صحية أو طبية شخصية.</p>
    </div>`;
  $('#productModal').classList.add('open');$('#productModal').setAttribute('aria-hidden','false');setOverlay(true)
}
function closeModal(){$('#productModal').classList.remove('open');$('#productModal').setAttribute('aria-hidden','true');setOverlay(false)}

function openSearch(){$('#searchPanel').classList.add('open');$('#searchPanel').setAttribute('aria-hidden','false');setOverlay(true);setTimeout(()=>$('#searchInput').focus(),120);search('')}
function closeSearch(){$('#searchPanel').classList.remove('open');$('#searchPanel').setAttribute('aria-hidden','true');setOverlay(false)}
function search(value){
  const term=value.trim().toLowerCase();
  const list=term?PRODUCTS.filter(p=>`${p.name} ${p.ar} ${p.key} ${p.kicker}`.toLowerCase().includes(term)):PRODUCTS.slice(0,5);
  $('#searchResults').innerHTML=list.map(p=>`<button class="search-result" data-search-product="${p.id}">${image(p)}<span><strong>${p.ar}</strong><small>${p.name}</small></span><b>${money(p.price)}</b></button>`).join('')||'<div class="empty">لا توجد نتائج مطابقة.</div>';
}

function applyFilter(cat,scroll=true){
  activeFilter=cat;
  $$('.chip').forEach(x=>x.classList.toggle('active',x.dataset.filter===cat));
  renderProducts();
  if(scroll)$('#shop').scrollIntoView({behavior:'smooth',block:'start'});
}

function initReveal(){
  if(!('IntersectionObserver'in window)){$$('.reveal').forEach(el=>el.classList.add('visible'));return}
  const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -35px'});
  $$('.reveal:not(.visible)').forEach(el=>obs.observe(el));
}

function initVideo(){
  const video=$('#heroVideo'),btn=$('#videoToggle'),label=$('#videoToggleText');
  if(!video||!btn)return;
  const setState=()=>{label.textContent=video.paused?'تشغيل الحركة':'إيقاف الحركة';btn.querySelector('.video-dot').style.opacity=video.paused?'.35':'1'};
  btn.addEventListener('click',()=>{video.paused?video.play().catch(()=>{}):video.pause();setState()});
  video.addEventListener('playing',setState);video.addEventListener('pause',setState);video.play().catch(()=>setState());
}

document.addEventListener('click',e=>{
  const target=e.target.closest('button,[data-id]');if(!target)return;
  if(target.dataset.add)addCart(+target.dataset.add);
  else if(target.dataset.wish)toggleWish(+target.dataset.wish);
  else if(target.dataset.view)openProduct(+target.dataset.view);
  else if(target.dataset.id&&!e.target.closest('[data-add],[data-wish],[data-view]'))openProduct(+target.dataset.id);
  else if(target.dataset.inc){cart[target.dataset.inc]=(cart[target.dataset.inc]||0)+1;persist();renderCart()}
  else if(target.dataset.dec){cart[target.dataset.dec]=Math.max(0,(cart[target.dataset.dec]||0)-1);if(!cart[target.dataset.dec])delete cart[target.dataset.dec];persist();renderCart()}
  else if(target.dataset.remove){delete cart[target.dataset.remove];persist();renderCart();toast('تم حذف المنتج')}
  else if(target.dataset.modalAdd){addCart(+target.dataset.modalAdd);closeModal();setTimeout(openCart,120)}
  else if(target.dataset.closeModal!==undefined)closeModal();
  else if(target.dataset.closeCart!==undefined||target.dataset.closeMenu!==undefined)closeDrawers();
  else if(target.dataset.searchProduct){closeSearch();setTimeout(()=>openProduct(+target.dataset.searchProduct),100)}
  else if(target.dataset.concierge)applyFilter(target.dataset.concierge);
});

$('#cartBtn').addEventListener('click',openCart);
$('#menuBtn').addEventListener('click',()=>{$('#mobileMenu').classList.add('open');$('#mobileMenu').setAttribute('aria-hidden','false');$('#backdrop').classList.add('show');setOverlay(true)});
$('#backdrop').addEventListener('click',closeDrawers);
$('#searchBtn').addEventListener('click',openSearch);
$('[data-close-search]').addEventListener('click',closeSearch);
$('#searchPanel').addEventListener('click',e=>{if(e.target===$('#searchPanel'))closeSearch()});
$('#productModal').addEventListener('click',e=>{if(e.target===$('#productModal'))closeModal()});
$('#searchInput').addEventListener('input',e=>search(e.target.value));

$$('.chip').forEach(btn=>btn.addEventListener('click',()=>applyFilter(btn.dataset.filter,false)));
$('#sortSelect').addEventListener('change',renderProducts);
$$('.goal-card').forEach(card=>card.addEventListener('click',()=>applyFilter(card.dataset.category)));
$$('.mobile-menu a').forEach(a=>a.addEventListener('click',closeDrawers));

$('#bundleAdd').addEventListener('click',()=>{cart[3]=(cart[3]||0)+1;cart[4]=(cart[4]||0)+1;cart[5]=(cart[5]||0)+1;persist();renderCart();toast('تمت إضافة باقة الأداء كاملة')});
$('#checkoutBtn').addEventListener('click',()=>toast('الدفع غير مفعّل في نموذج العرض'));
$('#wishlistBtn').addEventListener('click',()=>{if(!wishlist.length){toast('المفضلة فارغة حاليًا');return}applyFilter('all');toast(`${wishlist.length} منتج محفوظ في المفضلة`)});
$('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();e.target.reset();toast('تم تسجيل الاشتراك التجريبي')});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawers();closeModal();closeSearch()}});

renderProducts();renderCart();updateCounts();initReveal();initVideo();
