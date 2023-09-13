import { SearchForm } from "./search/SearchForm"
import { SearchResult } from "./search/SearchResult"

export const Home = () => {
  return (
    <div className='page'>
      <SearchForm />
      <SearchResult />
    </div>
  )
}