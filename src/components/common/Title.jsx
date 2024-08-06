const Title = ({ isLoggedIn }) => {
  return (
    <div className="mx-32 mt-32 py-3  h-[78px] border-b border-customGray">
      <h2 className="font-poppins font-semibold text-3xl leading-6 text-gray-900">
        {isLoggedIn ? 'My Articles' : 'Recent Posts'}
      </h2>
    </div>
  );
};

export default Title;
