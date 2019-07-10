import React from 'react';
import { Keyboard, Text, View, StyleSheet, Button, TouchableOpacity, TextInput, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Constants } from 'expo';
import '@expo/vector-icons';
import { Header, Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Chat from './Chat';
//import { moderateScale} from 'react-native-size-matters';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


export default class ChatScreen extends React.Component {

    message = "";

    constructor(props) {
      super(props)
      this.state = {
        friend : null,
        message : "",
        messages : [
           {user: null, message: "Lorem ipsum dolor sit amet consectetuer Proin consectetuer venenatis gravida porttitor. At id ac et Vestibulum interdum sed nulla dolor orci et. Cursus malesuada felis accumsan Vivamus cursus mauris ut Curabitur nec condimentum. Faucibus metus dui wisi nec eu orci Curabitur morbi Donec congue. Odio tempor vitae vitae Phasellus sem nibh condimentum."},
           {user: null, message: "Ut nec dui eu morbi nec interdum adipiscing sed dui tempor. Ut enim elit orci Duis nascetur ligula in In Aliquam Sed. Eros ipsum nibh Pellentesque Vestibulum ligula montes vitae in ac cursus. Cursus arcu Curabitur eros et Pellentesque Integer nisl et dis eros. Pulvinar sem pede lacinia orci turpis Nunc./nDictum ut enim laoreet risus sit Sed vel enim sollicitudin quis. Consectetuer nibh Vestibulum mus natoque ante Sed pretium sem condimentum non. Molestie tempor adipiscing Nulla in nulla tellus fames laoreet enim pretium. Et Ut consectetuer vel pede ut odio tellus wisi arcu Curabitur. Mauris enim dui adipiscing pretium cursus malesuada platea wisi et Vestibulum. Aenean amet auctor vitae sagittis id convallis tellus Curabitur gravida sagittis. Eleifend."},
           {user: null, message: "Sagittis Nam sodales Phasellus at dui mus Nam id elit wisi. Aliquam Integer ut interdum neque augue ultrices et nonummy laoreet tellus. Maecenas facilisis ac nisl eu nibh congue mauris tortor nunc lacinia. Tincidunt mauris odio Curabitur scelerisque elit tellus nibh et et libero. Ipsum lacus dictum scelerisque ac amet vel Proin in Pellentesque Sed. Auctor gravida ipsum urna."},
           {user: null, message: "Condimentum urna tincidunt facilisis netus auctor semper nibh Nulla fringilla porttitor. Est ipsum tellus elit augue dictumst quam sed libero Nullam Nulla. Pellentesque massa leo rutrum accumsan laoreet Aenean senectus feugiat nibh semper. Libero Vivamus Aliquam quis neque non eget urna velit quis tellus. Ut neque Sed orci auctor Curabitur consectetuer id Proin vestibulum."},
           {user: null, message: "Quis eros nibh non Quisque nec massa et eros nunc scelerisque. Pulvinar pellentesque condimentum lobortis Pellentesque amet vel Aliquam laoreet Pellentesque id. Dui a Quisque justo vel et felis Sed tempus enim tellus. Interdum pede metus id ac tincidunt tortor eros cursus Morbi condimentum. Wisi tortor dis mattis nisl elit hendrerit dolor porttitor malesuada quis. "},
           {user: null, message: "Ut Nullam congue Curabitur massa penatibus libero metus Proin elit pede. Et fames Nullam rhoncus aliquet velit Donec semper id et eu. Nec nibh odio Ut convallis ut sit molestie In urna vel. Eu cursus id eu libero semper at sit tempus Sed sit. Et suscipit ligula eu consequat Curabitur ante neque sollicitudin justo et. In arcu Sed nec cursus elit convallis ornare libero risus et. Iaculis ut iaculis."},
           {user: null, message: "Hellosssss 6"},
           {user: null, message: "Hellossssss 7"},
           {user: null, message: "Hellosssssss 8"},
           {user: null, message: "Hellossssssss 9"},
           {user: null, message: "Hellosssssssss 10"},
           {user: null, message: "Lorem ipsum dolor sit amet consectetuer Proin consectetuer venenatis gravida porttitor. At id ac et Vestibulum interdum sed nulla dolor orci et. Cursus malesuada felis accumsan Vivamus cursus mauris ut Curabitur nec condimentum. Faucibus metus dui wisi nec eu orci Curabitur morbi Donec congue. Odio tempor vitae vitae Phasellus sem nibh condimentum.Ut nec dui eu morbi nec interdum adipiscing sed dui tempor. Ut enim elit orci Duis nascetur ligula in In Aliquam Sed. Eros ipsum nibh Pellentesque Vestibulum ligula montes vitae in ac cursus. Cursus arcu Curabitur eros et Pellentesque Integer nisl et dis eros. Pulvinar sem pede lacinia orci turpis Nunc.Dictum ut enim laoreet risus sit Sed vel enim sollicitudin quis. Consectetuer nibh Vestibulum mus natoque ante Sed pretium sem condimentum non. Molestie tempor adipiscing Nulla in nulla tellus fames laoreet enim pretium. Et Ut consectetuer vel pede ut odio tellus wisi arcu Curabitur. Mauris enim dui adipiscing pretium cursus malesuada platea wisi et Vestibulum. Aenean amet auctor vitae sagittis id convallis tellus Curabitur gravida sagittis. Eleifend.Sagittis Nam sodales Phasellus at dui mus Nam id elit wisi. Aliquam Integer ut interdum neque augue ultrices et nonummy laoreet tellus. Maecenas facilisis ac nisl eu nibh congue mauris tortor nunc lacinia. Tincidunt mauris odio Curabitur scelerisque elit tellus nibh et et libero. Ipsum lacus dictum scelerisque ac amet vel Proin in Pellentesque Sed. Auctor gravida ipsum urna.Condimentum urna tincidunt facilisis netus auctor semper nibh Nulla fringilla porttitor. Est ipsum tellus elit augue dictumst quam sed libero Nullam Nulla. Pellentesque massa leo rutrum accumsan laoreet Aenean senectus feugiat nibh semper. Libero Vivamus Aliquam quis neque non eget urna velit quis tellus. Ut neque Sed orci auctor Curabitur consectetuer id Proin vestibulum.Quis eros nibh non Quisque nec massa et eros nunc scelerisque. Pulvinar pellentesque condimentum lobortis Pellentesque amet vel Aliquam laoreet Pellentesque id. Dui a Quisque justo vel et felis Sed tempus enim tellus. Interdum pede metus id ac tincidunt tortor eros cursus Morbi condimentum. Wisi tortor dis mattis nisl elit hendrerit dolor porttitor malesuada quis. Ut Nullam congue Curabitur massa penatibus libero metus Proin elit pede. Et fames Nullam rhoncus aliquet velit Donec semper id et eu. Nec nibh odio Ut convallis ut sit molestie In urna vel. Eu cursus id eu libero semper at sit tempus Sed sit. Et suscipit ligula eu consequat Curabitur ante neque sollicitudin justo et. In arcu Sed nec cursus elit convallis ornare libero risus et. Iaculis ut iaculis."},
           {user: null, message: "Hello 02"},
           {user: null, message: "Hellos 12"},
           {user: null, message: "Helloss 22"},
           {user: null, message: "Hellosss 32"},
           {user: null, message: "Hellosss 42"},
           {user: null, message: "Hellossss 52"},
           {user: null, message: "Hellosssss 62"},
           {user: null, message: "Hellossssss 72"},
           {user: null, message: "Hellosssssss 82"},
           {user: null, message: "Hellossssssss 92"},
           {user: null, message: "Hellosssssssss 102"},
           {user: null, message: "Hellossssssssss 112"}
        ],
    }



    }

    componentDidMount()
    {
        const { navigation } = this.props;
        const user = navigation.getParam('user', null);
        this.setState({friend : user});  

        this.state.messages[2].user = user;
        this.state.messages[3].user = user;
        this.state.messages[6].user = user;
        this.state.messages[8].user = user;
        this.state.messages[11].user = user;
    }
  
    render() {

        const user = this.state.friend;

        if(!user)
            return(<View></View>)

        return (
    
         <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"} >
        {/* //     <DismissKeyboard style={{flex: 1 }}> */}
                <View style={styles.container}>
                    <Header
                    leftComponent={{  icon: 'chevron-left', size: 35,color: '#8cde23'}}
                    centerComponent={<View style={{flex: 1, flexDirection: "row", alignItems: "center"}}><Avatar rounded title={user.firstname.toUpperCase()[0]+user.lastname.toUpperCase()[0]} /><Text style = {{ color: '#000', fontSize: 14, marginLeft: 5 }}>{user.firstname+" "+user.lastname}</Text></View>}
                    rightComponent={{ size: 35, icon: 'menu', color: '#f00' }}
                    backgroundColor="white"
                    />      
                    {
                    /* <ScrollView style={styles.ScrollView}
                        ref={ref => this.scrollView = ref}
                        onContentSizeChange={(contentWidth, contentHeight)=>{        
                            this.scrollView.scrollToEnd({animated: false});
                        }}
                    >*/
                    }
                        
                    <Chat /*style={{flex:1}}*/ user={user} messages={this.state.messages} />
                       
                    
                    {/* </ScrollView> */}
                    <View style={styles.containterInput}>
                        <TextInput style={styles.input} placeholder="Napiš zprávu..." onChangeText={(text) => this.setState({message : text})} value={this.state.message} />
                        <TouchableOpacity onPress= {()=>{this.sendMessage(this.state.message);}}>
                            <Ionicons name="md-send" size={30} color="#f00" />
                        </TouchableOpacity>                  
                    </View>
                </View> 
        {/* //     </DismissKeyboard> */}
         </KeyboardAvoidingView>
        );
      }

      sendMessage(message)
      {
          if(message && message != "")
          {

            let messages = this.state.messages;
            messages.unshift({user: null, message: message});
            this.setState({messages: messages});

            this.setState({message: ""});

            setTimeout(()=>{this.receiveMessage(message+" to You As Well Sir!", this.state.friend)}, 2000) ;

          }
      }

      receiveMessage(message, user)
      {
        let messages = this.state.messages;
        messages.unshift({user: user, message: message});
        this.setState({messages: messages});

      }

    }
    
    
    const styles = StyleSheet.create({
       
      container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
      }, 
      containterInput: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#eeeeee',
        borderRadius: 30,
        borderBottomWidth: 5,
        padding: 7,
        flexDirection: 'row',
        alignItems:'center',
        marginRight:5,
        marginLeft:5,
        justifyContent: 'flex-end',
      },
    
        input:{
        height:30,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
      },
    
    
    
    });