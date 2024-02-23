import { Url } from "../enums/url";
import { IAboutMe } from "../interfaces/about";
import { IProjects } from "../interfaces/iprojects";

export const ABOUT_ME: IAboutMe = {
  name:'My Experience In Code.',
  long: `
  <p><b>CodeStack Junior Web Developer Internship</b></p>
  <p>
      I've been fortunate enough to work on projects in different languages, libraries and frameworks with
      time in an
      Agile Environment,
      participating in sprints and being able to learn senior level deveopers and testers. I was given the
      opportunity to create the
      <a href="https://stocktonmayor.org/" target="_blank" class="csa">Mayor Of Stockton's official
          website</a> during the first half of my internship in HTML, CSS. I was given the opportunity to
      continue my internship and once I accepted,
      I was placed
      into the group that manages <a href="https://www.seis.org/" target="_blank" class="csa">SEIS</a>. SEIS
      is a website that serves special education all over California. This is a huge code base and taught me
      so much about coding, and teamwork.
      In SEIS I was able to further my full stack experience using AngularJS, C#, and SQL.
  </p>
  <br>
  <p class="mb-1"><b>Mike's Mobile Services</b></p>
  <p>Web Developer</p>
  <p>
      I was hired on to be the Web Developer at Mike's Mobile. I was able to participate in the redesign and
      management of the Mike's Mobile website, made in Angular and management of the company's usage of the
      CRM, Service Titan. I was also tasked with the management of all hardware used in the company. This was
      definitely not what I was expecting! A couple of months in, I was able to learn the ropes of Mike's
      Mobile's proprietary software, Bear Hands Pro, created in React, using MongoDB and NodeJS. I learned so
      much from my senior developers and had lots of fun getting to know all the technicians and people, but
      it was time to move on!
  </p>
  <br>
  <p class="mb-1"><b>CodeStack - SJCOE</b></p>
  <p>Associate Web Developer</p>
  <p>
      I am currently an Associate Web Developer at CodeStack, developing fullstack applications and assisting
      in training interns and junior web developers. I am currently working on rebuilding a site called DRDP
      in Angular, TailwindCss, and .Net6. My team was working on Captain's internal application, but was moved
      over to DRDP full time! Working together with this team has been such an amazing experience. I've
      learned so much in the past couple of months to build each other into fullstack developers!
  </p>`,
  btn:'Close',
}

export const PROJECTS : IProjects[] = [
  {
    name:'IECMHC Network',
    pic2: '../../../assets/images/proj/iecmhcdash.png',
    picture: '../../../assets/images/proj/iecmhclogin.png',
    description: 'Built and launched the IECMHC Network\'s site with other developers! We are still releasing new functionality for this site.',
    src: 'https://iecmhc-consultation.org/',
    keywords: 'angular, css, sql, c#, associate web developer',
    long: 'After my team was joined by a few more people, we were able to split the team between DRDP And IECMHC. I ended up here and helped create this from the ground up! We took what we learned from DRDP and tried to make this codebase as clean and as streamlined as possible. My ability to create stored procedures and complex queries shined bright here. One of my first contributions to this project was our database driven tables. I continue to have fun in this project, working with, and learning from other amazing developers!',
    btn:'IECMHC Network',
  },
  {
    name:'DRDP',
    pic2: '../../../assets/images/proj/drdploggedIn.png',
    picture: '../../../assets/images/proj/drdplogin.png',
    description: 'Contributed to building DRDP from the ground up with a team of other developers.',
    src: 'https://www.drdponline.org/',
    keywords: 'angular, css, sql, c#, tailwindcss, associate web developer',
    long: 'After being hired as an associate web developer, I started working on building drdp with some of the other web developers. We formed a new team of sorts during this time and started working together to create something so we took all the knowledge we had and threw it in here. This was probably the toughest projects I\'ve been on. This is when my skills took a turn for the better. I got so much more comfortable with sql, .net and angular here. Everything clicked here.',
    btn:'DRDP',
  },
  {
    name:'SEIS',
    pic2: '../../../assets/images/proj/seisdash.png',
    picture: '../../../assets/images/proj/seisfront.png',
    description: 'Updated some functionality to future IEP page, assisted web developers in sprint planning and releases.',
    src: 'https://www.seis.org',
    keywords: 'angularJS, css, sql, c#, junior web developer, associate web developer',
    long: 'During my Internship with CodeStack - San Joaquin County Of Education, I was able to work on CodeStack\'s flagship application: Seis. I joined the seis team and was able to work in a web development team that heavily relied on backend development. I was able to improve my backend abilities dramatically and learn how to work and learn from other developers. When I joined again as an associate, I started here once again to learn from some of the coolest guys I know!',
    btn:'SEIS',
  },
  {
    name:'Women Together Intl',
    pic2: '../../../assets/images/proj/womenTogetherMembership.png',
    picture: '../../../assets/images/proj/womenTogetherRuth.png',
    description: 'Updating and maintaining the Women Together Intl.',
    src: 'https://www.womentogetherintl.org/',
    keywords: 'html, css, bootstrap, associate web developer',
    long: 'I\'m one of the developers that maintain this site through CodeStack. It\'s a nice static site for a team that want other women to succeed. Their focus is to unite women and it\'s such an honor to be able to work on a site with that purpose!',
    btn:'Women Together Intl',
  },
  {
    name:'Mayor Of Stockton',
    pic2: '../../../assets/images/proj/mayor2.jpg',
    picture: '../../../assets/images/proj/mayorStockton.png',
    description: 'Built and launched the official site of the mayor of Stockton from start to finish.',
    src: 'https://www.stocktonmayor.org',
    keywords: 'html, css, adobe XD, bootstrap, internship',
    long: 'During my Internship with CodeStack - San Joaquin County Of Education, I used Adobe XD to design the majority of the page into a fully functioning prototype. After approval, I started working on building the site in HTML, CSS and the CSS framework, Bootstrap. During the process, I was able to pull information from the Mayor\'s Facebook account and implement outside news sources and external resources. During the build I was able to use Bootstrap components, and source control. Accessibility is extremely important to me so I made sure everything was up to par. Once the website was finished, I was given the opportunity to present this website to the mayor\'s office, and launched the site using FileZilla.',
    btn:'Mayor\'s Site',
   },
   {
     name:'Teachers College Of Education',
     pic2: '../../../assets/images/proj/mastersAdvisors.jpg',
     picture: '../../../assets/images/proj/tcsj.jpg',
     description: 'Updating the homepage, programs, and masters pages of TCSJ',
     src: 'https://teacherscollegesj.edu/',
     keywords: 'internship, design, adobe XD, html, css, bootstrap',
     long: 'During my Internship with CodeStack - San Joaquin County Of Education, under the instruction of a UI/UX Specialist, I designed and built portions of the site such as the main home page\'s About Us, Programs, Events, and Contact Us. I used Bootstrap built in grid system to manipulate the page. I was also able to design and implement a whole new section in the Programs Section called Masters Advisors.  I used Adobe XD to prototype, received approval from the client, and started building. I used Bootstrap cards and modals to highlight each advisor\'s biography.',
     btn:'TCSJ',
   },
];

export const URL_SEGMENTS: { [key: string]: string } = {
  [Url.GitHub]: 'https://github.com/christycreme95',
  [Url.LinkedIn]: 'https://www.eang.dev/linkedin',
  [Url.Instagram]: 'https://www.instagram.com/thechristycreme/',
  [Url.CodeWars]: 'https://www.codewars.com/users/TheChristyCreme',
  [Url.Facebook]: 'https://www.facebook.com/christycreme95'
}
