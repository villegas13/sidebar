import React, {Component} from "react"
import styles from '../pages/page.module.css'
import Link from 'next/link'


export default class extends Component {

  

  render() {

    // const styleham = {
    //     color: 'hsla(0,0%,100%,.7)'
    //   };
      const styleham = {
        color: 'rgba(0, 0, 0, .7)'
      };
      
    return (
      <>
    
<div className={styles.ssidebarnav} >
  <a className={styles.ssidebartrigger} href="#">
     <i className="fa fa-bars"></i>
     <span style={styleham}   className="material-symbols-outlined">
menu
</span>
  </a> 

  <nav className={styles.ssidebarnav}>
  
     <ul className={styles.ul}>
     <li>
      <Link href="/" className={styles.ssidebarnavlink}>
             
      <em className={styles.em}> <span className="material-symbols-outlined"      
  >Home</span>  Inicio</em>

      </Link>          

        </li>
        <li>
      <Link href="/sumaresta" className={styles.ssidebarnavlink}>
              
      <em className={styles.em}> <span class="material-symbols-outlined">
check_box
</span>  Suma y resta</em>

      </Link>          

        </li>
        <li>
          
           <Link href="/fracciones" className={styles.ssidebarnavlink}>
             <em  className={styles.em}> <span  className="material-symbols-outlined"> 
               grade</span> Fracciones</em>          
          </Link>   
          
        </li>
        <li>
        <Link href="/productocociente" className={styles.ssidebarnavlink}>
              <em className={styles.em}> <span className="material-symbols-outlined">  
radio_button_checked</span> Producto y cociente</em>
        </Link>
        </li>
        <li>
        <Link href="/ecuacionprimer" className={styles.ssidebarnavlink}>
              <em className={styles.em}> <span className="material-symbols-outlined"> 
               open_in_new</span> Ecuación de 1er grado</em>
        </Link>
        </li>
        <li>
        <Link href="/ecuacionsegundo" className={styles.ssidebarnavlink}>           
              <em className={styles.em}> <span className="material-symbols-outlined"> 
               add_box </span> Ecuación de 2do grado</em>
               </Link>
        </li>
        <li>
        <Link href="/productosnotables" className={styles.ssidebarnavlink}> 
              <em className={styles.em}><span className="material-symbols-outlined"> 
               done_all</span> Productos notables</em>
        </Link>
        </li>
        <li>
        <Link href="/factorizacion" className={styles.ssidebarnavlink}> 
              <em className={styles.em}> <span className="material-symbols-outlined"> 
dataset</span> Factorización</em>
        </Link>
        </li>
        <li>
        <Link href="/desigualdades" className={styles.ssidebarnavlink}> 
              <em className={styles.em}> <span  className="material-symbols-outlined"> 
keyboard_double_arrow_down</span> Desigualdades</em>
        </Link>
        </li>
        <li>
        <Link href="/lenguajematematico" className={styles.ssidebarnavlink}> 
              <em className={styles.em}> <span className="material-symbols-outlined"> 
assistant_navigation</span> Lenguaje matemático</em>
        </Link>
        </li>

     </ul>
  </nav>
</div>



</>
   
    )
  }
}
