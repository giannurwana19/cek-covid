import Cards from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
