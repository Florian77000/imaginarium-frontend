import {useState} from 'react';

export default function AddCard () {

    const matiereOption = [
        {value : "", label:'choisir la matière'},
        {value : "pierre", label:'pierre'},
        {value : "perle", label:'perle'},
        {value : "pate polymere", label:'pate polymere'},
    ]

    const familleOption = [
        {value:'', label:'choisir la famille'},
        {value:'bracelets', label:'bracelets'},
        {value:'colliers', label:'colliers'},
        {value:'boucles d\'oreille', label:'boucles d\'oreille'},
        {value:'bagues', label:'bagues'},
        {value:'meres / filles', label:'meres / filles'},
        {value:'ephemeres', label:'ephemeres'},
    ]

     const [famille, setFamille] = useState('');
     const [matiere, setMatiere] = useState('');
     const [photo, setPhoto] = useState('');
     const [price, setPrice] = useState('');

     const sendForm  = () => {
        fetch('http://localhost:3000/articles/add', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                famille:famille,
                matiere:matiere,
                price:price,
            })
        }).then(response => response.json())
        setFamille ('')
        setMatiere ('')
        setPhoto ('')
        setPrice ('')
     }
    return (
    <div>
        <div>
            <input placeholder='photo' onChange={(e) => setPhoto(e.target.value)} value={photo} />
            <select value={famille} onChange={(e) => setFamille(e.target.value)}>
                {familleOption.map((e,i)=> (
                    <option key={i} value={e.value}>
                        {e.label}
                    </option>
                ))}
            </select>
            <input placeholder='Prix' onChange={(e) => setPrice(e.target.value)} value={price} />
            <select value={matiere} onChange={(e) =>setMatiere(e.target.value)}>
                {matiereOption.map((e,i) => (
                    <option key={i} value={e.value}>
                        {e.label}
                    </option>
                ))}
            </select>
        </div>
        <div>
            <button onClick ={() => sendForm()}>Ajouter au panier</button>
        </div>
    </div>
    )
}