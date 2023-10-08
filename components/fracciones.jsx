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
  <h1 className={styles.titulint} id="fracc"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg> Fracciones</h1>
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  
</main>


</>
   
    )
  }
}


