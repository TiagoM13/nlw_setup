import { HabitDay } from "./HabitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export const Summarytable = () => {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weeDay, i) => {
          return (
            <div
              key={`${weeDay}-${i}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {weeDay}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
      </div>
    </div>
  )
}