import React, {Component} from "react"
import styles from '../pages/page.module.css'


export default class extends Component {

  

  render() {

    const styleham = {
      color: 'rgba(0, 0, 0, .7)'
    };

      
    return (
      <>
    



    <main className={styles.slayoutcontent}>
  <h1 className={styles.tituloprinc}>Matemáticas</h1><br/>
  <h1 className={styles.titulint} id="ecuacionsegund"> <span className="material-symbols-outlined"> 
               add_box </span> Ecuación de 2do grado</h1>  
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  
</main>


</>
   
    )
  }
}


