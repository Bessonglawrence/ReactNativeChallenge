
const styles = {
    mainContainer:{
        borderColor: 'lightgrey',
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        marginVertical: 15,
        borderRadius: 10,
        marginHorizontal: 10
    },
    image:{
        height: 190, 
        width: 140, 
        padding: 10,
        borderRadius: 10,
    },
    mainTextView:{
        flexDirection: 'row', 
        marginTop: 130,
        marginLeft: -8
    },
    ratingView:{ 
        paddingVertical: 6, 
        paddingHorizontal: 17, 
        borderRadius: 80,
    },
    rating:{
        color: 'white', 
        fontSize: 14, 
        paddingVertical: 5, 
        fontStyle: 'italic'
    },
    name: {
        marginLeft: 5, 
        marginTop: 8, 
        fontSize: 11, 
        fontWeight: 'bold',
    }

}

export default styles;