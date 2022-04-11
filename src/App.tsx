import styles from './app.module.scss'
import bg from '@assets/bg.jpeg'

function App() {
  return (
    <div className="flex-c flex-col">
      <p bg="blue-200" className={styles.title} font="italic">
        windi css
      </p>

      <p className="font-bold">hello world</p>
      <img className="w-6/12" src={bg} />
    </div>
  )
}

export default App
