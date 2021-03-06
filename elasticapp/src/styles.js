const styles = {
    mainContainer: {
        flex: 1
    },
    headerContainer: {
        height: 60, 
        backgroundColor: '#ff6347',
        flexDirection: 'row',
        padding: 10
    },
    image:{
        height: 40,
        width: 200,
    },

    infoContainer:{
       flexDirection: 'row',
       paddingTop: 30,
       justifyContent: 'space-between'
    },


    infoCardContainer: {
        height: 100,
        width: 90,
        alignItems: 'center',     
    },

    infoIcon:{
        margin: 10, 
        fontSize: 20, 
    },
    infoText:{
        marginVertical: 5,
        color: 'grey',
        fontWeight: 'bold'
    },
    exerciseContainer: {
        borderTopWidth: 1,
        borderColor: 'grey',
        margin: 20
    },
    textBarContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10
    },
    forceBar: {
        height: 50,
        width: 300,
        borderRadius: 30,
        backgroundColor: '#d8d8d8',
        alignSelf: 'center',
        marginTop: 60,
    },
    timerContainer: {
        alignSelf: 'center',
        marginTop: 60
    },
    exerciseList: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        borderRadius: 40,
        height: 40,
        width: 300,
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    exerciseText: {
        alignSelf: 'center',
        color: 'grey',
        fontWeight: 'bold'
    },
    exerciseTextButton: {
        color: 'grey',
        fontWeight: 'bold',
        marginHorizontal: 20
    },
    mainButton: {
        height: 35,
        width: 150,
        borderRadius: 10,
        backgroundColor: '#ff6347',
        alignSelf: 'center',
        marginTop: 60,
        padding: 8
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    }
    
}

export default styles