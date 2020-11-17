const MyInfo = function (name, photo, jobTitle, descriptionTop, aboutOne, aboutTwo, linkCV, location, socialLinks, aboutFooter) {
  this.name = name;
  this.photo = photo;
  this.jobTitle = jobTitle;
  this.descriptionTop = descriptionTop;
  this.aboutOne = aboutOne;
  this.aboutTwo = aboutTwo;
  this.linkCV = linkCV;
  this.location = location;
  this.socialLinks = socialLinks;
  this.aboutFooter = aboutFooter;
}

module.exports = MyInfo;