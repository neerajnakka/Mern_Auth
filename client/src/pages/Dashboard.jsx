import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
        {!!user && (
          <div className="text-xl mb-4">
            <p className="mb-2">
              Hey there,{' '}
              <span className="text-blue-600 font-semibold">{user.name}</span>!
            </p>
            <p className="text-green-600 font-semibold">
              Psst... Your data is stored safely in a super-secret data vault.
            </p>
            <p className="mt-4">
              Thanks for stopping by and sticking around with me on this crazy
              journey!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
