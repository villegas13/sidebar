import React, {Component} from "react"
import Sidebarcomponent from '../components/sidebar'
import Fracciones from '../components/fracciones'
import styles from '../pages/page.module.css'

export default class extends Component {
  render() {
    return (
      <div className={styles.slayout}>
      <Sidebarcomponent/>
      <Fracciones/>
      </div>
    )
  }
}
