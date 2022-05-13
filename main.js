import { Project } from "/script.js";

import Stage from "/project/bg/bg.js";
import Sprite1 from "/project/sprites/sprite/sprite.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
