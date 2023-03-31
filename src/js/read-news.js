import { FavoriteStorage, ReadStorage } from './localStorage';
import { searchInputAnimation } from './search-input-animation';
import { oNmobileMenu } from './mobile-menu';
import { currentPage } from './current-page';
import { onCardClick } from './onCardClick';
import { monitorAuthState } from './ui/ui';
const favoriteStorage = new FavoriteStorage();
const readStorage = new ReadStorage();
const news = readStorage.getNews();
import { onThemeChange } from './switcher';
oNmobileMenu();
searchInputAnimation();
currentPage();
monitorAuthState();

const dates = [...new Set(news.map(obj => obj.readDate))].reverse();
const accordionEl = document.querySelector('.accordion');

function renderAccordion() {
  const markup = dates
    .map(date => {
      return `<div class="accordion-container">
        <div class="accordion-date"><span class="accordion-paragraph">${date}</span><i class="accordion-arrow"></i>
        <hr />
            <div class="newsgallery visually-hidden">
                <ul class="gallery__cards-list"></ul>
            </div>
        </div>
      </div>`;
    })
    .join('');
  return markup;
}

accordionEl.innerHTML = renderAccordion();
const accordionContainer = document.getElementsByClassName(
  'accordion-container'
);
const accordion = document.querySelectorAll('.accordion-date');

renderAccordionNews(accordion);

function renderAccordionNews(arr) {
  arr.forEach(element => {
    const accordionElDate = element.innerText;
    news.map(
      ({ readDate, src, title, url, info, published_date, alt, section }) => {
        if (readDate === accordionElDate) {
          const favoriteIcon = `<span>
                                <svg
                                    class="item-news__block-icon active-news-icon"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 37 32"
                                >
                                    <path
                                    style="stroke: var(--color1, #4440f7)"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke-miterlimit="4"
                                    stroke-width="2.2857"
                                    d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"
                                    ></path>
                                </svg>
                            </span>`;

          let activeClass = '';
          let activeText = '';
          if (
            favoriteStorage.hasNews({
              url,
            })
          ) {
            activeText = 'Remove from favorite';
            activeClass = 'favorite-button__activ';
          } else {
            activeText = 'Add to favorite';
            activeClass = 'add-to-favorite';
          }
          const markup = `<li class="card-photo ">
                            <div class="image-wrapper">
                                <img class="photo" src="${src}" alt="${alt}" loading="lazy" />
                            </div>
                            <div class="card-category">${section}</div>
                            <button type="button" class="${activeClass}">${activeText}${favoriteIcon}</button>
                            <h2 class="card-title">${title}</h2>
                            <p class="card-info">${info}</p>
                            <span class="card-date">${published_date}</span>
                            <a href="${url}" class="card-url">Read more</a>
                           
                        </li>`;
          const contentEl = element.querySelector('.gallery__cards-list');
          contentEl.insertAdjacentHTML('beforeend', markup);
        }
      }
    );
  });
  try {
    // document.querySelector('.accordion-date').classList.toggle('active');
    document.querySelector('.newsgallery').classList.toggle('visually-hidden');
    document.querySelector('.accordion-arrow').classList.toggle('active');
  } catch (error) {
    console.log(error);
  }
}

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function (e) {
    if (e.target !== this) {
      return;
    }
    // this.classList.toggle('active');
    const currentGallery = this.querySelector('.newsgallery');
    currentGallery.classList.toggle('visually-hidden');
    this.querySelector('.accordion-arrow').classList.toggle('active');
    // console.log(this);
  });
}

accordionEl.addEventListener('click', onCardClick);

if (accordionEl.innerHTML == '') {
  accordionEl.insertAdjacentHTML('afterend', `<div class="news__plug"></div>`);
}

document.querySelector('.search-form__input').addEventListener('click', () => {
  window.location.href = './index.html';
});

