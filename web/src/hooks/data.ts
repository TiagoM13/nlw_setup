import { useEffect, useState } from "react"
import { api } from "../lib/axios"

type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[]

export const useSammary = () => {
  const [summary, setSummary] = useState<Summary>([]);

  useEffect(() => {
    api.get('/summary')
      .then(response => setSummary(response.data))
  }, []);

  return { summary }
}
