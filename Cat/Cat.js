/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Cat/costumes/costume1.svg", {
        x: 69.81413821490656,
        y: 52.03699648349169
      })
    ];

    this.sounds = [new Sound("Meow2", "./Cat/sounds/Meow2.wav")];

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
      new Trigger(Trigger.BROADCAST, { name: "A DONE" }, this.whenIReceiveADone)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Cat");
    yield* this.playSoundUntilDone("Meow2");
  }

  *whenIReceivePoptart() {
    this.visible = false;
  }

  *whenIReceiveAnimal() {
    this.visible = true;
  }

  *whenIReceiveADone() {
    this.visible = false;
  }
}