// Put some items in LS for test
// const localStorageSave = [
//   {
//     readDate: '27/03/2023',
//     src: 'https://static01.nyt.com/images/2023/04/09/books/review/09Shortlist-HABER/09Shortlist-HABER-mediumThreeByTwo440.jpg',
//     title: 'Three Sophomore Books That Are Anything but Sophomoric',
//     url: 'https://www.nytimes.com/2023/03/30/books/review/sophomore-books.html',
//     info: 'New fiction from authors who are stepping up to the plate — or, shall we say, the shelf — for the second time.',
//     published_date: '30/03/2023',
//     alt: 'Books and Literature',
//     section: 'books',
//   },
//   {
//     readDate: '27/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/30/obituaries/29Peters1-print1/29Peters1-mediumThreeByTwo440.jpg',
//     title:
//       'Julie Anne Peters, Whose Young-Adult Books Caused a Stir, Dies at 71',
//     url: 'https://www.nytimes.com/2023/03/29/books/julie-anne-peters-dead.html',
//     info: 'Her 2004 novel, “Luna,” broke new ground by having a transgender teenager as a main character. That book and others she wrote have been targets of conservatives.',
//     published_date: '29/03/2023',
//     alt: 'Deaths (Obituaries), Books and Literature, Transgender, Writing and Writers, Homosexuality and Bisexuality, Teenagers and Adolescence',
//     section: 'books',
//   },
//   {
//     readDate: '28/03/2023',
//     src: 'https://static01.nyt.com/images/2023/04/02/books/review/02newlypubnew/02newlypubnew-mediumThreeByTwo440.jpg',
//     title: 'Newly Published Poetry, From Clint Smith to Kweku Abimbola',
//     url: 'https://www.nytimes.com/2023/03/30/books/review/new-this-week.html',
//     info: 'A selection of recently published books.',
//     published_date: '30/03/2023',
//     alt: 'Books and Literature',
//     section: 'books',
//   },
//   {
//     readDate: '28/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/28/multimedia/30ambriefing-asia-nl-gandhi-02-PROMO-01/00india-gandhi-03-zmjf-mediumThreeByTwo440.jpg',
//     title: 'Your Thursday Briefing: How Modi Wields Power',
//     url: 'https://www.nytimes.com/2023/03/29/briefing/narendra-modi-elon-musk-vanuatu.html',
//     info: 'Also, a plea for a pause on A.I. and a U.N. resolution on climate lawsuits.',
//     published_date: '29/03/2023',
//     alt: 'International Relations, Politics and Government, Artificial Intelligence',
//     section: 'briefing',
//   },
//   {
//     readDate: '28/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/28/multimedia/28themorning-promo/28themorning-lede-1-kgzp-mediumThreeByTwo440.jpg',
//     title: 'A Win for Israel’s Protesters',
//     url: 'https://www.nytimes.com/2023/03/28/briefing/israel-opposition-protests-judicial-overhaul-delay.html',
//     info: 'Demonstrations forced Israel’s prime minister to delay a judicial overhaul.',
//     published_date: '28/03/2023',
//     alt: 'internal-storyline-no, International Relations',
//     section: 'briefing',
//   },
//   {
//     readDate: '28/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/27/multimedia/032923ambriefing-asia-promo/27china-debt-01-tjhl-mediumThreeByTwo440.jpg',
//     title: 'Your Wednesday Briefing: China’s Billions in Bailouts',
//     url: 'https://www.nytimes.com/2023/03/28/briefing/your-wednesday-briefing-chinas-billions-in-bailouts.html',
//     info: 'Also, a shake-up at Alibaba and a rare glimpse at a ruined city in Ukraine.',
//     published_date: '28/03/2023',
//     alt: 'International Relations',
//     section: 'briefing',
//   },
//   {
//     readDate: '28/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/28/multimedia/28evening-briefing-nl-Nashville-02-fwzm/28evening-briefing-nl-Nashville-02-fwzm-mediumThreeByTwo440.jpg',
//     title: 'Your Tuesday Evening Briefing',
//     url: 'https://www.nytimes.com/2023/03/28/briefing/nashville-shooting-judge-mike-pence-chatgpt.html',
//     info: 'Here’s what you need to know at the end of the day.',
//     published_date: '29/03/2023',
//     alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     section: 'briefing',
//   },
//   {
//     readDate: '28/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/29/multimedia/29ambriefing-europe-nl-promo/29ambriefing-europe-nl-lead-qlkc-mediumThreeByTwo440.jpg',
//     title: 'Your Wednesday Briefing',
//     url: 'https://www.nytimes.com/2023/03/29/briefing/russia-bakhmut-avdiivka-europe.html',
//     info: 'Russia bombards a town near Bakhmut.',
//     published_date: '29/03/2023',
//     alt: 'Politics and Government, International Relations, Soccer',
//     section: 'briefing',
//   },
//   {
//     readDate: '29/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/29/multimedia/29themorning-lede-promo/29themorning-lede-option-jhkz-mediumThreeByTwo440.jpg',
//     title: 'Obamacare Keeps Winning',
//     url: 'https://www.nytimes.com/2023/03/29/briefing/obamacare.html',
//     info: 'Its North Carolina victory is a sign of larger changes.',
//     published_date: '29/03/2023',
//     alt: 'internal-storyline-no, Elections, Health Insurance and Managed Care, States (US), Medicaid, Medicare',
//     section: 'briefing',
//   },
//   {
//     readDate: '29/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/28/multimedia/29evening-briefing-nl-ISRAEL/29evening-briefing-nl-ISRAEL-mediumThreeByTwo440-v2.jpg',
//     title: 'Your Wednesday Evening Briefing',
//     url: 'https://www.nytimes.com/2023/03/29/briefing/us-israel-kentucky-legilators-veto-ai.html',
//     info: 'Here’s what you need to know at the end of the day.',
//     published_date: '30/03/2023',
//     alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     section: 'briefing',
//   },
//   {
//     readDate: '29/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/30/multimedia/30ambriefing-europe-ukraine-plant-jlht/30ambriefing-europe-ukraine-plant-jlht-mediumThreeByTwo440.jpg',
//     title: 'Your Thursday Briefing',
//     url: 'https://www.nytimes.com/2023/03/30/briefing/nuclear-plant-ukraine-europe.html',
//     info: 'Fears grow about Ukraine’s imperiled nuclear plant.',
//     published_date: '30/03/2023',
//     alt: 'International Relations, Politics and Government, Nuclear Energy, Russian Invasion of Ukraine (2022)',
//     section: 'briefing',
//   },
//   {
//     readDate: '29/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/30/multimedia/30themorning-lede-promo/30themorning-lede-whqz-mediumThreeByTwo440.jpg',
//     title: 'The Biggest Battle in Ukraine',
//     url: 'https://www.nytimes.com/2023/03/30/briefing/bakhmut-ukraine.html',
//     info: 'Why Russia and Ukraine are fighting for a city with little strategic value.',
//     published_date: '30/03/2023',
//     alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     section: 'briefing',
//   },
//   {
//     readDate: '29/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/30/multimedia/30disney-florida-vlft/30disney-florida-vlft-mediumThreeByTwo440.jpg',
//     title: 'Disney’s Feud With DeSantis Adds Another Wrinkle',
//     url: 'https://www.nytimes.com/2023/03/30/business/disney-world-ron-desantis.html',
//     info: 'The Florida governor’s new Disney World oversight board belatedly realized that the company had quietly sidestepped its control.',
//     published_date: '30/03/2023',
//     alt: 'Amusement and Theme Parks, Politics and Government, Law and Legislation',
//     section: 'business',
//   },
//   {
//     readDate: '29/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/30/multimedia/30wallstreet-bonuses-lkzj/30wallstreet-bonuses-lkzj-mediumThreeByTwo440.jpg',
//     title: 'Wall St. Bonuses Drop 26% as Deal-Making Cools',
//     url: 'https://www.nytimes.com/2023/03/30/business/banker-bonuses-fall.html',
//     info: 'The bumper payouts earlier in the pandemic have waned, as banks cut costs and worries about financial stability loom over markets.',
//     published_date: '30/03/2023',
//     alt: 'Bonuses, Banking and Financial Institutions',
//     section: 'business',
//   },
//   {
//     readDate: '30/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/30/multimedia/30sbf-hearing-wzcg/30sbf-hearing-wzcg-mediumThreeByTwo440.jpg',
//     title: 'Sam Bankman-Fried Pleads Not Guilty to Additional Set of Charges',
//     url: 'https://www.nytimes.com/2023/03/30/business/sam-bankman-fried-charges.html',
//     info: 'Prosecutors this week charged Mr. Bankman-Fried with orchestrating a $40 million bribe to Chinese officials to unfreeze funds held by his trading firm, Alameda Research.',
//     published_date: '30/03/2023',
//     alt: 'Virtual Currency, Banking and Financial Institutions, Securities and Commodities Violations',
//     section: 'business',
//   },
//   {
//     readDate: '30/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/29/multimedia/00dimon-01-wpjl/00dimon-01-wpjl-mediumThreeByTwo440.jpg',
//     title: 'Jamie Dimon Reprises 2008 Role as Rescuer of a Failing Bank',
//     url: 'https://www.nytimes.com/2023/03/30/business/jamie-dimon-silicon-valley-bank-collapse.html',
//     info: 'The JPMorgan chief executive led an effort to raise $30 billion for First Republic, but no one is sure if it did any good.',
//     published_date: '30/03/2023',
//     alt: 'Banking and Financial Institutions, Subprime Mortgage Crisis',
//     section: 'business',
//   },
//   {
//     readDate: '30/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/30/multimedia/30db-dis-wfqc/30db-dis-wfqc-mediumThreeByTwo440.jpg',
//     title: 'Bob Iger Ousts a Marvel Antagonist',
//     url: 'https://www.nytimes.com/2023/03/30/business/dealbook/bob-iger-layoffs-marvel-ike-perlmutter.html',
//     info: 'Ike Perlmutter, the chairman of Marvel Entertainment who’s had a volatile tenure at Disney, was among the latest round of job cuts at the entertainment giant.',
//     published_date: '30/03/2023',
//     alt: 'internal-storyline-no, Movies',
//     section: 'business',
//   },
//   {
//     readDate: '30/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/01/business/00ai-publishers/00ai-publishers-mediumThreeByTwo440.jpg',
//     title: 'Publishers Worry A.I. Chatbots Will Cut Readership',
//     url: 'https://www.nytimes.com/2023/03/30/business/media/publishers-chatbots-search-engines.html',
//     info: 'Many sites get at least half their traffic from search engines. Fuller results generated by new chatbots could mean far fewer visitors.',
//     published_date: '30/03/2023',
//     alt: 'News and News Media, Artificial Intelligence, Search Engines, Advertising and Marketing, Copyrights and Copyright Violations',
//     section: 'business',
//   },
//   {
//     readDate: '30/03/2023',
//     src: 'https://static01.nyt.com/images/2023/03/29/us/oakImage-1680112401497/oakImage-1680112401497-mediumThreeByTwo440.jpg',
//     title: 'Texas Observer Reverses Plan to Shut Down and Lay Off Its Staff',
//     url: 'https://www.nytimes.com/2023/03/29/business/media/texas-observer-closing.html',
//     info: 'Former and current staff members had fought the decision to shut down the 68-year-old magazine, a bastion of liberal opinion and investigative journalism in a red state.',
//     published_date: '29/03/2023',
//     alt: 'News and News Media, Layoffs and Job Reductions, Magazines, Shutdowns (Institutional), Newspapers, Liberalism (US Politics), Writing and Writers',
//     section: 'business',
//   },
//   {
//     readDate: '30/03/2023',
//     src: 'https://source.unsplash.com/random/300x300',
//     title:
//       'Defending Starbucks, Schultz Spars With Party That Once Embraced Him',
//     url: 'https://www.nytimes.com/2023/03/29/business/economy/howard-schultz-starbucks-union-senate.html',
//     info: 'Howard Schultz faced rancor from Senate Democrats at a hearing where he chafed at “propaganda that is floating around” about company labor practices.',
//     published_date: '30/03/2023',
//     alt: 'Workplace Hazards and Violations, Organized Labor, Labor and Jobs, United States Politics and Government',
//     section: 'business',
//   },
//   {
//     readDate: '01/04/2023',
//     src: 'https://source.unsplash.com/random/300x300',
//     title: '9 Soldiers Killed After Army Helicopters Collide Over Kentucky',
//     url: 'https://www.nytimes.com/2023/03/30/us/fort-campbell-helicopter-crash-kentucky.html',
//     info: 'Two Black Hawk helicopters from the 101st Airborne Division collided on Wednesday night near Fort Campbell. The Army said it did not yet know a cause.',
//     published_date: '30/03/2023',
//     alt: 'Helicopters, Aviation Accidents, Safety and Disasters, Deaths (Fatalities), United States Defense and Military Forces',
//     section: 'U.S.',
//   },
//   {
//     readDate: '01/04/2023',
//     src: 'https://static01.nyt.com/images/2023/03/21/multimedia/-ya-skillet-chicken-chickpeas-and-spinach-zjgp/-ya-skillet-chicken-chickpeas-and-spinach-zjgp-mediumThreeByTwo440.jpg',
//     title: 'How to Use Up Those Leafy Green Herbs',
//     url: 'https://www.nytimes.com/2023/03/31/dining/what-to-do-leftover-herbs.html',
//     info: 'Handfuls of parsley, mint, cilantro and dill add a healthy dose of green to crispy chicken and Mediterranean-ish meatballs.',
//     published_date: '31/03/2023',
//     alt: 'Cooking and Cookbooks, Content Type: Service, Recipes',
//     section: 'food',
//   },
// ];
// localStorage.setItem('READ_NEWS', JSON.stringify(localStorageSave));
