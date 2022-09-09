/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NewTrail2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "getting over it hammer",
        "./NewTrail2/costumes/getting over it hammer.png",
        { x: -76, y: 42 }
      ),
      new Costume("Fireboi", "./NewTrail2/costumes/Fireboi.png", {
        x: -38,
        y: 38
      }),
      new Costume("HP", "./NewTrail2/costumes/HP.png", { x: -86, y: 36 }),
      new Costume("This", "./NewTrail2/costumes/This.svg", {
        x: -57.28625999999997,
        y: 2.5711399999999855
      }),
      new Costume("Trolololol", "./NewTrail2/costumes/Trolololol.svg", {
        x: -41.49973499999999,
        y: 9.000214999999997
      }),
      new Costume("Among us", "./NewTrail2/costumes/Among us.png", {
        x: -106,
        y: 42
      }),
      new Costume("PAC man 3d", "./NewTrail2/costumes/PAC man 3d.svg", {
        x: -59,
        y: 5.833339999999993
      }),
      new Costume("Joystick", "./NewTrail2/costumes/Joystick.png", {
        x: -72,
        y: 22
      }),
      new Costume("Flappy ", "./NewTrail2/costumes/Flappy .png", {
        x: -103,
        y: 18
      }),
      new Costume(
        "2playa pong ball",
        "./NewTrail2/costumes/2playa pong ball.png",
        { x: -101, y: 17 }
      ),
      new Costume(
        "Lord Cindersteel",
        "./NewTrail2/costumes/Lord Cindersteel.png",
        { x: -93, y: 80 }
      ),
      new Costume("Cube", "./NewTrail2/costumes/Cube.png", { x: -67, y: 61 }),
      new Costume("Multiply", "./NewTrail2/costumes/Multiply.png", {
        x: -55,
        y: 20
      })
    ];

    this.sounds = [
      new Sound(
        "ROBLOX Death Sound.mp3",
        "./NewTrail2/sounds/ROBLOX Death Sound.mp3.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "A DONE" },
        this.whenIReceiveADone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "A DONE" },
        this.whenIReceiveADone2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.BROADCAST, { name: "Next" }, this.whenIReceiveNext)
    ];

    this.vars.upDownMagic = -5;
  }

  *startAsClone() {
    this.moveAhead();
    this.moveBehind(4);
    this.goto(this.sprites["Poptart3"].x, this.sprites["Poptart3"].y);
    this.direction = this.sprites["Poptart3"].direction;
    this.move(40);
    this.direction += 180;
    this.direction += 90;
    this.move(this.vars.upDownMagic);
    this.direction += -90;
    this.visible = true;
    this.effects.ghost = 0;
    this.size = 150;
    while (true) {
      this.move(10);
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      this.direction = this.sprites["Poptart3"].direction;
      this.direction += 180;
      yield;
    }
  }

  *startAsClone3() {
    yield* this.wait(0.4);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.costume = "getting over it hammer";
    this.effects.color = 0;
    this.moveBehind();
    this.visible = false;
  }

  *whenIReceiveADone() {
    while (true) {
      yield* this.wait(0.2);
      this.vars.upDownMagic = -5;
      yield* this.wait(0.2);
      this.vars.upDownMagic = 5;
      yield;
    }
  }

  *whenIReceiveADone2() {
    while (true) {
      this.move(Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y) / 8);
      this.createClone();
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.costumeNumber == 6 || this.costumeNumber == 7) {
        while (!(this.costumeNumber > 7 || this.costumeNumber < 6)) {
          this.effects.color += 3;
          yield;
        }
      } else {
        this.effects.color = 0;
      }
      yield;
    }
  }

  *whenKeySpacePressed() {
    yield* this.startSound("ROBLOX Death Sound.mp3");
    this.costumeNumber += 1;
  }

  *whenIReceiveNext() {
    this.costumeNumber += 1;
  }
}
