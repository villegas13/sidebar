import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
<>
    <div className={styles.slayout}>

<div className={styles.ssidebarnav} >
  <a className={styles.ssidebartrigger} href="#">
     <i class="fa fa-bars"></i>
  </a>

  <nav className={styles.ssidebarnav}>
     <ul>
        <li>
           <a className={styles.ssidebarnavlink} href="#suma">
            <em className={styles.em}>Suma y resta</em>
           </a>
        </li>
        <li>
           <a className={styles.ssidebarnavlink} href="#fracc">
             <em  className={styles.em}>Fracciones</em>
           </a>
        </li>
        <li>
           <a className={styles.ssidebarnavlink} 
            href="#productococ">
              <em className={styles.em}>Producto y cociente</em>
           </a>
        </li>
        <li>
           <a className={styles.ssidebarnavlink} 
            href="#ecuacprimer">
              <em className={styles.em}>Ecuación de 1er grado</em>
           </a>
        </li>
        <li>
           <a className={styles.ssidebarnavlink} 
            href="#ecuacionsegund">
              <em className={styles.em}>Ecuación de 2do grado</em>
           </a>
        </li>
        <li>
           <a className={styles.ssidebarnavlink} 
            href="#productnot">
              <em className={styles.em}>Productos notables</em>
           </a>
        </li>
        <li>
           <a className={styles.ssidebarnavlink} 
            href="#factoriz">
              <em className={styles.em}>Factorización</em>
           </a>
        </li>
        <li>
           <a className={styles.ssidebarnavlink} 
            href="#desig">
              <em className={styles.em}>Desigualdades</em>
           </a>
        </li>
        <li>
           <a className={styles.ssidebarnavlink} 
            href="#lenguajemat">
              <em className={styles.em}>Lenguaje matemático</em>
           </a>
        </li>

     </ul>
  </nav>
</div>


<main className={styles.slayoutcontent}>
  <h1 className={styles.tituloprinc}>Matemáticas</h1><br/>
  <h1 className={styles.titulint} id="suma">Suma y Resta</h1>
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  <h1 className={styles.titulint} id="fracc">Fracciones</h1>
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  <h1 className={styles.titulint} 
id="productococ">Producto y cociente fracc.</h1>
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  <h1 className={styles.titulint} id="ecuacprimer">Ecuación de 1er grado</h1>
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  <h1 className={styles.titulint} id="ecuacionsegund">Ecuación de 2do grado</h1>  
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  <h1 className={styles.titulint} id="productnot">Productos notables</h1>  
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  <h1 className={styles.titulint} id="factoriz">Factorización</h1>
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  <h1 className={styles.titulint} id="desig">Desigualdades</h1>
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
  <h1 className={styles.titulint} id="lenguajemat">Lenguaje matemático</h1>
  <span className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem metus. Proin dictum porttitor sapien, vel varius sem tincidunt eget. Morbi pharetra lorem vel magna scelerisque, sit amet suscipit justo laoreet. Vestibulum euismod felis sed risus pharetra ultricies. Cras ut faucibus neque. Suspendisse luctus, dui id tincidunt placerat, ligula enim efficitur nibh, pulvinar blandit neque ex at massa. Donec ornare scelerisque tortor fringilla sollicitudin. Proin malesuada turpis sit amet felis bibendum, ac efficitur risus suscipit. Donec mauris libero, fermentum sit amet mattis eget, dictum at dui. Etiam erat augue, scelerisque tincidunt nisi in, bibendum dictum lorem. Curabitur purus urna, ornare vel diam sit amet, commodo iaculis sem. Cras lacus elit, tristique id efficitur non, bibendum ut turpis. Duis eget sagittis purus, ut porta libero. Duis in mi id nisl sagittis auctor. Integer id felis lectus. Cras tristique auctor risus, et elementum libero consectetur at. Mauris quis neque sed dui.

  </span>
</main>
</div>
</>
  )
}
