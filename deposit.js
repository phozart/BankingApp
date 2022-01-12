function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [amount, setAmount]         = React.useState('');

  const ctx = React.useContext(UserContext);  


  const { users } = ctx;
var person ="";
var balance = "";
  const renderedUsers = users.map((user, index) => {
    if (index ===0)
    {person =user.name
      balance = user.balance
    }
  });
  

  function validate(field, label){
      if (!field) {
        setStatus('Error field empty: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (field <= 0)
        {
          setStatus('Error, amount should be greater then 0.');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        if (isNaN(field))
      {
        setStatus('Error, only numbers allowed for' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (!field > 0)
      {
        setStatus('Error, only numbers allowed for' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleDeposit(){
    
    if (!validate(amount,     'amount'))     return;
    let som = parseInt(balance) + parseInt(amount);
  
    ctx.users[0].balance = som ;
    setShow(false);
  }    
  const checkButton = function (){
    
    if (amount === ''  )
    return 'disabled';
    return;
 
  }
  function checkButtonA(){
    
    if (amount === ''  )
    return 'true';
    else
    return 'false';
 
  }


  function checkValue()
  {
    return amount == null; 
  }

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              Current balance: {balance } <br/>
              Deposit<br/>
              <input type="input" className="form-control" id="amount" placeholder="0"  onChange={e => setAmount(e.currentTarget.value)} /><br/>
              
              <a type="submit" role='button' className={`btn btn-light ${checkButton()}`} onClick={handleDeposit} aria-disabled={` ${checkButtonA()}`}>Deposit</a>
              </>
            ):(
              <>
              <h5>Success , new balance: {balance }</h5>
              
              </>
            )}
    />
  )
}
