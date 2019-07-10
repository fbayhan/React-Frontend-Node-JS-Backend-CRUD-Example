import React, { Component } from 'react'

import {
    Container,
    Image,
    Menu,
    Visibility,
} from 'semantic-ui-react'
import { fixedMenuStyle, menuStyle } from '../helpers/styleHelper'
import { Link, NavLink } from 'react-router-dom';

export class Header extends Component {


    state = {
        menuFixed: null,
        overlayFixed: false,
    }



    stickOverlay = () => this.setState({ overlayFixed: true })

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickOverlay = () => this.setState({ overlayFixed: false })

    unStickTopMenu = () => this.setState({ menuFixed: null })

    render() {
        const { menuFixed } = this.state
        return (
            <div>

                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item as={Link} to="/">
                                <Image size='mini' src='https://avatars1.githubusercontent.com/u/5796209?s=200&v=4' />
                                <Menu.Item header>Movie App</Menu.Item>

                            </Menu.Item>
                            <Menu.Item as={NavLink} to="/movies" exact  >
                                Movies


              </Menu.Item>
                            <Menu.Item as={NavLink} to="/movies/new" exact >Add New</Menu.Item>


                        </Container>
                    </Menu>
                </Visibility>
            </div>
        )
    }
}

export default Header
