const App = () => {
  

  const {useState} = React;
  let [state, setState] = useState([1,2,3,4,5,6,7,8,9])


  const handler = index => {
    //code to update state and remove destroyed button
    let newState = state.filter(item=> item != index);
    console.log(newState)
    setState(newState)
  };
  let list = state.map((item, index) =>{
    return<MyButton onClick={() => handler(item)} index = {index} key={index}> </MyButton>
  }
    )
  return <>{list}</>
};
const MyButton = ({onClick, index}) => {
  let {Button} = ReactBootstrap;
  return <Button index = {index} onClick={onClick}>hello world {}</Button>;
}

//Destructure an object

//---------------
ReactDOM.render(<App />, document.getElementById("root"));
