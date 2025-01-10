import {useState} from 'react'
import CardGuitar from './CardGuitar';

const initialGuitar = [
    { name: 'Guitar 1', price: 1000, type: 'Electric', image: 'image1.jpg' },
    { name: 'Guitar 2', price: 1200, type: 'Acoustic', image: 'image2.jpg' },
    { name: 'Guitar 3', price: 1500, type: 'Bass', image: 'image3.jpg' },
    { name: 'Guitar 4', price: 1100, type: 'Electric', image: 'image4.jpg' },
    { name: 'Guitar 5', price: 1300, type: 'Acoustic', image: 'image5.jpg' },
    { name: 'Guitar 6', price: 1400, type: 'Bass', image: 'image6.jpg' },
    { name: 'Guitar 7', price: 1600, type: 'Electric', image: 'image7.jpg' },
    { name: 'Guitar 8', price: 1700, type: 'Acoustic', image: 'image8.jpg' },
    { name: 'Guitar 9', price: 1800, type: 'Bass', image: 'image9.jpg' },
    { name: 'Guitar 10', price: 1900, type: 'Electric', image: 'image10.jpg' }
];

const GuitarHeroe = () => {

const [filterGuitars, setFilterGuitars] = useState(initialGuitar);
const [serachTerm, setSerachTerm] = useState("");
const [filterType, setFilterType] = useState("")

const findGuitars = (term, value) => {
    const filterGuitars = initialGuitar.filter(guitar => guitar.name.toLowerCase().includes(term) && guitar.type.includes(value));
    setFilterGuitars(filterGuitars);
}

const handleSearch = (e) => {
    const value = e.target.value.toLowerCase()
    setSerachTerm(value);
    findGuitars(value,filterType);
}

const handleChangeFiltertype = (e) => {
    const value = e.target.value;
    setFilterType(value);
    findGuitars(serachTerm,value);
    
}

  return (
    <div className='max-w-2xl mx-auto bg-white mt-8 p-6 shadow-lg rounded-md'>
        <h1 className='text-2xl font-bold text-center mb-6'>Filtro de guitarras</h1>
        <div className=''>
            <label className='block text-gray-700 font-medium mb-2 '></label>
            <input
            type='text'
            placeholder='Buscar guitarra'
            value={serachTerm}
            onChange={handleSearch} 
            className='w-full p-2 border border-gray-300 rounded-md'/>
        </div>
        <div className='mb-6'>
            <label className='block text-gray-700 font-medium mb-2'>
                Filtrar por tipo de Guitarra
            </label>
            <select 
            value={filterType}
            onChange={handleChangeFiltertype}
            className='w-full p-2 border border-gray-300 rounded-md' >
                <option value="">Todos</option>
                <option value="Electric">Electric</option>
                <option value="Acoustic">Acoustic</option>
                <option value="Bass">Bass</option>
            </select>
        </div>
        <div>
            {filterGuitars.map((guitar) => (
                 <CardGuitar key={guitar.name} guitar={guitar}/>   
            ))}
        </div>
    </div>
  )
}

export default GuitarHeroe