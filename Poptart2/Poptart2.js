/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Poptart2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Poptart2/costumes/costume1.png", {
        x: 78,
        y: 18
      }),
      new Costume("costume2", "./Poptart2/costumes/costume2.png", {
        x: 78,
        y: 18
      })
    ];

    this.sounds = [new Sound("pop", "./Poptart2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "A DONE" }, this.whenIReceiveADone)
    ];
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement sensing_setdragmode */ null;
    this.visible = true;
    this.costume = "costume1";
    this.goto(210, 164);
  }

  *whenthisspriteclicked() {
    this.broadcast("Poptart");
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenIReceiveADone() {
    this.visible = false;
  }
}
