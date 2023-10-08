import React, {Component} from "react"
import styles from './page.module.css'
import Link from 'next/link'
import Barrasup from '../components/barrasup'




export default class extends Component {

 
 

  render() {

  


    return (
      <>
    
    <div className={styles.headerprinc}>
    <div className={styles.redesheader}>
      <Link href="http://www.instagram.com"> 
      <div className={styles.red1}>
      
      </div>  
      </Link>  
      <Link href="http://www.facebook.com" >   
      <div className={styles.red2}>
      
      </div>  
      </Link>
      <Link href="http://web.whatsapp.com" > 
      <div className={styles.red3}>
      
      </div>  
      </Link>
      <Link href="http://www.youtube.com" > 
      <div className={styles.red4}>
      
      </div>  
      </Link>
    </div>  
    <Link href="/" > 
    <div className={styles.logoheader}>

    </div>
    </Link>
    </div>
    <Link href="/inicio" > 
    <div className={styles.principal}>

    </div>
    </Link>
</>
   
    )
  }
}
