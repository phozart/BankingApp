import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Spa() {
  const Route = ReactRouterDOM.Route;
  const Link = ReactRouterDOM.Link;
  const HashRouter = ReactRouterDOM.HashRouter;

  return (
    <HashRouter>
      <NavBar/>

        <div className="container" style={{padding: "20px"}}>
          <Link to='/'>Home</Link>
          <Link to="/CreateAccount/">Create Account</Link>
          <Link to="/CreateAccount/">Create Account</Link>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
       
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
