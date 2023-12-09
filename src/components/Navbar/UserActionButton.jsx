import { authUserSession } from "@/lib/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  //   console.log(user);

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2 items-center">
      {user && (
        <Link
          href="/users/dashboard"
          className="py-1 px-4 bg-color-secondary rounded-full text-color-primary"
        >
          Dashboard
        </Link>
      )}
      <Link
        href={actionURL}
        className="bg-color-dark text-blue-400 border border-blue-400 py-1 px-4 rounded-full inline-block"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
