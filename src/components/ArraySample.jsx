
//Props in Array
export const ArraySample = (props) => {
    const{items}=props;
  return (
    <>
    <h1>Items List</h1>
   <ul>
    {items.map((item)=>{

        return <li key={item.id}>{item.name}</li>

    })}
   </ul>
    </>
  )
}
