/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Panda extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Panda/costumes/costume1.svg", {
        x: 69.06858211794767,
        y: 54.394959949391335
      })
    ];

    this.sounds = [new Sound("Chirp", "./Panda/sounds/Chirp.wav")];

    this.triggers = [
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "A DONE" }, this.whenIReceiveADone)
    ];
  }

  *whenIReceivePoptart() {
    this.visible = false;
  }

  *whenIReceiveAnimal() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Pan");
    yield* this.playSoundUntilDone("Chirp");
  }

  *whenIReceiveADone() {
    this.visible = false;
  }
}
