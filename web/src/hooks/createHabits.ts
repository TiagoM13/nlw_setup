import { FormEvent, HTMLInputTypeAttribute, useState } from 'react';
import { api } from '../lib/axios';

export const useCreateHabits = () => {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const createNewHabit = (event: FormEvent) => {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      return;
    }

    api.post('habits', {
      title,
      weekDays,
    })

    setTitle('');
    setWeekDays([]);

    alert('Hábito criado com sucesso!');
  };

  const handleToggleWeekDay = (weekDay: number) => {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay);

      setWeekDays(weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay];

      setWeekDays(weekDaysWithAddedOne);
    }
  };

  const onChangeTitle = (event: HTMLInputTypeAttribute) => {
    setTitle(event)
  }

  return {
    title,
    weekDays,
    onChangeTitle,
    createNewHabit,
    handleToggleWeekDay
  }
}
