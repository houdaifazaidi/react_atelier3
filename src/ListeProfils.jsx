import CarteProfil from './CarteProfil';

function ListeProfils({profils, supprimerProfil}) {


  return (
    <div className="d-flex flex-wrap justify-content-center">
      {profils.map((profil, index) => (

        <div key={index} className="card">
        <CarteProfil
          key={index}
          nom={profil.nom}
          age={profil.age}
          profession={profil.profession}
          image={profil.image}
        />
        <input type="button" value="Supprimer" onClick={()=> supprimerProfil(index)} className="btn btn-danger"/>

        <br /><br />
        </div>
        
      ))}
      <br /><br />
    </div>
    
  );
}

export default ListeProfils;
