import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Button } from 'react-bootstrap';


const FavouritesCount = () => {
    const navigate = useNavigate();
    const FavouritesLength = useSelector(state => state.favourites.content.length)
    return(
        <div className='w-100 d-flex justify-content-evenly'>
            
            <Button className='mx-5' variant='success' onClick={() => navigate("/")}> HOME </Button>            
            <Button variant='dark'  onClick={() => navigate("/favourites")}>FAVOURITES =<span> {FavouritesLength}</span></Button>
        
        </div>
    )

}

export default FavouritesCount;