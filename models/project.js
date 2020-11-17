const Project = function (name, description, website, client, datePublished, pathImage) {
  this.name = name;
  this.description = description;
  this.website = website;
  this.client = client;
  this.datePublished = datePublished;
  this.pathImage = pathImage;
}

module.exports = Project;