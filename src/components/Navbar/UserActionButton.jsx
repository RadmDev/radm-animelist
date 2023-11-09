import { authUserSession } from "@/lib/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  //   console.log(user);

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user && (
        <Link href="/users/dashboard" className="py-1">
          Dashboard
        </Link>
      )}
      <Link
        href={actionURL}
        className="bg-color-dark text-color-accent py-1 px-12 inline-block"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;