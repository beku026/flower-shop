import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
} from 'reactstrap'
import CardTravelIcon from '@mui/icons-material/CardTravel'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import classes from './header.module.scss'
import { useMediaQuery } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'
import classNames from 'classnames'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { ids } = useAppSelector((state) => state.cart)
  const idsFavorite = () => {
    const { ids } = useAppSelector((state) => state.favorites)
    return ids
  }
  
  return (
    <header className={classes.header}>
      <Navbar
        light
        expand="md"
        style={{
          boxShadow: '0px 1px 0px #E5E9F2',
          zIndex: '9',
          backgroundColor: 'white',
        }}
      >
        <Container>
          <Row>
            <Col
              xs={isMobile ? '12' : '3'}
              className="d-inline-flex align-items-center justify-content-between"
            >
              <NavbarBrand href="/" className={classes.brand}>
                logo
              </NavbarBrand>
              <NavbarToggler
                style={{ zIndex: '9' }}
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
              />
            </Col>

            <Col
              xs="9"
              className="d-flex align-items-center justify-content-end"
            >
              <Collapse isOpen={isOpen} navbar>
                <Nav className=" w-100 d-flex justify-content-between" navbar>
                  <div
                    className={classNames(
                      classes.header__items,
                      'd-flex justify-content-start'
                    )}
                  >
                    <NavItem className={classes.navItem}>
                      <NavLink
                        className={classes.header__item}
                        href="https://taplink.cc/achekey.arna/p/59483f/"
                      >
                        Цветочная подписка
                      </NavLink>
                    </NavItem>
                    <NavItem className={classes.navItem}>
                      <NavLink href="/catalog" className={classes.header__item}>
                        Каталог
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown
                      nav
                      inNavbar
                      className={classes.navItem}
                    >
                      <DropdownToggle
                        nav
                        caret
                        className={classes.header__item}
                      >
                        о нас
                      </DropdownToggle>
                      <DropdownMenu end>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem className={classes.navItem}>
                      <NavLink
                        href="/companies"
                        className={classes.header__item}
                      >
                        Компаниям
                      </NavLink>
                    </NavItem>
                  </div>

                  <div className={classes.icons}>
                    <NavItem className={classes.icon__count}>
                      <NavLink href="/cart">
                        <CardTravelIcon className={classes.icons__item} />
                        {ids.length > 0 ? (
                          <div className={classes.counter}>{ids.length}</div>
                        ) : null}
                      </NavLink>
                    </NavItem>
                    <NavItem className={classes.icon__count}>
                      <NavLink href="/favorites">
                        <FavoriteIcon className={classes.icons__item} />
                        <div className={classes.counter}>
                          {idsFavorite.length}
                        </div>
                      </NavLink>
                    </NavItem>
                    <NavItem className={classes.icon__count}>
                      <NavLink href="/login">
                        <PersonIcon className={classes.icons__item} />
                      </NavLink>
                    </NavItem>
                  </div>
                </Nav>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header
