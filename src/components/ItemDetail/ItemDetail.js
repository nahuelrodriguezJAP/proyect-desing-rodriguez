import ItemCount from "../Item/ItemCount"

const ItemDetail = (dato) => {
  return (
    <div >
        <div >
            <h3>{dato.dato.nombre}</h3>
        </div>
        <div >
            <div><img src={`${dato.dato.img}`} alt="img" width="30rem" height="30rem"/></div>
            <div><div class="row"></div><div class="row">{dato.dato.detalle}{dato.dato.precio}
            <br/>
            <ItemCount stock={dato.dato.stock} inicial={1} />
            </div></div>
        </div>
      </div>
  )
}

export default ItemDetail