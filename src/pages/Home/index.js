import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';




function App(props) {
  const history = useHistory();
  const [user, setUser] = useState('');
 

  function handlesearch() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(Response => {
      const repositories = Response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/repositories');
    });
  }

  return (
    <S.Container>
      <S.Input className="userInput" placeholder="user" value={user} onChange={e => setUser(e.target.value)} />
      <S.Button type="button" onClick={handlesearch}>search</S.Button>
      <p>Use the github API to fetch user repositories</p>

    </S.Container>
  );
}
//componentes controlados
// <> tag tipo fragment
export default App;
