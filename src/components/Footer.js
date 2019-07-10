import React from 'react';

import {
    Container,
    Image,
    List,
    Segment
} from 'semantic-ui-react';

const Footer = props => {
    return (
        <div>
            <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
                <Container textAlign='center'>

                    <Image src='https://avatars1.githubusercontent.com/u/5796209?s=200&v=4' centered size='mini' />
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
              </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
              </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
              </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
              </List.Item>
                    </List>
                </Container>
            </Segment>


        </div>
    );
};


Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;