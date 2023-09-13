import { NavLink, Outlet } from 'react-router-dom';


export const Menu = () => {
  return (
    <>
      <div className='menu'>
        <NavLink to='/ra-hw-toolkit' end>Поиск</NavLink>
        <NavLink to='/ra-hw-toolkit/favorites'>Избранное</NavLink>
      </div>
      <Outlet />
    </>    
  )
}