import Image from 'next/image'
import styles from '@/styles/About.module.css'


export default function About() {
    return (
        <>
        <section id='about' className={styles.about}>
          <div>
            <h1>OUR PHILOSOPHY</h1>
            <h2>Fast Food  ≠ Junk Food</h2> 
            <p>At Lia`s Kitchen, we make delicious, homemade, healthy,
            and satisfying vegan fast food for reasonable prices. 
            We offer 6 different kinds of large (140 grams), homemade patties, 
            with various homemade special sauces. You can also come and enjoy 
            the most refreshing, versatile, and satisfying salads, all made 
            from freshly cut vegetables. <br></br>All made and served with love,
              fun and the highest quality standards.
            </p>
            <Image 
              priority
              src='/shake-section-1.jpg'
              alt='shake'
              width={333.25}
              height={243.75}
              />
          </div>
          <Image 
              src='/burger-section-1.jpg'
              alt='burger'
              width={227.5}
              height={341.5}
          />
        </section>
        </>
    )
}
    