const MyInfo = require('../models/myinfo');

const socialLinks = [
  {
    icon: 'fa-facebook-f',
    title: 'Facebook',
    href: 'https://facebook.com/luchowebco'
  },
  {
    icon: 'fa-twitter',
    title: 'Twitter',
    href: 'https://twitter.com/luchowebco'
  },
  {
    icon: 'fa-linkedin-in',
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/luchowebco'
  }
];

exports.info = new MyInfo(
  'Lucho Web',
  'https://i.ibb.co/bbqnm9B/me.png',
  'Web Developer',
  'Welcome to my web resume',
  'About me 1.',
  'About me 2.',
  '/cv.pdf',
  'Medellin, Colombia.',
  socialLinks,
  "I'm a senior web developer with 12+ years of experencie."
);