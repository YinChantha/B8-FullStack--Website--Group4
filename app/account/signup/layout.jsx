import SignupSidebar from "@/app/components/SignupSidebar";

export default function SignupLayout({ children }) {
  return (
    <>
      <div className="flex flex-row w-full h-screen">
        <SignupSidebar />
        <main className="flex w-full">{children}</main>
      </div>
    </>
  );
}
