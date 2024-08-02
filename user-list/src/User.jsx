export function User({ ...props }) {
  return (
    <li>
      {props.name}
      <ul><b>email:</b> {props.email}</ul>
      <ul><b>phone:</b> {props.phone}</ul> 
      <ul><b>username:</b> {props.email}</ul>
    </li>
  );
}
