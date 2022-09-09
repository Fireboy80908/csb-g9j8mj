/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class OldTrail extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "4-2-nyan-cat-png-clipart-thumb",
        "./OldTrail/costumes/4-2-nyan-cat-png-clipart-thumb.png",
        { x: 54, y: 104 }
      )
    ];

    this.sounds = [new Sound("pop", "./OldTrail/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "A DONE" }, this.whenIReceiveADone)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.visible = false;
  }

  *startAsClone() {}

  *whenIReceiveADone() {}
}
