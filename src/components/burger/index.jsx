const Burger = ({ isOpenMenu, toggleOpenMenu }) => {
    const cls = ['fa'];
    if (isOpenMenu) {
        cls.push('fa-times');}
             else {
        cls.push('fa-bars');
    }
    return (
        <div className={isOpenMenu ? "burgerMenu open" : "burgerMenu close"}>
            <i className={cls.join(' ')} onClick={toggleOpenMenu}></i>
        </div>
    )
}

export default Burger;