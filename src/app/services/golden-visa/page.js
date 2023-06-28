import styles from '@/styles/Services.module.css'
import Hello  from '@/components/markdown/golden-visa.mdx'

const Page = () => {
  return (
    <main className={styles.page}>
      <Hello />
    </main>
  )
}

export default Page