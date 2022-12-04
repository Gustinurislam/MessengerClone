import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { unstable_getServerSession } from 'next-auth/next';

export default async function Header() {
  const session = await unstable_getServerSession();

  if (session) {
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center py-8 px-8 shadow-sm">
        <div className="flex flex-col space-x-2 sx:flex-row">
          <Image
            className="rounded-full mx-2 object-contain"
            src={session.user?.image!}
            height={10}
            width={50}
            alt="Profile Picture"
          />
          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="font-bold text-lg">{session.user?.name}</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm ">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-1 item-center sx:space-x-2">
          <Image
            className="animate-pulse object-contain"
            src="https://links.papareact.com/jne"
            height={10}
            width={50}
            alt="Logo"
          />
          <p className="flex items-center text-blue-400 text-[15px] sx:text-[17px]">
            Welcome to Meta Messenger
          </p>
        </div>
        <Link
          href={'/auth/signin'}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}
