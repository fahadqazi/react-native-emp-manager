import React, { Component } from 'react';
import { Button, Input, CardSection, Card } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="jane"
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555"
                    />
                </CardSection>

                <CardSection>                
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeForm;
