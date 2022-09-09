/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Berry extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "C41CF85C-2452-42A9-88F2-E63BFD8B5D41",
        "./Berry/costumes/C41CF85C-2452-42A9-88F2-E63BFD8B5D41.svg",
        { x: 111.99479334021797, y: 157.0148376347021 }
      ),
      new Costume("costume1", "./Berry/costumes/costume1.svg", {
        x: 111.99479945362393,
        y: 200.7722025946873
      })
    ];

    this.sounds = [new Sound("pop", "./Berry/sounds/pop.wav")];

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
    this.costume = "C41CF85C-2452-42A9-88F2-E63BFD8B5D41";
    this.visible = true;
    this.goto(57, 134);
  }

  *whenthisspriteclicked() {
    this.broadcast("Berry");
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
        this.costume = "C41CF85C-2452-42A9-88F2-E63BFD8B5D41";
      }
      yield;
    }
  }
}
