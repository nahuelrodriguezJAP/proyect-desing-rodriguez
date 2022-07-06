function NavBar() {
  return (
    <div style={{backgroundColor:'black', height:'40px', padding:'8px' }}> <button className="logo" style={ { backgroundColor:'white', marginRight:'80%' }}>Product Design</button> 
    <button className="menu" style={ { backgroundColor:'white'}}><select name="menu" id="menu">
  <option value="1">Menù</option>
  <option value="2">Productos</option>
  <option value="3">Nosotros</option>
  <option value="4">Contactenos</option>
</select></button>
    
    </div>
)
}

export default 

NavBar