import React, { useEffect, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        setData(res.data.body);
      });

    $('body').append(`<div>${window.location.search}</div>`);
  }, []);

  return (
    <div className="App">
      <h1>Snyk teste</h1>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  );
}

export default App;
