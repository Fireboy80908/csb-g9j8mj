/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wolf extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Wolf/costumes/costume1.svg", {
        x: 68.5066624636178,
        y: 71.93861976343435
      })
    ];

    this.sounds = [new Sound("Growl", "./Wolf/sounds/Growl.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Poptart" },
        this.whenIReceivePoptart
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Animal" },
        this.whenIReceiveAnimal
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "A DONE" }, this.whenIReceiveADone)
    ];
  }

  *whenIReceivePoptart() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveAnimal() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Wof");
    yield* this.playSoundUntilDone("Growl");
  }

  *whenIReceiveADone() {
    this.visible = false;
  }
}
