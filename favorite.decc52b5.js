!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in a){var e=a[n];delete a[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){a[n]=e},e.parcelRequired7c6=o);var r=o("UL92Z"),c=o("iLqhe"),i=o("jLIpX"),s=o("cs7FV"),l=o("8nrFW");var d=o("5ZJZA");o("78qpV");var u=new(0,r.FavoriteStorage),v=new(0,r.ReadStorage);(0,s.oNmobileMenu)(),(0,i.searchInputAnimation)(),function(){var e=document.querySelector(".nav__link--current");e&&e.classList.remove("nav__link--current");var t=window.location.pathname,a=n(l)(document.querySelectorAll(".nav__list .nav__link"));"/goit-js-news-app/read.html"!==t?"/goit-js-news-app/favorite.html"!==t||a[1].classList.add("nav__link--current"):a[2].classList.add("nav__link--current")}(),(0,d.monitorAuthState)();var p=document.querySelector(".favorite__conteiner");!function(n){console.log(n);var e=n.map((function(n){var e=n.src,t=n.title,a=n.url,o=n.info,r=n.published_date,c=n.alt,i=n.section,s="",l="",d="",p="",f="";return u.hasNews({url:a})?(l="Remove from favorite",s="favorite-button__activ",d="news-icon"):(l="Add to favorite",s="add-to-favorite",d="active-news-icon"),v.hasNews({url:a})?(p=" opacity",f='<span class="news__read-status">Already read <span class="card-icon"></span>'):p="",'<li class="card-photo'.concat(p,'">\n                            <div class="image-wrapper">\n                                <img class="photo" src="').concat(e,'" alt="').concat(c,'" loading="lazy" />\n                            </div>\n                            <div class="card-category">').concat(i,'</div>\n                            <button type="button" class="').concat(s,'">').concat(l,' <span><svg class="item-news__block-icon ').concat(d,'" width="16" height="16" viewBox="0 0 37 32">\n                            <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"\n                                stroke-width="2.2857"\n                                d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z">\n                            </path>\n                        </svg></span></button>\n                            <h2 class="card-title">').concat(t,'</h2>\n                            <p class="card-info">').concat(o,'</p>\n                            <span class="card-date">').concat(r,'</span>\n                            <a href="').concat(a,'" class="card-url">Read more</a>\n                            ').concat(f,"\n                        </li>")})).join("");p.innerHTML=e}(u.getNews()),p.addEventListener("click",c.onCardClick),p.addEventListener("click",c.onReadClick),""==p.innerHTML&&p.insertAdjacentHTML("afterend",'<div class="news__plug"></div>'),document.querySelector(".search-form__input").addEventListener("click",(function(){window.location.href="./index.html"}))}();
//# sourceMappingURL=favorite.decc52b5.js.map
