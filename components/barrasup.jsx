import React, {Component} from "react"
import Link from 'next/link'
import styles from '../pages/page.module.css'

export default class extends Component {
  render() {
    return (
        <div className={styles.barrasup}>
        
    <Link href="/" >
      <div className={styles.logo}></div>
      </Link>
    </div>
    )
  }
}
