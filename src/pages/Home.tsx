import React, { useState } from 'react';
import Button from '../components/Button';

const Home = (): JSX.Element => {
  const obj: { [key: string]: boolean } = { hello: false, bye: true };
  const [checkboxes, setCheckboxes] = useState(obj);
  return (
    <div className="main-content">
      <h1 style={{ textAlign: 'center' }}>Hello world!</h1>
      <Button onClick={() => {}}>Click me!!</Button>
      <form onSubmit={(event) => {
        event.preventDefault();
        console.log(checkboxes);
      }}>
        <fieldset>
          {Object.keys(checkboxes).map((key, index) => <div key={index}>
            <input type="checkbox" value={checkboxes[key].toString() === 'true' ? key : ''} onClick={() => setCheckboxes({ ...checkboxes, [key]: !checkboxes[key] })}/>
            <label key={`${key},${index}`}htmlFor={key}>{key}</label>
          </div>
          )}
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Home;
