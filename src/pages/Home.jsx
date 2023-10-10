import { useFetch } from "../hooks/useFetch"
import RecipieList from "../components/RecipieList"

function Home() {
  const { data: recipies, isPending, error } = useFetch('https://feline-carpal-can.glitch.me/recipes')
  return (
    <>
      {recipies && <RecipieList recipies={recipies} />}
    </>
  )
}

export default Home