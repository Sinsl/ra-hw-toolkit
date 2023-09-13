import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../../redux/slices/searchSlice";


export const SearchForm = () => {
  const dispatch = useDispatch();
  const valueInput = useSelector(state => state.search.valueInput);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(valueInput)
  }

  const onReset = (e) => {
    e.preventDefault();
    dispatch(changeInput(''));
  }

  return (
    <form className="form-search" onSubmit={onSubmit}>
      <input 
        type="text" 
        name="search" 
        placeholder="Введите название" 
        onChange={(e) => dispatch(changeInput(e.target.value))}
        value={valueInput}
      />
      <button type="submit">Search</button>
      <button type="button" onClick={onReset}>Clear</button>
    </form>
  )
}