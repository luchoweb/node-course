const Project = require('../models/project');

Project.all = [];

Project.add = (project) => {
  Project.all.push(project);
};

const projectDemo = new Project(
  'Zenu Radio',
  'Esto es la descripcion del proyecto hecho.',
  'zenuradio.com',
  'Amussim',
  '2017-11-02',
  'https://www.zenuradio.com/wp-content/themes/zenuradio/images/logo.png'
);

Project.add(projectDemo);

exports.all = Project.all;