import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    
      <>
      <main className={styles.main}>
        <nav className={styles.nav}>
          
            <Image
              src="/logo.svg"
              alt="Netflix Logo"
              className={styles.netflixLogo}
              width={200}
              height={100}
              />
             <header>
           <select className={styles.select} id="optionSelect">
                <option lang='en' label='ENGLISH' value="opt1">ENGLISH</option>
                <option lang='hi' label='HINDI' value="opt2">HINDI</option>
              </select>
              <button className={styles.button}>
                  sign in
              </button>
              </header>
        </nav>
          
          <section className={styles.section}>
            
          
            <h1 className={styles.h1}>Unlimited Movies,TV Shows and more</h1>
            <p className={styles.p}>Watch anywhere. Cancel anytime.</p>
            <p className={styles.p}>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className={styles.div}>
              <input type="text" placeholder='Email Address' className={styles.input}/>
              <button className={styles.button}>Get Started</button>
              </div>
          </section>

          </main>
      </>
  )
}




