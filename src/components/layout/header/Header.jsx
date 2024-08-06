import LogoAndNavLinks from './LogoAndNavLinks';
import SearchAndButtons from './SearchAndButtons';

const Header = ({ isLoggedIn, user }) => {
  return (
    <header className="w-full bg-white border border-customGray fixed top-0 z-10 flex justify-between items-center py-4">
      <LogoAndNavLinks isLoggedIn={isLoggedIn} />
      <SearchAndButtons isLoggedIn={isLoggedIn} user={user} />
    </header>
  );
};

export default Header;
