import ItemCount from "./ItemCount"

const ItemListContainer = ({ nombre }) => {
  
  return (
    <div class="row justify-content-center">
      TITULO DE ITEM= {nombre}<br/>
      <ItemCount stock= {10} inicial={1}/>
    </div>
  )
}

export default ItemListContainer