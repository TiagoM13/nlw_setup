import './styles/global.css';

import { Habit } from './components/Habit';

const App = () => {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={15} />
      <Habit completed={30} />
      <Habit completed={60} />
    </div>
  )
}

export default App;
