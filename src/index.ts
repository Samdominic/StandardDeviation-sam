export const findStandardDeviation = (population: number[]) => {
  let SummationOfPopulation: number = 0;
  for (let i = 0; i <= population.length - 1; i++) {
    SummationOfPopulation += population[i];
  }
  const Average: number = SummationOfPopulation / population.length;

  let subtractValue: number = 0;
  for (let i = 0; i <= population.length - 1; i++) {
    subtractValue += (population[i] - Average) * (population[i] - Average);
  }
  const Total = subtractValue / population.length;
  const squareRoot = Math.sqrt(Total);
  return squareRoot;
};
