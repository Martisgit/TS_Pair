export { Athlete, AthleteType };

type AthleteType = {
  athleteID: string;
  name: string;
  age: number;
  nationality: string;
};

abstract class Athlete {
  athleteID: string;
  name: string;
  age: number;
  nationality: string;

  constructor(
    athleteID: string,
    name: string,
    age: number,
    nationality: string
  ) {
    this.athleteID = athleteID;
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  abstract trainSeason(): void;
  abstract competition(): void;

  getAthleteID(): string {
    return this.athleteID;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getNationality(): string {
    return this.nationality;
  }
}
