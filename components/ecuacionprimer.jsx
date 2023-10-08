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
  <h1 className={styles.titulint} id="ecuacprimer">   
  <em className={styles.em}/> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-aspect-ratio" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
  <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z"/>
</svg> Ecuación de 1er grado</h1>
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  
</main>


</>
   
    )
  }
}


