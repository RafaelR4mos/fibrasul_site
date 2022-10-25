import styles from './Header.module.css'


import { List } from "phosphor-react"
import fibrasulLogo from '../assets/fibrasul-logo.svg'

export function Header() {
    return (
        <div className={styles.headerWrapper}>
            <header>
                <nav className={styles.navigationWrapper}>
                    <img src={fibrasulLogo} alt="" />
                    <div>
                        <ul className={styles.desktopNav}>
                            <li>Início</li>
                            <li>Serviços</li>
                            <li>Portfólio</li>
                            <li>Equipe</li>
                        </ul>
                        <div className={styles.mobileNav}>
                            <List size={35} />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}