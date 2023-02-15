import styles from '@/styles/Map.module.css'


export default function Map() {
    return (
        <>
        <section id='map' className={styles.map}>
          <h1>HOW TO FIND US</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8402.37469625939!2d13.408222695151627!3d52.53476249007777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e024246ac83%3A0x3de6622d0dadc7b1!2zTGlh4oCZcyBLaXRjaGVu!5e0!3m2!1sde!2sde!4v1676043410283!5m2!1sde!2sde"
            width="600"
            height="450"
            /* style="border:0;"
            allowfullscreen="" */
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        </>
    )
}