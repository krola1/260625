export default function UserCard(props) {
  const { age, name, city } = props;

  return (
    <button>
      <h1>Velkommen</h1>
      <p>Hei {name}</p>
      <p>Jeg ser du er {age} år gammel</p>
      <p>og bor i {city}</p>
    </button>
  );
}
