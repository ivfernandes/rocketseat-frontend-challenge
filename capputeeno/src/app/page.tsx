import styles from './page.module.css'
import { Header } from '@/components/header'
import { PageWrapper } from '@/components/pageWrapper'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h2>HomePage</h2>
      </main>
    </>
  )
}
