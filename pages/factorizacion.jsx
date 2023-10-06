import React, {Component} from "react"
import Sidebarcomponent from '../components/sidebar'
import Factorizacion from '../components/factorizacion'
import styles from '../pages/page.module.css'

export default class extends Component {
  render() {
    return (
      <div className={styles.slayout}>
      <Sidebarcomponent/>
      <Factorizacion/>
      </div>
    )
  }
}
