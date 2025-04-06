import AskQuestion from "./components/Home/AskQuestion";
import Banner from "./components/Home/Banner";
import Book_A_Tutor from "./components/Home/Book_A_Tutor";
import Rating from "./components/Home/Rating";
import Teacher from "./components/Home/Teacher";
import TutorForNeed from "./components/Home/TutorForNeed";
import WhoNeedTutor from "./components/Home/WhoNeedTutor";
import WhyChoose from "./components/Home/WhyChoose";




export default function Home() {
  return (
    <div >
      <Banner />
      <Rating />
      <Teacher />
      <WhoNeedTutor />
      <TutorForNeed />
      <WhyChoose />
     <AskQuestion />
     <Book_A_Tutor />
    </div>
  );
}
