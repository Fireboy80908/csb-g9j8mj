/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Oreo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "DA15F54A-E662-4A70-A819-6871CAC74AD9",
        "./Oreo/costumes/DA15F54A-E662-4A70-A819-6871CAC74AD9.svg",
        { x: 111.99479611340598, y: 157.01483921156736 }
      ),
      new Costume("costume1", "./Oreo/costumes/costume1.svg", {
        x: 111.99479945362395,
        y: 200.16724844631142
      })
    ];

    this.sounds = [new Sound("pop", "./Oreo/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Poptart" },
        this.whenIReceivePoptart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Animal" },
        this.whenIReceiveAnimal
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "A DONE" },
        this.whenIReceiveADone
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "DA15F54A-E662-4A70-A819-6871CAC74AD9";
    this.visible = true;
    this.goto(110, 134);
  }

  *whenthisspriteclicked() {
    this.broadcast("Orei");
    yield* this.playSoundUntilDone("pop");
  }

  *whenIReceivePoptart() {
    this.visible = true;
  }

  *whenIReceiveAnimal() {
    this.visible = false;
  }

  *whenIReceiveADone() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "costume1";
      } else {
        this.costume = "DA15F54A-E662-4A70-A819-6871CAC74AD9";
      }
      yield;
    }
  }
}
