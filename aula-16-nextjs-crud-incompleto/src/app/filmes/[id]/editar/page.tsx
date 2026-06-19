//next16+

import { getFilmes } from "@/services/filme.services";

interface Props{
params: Promise<{id: string}>;


}
export default async function EditarFilmePage({params}: Props) {

  const {id} = await params;
  //falta implementar no service para buscar o filme no service
  const filme = await getFilmes(id);

  return (

    <FilmeForm filme = {filme}>

  );
}