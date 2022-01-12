function AllData(){

  const ctx = React.useContext(UserContext);
  const {users } = ctx;
  
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>

    <br/>
    <table className="table">
  <thead>
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Password</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
    {users.map( (element,index) =>  {
return(
    <tr key = {index} >
      <td scope = 'row'> {index + 1}</td>
      <td> {element.name}</td>
      <td>{element.email}</td>
      <td>{element.password}</td>
      <td>{element.balance}</td>
    </tr>
);
})}
  </tbody>
</table>
    </>
  );
}
