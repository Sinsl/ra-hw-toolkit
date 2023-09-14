import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../../redux/slices/searchSlice";
import { fetchListFilm, clearSearch } from "../../redux/slices/getListFilmsSlice";
import { RootState, AppDispatch } from "../../redux/store/store";


export const SearchForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const valueInput = useSelector((state: RootState) => state.search.valueInput);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(fetchListFilm(valueInput));
  }

  const onReset = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(changeInput(''));
    dispatch(clearSearch());
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