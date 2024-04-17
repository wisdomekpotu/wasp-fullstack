import './Main.css';
import AddNote from './components/AddNote';
import Notes from './components/Notes';
import Header from './components/Header';
export const MainPage = () => {
  return (
    <div>
      <Header />
      <AddNote />
      <Notes />
    </div>
  );
};
