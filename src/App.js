import SearchBar from "./components/SearchBar"



function App() {
    const [search, setSearch] = useState(' ')
    const [weather, setweather] = useState(null)


  const searching =() =>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${API}`)
        .then(res => res.json())
        .then((result) =>{
        setweather(result)
        })}

return (
    <>
    <SearchBar search ={search} setSearch={setSearch} onSearch={searching}/>
    <Details weather={weather}/>
  
  </>
  )
}
