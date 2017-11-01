import  { connect } from "react-redux";
import Home from "../components/home";
import {
    changeName,
    changeAge

} from "../modules/home";

const mapStateToProps = (state) =>({
	name:state.home.name,
	age:state.home.age,
	});

const mapActionCreators = {
    changeAge,
    changeName
};

export default connect(mapStateToProps, mapActionCreators)(Home);