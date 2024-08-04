import { PagePanel } from "./PagePanel";
import { MainContent } from "./MainContent";
import { PosterCard } from "./PosterCard";
import { DetailsCard } from "./DetailsCard";
import { MediaCard } from "./MediaCard";
import { Tile } from "./common/Tile";

export const App = () => {

  return (
    <>
      <PagePanel />
      <PosterCard />
      <MainContent
        content={
          <>
            <Tile content={<DetailsCard />} />
            <MediaCard header="Cast" />
            <MediaCard header="Crew" />
          </>
        }
      />
    </>
  );
};

