import Hero from "@/Components/Home/Hero";
import HeroWorkOutSection from "@/Components/Home/HeroWorkOutSection";



const getWorkOuts = async () => {
  const res = await fetch('https://api.api-store.workers.dev/api/fitlog')
  if (!res.ok) {
    return "Data not Found"
  }
  const datas = await res.json()
  return datas
}

export default async function Home() {
  const workOuts = await getWorkOuts()
  return (
    <div>
      <Hero />
      <HeroWorkOutSection workOuts = {workOuts}/>
    </div>
  );
}
