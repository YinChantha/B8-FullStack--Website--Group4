import LandingPage from "./landingPage/page";
import TestPage from "./testpage/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* <TestPage /> */}
      <LandingPage />
    </main>
  );
}
