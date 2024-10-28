import { Athlete } from "./Athlete";

class Sprinter extends Athlete {
  best100mTime: number;
  best200mTime: number;

  constructor(
    athleteID: string,
    name: string,
    age: number,
    nationality: string,
    best100mTime: number,
    best200mTime: number
  ) {
    super(athleteID, name, age, nationality);
    this.best100mTime = best100mTime;
    this.best200mTime = best200mTime;
  }

  trainSeason(): void {
    console.log(`${this.getName()} is training for sprinting.`);
  }

  competition(): void {
    console.log(`${this.getName()} is competing in a sprint!`);
  }

  displayBestTimes(): void {
    console.log(
      `${this.getName()}'s best 100m time: ${this.best100mTime} seconds`
    );
    console.log(
      `${this.getName()}'s best 200m time: ${this.best200mTime} seconds`
    );
  }
}

export { Sprinter };
