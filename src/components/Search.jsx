import '../styles/Navegation.css'

function Search(){
  return(
    <div className="search">
      <img  className="searchIcon" src="../../public/search.svg" alt="" />
      <input className="inputSearch" type="text" placeholder="Search location here"/>
      <button>Search</button>
    </div>
  )
}
export default Search;