import Contact from "../Contact/Contact";

export default function ContactList({ dataContacts, deleteContact }) {
  return (
    <ul>
      {dataContacts.map((contact) => (
        <li key={contact.id}>
          <Contact clients={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
}
