import {useState} from 'react'
import ListeProfils from './ListeProfils';
import FormulaireProfil from './FormulaireProfile';

function App() {

    const [profils, setProfils] = useState([{
      nom: 'Alice',
      age: 25,
      profession: 'Développeuse',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6QXl26LDglTrtcs263_rB3xFZhHgIumu_2OzxcSEdA&s', // URL externe
    },
    {
      nom: 'Bob',
      age: 30,
      profession: 'Designer',
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-male-icon.png', // image locale placée dans public/images
    },
    {
      nom: 'Charlie',
      age: 28,
      profession: 'Ingénieur IA',
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-male-icon.png', // une autre image externe
    }]) ;

    const ajouterProfil = (profil) => {
        setProfils([...profils, profil])
    }

    const supprimerProfil = (index) => {

      setProfils(profils.filter((_, i)=> i !== index))
    }
  return (
    <div className="container">
      <h1 className="text-center my-4">Liste des Profils</h1>
      <ListeProfils profils={profils} supprimerProfil={supprimerProfil}/>
      
      <FormulaireProfil ajouterProfil={ajouterProfil} />
    </div>
  );
}

export default App;
