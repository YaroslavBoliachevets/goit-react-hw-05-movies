import { Outlet } from 'react-router-dom';
import { MdHome, MdLocalMovies } from 'react-icons/md';
import { NavItem, Box, Container } from './Layout.styled';

const navItems = [
  { href: 'home', text: 'Home', icon: MdHome },
  { href: 'movies', text: 'Movies', icon: MdLocalMovies },
];

export default function Layout() {
  return (
    <>
      <Box as="nav">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
