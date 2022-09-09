/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Animal2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./Animal2/costumes/costume3.png", {
        x: 48,
        y: 18
      }),
      new Costume("costume1", "./Animal2/costumes/costume1.png", {
        x: 48,
        y: 18
      })
    ];

    this.sounds = [new Sound("pop", "./Animal2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "A DONE" }, this.whenIReceiveADone)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "costume3";
    this.goto(180, 123);
  }

  *whenthisspriteclicked() {
    this.broadcast("Animal");
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "costume1";
      } else {
        this.costume = "costume3";
      }
      yield;
    }
  }

  *whenIReceiveADone() {
    this.visible = false;
  }
}
