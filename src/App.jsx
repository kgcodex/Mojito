import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <div className="text-2xl bg-amber-600 flex-center">App</div>;
};

export default App;
