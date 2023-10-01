import {connect} from 'react-redux'
import { addToCart,removeFromCart } from '../Services/Actions/action';
import Index from "../Components/Index";


const mapStateToProps=state=>({
  data:state
})

const mapDispatchToProps=dispatch=>({
  addToCartHandler:data=>dispatch(addToCart(data)),
  removeFromCartHandler:data=>dispatch(removeFromCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Index)


// export default Index;
