var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequire8a80;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequire8a80=a);var r=a("31u3U"),o=a("7Sa78"),i=a("iJAZj"),s=a("8FnLx");var l=a("lRJrH");a("1iCTa");const c=new(0,r.FavoriteStorage),d=new(0,r.ReadStorage);(0,s.oNmobileMenu)(),(0,i.searchInputAnimation)(),function(){const e=document.querySelector(".nav__link--current");e&&e.classList.remove("nav__link--current");const n=window.location.pathname,t=[...document.querySelectorAll(".nav__list .nav__link")];"/goit-js-news-app/read.html"!==n?"/goit-js-news-app/favorite.html"!==n||t[1].classList.add("nav__link--current"):t[2].classList.add("nav__link--current")}(),(0,l.monitorAuthState)();const u=document.querySelector(".favorite__conteiner");!function(e){const n=e.map((({src:e,title:n,url:t,info:a,published_date:r,alt:o,section:i})=>{let s="",l="",u="",p="",v="";return c.hasNews({url:t})?(l="Remove from favorite",s="favorite-button__activ",u="news-icon"):(l="Add to favorite",s="add-to-favorite",u="active-news-icon"),d.hasNews({url:t})?(p=" opacity",v='<span class="news__read-status">Already read <span class="card-icon"></span>'):p="",`<li class="card-photo${p}">\n                            <div class="image-wrapper">\n                                <img class="photo" src="${e}" alt="${o}" loading="lazy" />\n                            </div>\n                            <div class="card-category">${i}</div>\n                            <button type="button" class="${s}">${l} <span><svg class="item-news__block-icon ${u}" width="16" height="16" viewBox="0 0 37 32">\n                            <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"\n                                stroke-width="2.2857"\n                                d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z">\n                            </path>\n                        </svg></span></button>\n                            <h2 class="card-title">${n}</h2>\n                            <p class="card-info">${a}</p>\n                            <span class="card-date">${r}</span>\n                            <a href="${t}" class="card-url">Read more</a>\n                            ${v}\n                        </li>`})).join("");u.innerHTML=n}(c.getNews()),u.addEventListener("click",o.onCardClick),u.addEventListener("click",o.onReadClick),""==u.innerHTML&&u.insertAdjacentHTML("afterend",'<div class="news__plug"></div>'),document.querySelector(".search-form__input").addEventListener("click",(()=>{window.location.href="./index.html"}));
//# sourceMappingURL=favorite.1f66c27e.js.map
