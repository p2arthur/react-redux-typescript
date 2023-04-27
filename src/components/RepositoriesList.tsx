import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const { searchRepositories } = useActions();
  const { isLoading, data, error } = useTypedSelector(
    (state) => state.repositories
  );

  console.log(data);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('submit');
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button>Search</button>
      </form>
      <div>
        {isLoading && <p>Loading...</p>}
        {data && data.map((repo: string) => <p key={repo}>{repo}</p>)}
      </div>
    </div>
  );
};

export default RepositoriesList;
