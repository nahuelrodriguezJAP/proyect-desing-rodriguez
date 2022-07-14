import ItemCount from "../Item/ItemCount"

const ItemListContainer = ({ nombre }) => {
  
  return (
    <div class="row justify-content-center">
    <div class="col-12 align-self-center">
      TITULO DE ITEM= {nombre}</div><br/><br/>
      
      <ItemCount stock= {10} inicial={1}/>
    </div>
  )
}

export default ItemListContainer