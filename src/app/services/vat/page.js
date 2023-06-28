import styles from '@/styles/Services.module.css'
import Hello  from '@/components/markdown/vat.mdx'

const Page = () => {
  return (
    <main className={styles.page}>
      <Hello />
    </main>
  )
}

export default Page