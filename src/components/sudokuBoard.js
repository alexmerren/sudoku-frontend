import React, {useEffect, useState} from 'react';
import Request from '../adapters/request.js';

function SudokuBoard() {
  // Not sure if this is right
  const [data, setData] = useState(''); 

  // Call the request as an async function and store thre result	
  useEffect(() => {
	const fetchData = async () => {
	  const data = await Request();
	  setData(data);
	}
	fetchData().catch(console.error);
  }, []);

  // Display the result in a react component
  return (
	<div className="sudoku-board">
	  <p><b>Prompt:</b> {data.prompt}</p>
	  <p><b>Solution:</b> {data.solution}</p>
	</div>
  );
}

export default SudokuBoard;
