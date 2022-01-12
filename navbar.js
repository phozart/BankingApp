function NavBar(){
  const [active, setActive]         = React.useState('');
  var activeNum = 0;
 
  var checkActive = function(num){
    if (parseInt(active) == num)
    {
      return 'active';
    }
  }
  
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#" onClick={e => setActive(0)}>Bad Bank</a>
      <button className="navbar-toggler" type="button" 
      data-toggle="collapse" data-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className="collapse navbar-collapse navbar-right " id="navbarNav">
        <ul className="navbar-nav navbar-right">
          <li className="nav-item ">
            <a className={`nav-link ${checkActive(1)}`} 
                      data-toggle="tooltip" data-placement="bottom" value='1' title="Selecting this will provide you the option to create new accounts!"
                      href="#/CreateAccount/" onClick={e => setActive(1)}>Create Account</a>
           
          </li>
   
          <li className="nav-item">
            <a className={`nav-link ${checkActive(2)}`} 
              data-toggle="tooltip" data-placement="bottom" value='2' title="You will be able to deposit to the first (by default) created account!"
              href="#/deposit/" onClick={e => setActive(2)}>Deposit</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${checkActive(3)}`} 
              data-toggle="tooltip" data-placement="bottom" title="Selecting this will provide you the option to withdraw money from the first account!"
              href="#/withdraw/" onClick={e => setActive(3)}>Withdraw</a>
          </li>

          <li className="nav-item">
            <a className={`nav-link ${checkActive(4)}`} 
              data-toggle="tooltip" data-placement="bottom" title="This option will show you all data."
              href="#/alldata/" onClick={e => setActive(4)}>AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}