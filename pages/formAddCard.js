import {useState} from 'react';


export default function AddCard () {
     const [famille, setFamille] = useState('');
     const [matiere, setMatiere] = useState('');
     const [photo, setPhoto] = useState('');
     const [price, setPrice] = useState('');

     const sendForm  = () => {
        setTitle ('')
        setFamille ('')
        setMatiere ('')
        setPhoto ('')
        setPrice ('')
     }
    return (
    <div>
        <div>
            <input placeholder='photo' onChange={(e) => setPhoto(e.target.value)} value={photo} />
            <input placeholder='Famille' onChange={(e) => setFamille(e.target.value)} value={famille} />
            <input placeholder='Matiere' onChange={(e) => setMatiere(e.target.value)} value={matiere} />
            <input placeholder='Prix' onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>
        <div>
            <button onClick ={() => sendForm()}>Ajouter au panier</button>
        </div>
    </div>
    )
}