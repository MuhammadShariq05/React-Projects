export function User({ name, age }){
  return(
    <h1>
      {name}: <span style={{color: "Red"}}>{age}</span>
    </h1>
  )
}