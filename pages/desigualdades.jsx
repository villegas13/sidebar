import React, {Component} from "react"
import Sidebarcomponent from '../components/sidebar'
import Desigualdades from '../components/desigualdades'
import styles from '../pages/page.module.css'

export default class extends Component {
  render() {
    return (
      <div className={styles.slayout}>
      <Sidebarcomponent/>
      <Desigualdades/>
      </div>
    )
  }
}
