import style from './styles/nav.module.css'
import flexy from '../../assets/svg/flexy.svg'
import menu from '../../assets/svg/menu.svg'


const Nav = () => {

    return (
          <div className={style.contNav}>
            <div className={style.headerIcon}>   
                
                <img 
                    src={flexy} 
                    alt='logo-svg'
                    className={style.logo}
                />
                
            </div>
            <label htmlFor='menu' className={style.navLabel}>
                <img src={menu} alt='menu-svg' />
            </label>
            <input type='checkbox' id='menu' className={style.navInput}></input>
          </div>
    )
}

export default Nav;