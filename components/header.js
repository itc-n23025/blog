import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo box0n />
        <Nav />
      </div>
    </header>
  )
}

export default Header
