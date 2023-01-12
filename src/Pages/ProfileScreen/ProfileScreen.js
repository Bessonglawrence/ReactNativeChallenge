import React,{Component} from 'react';
import {
		View,
		Text, 
		StyleSheet,
		TouchableOpacity,
		Button,
		Animated
} from 'react-native';


class ProfileScreen extends Component {

	constructor(props){
		super(props);
		this.state = {
			fadeValue : new Animated.Value(0),
		}
	}

	fadeAnimation = () =>{
		//alert('We did it');
		Animated.timing(this.state.fadeValue, {
			toValue: 1,
			duration: 4000,
      useNativeDriver: true
		}).start();
	}

	render(){
		return(
			<View style={styles.container}>
				<Animated.View style={[styles.animationView, {opacity: this.state.fadeValue}]}>
					<Text>iMALL, changing how ecommerce and real estate is done in Africa</Text>
				</Animated.View>

				<TouchableOpacity> 
					<Button 
						onPress={this.fadeAnimation}
						title="Animation" 
						style={styles.button}
						></Button>
				</TouchableOpacity>
			</View>
			);
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: 'lightgrey',
		justifyContent: 'center',
		alignItems: 'center',
	},
	animationView:{
		width : 250,
		height: 250,
		backgroundColor: '#083c8e',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		paddingHorizontal: 18,
		borderRadius: 5

	},
	button:{
		backgroundColor: 'lightblue',
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		color: 'white',
		marginTop: 10,
	}

});

export default ProfileScreen;