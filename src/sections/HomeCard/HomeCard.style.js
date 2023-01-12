
const styles = {
    mainContainer:{
        borderColor: 'lightgrey',
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        marginVertical: 15,
        borderRadius: 10
    },
    image:{
        height: 205, 
        width: 320, 
        padding: 10,
        borderRadius: 10,
    },
    mainTextView:{
        flexDirection: 'row', 
        marginTop: 120
    },
    ratingView:{ 
        paddingVertical: 10, 
        paddingHorizontal: 18, 
        borderRadius: 60,
    },
    rating:{
        color: 'grey', 
        fontSize: 18, 
        fontWeight: 'bold', 
        fontStyle: 'italic'
    },
    name: {
        marginLeft: 5, 
        marginTop: 8, 
        fontSize: 18, 
        fontWeight: 'bold',
    }

}

export default styles;