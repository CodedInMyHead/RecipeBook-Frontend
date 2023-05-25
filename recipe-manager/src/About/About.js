import './About.css';

function About() {
  return (
    <div className='bg-color'>
        <div className='wrapper'>
            <h1 style={{textAlign:"center"}} className='mb-5'>Das Digitale Rezeptbuch</h1>
            <div className="container text-center">
            <div className="row">
                <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Eigene Rezepte hinzufügen?</h5>
                        <p className="card-text">Hier kannst du eigene Rezepte erstellen und veröffentlichen<br /><br /></p>
                        <button className="btn btn-primary">Rezept hinzufügen</button>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Hast du schon einen Account?</h5>
                        <p className="card-text">Mit einem, kostenlosen, Account bekommst du Zugriff auf mehr Funktionalitäten der Website!</p>
                        <button className="btn btn-primary">Account erstellen</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default About;
