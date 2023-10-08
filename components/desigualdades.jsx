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
  <h1 className={styles.titulint} id="desig"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg> Desigualdades</h1>
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  
</main>


</>
   
    )
  }
}


