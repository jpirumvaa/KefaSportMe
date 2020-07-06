import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {white, purple, gray} from '../utils/colors'

export default function KefaSteper({max, step, unit, value, onIncrement,onDecrement}){
    return(
    <View style={[styles.row, {justifyContent: 'space-between'}]}>
        {Platform.OS==='ios'?
        <View style={{flexDirection: 'row'}}>        
            <TouchableOpacity
                style={[styles.iosBtn,{ marginRight: 6}]} 
                onPress={onDecrement}>
                <AntDesign name="minuscircle" 
                    size={30} 
                    color="purple" />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.iosBtn}  
                onPress={onIncrement}>
                <AntDesign name="pluscircle" 
                    size={30} 
                    color="purple" />
            </TouchableOpacity>
        </View>
        :
        <View style={{flexDirection: 'row'}}>        
            <TouchableOpacity
                style={[styles.androidBtn,{ marginRight: 6}]} 
                onPress={onDecrement}>
                <AntDesign name="minuscircle" 
                    size={30} 
                    color="white" />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.androidBtn}  
                onPress={onIncrement}>
                <AntDesign name="pluscircle" 
                    size={30} 
                    color="white" />
            </TouchableOpacity>
        </View>
        }
            
        
        <View style={styles.metricCounter}>
            <Text style={{fontSize:24, textAlign:"center"}}>{value}</Text>
            <Text style={{fontSize:18, color: gray}}>{unit}</Text>
        </View>
    </View>
    )
}

const styles=StyleSheet.create({
    row:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    iosBtn:{
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    androidBtn:{
        margin: 5,
        backgroundColor: purple,
        padding: 10,
        borderRadius: 2
    },
    metricCounter:{
        width: 85,
        justifyContent: 'center',
        alignItems: 'center'
    }
})