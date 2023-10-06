import React, {Component} from "react"
import Sidebarcomponent from '../components/sidebar'
import Ecuacionsegundo from '../components/ecuacionsegundo'
import styles from '../pages/page.module.css'

export default class extends Component {
  render() {
    return (
      <div className={styles.slayout}>
      <Sidebarcomponent/>
      <Ecuacionsegundo/>
      </div>
    )
  }
}
