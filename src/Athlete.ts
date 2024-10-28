abstract class Athlete {
  constructor(
    public athleteID: string,
    public name: string,
    public age: number,
    public nationality: string
  ) {}

  abstract train(): void;
  abstract compete(): void;
}
