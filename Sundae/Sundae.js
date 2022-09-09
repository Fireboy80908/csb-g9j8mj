/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sundae extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "0D80553D-E630-4640-82A6-D737104D313B",
        "./Sundae/costumes/0D80553D-E630-4640-82A6-D737104D313B.svg",
        { x: 111.99479722681198, y: 157.01483842313473 }
      ),
      new Costume("costume1", "./Sundae/costumes/costume1.svg", {
        x: 111.99479611340598,
        y: 205.91008336716772
      })
    ];

    this.sounds = [new Sound("pop", "./Sundae/sounds/pop.wav")];

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
    this.costume = "0D80553D-E630-4640-82A6-D737104D313B";
    this.visible = true;
    this.goto(-103, 134);
  }

  *whenthisspriteclicked() {
    this.broadcast("Sundae");
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
        this.costume = "0D80553D-E630-4640-82A6-D737104D313B";
      }
      yield;
    }
  }
}
