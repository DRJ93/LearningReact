import "./styles.css";

function Greeting({ name, age, carrera }) {
  //Para el pasaje de parametros dinamicos(? se utiliza { paraam1, param2, ..., param n}
  //Para invoar o rellenaar dichos parametros, al inbuir la funcion en la export react app
  //se usa la etiqueta <Nombre de la funcion, paam1 = "valor param1" param2 = "valor param2">
  return (
    <h1>
      Hello soy {name}, un gusto, tengo {age}. Estoy estudiando {carrera}.
    </h1>
  );
}
//Todos los componentes de react deben empezar con letra mayuscula.
function MyButton({ style, onClick }) {
  //!! Si quiero pasar estilos a un componente dentro de un react component tengo que AL HTML, pasarle el parametro style = {nombre del param para aplicar los estilos}.
  //Es necesaria un CSS APARTE del archivo jsx. Solamente se utiliza el css in line cuando dependen, ls estilos,  de una variable de js.
  return (
    //Al yo quererle agregar un evento, tengoq ue poner en el elemento onEvent = {donde va la funcion a pasar}
    <button className="boton" style={style} onClick={onClick}>
      I'm a botoncin
    </button>
  );
}
//Se pueden llamar a las propedades de un objet para cubrir los parametros de un componente react
//O tambien para asignar valores a  cualquier cosa.
const delf = {
  name: "Delfina",
  age: 19,
  studing: "Ingenieria en sistemas",
};
const button = {
  sizeOfButton: "20px",
  colorButton: "pink",
  borderRadius: "10px",
};
let i = 0;
function handleClick() {
  i += 1;
  document.getElementById("clickContainer").innerHTML = `Clicks count: ${i}`;
}
//LISTAS
const products = [
  { code: "mb24", type: "book", id: 1 },
  { code: "tivu", type: "book", id: 2 },
  { code: "LI001", type: "pen", id: 3 },
];
function RenderList() {
  //La funcion .map() se encarga de renderizar un array de objetos, elementos o crear componentes dinamicos. Tambien se puede combinar con otras funciones de arrays para transformar o filtrar datos antes del render. Puedes usar .map() para actualizar un array de objetos en el estado de React de manera eficiente.
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.type == "book" ? "pink" : "red",
      }}
    >
      {product.code}
    </li>
  ));
  // !! Es importante el atributo key a la hora de renderizar listas, permite que react tenga un control eficiente acerca de los elementos
  return <ul>{listItems}</ul>;
}
export default function App() {
  return (
    // A TENER EN CUENTA: SOLO SE PUEDE EXPORTAR UNA etiqueta, POR ENDE, TODO LO QUE SE EXPORTE TIENE QUE ESTAR DENTRO DE UN GRAN DIV.
    <div>
      <Greeting name={delf.name} age={delf.age} carrera={delf.studing} />

      <MyButton
        style={{
          padding: button.sizeOfButton,
          backgroundColor: button.colorButton,
          borderRadius: button.borderRadius,
          border: button.colorButton,
        }}
        onClick={handleClick}
      />
      <p id="clickContainer"></p>
      <RenderList />
    </div>
  );
}
