import ItemCount from "../Item/ItemCount"

const ItemDetail = (dato) => {
  return (
    <div class="container">
        <div class="row">
            <h3>{dato.dato.nombre}</h3>
        </div>
        {console.log(dato.dato.img)}
        <div class="row">
            <div class="col-7"><img src={dato.dato.img} alt="img" width="100%" height="100%"/></div>
            <div class="col-4"><div class="row"></div><div class="row">{dato.dato.detalle}{dato.dato.precio}
            <br/>
            <ItemCount stock={10} inicial={1} />
            </div></div>
        </div>
      </div>
  )
}

export default ItemDetail