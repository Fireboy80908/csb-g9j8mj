/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bunny extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bunny/costumes/costume1.svg", {
        x: 66.83300218270261,
        y: 61.30586247324972
      })
    ];

    this.sounds = [new Sound("Screech", "./Bunny/sounds/Screech.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Animal" },
        this.whenIReceiveAnimal
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Animal" },
        this.whenIReceiveAnimal2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Poptart" },
        this.whenIReceivePoptart
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "A DONE" }, this.whenIReceiveADone)
    ];
  }

  *whenIReceiveAnimal() {
    this.visible = true;
  }

  *whenIReceiveAnimal2() {
    this.visible = true;
  }

  *whenIReceivePoptart() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Bun");
    yield* this.playSoundUntilDone("Screech");
  }

  *whenIReceiveADone() {
    this.visible = false;
  }
}
