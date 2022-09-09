/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Velvet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "5C12240A-CE1E-4232-A8FF-CC854F041877",
        "./Velvet/costumes/5C12240A-CE1E-4232-A8FF-CC854F041877.svg",
        { x: 111.99479722681198, y: 157.01483842313473 }
      ),
      new Costume("costume1", "./Velvet/costumes/costume1.svg", {
        x: 111.99479556702994,
        y: 205.78030747069485
      })
    ];

    this.sounds = [new Sound("pop", "./Velvet/sounds/pop.wav")];

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
    this.costume = "5C12240A-CE1E-4232-A8FF-CC854F041877";
    this.visible = true;
    this.goto(-50, 134);
  }

  *whenthisspriteclicked() {
    this.broadcast("Velvet");
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
        this.costume = "5C12240A-CE1E-4232-A8FF-CC854F041877";
      }
      yield;
    }
  }
}
