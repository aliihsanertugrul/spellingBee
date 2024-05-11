import GameContainer from "@/components/gameContainer";
import { getDictionary } from "./dictionaries/dictionaries";




export default async function Home({params}) {
 
  const t=await getDictionary(params.lang)
  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
     
      <GameContainer t={t} lang={params.lang}/>
    </main>
  );
}
