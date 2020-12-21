import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
    },
    header:{
        flex: 0.25,
    },
    headerLogo:{
        flex:0.7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 50,
        color: 'blue',

    },
    headerInput:{
        flex: 0.3,
        flexDirection: 'row',
    },
    inputText:{
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'white'
    },
    results:{
        flex: 0.75,
        
    },
    resultsScroll:{
        
    },
    movieListsStyle:{
        justifyContent:'center',
        alignItems: 'center'
    },
    resultsScrollContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        borderRadius: 10,
        marginTop: 20,
        width: 200,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textstyle:{
        fontSize: 25,
        marginTop: 20,
        marginBottom: 40,
        color: 'red',
    }
});