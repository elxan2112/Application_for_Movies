import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flex: 0.25,
        backgroundColor: 'red',
    },
    headerLogo:{
        flex:0.7,
        backgroundColor: 'white',
    },
    headerInput:{
        flex: 0.3,
        flexDirection: 'row',
    },
    inputText:{
        flex: 0.8
    },
    inputBtn:{
        flex: 0.2,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    results:{
        flex: 0.75,
        backgroundColor: 'yellow',
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
        fontSize: 20,
        color: 'red',
    }
});