import OnboardingJourney from '../components/OnboardingJourney';

export default async function OnboardingPage() {
  const res = await fetch('/onboarding.json');
  const data = await res.json();

  return <OnboardingJourney data={data} />;
}
