import { CurrentRenderContext } from "@react-navigation/native";
import { Platform } from "react-native";

const styles = {
    mainContainer:{
        flex: 1, 
        backgroundColor: 'white', 
        alignItems: 'center',
    },
    linearGradient:{
        width: '100%',
        height: 180, 
        paddingTop: 20
    },
    headerText: {
        alignSelf: 'center',
        ...Platform.select({
            ios:{
                color: 'white', 
                fontSize: 22, 
                fontWeight: 'bold', 
                marginLeft: 25,
                paddingTop: 30
            },
            android:{
                color: 'white', 
                marginBottom: 3, 
                fontSize: 22, 
                fontWeight: 'bold', 
                marginLeft: 25
            }
        })

    },
    subHeaderText:{
        color: 'white', 
        fontSize: 16, 
        fontStyle: 'italic', 
        marginLeft: 30
    },
    searchView:{
        backgroundColor:'white', 
        flexDirection: 'row', 
        width: 300, 
        alignSelf: 'center', 
        borderRadius: 4, 
        marginTop: 30
    },
    searchIcon:{
        marginTop: 6, 
        marginLeft: 4
    },
    searchInput:{
        width: 250, 
        fontSize: 18, 
        marginLeft: 5, 
        paddingTop: 5
    },
    categoryHeader:{
        color: '#12539c', 
        fontSize: 20, 
        marginTop: 10, 
        fontWeight: 'bold', 
        marginLeft: 2
    },
    categoryCard:{
        borderWidth: .5, 
        borderColor: 'lightgrey', 
        paddingVertical: 15, 
        marginTop: 10, 
        borderRadius: 5, 
        shadowOffset: { width: 2, height: 5 }, 
        shadowColor: 'lightgrey', 
        shadowOpacity: 1, 
        shadowRadius: 5, 
        elevation: 2, 
        alignItems: 'center'
    },
    categoryCardImage:{
        height: 60, 
        width: 60,
    },
    categoryCardText:{
        color: '#4c97ea', 
        fontSize: 12, 
        alignSelf: 'center', 
        fontWeight: 'bold'
    },
    trendingProductsHeader:{
        fontSize: 17, 
        color:'#12539c', 
        fontWeight: 'bold', 
        marginLeft: 20, 
        marginBottom: 10
    },
    trendingProductsImage:{
        height: 100, 
        width: 120, 
        marginHorizontal: 5, 
        marginHorizontal: 5, 
        borderRadius: 5
    },
    trendingProductsText:{
        color:'#4c97ea', 
        fontSize: 14, 
        fontWeight:'bold', 
        marginLeft: 7,  
        marginTop: 5
    },
    trendingProductPrice:{
        color:'#4c97ea', 
        fontSize: 14, 
        marginLeft: 7
    },
    recentViewHeader:{
        fontSize: 16, 
        color:'#12539c', 
        marginTop: 8, 
        fontWeight: 'bold', 
        marginLeft: 20
    },
    recentViewImage:{
        width: 100, 
        height: 80, 
        marginHorizontal: 5
    }
}

export default styles;