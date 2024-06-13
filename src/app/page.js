import AboutComponent from "@/components/home/AboutComponent";
import Banner from "@/components/home/Banner";
import ExamGuaidComponent from "@/components/home/ExamGuaidComponent";
import { examdata } from "@/data/homepage";
 
export default function Home() {
  return (
    <div className="home w-full pagelayout">
     <Banner/>
     <AboutComponent/>
     <ExamGuaidComponent data={examdata}/>
     
     </div>
  );
}
