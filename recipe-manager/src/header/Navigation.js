import Login from '../Login/Login';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar banner">
      <div className='p-2 d-flex justify-content-evenly'>
        <a className="navbar-brand no-style seperator-right">Digitales Rezeptbuch</a>
        <span className='flex-row'>
          <a className="navbar-text p-2" href='https://github.com/CodedInMyHead/' target='_blank' rel ="noreferrer">Author</a>
          <a className="navbar-text p-2" href='https://github.com/CodedInMyHead/' target='_blank' rel ="noreferrer">Meine Rezepte</a>
          <a className="navbar-text p-2" href='https://github.com/CodedInMyHead/' target='_blank' rel ="noreferrer">FAQ</a>
       </span>
      </div>
      <Login />
      <form className="d-flex p-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Suchen" aria-label="Search" />
        <button className="btn seperator btn-light" type="submit">Suchen</button>
      </form>
    </nav>
  );
}

export default Navigation;
