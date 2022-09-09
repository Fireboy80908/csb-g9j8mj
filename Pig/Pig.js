/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pig extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Pig/costumes/costume1.svg", { x: 49, y: 49.5 })
    ];

    this.sounds = [new Sound("vbb", "./Pig/sounds/vbb.mp3")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Poptart" },
        this.whenIReceivePoptart
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "A DONE" },
        this.whenIReceiveADone
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed)
    ];
  }

  *whenIReceivePoptart() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("pig");
    yield* this.playSoundUntilDone("vbb");
  }

  *whenIReceiveADone() {
    this.visible = false;
  }

  *whenKeyAPressed() {
    this.visible = true;
  }
}
