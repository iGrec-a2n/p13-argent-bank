import styles from './Feature.module.css'

function Feature({ title, description, iconName }) {
  return (
    <div className={styles.featureItem}>
      <img src={iconName} alt="Chat Icon" className={styles.featureIcon} />
      <h3 className={styles.featureItemTitle}>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Feature
