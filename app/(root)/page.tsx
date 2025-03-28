import Image from "next/image";
import SearchForm from "../components/SearchForm";

export default async function Home({searchParams}:{
  searchParams:Promise<{query?:string}>
}) {
  const query =(await searchParams).query;
  return (
    <>
    
    <section className="pink_container">
      <h1 className="heading">Pitch you startup <br/> Connect with Entreprenuers </h1>
      <p className="sub-heading">Submit Ideas ,vote on pitches and Get Noticed in Virtual Competitions</p>
      <SearchForm query={query}/>
    
    </section>

    </>
  );
}
