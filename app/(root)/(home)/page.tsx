import { UserButton } from '@clerk/nextjs';

const Home = () => {
  return (
    <div>
      <h1 className="h1-bold">Home</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
