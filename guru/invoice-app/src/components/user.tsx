import avatar from "../assets/images/avatar.png";

const User = () => {
  return (
    <button>
      <img src={avatar} alt="User avatar" className="w-8 h-8 md:w-10 md:h-10" />
    </button>
  );
};

export default User;
