import Navbar from '../components/navbar';
import Burger from '../components/burger';
const Mobile =({
    data,
    toggleOpenAside,
    isOpenMenu,
    toggleOpenMenu,
    width
})=>{
    return(
        <div>
            <Navbar navbarItems={data.navbarItems} toggleOpenAside={toggleOpenAside} isOpenMenu={isOpenMenu} width={width}/>
            <Burger isOpenMenu={isOpenMenu} toggleOpenMenu={toggleOpenMenu}/>
            <h1>Mobile Version</h1>
        </div>
    )
}

export default Mobile;