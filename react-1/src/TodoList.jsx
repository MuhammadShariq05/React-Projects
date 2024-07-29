export function TodoList({ children, isComplete }){
  return(
    <>
      <div>
        <label htmlFor="inputBox">
          {children}
          <input type="checkbox" name="tick" defaultCheckedchecked={isComplete} />
        </label>
      </div>
    </>
  )
}