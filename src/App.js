import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components"

import Control from "./Component/ControlMusic/Control";
import List from './Component/ListMusic/List'
import { MusicContext } from './Context/MusicListContext'
import Volume from './Component/Head/Volume'
import ShowList from './Component/Head/ShowList'
import Loading from "./Component/Loading/Loading";

const Main = styled.div`
  width: 85%;
  height: 90%;
  margin:  auto;  
  filter: brightness(1.6);
`
const Container = styled.div`
  display: flex;
  max-width:410px;
  height:100vh;
  margin: 0 auto;
  background-image: linear-gradient(#363e62 30%,#383f63, #333053 , #342c4e);
`
const Head = styled.div`
  display: flex;
  justify-content: flex-end;

  .volume,
  .list {
    color: #2d63a7;
    font-size: 30px;
    cursor: pointer;
  }
  .volume {
    margin-right: 20px;
  }
`;
export default function App() {
  const [isLoadedData, setIsLoaded] = useState(false)
  const [showList, setShowList] = useState(false)
  const {fetchData, listMusic}= useContext(MusicContext)
  //waiting fetch data
  useEffect(()=>{
    async function handleFetch(){
      if(listMusic.length === 0){
        setIsLoaded(false)
        await fetchData()
        
      }else {
        setIsLoaded(true)
      }
    }
    handleFetch()
  },[listMusic.length])
  //display list music
  const changeStateDisplay = (state)=> setShowList(state ?? !showList)
  return (
         <Container>
           {!isLoadedData ? 
           <Loading/>:
            <>
              <Main > 
                <Head>
                  <Volume />
                  <ShowList changeStateDisplay={changeStateDisplay}/>
                </Head>  
                  <Control />
              </Main>
              <List showList={showList} changeStateDisplay={changeStateDisplay} />
            </>
           }
         </Container>      
  );
}







