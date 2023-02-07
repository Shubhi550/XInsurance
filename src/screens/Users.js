import React  from 'react';
import axios from 'axios';
import { FlatList, StyleSheet, Text, View, Card} from 'react-native';

class Users extends React.Component {

  constructor(){
    super();
    this.state = {
     
  };
  }

  async componentDidMount() {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
        const data = res
        this.setState({ data })
        console.log(data)
      })
}
          
render() {
    return (
      <View>
  {this.state.data && this.state.data.map(item => {
    return (
    <View key={item.id}>
      <Card>
        <Text>{item.name}</Text>
        {/* <Image source={item.logo}/> */}
        <Text>{item.username}</Text>
        <Text>{item.email}</Text>
      </Card>
    </View>
        );
      })}
</View>
    );  
    }
  }
  
  export default Users;
