/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "/script.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "/project/sprite/imgs/sprite.png", {
        x: 48,
        y: 50
      })
    ];

    this.sounds = [new Sound("Song", "/project/sprites/aud/song.mp3")];

    this.triggers = [];
  }
}
