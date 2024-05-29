import Image from "next/image";
import OnboardingJourney from "./components/OnboardingJourney";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <OnboardingJourney /> 
    </main>
  );
}
