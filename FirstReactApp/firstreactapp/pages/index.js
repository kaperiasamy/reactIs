import { useState } from "react";

export default function Home() {

  function ListItems({ints, addValue}) {
    const incrementValue = 3;
    return (
      <>
      <button onClick={() => addValue(incrementValue)}>Add Item</button>
      {
        ints.map(id => {
          return (
            <li key={id}>{id}</li>
          )
        })
      }
      </>
    )
  }

  // Converting ints array to react state
  // const ints = [1, 2, 3];
  const [ints, setInts] = useState([1, 2, 3]);
  function addValue(incrementValue) {
    const newVal = Math.max(...ints) + incrementValue;
    setInts([...ints, newVal]);
  }

  return (
    <ul>
      <ListItems ints={ints} addValue={addValue} />
    </ul>
  );
}
