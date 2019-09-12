import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class Chat extends React.Component {


    constructor(props) {
        super(props)
    }
  
    render() {
        const messages = this.props.messages;

        
        return (
          <FlatList
            style={{padding: 10}}
            // keyboardDismissMode={'on-drag'} 
            contentContainerStyle={{
                paddingBottom: 20
              }}
            inverted
            renderItem={this._renderItem}
            data={ messages }
            keyExtractor={this._keyExtractor}
          />
        ); 
    }

    _keyExtractor = (item, index) => item.id+''+index;

    _renderItem = ({item}) => {      
        const user = this.props.user;

        return(   
            <Text style={[styles.bubble, user==item.user ?  styles.friend : styles.currentUser  ]}>{item.message}</Text>
        )
    }
}

const styles = StyleSheet.create({
       
    bubble:{
      marginTop:5,
      maxWidth: '80%',
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 15, 
      color: 'white',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',       
    },
    currentUser:{
        backgroundColor:  '#1084ff',
        alignSelf: 'flex-end',
        marginRight: 1  
    },
    friend:{
        alignSelf: 'flex-start',
        backgroundColor:  '#508400',
        marginLeft: 1   
    }, 
});

    
    