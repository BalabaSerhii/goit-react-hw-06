export default function SearchBox({ value, onFilter }) {
  return (
    <label htmlFor="form">
      <p>Find contacts by name</p>

      <input
        type="text"
        id="form"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </label>
  );
}
