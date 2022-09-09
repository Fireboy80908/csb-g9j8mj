/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cookie extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "1FADC1C1-FA85-45E9-AD09-553C1B097EC4",
        "./Cookie/costumes/1FADC1C1-FA85-45E9-AD09-553C1B097EC4.svg",
        { x: 111.99479611340598, y: 157.01483921156736 }
      ),
      new Costume("costume2", "./Cookie/costumes/costume2.svg", {
        x: 111.99480111340597,
        y: 206.6089904707572
      })
    ];

    this.sounds = [new Sound("pop", "./Cookie/sounds/pop.wav")];

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
    this.costume = "1FADC1C1-FA85-45E9-AD09-553C1B097EC4";
    this.visible = true;
    this.goto(-157, 134);
  }

  *whenthisspriteclicked() {
    this.broadcast("Cookie");
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
        this.costume = "costume2";
      } else {
        this.costume = "1FADC1C1-FA85-45E9-AD09-553C1B097EC4";
      }
      yield;
    }
  }
}
