import { useEffect, useState } from "react";
import { IHabitList } from "../interfaces/habitList";
import { IHabitsInfo } from "../interfaces/habitsInfo";
import { api } from "../lib/axios";

export const useHabitsInfo = ({ date, onCompletedChanged }: IHabitList) => {
  const [habitsInfo, setHabitsInfo] = useState<IHabitsInfo>();

  useEffect(() => {
    api.get('day', {
      params: {
        date: date.toISOString(),
      }
    }).then(response => {
      setHabitsInfo(response.data)
    })
  }, [])

  const handleToggleHabit = async (habitId: string) => {
    const isHabitAlreadyCompleted = habitsInfo!.completedHabits.includes(habitId)

    await api.patch(`/habits/${habitId}/toggle`)

    let completedHabits: string[] = [];

    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId]
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits
    })

    onCompletedChanged(completedHabits.length)
  }

  return { habitsInfo, handleToggleHabit }
}
