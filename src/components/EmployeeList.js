import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import { ListView, Text, View } from 'react-native';

class EmployeeList extends Component {
    componentWillMount(){
        this.props.employeesFetch();

        createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        createDataSource(nextProps);
    }

    createDataSource = ({ employees }) => {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    }
}

export default connect(null, { employeesFetch })(EmployeeList);
