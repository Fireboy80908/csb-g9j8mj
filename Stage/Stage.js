/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 253.23376720119413,
        y: 183.640045
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("8-bit", "./Stage/sounds/8-bit.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "A DONE" }, this.whenIReceiveADone)
    ];

    this.vars.myVariable = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "";
    while (true) {
      yield* this.playSoundUntilDone("8-bit");
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.wait(0.35);
      this.costume = "backdrop1";
      yield* this.wait(0.35);
      /* TODO: Implement looks_switchbackdroptoandwait */ null;
      yield;
    }
  }

  *whenIReceiveADone() {
    this.costume = "backdrop2";
  }
}
