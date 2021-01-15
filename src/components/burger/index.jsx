const Burger = ({ isMenuOpen, toggleOpenMenu }) => {
    console.log('isManuOpen'  ,isMenuOpen);
    console.log('Foo' ,toggleOpenMenu);
    const cls = ['fa'];
    if (isMenuOpen) {
        cls.push('fa-times');}
             else {
        cls.push('fa-bars');
    }
    return (
        <div className={isMenuOpen ?"burgerMenu" : "burgerMenu close"}>
            <i className={cls.join(' ')} onClick={toggleOpenMenu}></i>
        </div>
    )
}

export default Burger;