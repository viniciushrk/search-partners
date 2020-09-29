import React,{useState,useEffect} from 'react';
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Dashboard() {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(event) {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite autor/nome do repositório');
      return;
    }

    try {
      console.log(newRepo);
      const response = await api.post(`location`, { cep: newRepo });

      const repository = response.data;
      console.log(repository);

      // setRepositories([null]);
      await setRepositories([repository]);

      console.log(repositories[0].map((repository )=>{console.log(repository)}));
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse CEP');
    }
}
    return (
      <>
         <Title>Busca de CEP</Title>

        <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
            placeholder="Digite o CEP"
        />
        <button type="submit">Pesquisar</button>
        </Form>

        {inputError && <Error>{inputError}</Error>}

        <Repositories>
        {repositories[0].map((repository) => (
            <a key="teste" >
                <img
                    src={repository.parceiro.logo}
                    alt={repository.parceiro.name}  
                />
                <div>
                <strong>{repository.parceiro.alias}</strong>
                <p>{repository.nome_centro}</p>
                <p>Distância aproximada: {repository.distance} KM </p>
                <p>Frete : {repository.frete} R$ </p>
                </div>
                <FiChevronRight size={20} />
            </a>
            ))}
        </Repositories>
      </>
    );
  }

  
export default Dashboard;
  