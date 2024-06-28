import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


interface Props {
    title: string;
}

const Header: React.FC<Props> = ({title}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 10,
        marginTop: 35,
        alignItems: 'center',
        backgroundColor: '#6200EE',
        width: '100%',
    },
    headerText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default Header;