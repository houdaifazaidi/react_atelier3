import {useState}  from 'react'

export default function FormulaireProfil({ajouterProfil}){

    const [nom, setNom] = useState('')
    const [age, setAge] = useState('')
    const [profession, setProfession] = useState('')
    const [image, setImage] = useState('')


    const submitClicked = () => {
        const newProfile = {'nom': nom, 'age': age, 'profession': profession, 'image': image};
        ajouterProfil(newProfile);
        setNom('')
        setAge('')
        setProfession('')
        setImage('')
    }

    return (
        <form action="">
            <label htmlFor="">Nom: <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} /></label>
            <label htmlFor="">Age: <input type="text" value={age} onChange={(e) => setAge(e.target.value)} /></label>
            <label htmlFor="">Profession: <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} /></label>
            <label htmlFor="">Imgae URL: <input type="text" value={image} onChange={(e) => setImage(e.target.value)} /></label>
            <input type="button" value="submit" onClick={submitClicked}/>
        </form>
    );
}