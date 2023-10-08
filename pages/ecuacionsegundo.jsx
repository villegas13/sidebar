import React, {Component} from "react"
import Sidebarcomponent from '../components/sidebar'
import Ecuacionsegundo from '../components/ecuacionsegundo'
import Barrasup from '../components/barrasup'
import styles from '../pages/page.module.css'
import Link from 'next/link'

export default class extends Component {
  render() {
    return (
      <div className={styles.slayout}>
        <Barrasup/>
      <Sidebarcomponent/>
      <Ecuacionsegundo/>
      </div>
    )
  }
}
