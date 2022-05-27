import React, { useEffect, useState } from "react";
import * as S from './styled';
import { useHistory } from 'react-router-dom';



function Repositories() {
  const history = useHistory();
  const [Repositories, setRepositories] = useState([]);

  useEffect(() => {
    let RepositoriesName = localStorage.getItem('repositoriesName');
    if (RepositoriesName != null) {
      RepositoriesName = JSON.parse(RepositoriesName);
      setRepositories(RepositoriesName);
      localStorage.clear();
    } else {
      history.push('/');
    }

  }, []);

  return (

    <S.Container><S.Title>Repositories</S.Title>
      <S.List>
        {Repositories.map(repository => {
          return (
            <S.LisItem> repository: {repository}</S.LisItem>
          )
        })}
      </S.List>
      <S.LinkHome to="/">To Return</S.LinkHome>
    </S.Container>
  )
}

export default Repositories;