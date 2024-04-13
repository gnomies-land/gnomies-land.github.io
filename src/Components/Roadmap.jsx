import roadmapTitle from "../assets/roadmap-title.png";
import roadmap from "../assets/roadmap.png";

export default function Roadmap() {
    return (
      <div id="roadmap" className="roadmap-container">
        <img src={roadmapTitle} className="App-image" alt="logo" />
        <img src={roadmap} className="App-image" alt="logo" />
      </div>
    );
}