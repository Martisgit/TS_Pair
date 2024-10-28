import { Athlete } from "./Athlete";

export class Swimmer extends Athlete {
  preferredStroke: string;
  best100mFreestyleTime: number;

  constructor(
    athleteID: string,
    name: string,
    age: number,
    nationality: string,
    preferredStroke: string,
    best100mFreestyleTime: number
  ) {
    super(athleteID, name, age, nationality);
    this.preferredStroke = preferredStroke;
    this.best100mFreestyleTime = best100mFreestyleTime;
  }

  trainSeason(): void {
    console.log(
      `${this.getName()} is training for swimming in the ${
        this.preferredStroke
      } stroke.`
    );
  }

  competition(): void {
    console.log(
      `${this.getName()} is competing in a ${this.preferredStroke} event.`
    );
  }

  displayBestFreestyleTime(): void {
    console.log(
      `${this.getName()}'s best 100m freestyle time: ${
        this.best100mFreestyleTime
      } seconds`
    );
  }
}
