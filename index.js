/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */

// Mobile navigation menu

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

const openMenu = document.getElementById('open');
openMenu.addEventListener('click', openNav);

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

const closeMenu = document.getElementById('close');
closeMenu.addEventListener('click', closeNav);

// Add dynamics -Create Featured Speakers section on page load-

const speakersInfo = [
  {
    speakerImg: './images/speaker1.jpg',
    speakerName: 'Mosh Hamedani',
    speakerBrief: 'Educational YouTuber',
    moreInfo: 'My life’s mission is to help novice and professional software engineers increase their skills, make more money, and ultimately change their lives for the better.',
  },
  {
    speakerImg: './images/speaker2.jpg',
    speakerName: 'Jen Kramer',
    speakerBrief: 'A Harvard professior',
    moreInfo: 'For over twenty years, Jen Kramer has been educating clients, colleagues, friends and graduate students about the meaning of a quality website.',
  },
  {
    speakerImg: './images/speaker3.jpg',
    speakerName: 'Kyle Simpson',
    speakerBrief: 'Open Web Evangelist',
    moreInfo: 'Kyle Simpson likes to explore JS and FP techniques. He’s written books, taught, and spoken publicly.',
  },
  {
    speakerImg: './images/speaker4.jpeg',
    speakerName: 'Brian Holt',
    speakerBrief: 'Product manager, Stripe',
    moreInfo: 'He’s all about developers, developers, developers. Previously he was a JavaScript engineer at Netflix, Microsoft and Reddit.',
  },
  {
    speakerImg: './images/speaker5.jpg',
    speakerName: 'Sarah Drasner',
    speakerBrief: 'VP at Netlify',
    moreInfo: 'Sarah Drasner is an award-winning Speaker, VP of Developer Experience at Netlify, Vue core team member, and Staff Writer at CSS-Tricks.',
  },
  {
    speakerImg: './images/speaker6.jpeg',
    speakerName: 'Lukas Ruebbelke',
    speakerBrief: 'Principle Engineer, Venmo',
    moreInfo: 'Lukas gets to spend his entire time mentoring and training developers to be effective and build things that people care about.',
  },
];

addEventListener('load', () => {
  const parent = document.getElementById('speakers-container');
  let speaker;
  for (let i = 0; i < speakersInfo.length; i++) {
    speaker = document.createElement('div');
    speaker.classList.add('speaker');
    speaker.innerHTML = `
     <div class='img-container'>
        <img class='speaker-img' src=${speakersInfo[i].speakerImg} />
      </div>
      <div>
        <h4 class='primary'>${speakersInfo[i].speakerName}</h4>
        <h6 class='secondary speaker-intro'>
          ${speakersInfo[i].speakerBrief}
        </h6>
        <p class='primary'>
          ${speakersInfo[i].moreInfo}
        </p>
      </div>
  `;
    parent.appendChild(speaker);
    }
});
