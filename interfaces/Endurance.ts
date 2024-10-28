abstract class Endurance {
  abstract enduranceLevel: number;

  enduranceTraining(): void {
    console.log(`endurance training.`);
  }

  checkEnduranceLevel(): void {
    console.log(`endurance level.`);
  }
}
