import { useState } from "react"

export const Home = (): JSX.Element => {
const [page, setPage] = useState("about")

// const { language, setLanguage, toggleLanguage } = useLanguage()

//  const { person } = language == "spanish" ? CV : CVENG

  return (
    <>
    {/* <FlexDir >

    <SectionElement width={"40vw"}>
    <NameElement>

      <FlexDir direction={"column"} justifyContent={"start"} alignItems={"start"}> 
      <h1>{person.name} {person.surname}</h1>
      <H2Element size="20px"><span>{person.brief}</span></H2Element>
      </FlexDir>

    </NameElement>

    <ButtonElement onClick={()=>setPage("about")}>{language == "spanish" ? "Sobre mi" : "About me"}</ButtonElement>
    <ButtonElement onClick={()=>setPage("projects")}>{language == "spanish" ? "Proyectos" : "Projects"}</ButtonElement>
    <ButtonElement onClick={()=>setPage("contact")}>{language == "spanish" ? "Contacto" : "Contact"}</ButtonElement>
    <Links person={person}/>
    <DropdownElement setLanguage={setLanguage} language={language}/>
    </SectionElement>

    <SectionElement width={"60vw"}>
      
    <Main page={page}/>
    </SectionElement>
    </FlexDir> */}
    </>
   
  )
}
