import React, {Component} from "react"
import Sidebarcomponent from '../components/sidebar'
import Lenguajematematico from '../components/lenguajematematico'
import styles from '../pages/page.module.css'

export default class extends Component {
  render() {
    return (
      <div className={styles.slayout}>
      <Sidebarcomponent/>
      <Lenguajematematico/>
      </div>
    )
  }
}
