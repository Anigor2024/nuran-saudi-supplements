(()=>{const icon=document.createElement('link');icon.rel='icon';icon.href='favicon.svg';icon.type='image/svg+xml';document.head.appendChild(icon);const manifest=document.createElement('link');manifest.rel='manifest';manifest.href='manifest.webmanifest';document.head.appendChild(manifest);})();
const ASSETS=window.NURAN_ASSETS||{},CATS=window.NURAN_CATEGORIES||[],PRODUCTS=window.NURAN_PRODUCTS||[],BUNDLES=window.NURAN_BUNDLES||[];
const STORE={freeShippingAt:299,shippingFee:25};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],money=n=>new Intl.NumberFormat('ar-SA',{style:'currency',currency:'SAR',maximumFractionDigits:0}).format(n);
const asset=k=>ASSETS[k]||'',load=(k,f)=>{try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch{return f}};
let cart=load('nuranCart',{}),wish=load('nuranWish',[]),compare=load('nuranCompare',[]);

function save(){localStorage.setItem('nuranCart',JSON.stringify(cart));localStorage.setItem('nuranWish',JSON.stringify(wish));localStorage.setItem('nuranCompare',JSON.stringify(compare));updateCounts()}
function pageName(){return document.body.dataset.page||'home'}
function navActive(name){return pageName()===name?'active':''}
function chrome(){
 const header=document.getElementById('siteHeader'),footer=document.getElementById('siteFooter');
 if(header)header.innerHTML=`
 <div class="topbar"><div class="container"><span>توصيل لجميع مناطق المملكة</span><i>•</i><span>شحن مجاني للطلبات فوق 299 ر.س</span><i>•</i><span>خدمة العملاء 24/7</span></div></div>
 <header class="site-header">
  <div class="container header-row">
   <a class="brand" href="index.html"><span>NŪRAN</span><small>نوران</small></a>
   <div class="site-search"><span>⌕</span><input id="siteSearchInput" type="search" placeholder="ابحث عن منتج، فئة أو هدف..." autocomplete="off"></div>
   <div class="header-actions">
    <button class="icon-btn mobile-only" id="menuBtn" aria-label="القائمة">☰</button>
    <button class="icon-btn mobile-only" id="mobileSearchBtn" aria-label="بحث">⌕</button>
    <button class="icon-btn" id="wishBtn" aria-label="المفضلة">♡<b id="wishCount">0</b></button>
    <button class="icon-btn" id="cartBtn" aria-label="السلة">▱<b id="cartCount">0</b></button>
   </div>
  </div>
  <nav class="main-nav container">
    <a class="${navActive('home')}" href="index.html">الرئيسية</a>
    <div class="mega-wrap"><button class="mega-trigger">تسوّق</button>
      <div class="mega-menu">
       <div class="mega-feature"><div><span class="eyebrow">NŪRAN EDIT</span><h3>ابدأ من هدفك</h3><p>اختيارات مركزة بدل عشرات القرارات.</p><a class="btn green" href="routine.html">جرّب NŪRAN Match</a></div><img src="${asset('hero')}" alt=""></div>
       <div class="mega-links">
        <div><b>الفئات</b>${CATS.slice(0,3).map(c=>`<a href="shop.html?cat=${c.id}">${c.ar}</a>`).join('')}</div>
        <div><b>العافية</b>${CATS.slice(3).map(c=>`<a href="shop.html?cat=${c.id}">${c.ar}</a>`).join('')}</div>
        <div><b>اكتشف</b><a href="shop.html">كل المنتجات</a><a href="bundles.html">الباقات</a><a href="stack.html">Stack Builder</a><a href="categories.html">دليل الفئات</a><a href="routine.html">اختبار الروتين</a></div>
       </div>
      </div>
    </div>
    <a class="${navActive('shop')}" href="shop.html">كل المنتجات</a>
    <a class="${navActive('categories')}" href="categories.html">الفئات</a>
    <a class="${navActive('bundles')}" href="bundles.html">الباقات</a>
    <a class="${navActive('stack')}" href="stack.html">Stack Builder</a>
    <a class="${navActive('routine')}" href="routine.html">NŪRAN Match</a>
    <a class="${navActive('journal')}" href="journal.html">المجلة</a>
    <a class="${navActive('about')}" href="about.html">عن نوران</a>
    <a class="${navActive('support')}" href="support.html">المساعدة</a>
  </nav>
 </header>
 <aside class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <div class="drawer-head"><div><small>NŪRAN</small><strong>القائمة</strong></div><button data-close-menu>×</button></div>
  <a href="index.html">الرئيسية <span>←</span></a><a href="shop.html">كل المنتجات <span>←</span></a><a href="categories.html">الفئات <span>←</span></a><a href="bundles.html">الباقات <span>←</span></a><a href="stack.html">Stack Builder <span>←</span></a><a href="routine.html">NŪRAN Match <span>←</span></a><a href="journal.html">المجلة <span>←</span></a><a href="about.html">عن نوران <span>←</span></a><a href="support.html">المساعدة <span>←</span></a>
 </aside>
 <div class="backdrop" id="backdrop"></div>`;
 if(footer)footer.innerHTML=`
 <footer><div class="container footer-grid">
  <div class="footer-logo"><a class="brand" href="index.html"><span>NŪRAN</span><small>نوران</small></a><p>علامة مكملات غذائية ورياضية بهوية متناسقة وتجربة تسوق عربية موجهة للسوق السعودي.</p></div>
  <div><b>التسوّق</b><a href="shop.html">جميع المنتجات</a><a href="categories.html">الفئات</a><a href="bundles.html">الباقات</a><a href="stack.html">Stack Builder</a><a href="routine.html">اختبار الروتين</a></div>
  <div><b>اكتشف</b><a href="about.html">عن NŪRAN</a><a href="journal.html">المجلة</a><a href="support.html">الأسئلة الشائعة</a><a href="support.html#shipping">الشحن والإرجاع</a></div>
  <div><b>قبل الإطلاق التجاري</b><p>تُعتمد التركيبة النهائية والملصقات والمصنّع والتسجيلات النظامية وسياسات الدفع والشحن لكل SKU قبل البيع الفعلي.</p></div>
 </div><div class="container footer-bottom"><span>© 2026 NŪRAN</span><span>SAUDI ARABIA · SAR · AR/RTL</span></div></footer>`;
 document.body.insertAdjacentHTML('beforeend',`
 <div class="drawer" id="cartDrawer" aria-hidden="true"><div class="drawer-head"><div><small>NŪRAN BAG</small><strong>سلة التسوق</strong></div><button data-close-cart>×</button></div><div class="drawer-body" id="cartItems"></div><div class="cart-footer"><div class="subtotal"><span>المجموع</span><strong id="cartSubtotal">0 ر.س</strong></div><div class="shipping-note" id="shippingNote"></div><a class="btn primary wide" href="checkout.html">إتمام الطلب</a></div></div>
 <div class="search-panel" id="searchPanel" aria-hidden="true"><div class="search-box"><button data-close-search>×</button><span class="eyebrow">SEARCH NŪRAN</span><h3>ابحث في المنتجات</h3><div class="search-input"><span>⌕</span><input id="searchInput" type="search" placeholder="بروتين، كرياتين، أوميغا..." autocomplete="off"></div><div id="searchResults"></div></div></div>
 <div class="compare-bar" id="compareBar"><span id="compareCount">0 منتجات للمقارنة</span><button data-open-compare>قارن الآن</button></div>
 <div class="modal" id="compareModal" aria-hidden="true"><div class="compare-modal"><button class="modal-close" data-close-compare>×</button><span class="eyebrow">PRODUCT COMPARE</span><h2>مقارنة المنتجات</h2><div id="compareTable"></div></div></div>
 <div class="modal" id="quickViewModal" aria-hidden="true"><div class="quick-view-card" id="quickViewCard"></div></div>
 <nav class="mobile-dock" aria-label="تنقل سريع"><a href="index.html"><span>⌂</span><b>الرئيسية</b></a><a href="shop.html"><span>▦</span><b>المتجر</b></a><a href="routine.html"><span>✦</span><b>Match</b></a><a href="wishlist.html"><span>♡</span><b>المفضلة</b></a><button id="dockCart"><span>▱</span><b>السلة</b></button></nav>
 <div class="scroll-progress" id="scrollProgress"></div>
 <div class="toast" id="toast"></div>
 bindChrome();updateCounts();renderCart();updateCompareBar();
}
function bindChrome(){
 $('#menuBtn')?.addEventListener('click',()=>{ $('#mobileMenu').classList.add('open');$('#backdrop').classList.add('show');document.body.classList.add('lock')});
 $('#backdrop')?.addEventListener('click',closeDrawers);$('#cartBtn')?.addEventListener('click',openCart);$('#mobileSearchBtn')?.addEventListener('click',()=>openSearch(''));
 $('#siteSearchInput')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();openSearch(e.target.value)}});$('#siteSearchInput')?.addEventListener('focus',e=>{if(e.target.value.trim())openSearch(e.target.value)});
 $('#wishBtn')?.addEventListener('click',()=>{location.href='wishlist.html'});
}
function toast(msg){const t=$('#toast');if(!t)return;t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),1800)}
function updateCounts(){if($('#cartCount'))$('#cartCount').textContent=Object.values(cart).reduce((a,b)=>a+b,0);if($('#wishCount'))$('#wishCount').textContent=wish.length}
function save(){localStorage.setItem('nuranCart',JSON.stringify(cart));localStorage.setItem('nuranWish',JSON.stringify(wish));localStorage.setItem('nuranCompare',JSON.stringify(compare));updateCounts()}
function totals(){let subtotal=0;Object.entries(cart).forEach(([id,q])=>{const p=PRODUCTS.find(x=>x.id==id);if(p)subtotal+=p.price*q});const shipping=subtotal===0?0:(subtotal>=STORE.freeShippingAt?0:STORE.shippingFee);return{subtotal,shipping,total:subtotal+shipping}}
function add(id,q=1){cart[id]=(cart[id]||0)+q;save();renderCart();toast('تمت الإضافة إلى السلة')}
function toggleWish(id){wish=wish.includes(id)?wish.filter(x=>x!==id):[...wish,id];save();refreshProductAreas();toast(wish.includes(id)?'تم الحفظ في المفضلة':'تمت الإزالة من المفضلة')}
function toggleCompare(id){if(compare.includes(id))compare=compare.filter(x=>x!==id);else{if(compare.length>=3)return toast('يمكن مقارنة 3 منتجات بحد أقصى');compare=[...compare,id]}save();refreshProductAreas();updateCompareBar()}
function updateCompareBar(){const bar=$('#compareBar');if(!bar)return;$('#compareCount').textContent=`${compare.length} منتجات للمقارنة`;bar.classList.toggle('show',compare.length>0)}
function openCompare(){if(!compare.length)return;const list=compare.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);$('#compareTable').innerHTML=`<div class="compare-table"><div class="head">المعيار</div>${list.map(p=>`<div class="compare-product"><img src="${asset(p.asset)}"><h4>${p.ar}</h4><small>${p.en}</small></div>`).join('')}<div class="head">السعر</div>${list.map(p=>`<div><b>${money(p.price)}</b></div>`).join('')}<div class="head">الحجم</div>${list.map(p=>`<div>${p.size}</div>`).join('')}<div class="head">الحصص</div>${list.map(p=>`<div>${p.servings}</div>`).join('')}<div class="head">التقييم</div>${list.map(p=>`<div>★ ${p.rating}</div>`).join('')}<div class="head">إجراء</div>${list.map(p=>`<div><a class="btn green" href="product.html?id=${p.id}">عرض المنتج</a></div>`).join('')}</div>`;$('#compareModal').classList.add('open');document.body.classList.add('lock')}
function closeCompare(){$('#compareModal')?.classList.remove('open');document.body.classList.remove('lock')}
function renderCart(){const root=$('#cartItems');if(!root)return;const entries=Object.entries(cart).filter(([,q])=>q>0);if(!entries.length){root.innerHTML='<div class="empty">سلتك فارغة.<br>ابدأ باختيار منتجات NŪRAN.</div>';$('#cartSubtotal').textContent=money(0);$('#shippingNote').textContent='';return}root.innerHTML=entries.map(([id,q])=>{const p=PRODUCTS.find(x=>x.id==id);return `<div class="cart-item"><img src="${asset(p.asset)}"><div><h4>${p.ar}</h4><small>${money(p.price)}</small><div class="qty"><button data-dec="${p.id}">−</button><span>${q}</span><button data-inc="${p.id}">+</button></div></div><button class="remove" data-remove="${p.id}">×</button></div>`}).join('');const t=totals();$('#cartSubtotal').textContent=money(t.subtotal);const remain=Math.max(0,STORE.freeShippingAt-t.subtotal),pct=Math.min(100,Math.round((t.subtotal/STORE.freeShippingAt)*100));$('#shippingNote').innerHTML=t.shipping===0?'<div class="cart-progress-label">✓ حصلت على الشحن المجاني</div><div class="cart-progress"><span style="width:100%"></span></div>':`<div class="cart-progress-label">أضف ${money(remain)} للحصول على شحن مجاني</div><div class="cart-progress"><span style="width:${pct}%"></span></div>`;}
function openCart(){$('#cartDrawer').classList.add('open');$('#backdrop').classList.add('show');document.body.classList.add('lock');renderCart()}
function closeDrawers(){$('#cartDrawer')?.classList.remove('open');$('#mobileMenu')?.classList.remove('open');$('#backdrop')?.classList.remove('show');document.body.classList.remove('lock')}
function openSearch(term=''){$('#searchPanel').classList.add('open');document.body.classList.add('lock');$('#searchInput').value=term;runSearch(term);setTimeout(()=>$('#searchInput').focus(),60)}
function closeSearch(){$('#searchPanel')?.classList.remove('open');document.body.classList.remove('lock')}
function runSearch(v){const t=v.trim().toLowerCase(),list=t?PRODUCTS.filter(p=>`${p.ar} ${p.en} ${p.variant} ${CATS.find(c=>c.id===p.cat)?.ar||''}`.toLowerCase().includes(t)):PRODUCTS.slice(0,7);$('#searchResults').innerHTML=list.map(p=>`<button class="search-result" data-search-id="${p.id}"><img src="${asset(p.asset)}"><span><strong>${p.ar}</strong><small>${p.en}</small></span><b>${money(p.price)}</b></button>`).join('')||'<div class="empty">لا توجد نتائج مطابقة.</div>'}
function productCard(p){const cat=CATS.find(c=>c.id===p.cat);return `<article class="product-card" data-product-id="${p.id}"><div class="product-image">${p.badge?`<span class="product-badge ${p.old?'sale':''}">${p.badge}</span>`:''}<button class="wish ${wish.includes(p.id)?'active':''}" data-wish="${p.id}">${wish.includes(p.id)?'♥':'♡'}</button><button class="compare-btn ${compare.includes(p.id)?'active':''}" data-compare="${p.id}" title="مقارنة">⇄</button><button class="quick-view-btn" data-quick="${p.id}">عرض سريع</button><img src="${asset(p.asset)}" alt="${p.ar}" loading="lazy"><span class="variant-chip">${p.variant}</span></div><div class="product-info"><div class="product-category">${cat?.en||''}</div><h3>${p.ar}</h3><div class="product-en">${p.en}</div><div class="rating">★★★★★ <span>${p.rating} · ${p.reviews}</span></div><div class="price-row"><div><span class="price">${money(p.price)}</span>${p.old?`<span class="old">${money(p.old)}</span>`:''}</div><button class="add-btn" data-add="${p.id}">أضف للسلة +</button></div></div></article>`}
function refreshProductAreas(){['featuredGrid','productGrid','relatedGrid','recentGrid','recommendGrid'].forEach(id=>{const el=document.getElementById(id);if(el&&el.dataset.ids){const ids=el.dataset.ids.split(',').filter(Boolean).map(Number);el.innerHTML=ids.map(i=>PRODUCTS.find(p=>p.id===i)).filter(Boolean).map(productCard).join('')}})}
function bundleCard(b){const ps=b.ids.map(id=>PRODUCTS.find(p=>p.id===id));return `<article class="bundle-card"><div class="bundle-art">${ps.map(p=>`<img src="${asset(p.asset)}" alt="${p.ar}">`).join('')}</div><div class="bundle-info"><small>${b.en}</small><h3>${b.title}</h3><p>${b.desc}</p><div class="bundle-bottom"><strong>${money(b.price)}</strong><button data-bundle="${b.id}">أضف الباقة +</button></div></div></article>`}

function homeInit(){
 $('#homeHeroImage').src=asset('hero');
 const f=[1,6,11,16];$('#featuredGrid').dataset.ids=f.join(',');$('#featuredGrid').innerHTML=f.map(i=>productCard(PRODUCTS.find(p=>p.id===i))).join('');
 $('#homeCategories').innerHTML=CATS.map(c=>`<a class="category-panel" href="shop.html?cat=${c.id}"><div><small>${c.en}</small><h3>${c.ar}</h3><p>${c.desc}</p><span>تسوّق الفئة ←</span></div><img src="${asset(c.asset)}" alt="${c.ar}"></a>`).join('');
}
function categoriesInit(){
 $('#categoryOverview').innerHTML=CATS.map(c=>`<a class="category-panel" href="shop.html?cat=${c.id}"><div><small>${c.en}</small><h3>${c.ar}</h3><p>${c.desc}</p><span>${PRODUCTS.filter(p=>p.cat===c.id).length} منتجات · استكشف ←</span></div><img src="${asset(c.asset)}"></a>`).join('');
}
function shopInit(){
 const params=new URLSearchParams(location.search),cat=params.get('cat')||'all',wishOnly=params.get('wish')==='1';let category=cat;
 const checks=$('#categoryChecks');checks.innerHTML=CATS.map(c=>`<label><input type="radio" name="cat" value="${c.id}" ${category===c.id?'checked':''}> ${c.ar} <small>(${PRODUCTS.filter(p=>p.cat===c.id).length})</small></label>`).join('');
 function render(){let list=wishOnly?PRODUCTS.filter(p=>wish.includes(p.id)):PRODUCTS.filter(p=>category==='all'||p.cat===category);const sort=$('#shopSort').value;if(sort==='low')list.sort((a,b)=>a.price-b.price);if(sort==='high')list.sort((a,b)=>b.price-a.price);if(sort==='rating')list.sort((a,b)=>b.rating-a.rating);$('#shopCount').textContent=`${list.length} منتج`;$('#productGrid').dataset.ids=list.map(p=>p.id).join(',');$('#productGrid').innerHTML=list.map(productCard).join('');}
 checks.addEventListener('change',e=>{category=e.target.value;render();if(innerWidth<=1100)document.querySelector('.filter-panel')?.classList.remove('mobile-open')});$('#shopSort').addEventListener('change',render);document.querySelector('.filter-toggle')?.addEventListener('click',()=>document.querySelector('.filter-panel')?.classList.toggle('mobile-open'));render();
}
function productInit(){
 const id=+(new URLSearchParams(location.search).get('id')||1),p=PRODUCTS.find(x=>x.id===id)||PRODUCTS[0],cat=CATS.find(c=>c.id===p.cat);
 document.title=`${p.ar} | NŪRAN`;$('#productMainImage').src=asset(p.asset);$('#productCat').textContent=cat.ar;$('#productTitle').textContent=p.ar;$('#productEn').textContent=p.en;$('#productRating').innerHTML=`★★★★★ <span>${p.rating} · ${p.reviews} تقييم</span>`;$('#productPrice').textContent=money(p.price);$('#productOld').textContent=p.old?money(p.old):'';$('#factSize').textContent=p.size;$('#factServings').textContent=p.servings;$('#factKey').textContent=p.key;$('#stickyPrice').textContent=money(p.price);
 const related=PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4);$('#relatedGrid').dataset.ids=related.map(x=>x.id).join(',');$('#relatedGrid').innerHTML=related.map(productCard).join('');
 let recent=load('nuranRecent',[]).filter(x=>x!==p.id);recent.unshift(p.id);recent=recent.slice(0,5);localStorage.setItem('nuranRecent',JSON.stringify(recent));const recentProducts=recent.slice(1).map(i=>PRODUCTS.find(x=>x.id===i)).filter(Boolean);if(recentProducts.length){$('#recentSection').hidden=false;$('#recentGrid').dataset.ids=recentProducts.map(x=>x.id).join(',');$('#recentGrid').innerHTML=recentProducts.map(productCard).join('')}
 let qty=1;const qi=$('#productQty');$('#qtyMinus').onclick=()=>{qty=Math.max(1,qty-1);qi.value=qty};$('#qtyPlus').onclick=()=>{qty++;qi.value=qty};$('#productAdd').onclick=()=>add(p.id,qty);$('#stickyAdd').onclick=()=>add(p.id,qty);$('#productWish').onclick=()=>toggleWish(p.id);$('#productCompare').onclick=()=>toggleCompare(p.id);
 const img=$('#productMainImage'),wrap=$('.product-main-image');wrap.addEventListener('mousemove',e=>{const r=wrap.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*100,y=(e.clientY-r.top)/r.height*100;img.style.transformOrigin=`${x}% ${y}%`;img.style.transform='scale(1.35)'});wrap.addEventListener('mouseleave',()=>{img.style.transform='';img.style.transformOrigin='center'});
}
function bundlesInit(){$('#bundleGrid').innerHTML=BUNDLES.map(bundleCard).join('')}
function routineInit(){
 let step=0,answers={goal:null,format:null,budget:null};const steps=[
 {q:'ما هدفك الأساسي؟',opts:[['performance','أداء رياضي','بروتين وكرياتين وترطيب'],['daily','روتين يومي','فيتامينات وأوميغا'],['sleep','روتين مسائي','دعم النوم والاسترخاء'],['hydration','ترطيب','إلكترولايتس يومية']]},
 {q:'ما الشكل الذي تفضله؟',opts:[['powder','مساحيق','بروتين، كرياتين وترطيب'],['caps','كبسولات','فيتامينات وأوميغا ونوم'],['either','لا يهم','اعرض الأنسب لهدفي']]},
 {q:'ما الميزانية المفضلة للمنتج؟',opts:[['150','حتى 150 ر.س','اختيارات اقتصادية'],['250','حتى 250 ر.س','مرونة أكبر'],['any','بدون حد','اعرض أفضل المطابقات']]}
 ];
 function draw(){const s=steps[step];$('#quizProgress').style.width=`${(step/steps.length)*100}%`;$('#quizStep').innerHTML=`<h3>${s.q}</h3><div class="quiz-options">${s.opts.map(o=>`<button class="quiz-option" data-answer="${o[0]}"><b>${o[1]}</b><small>${o[2]}</small></button>`).join('')}</div>`;}
 function finish(){let cat=answers.goal==='performance'?'protein':answers.goal==='daily'?'daily':answers.goal==='sleep'?'sleep':'hydration';let max=answers.budget==='150'?150:answers.budget==='250'?250:9999;let list=PRODUCTS.filter(p=>p.cat===cat&&p.price<=max);if(answers.format==='caps'&&['protein','hydration'].includes(cat))list=PRODUCTS.filter(p=>['daily','omega','sleep'].includes(p.cat)&&p.price<=max);list=list.slice(0,3);$('#quizProgress').style.width='100%';$('#quizStep').innerHTML='';$('#quizResult').classList.add('show');$('#recommendGrid').dataset.ids=list.map(p=>p.id).join(',');$('#recommendGrid').innerHTML=list.map(productCard).join('');localStorage.setItem('nuranRoutine',JSON.stringify({answers,ids:list.map(p=>p.id)}))}
 $('#quizStep').addEventListener('click',e=>{const b=e.target.closest('[data-answer]');if(!b)return;const keys=['goal','format','budget'];answers[keys[step]]=b.dataset.answer;step++;step<steps.length?draw():finish()});draw();
}
function checkoutInit(){
 const root=$('#checkoutItems');const entries=Object.entries(cart).filter(([,q])=>q>0);if(!entries.length){root.innerHTML='<div class="empty">السلة فارغة. <a href="shop.html">اذهب للتسوق</a></div>';$('#checkoutButton').disabled=true}else root.innerHTML=entries.map(([id,q])=>{const p=PRODUCTS.find(x=>x.id==id);return `<div class="summary-item"><img src="${asset(p.asset)}"><div><b>${p.ar}</b><small>الكمية: ${q}</small></div><strong>${money(p.price*q)}</strong></div>`}).join('');const t=totals();$('#sumProducts').textContent=money(t.subtotal);$('#sumShipping').textContent=t.shipping?money(t.shipping):'مجاني';$('#sumTotal').textContent=money(t.total);$('#checkoutForm').addEventListener('submit',e=>{e.preventDefault();toast('واجهة الطلب جاهزة؛ يلزم ربط Backend وبوابة الدفع بحساب التاجر لتفعيل الطلبات الفعلية')})
}
function journalInit(){}
function supportInit(){}


function openQuickView(id){
 const p=PRODUCTS.find(x=>x.id===id),cat=CATS.find(c=>c.id===p?.cat);if(!p)return;
 $('#quickViewCard').innerHTML=`<button class="modal-close" data-close-quick>×</button><div class="quick-view-image"><img src="${asset(p.asset)}" alt="${p.ar}"></div><div class="quick-view-copy"><span class="eyebrow">${cat?.en||''}</span><h2>${p.ar}</h2><small>${p.en}</small><div class="rating">★★★★★ <span>${p.rating} · ${p.reviews} تقييم</span></div><div class="quick-price">${money(p.price)} ${p.old?`<span class="old">${money(p.old)}</span>`:''}</div><div class="quick-facts"><span>${p.size}</span><span>${p.servings}</span><span>${p.key}</span></div><div class="quick-actions"><button class="btn primary" data-add="${p.id}">أضف للسلة</button><a class="btn ghost" href="product.html?id=${p.id}">التفاصيل الكاملة</a></div></div>`;
 $('#quickViewModal').classList.add('open');document.body.classList.add('lock');
}
function closeQuickView(){$('#quickViewModal')?.classList.remove('open');document.body.classList.remove('lock')}

function wishlistInit(){
 const root=$('#wishlistGrid'),count=$('#wishlistPageCount');
 function draw(){
  const list=wish.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
  if(count)count.textContent=`${list.length} منتج محفوظ`;
  if(!list.length){root.innerHTML='<div class="wishlist-empty"><div>♡</div><h2>المفضلة فارغة حاليًا</h2><p>احفظ المنتجات التي تعجبك وارجع لها لاحقًا من أي جهاز تستخدمه عليه نفس المتصفح.</p><a class="btn green" href="shop.html">ابدأ التسوق</a></div>';return}
  root.dataset.ids=list.map(p=>p.id).join(',');root.innerHTML=list.map(productCard).join('');
 }
 draw();
}

function stackInit(){
 let selected=load('nuranStack',[]);
 const root=$('#stackProducts'),summary=$('#stackSummary'),count=$('#stackCount'),saveMsg=$('#stackSaveMsg');
 const pool=[1,6,11,16,21,26].map(id=>PRODUCTS.find(p=>p.id===id));
 function discount(n){return n>=4?.12:n===3?.08:n===2?.05:0}
 function draw(){
  root.innerHTML=pool.map(p=>`<button class="stack-choice ${selected.includes(p.id)?'active':''}" data-stack-id="${p.id}"><span class="stack-check">${selected.includes(p.id)?'✓':'+'}</span><img src="${asset(p.asset)}"><small>${CATS.find(c=>c.id===p.cat)?.ar||''}</small><b>${p.ar}</b><strong>${money(p.price)}</strong></button>`).join('');
  const ps=selected.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean),sub=ps.reduce((a,p)=>a+p.price,0),d=discount(ps.length),saving=Math.round(sub*d),total=sub-saving;
  count.textContent=`${ps.length}/4`;
  summary.innerHTML=ps.length?`<div class="stack-summary-items">${ps.map(p=>`<div><img src="${asset(p.asset)}"><span><b>${p.ar}</b><small>${money(p.price)}</small></span><button data-stack-remove="${p.id}">×</button></div>`).join('')}</div><div class="stack-pricing"><div><span>المجموع</span><b>${money(sub)}</b></div><div><span>خصم الباقة (${Math.round(d*100)}%)</span><b>− ${money(saving)}</b></div><div class="stack-total"><span>الإجمالي</span><strong>${money(total)}</strong></div></div><button class="btn primary wide" id="stackAdd" ${ps.length<2?'disabled':''}>أضف الـStack للسلة</button>`:'<div class="stack-empty">اختر منتجين على الأقل لبناء Stack مخصص.</div>';
  if(saveMsg)saveMsg.textContent=ps.length>=2?`وفرت ${Math.round(d*100)}% على الـStack الحالي`:'خصم 5% يبدأ من منتجين';
  localStorage.setItem('nuranStack',JSON.stringify(selected));
  $('#stackAdd')?.addEventListener('click',()=>{ps.forEach(p=>cart[p.id]=(cart[p.id]||0)+1);save();renderCart();toast('تمت إضافة الـStack إلى السلة')});
 }
 document.addEventListener('click',e=>{const a=e.target.closest('[data-stack-id],[data-stack-remove]');if(!a)return;if(a.dataset.stackId){const id=+a.dataset.stackId;if(selected.includes(id))selected=selected.filter(x=>x!==id);else if(selected.length<4)selected.push(id);else return toast('الحد الأقصى 4 منتجات');draw()}else if(a.dataset.stackRemove){selected=selected.filter(x=>x!==+a.dataset.stackRemove);draw()}});
 draw();
}
document.addEventListener('click',e=>{const t=e.target.closest('button,[data-product-id]');if(!t)return;if(t.dataset.add)add(+t.dataset.add);else if(t.dataset.wish)toggleWish(+t.dataset.wish);else if(t.dataset.compare)toggleCompare(+t.dataset.compare);else if(t.dataset.quick)openQuickView(+t.dataset.quick);else if(t.dataset.productId&&!e.target.closest('[data-add],[data-wish],[data-compare],[data-quick]'))location.href=`product.html?id=${t.dataset.productId}`;else if(t.dataset.inc){cart[t.dataset.inc]=(cart[t.dataset.inc]||0)+1;save();renderCart()}else if(t.dataset.dec){cart[t.dataset.dec]=Math.max(0,(cart[t.dataset.dec]||0)-1);if(!cart[t.dataset.dec])delete cart[t.dataset.dec];save();renderCart()}else if(t.dataset.remove){delete cart[t.dataset.remove];save();renderCart()}else if(t.dataset.closeCart!==undefined||t.dataset.closeMenu!==undefined)closeDrawers();else if(t.dataset.closeSearch!==undefined)closeSearch();else if(t.dataset.openCompare!==undefined)openCompare();else if(t.dataset.closeCompare!==undefined)closeCompare();else if(t.dataset.closeQuick!==undefined)closeQuickView();else if(t.dataset.searchId){closeSearch();location.href=`product.html?id=${t.dataset.searchId}`}else if(t.dataset.bundle){const b=BUNDLES.find(x=>x.id===t.dataset.bundle);b.ids.forEach(id=>cart[id]=(cart[id]||0)+1);save();renderCart();toast('تمت إضافة الباقة للسلة')}});
document.addEventListener('input',e=>{if(e.target.id==='searchInput')runSearch(e.target.value)});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawers();closeSearch();closeCompare();closeQuickView()}});
function init(){chrome();$('#dockCart')?.addEventListener('click',openCart);window.addEventListener('scroll',()=>{document.querySelector('.site-header')?.classList.toggle('scrolled',scrollY>18);const h=document.documentElement,den=h.scrollHeight-h.clientHeight,pct=den?Math.min(100,(h.scrollTop/den)*100):0;if($('#scrollProgress'))$('#scrollProgress').style.width=pct+'%'});$('#quickViewModal')?.addEventListener('click',e=>{if(e.target===$('#quickViewModal'))closeQuickView()});const p=pageName();({home:homeInit,categories:categoriesInit,shop:shopInit,product:productInit,bundles:bundlesInit,routine:routineInit,checkout:checkoutInit,journal:journalInit,support:supportInit,wishlist:wishlistInit,stack:stackInit,about:()=>{}}[p]||(()=>{}))()}
document.addEventListener('DOMContentLoaded',init);