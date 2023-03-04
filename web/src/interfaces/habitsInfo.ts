export interface IHabitsInfo {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[]
  completedHabits: string[]
}
