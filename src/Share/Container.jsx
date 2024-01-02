const Container = ({children}) => {
    return (
      <div className="max-w-[2520px] mx-auto lg:px-20 md:px-10 sm:px-2 px-4 bg-[#191A23] text-white">
        {children}
      </div>
    );
};

export default Container;