import { StyleSheet} from 'react-native'
import Colors from '../../../themes/Colors'
import { horizontalScale } from '../../../themes/Metrices'

export const styles = StyleSheet.create({
    notificationContainer: {
        flex:1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.grey,
        margin: 10,
    },
    notification: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    imageContainer:{
        //borderWidth: 1,
    },
    imageStyle: {
        width: 50,
        height: 50,
        //borderRadius: 50,
    },
    textContainer: {
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.black,
    },
    description: {
        textAlign: 'justify',
        color: Colors.black,
    }
})