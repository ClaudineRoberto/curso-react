import { peopleList } from '@/app/data/peopleList';

const Page = () => {

  return (
    <div>
      <h1>Olá Mundo</h1>
      <h3>Texto qualquer</h3>


      <ul>
        {peopleList.map(person => <li key={person.id}>{person.name} - {person.profession} </li>)}
      </ul>
    </div>
  );
};

export default Page;

