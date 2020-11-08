import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function UserList({navigation}) {
  const employeeList = [
    {
      id: 1,
      name: 'test1',
      age: '11',
      gender: 'male',
      email: 'test1@gmail.com',
      phoneNo: '9415346313',
    },
    {
      id: 2,
      name: 'test2',
      age: '12',
      gender: 'male',
      email: 'test2@gmail.com',
      phoneNo: '9415346314',
    },
    {
      id: 3,
      name: 'test3',
      age: '13',
      gender: 'male',
      email: 'test3@gmail.com',
      phoneNo: '9415346315',
    },
    {
      id: 4,
      name: 'test4',
      age: '14',
      gender: 'male',
      email: 'test4@gmail.com',
      phoneNo: '9415346316',
    },
    {
      id: 5,
      name: 'test5',
      age: '15',
      gender: 'male',
      email: 'test5@gmail.com',
      phoneNo: '9415346317',
    },
    {
      id: 6,
      name: 'test6',
      age: '16',
      gender: 'male',
      email: 'test6@gmail.com',
      phoneNo: '9415346318',
    },
  ];

  //render the row of table
  const RenderRow = ({data}) => {
    console.log(data.age);
    return (
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.text}>{data.name}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>{data.age}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>{data.gender}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>{data.email}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>{data.phoneNo}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.textHead}>Name</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.textHead}>Age</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.textHead}>Gender</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.textHead}>Email</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.textHead}>Phone No</Text>
          </View>
        </View>
        {employeeList.map((data, index) => {
          return <RenderRow key={index} data={data} />;
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  row: {flex: 0, flexDirection: 'row'},
  cell: {flex: 1, alignSelf: 'stretch', borderColor: 'black', borderWidth: 1},
  textHead: {
    textAlign: 'center',
    fontSize: 11,
    color: 'white',
    backgroundColor: 'black',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 11,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});
