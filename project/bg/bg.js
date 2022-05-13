/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "/script.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bg1", "/project/bg/img/bg1.png", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("add audio", "/project/bg/aud/addaudio.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
  }
}
