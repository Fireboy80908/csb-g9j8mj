/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pretzel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "B04B6A44-42A6-4DBC-8E25-C950A0155697",
        "./Pretzel/costumes/B04B6A44-42A6-4DBC-8E25-C950A0155697.svg",
        { x: 111.99479334021797, y: 157.0148376347021 }
      ),
      new Costume("costume1", "./Pretzel/costumes/costume1.svg", {
        x: 111.99480111340597,
        y: 204.9022641836018
      })
    ];

    this.sounds = [new Sound("pop", "./Pretzel/sounds/pop.wav")];

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
    this.costume = "B04B6A44-42A6-4DBC-8E25-C950A0155697";
    this.visible = true;
    this.goto(5, 134);
  }

  *whenthisspriteclicked() {
    this.broadcast("Pretzel");
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
        this.costume = "B04B6A44-42A6-4DBC-8E25-C950A0155697";
      }
      yield;
    }
  }
}
