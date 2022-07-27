import Row from 'react-bootstrap/Row'
import CategoryCard from './CategoryCard';
import { useEffect, useState } from 'react';

const Category = () => {
    const [Categorias, setCategorias] = useState([]);
    useEffect(() => {
        fetch('https://nahuelrodriguezjap.github.io/e-mercado/JSON/Categorias.json')
            .then(response => response.json())
            .then(json => setCategorias(json))

    }, [])
    return (
        <Row>{Categorias.map((Category) => (<div key={Category.id}>
            <CategoryCard info={Category}/>
        </div>))}
        </Row>
    )
}

export default Category