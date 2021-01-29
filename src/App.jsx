import Navbar from './components/Navbar'
import Article from './components/Article'
import Header from './components/Header'
import Footer from './components/Footer'
import Submain from './components/Submain'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
   {[
      <Article 
        title="3 ways to get more clients"
        pic="https://mattdowney.co/wp-content/uploads/2021/01/get-more-clients@2x-1536x864.jpg"
        summary="There's no doubt - it's tough out there for freelancers"
        />,
      <Article />,
      <Article 
        title="How to deploy Shopify themes automatically"
        pic="https://mattdowney.co/wp-content/uploads/2021/01/img-shopify-gitlab@2x.jpg"
        summary="This tutorial walks you through how to set up a development, staging, and production environment for your Shopify theme."
      />,
      <Article 
        title="2020 Year in Review"
        pic="https://mattdowney.co/wp-content/uploads/2020/12/annual-review-2020@2x-1-1536x864.jpg"
        summary="Although the bright spots were few and far between in 2020, even in darkness, there is light"
      />,
      <Article 
        category="Gear"
        title="Holiday gift guide (At home edition)"
        pic="https://mattdowney.co/wp-content/uploads/2020/12/gift-guide-2020-thumb@2x-1-1.jpg"
        summary="This year's gift ideas will make working from home a breeze."
      />,
      <Article 
        category="Design"
        title="Thanksgiving Poster Giveaway!"
        pic="https://mattdowney.co/wp-content/uploads/2020/11/thanksgiving-poster-giveaway-1-1536x864.jpg"
        summary="I started this tradition at 45royale and brought it back this year"
      />,
      <Article 
        category="Code"
        title="Local by Flywheel"
        pic="https://mattdowney.co/wp-content/uploads/2020/07/local-by-flywheel-1536x864.jpg"
        summary="As a designer who loves to code, I'm often asked about my local WordPress development environment."
      />,
      <Article 
        category="Design"
        title="Dotties by Kyle Lettendre"
        pic="https://mattdowney.co/wp-content/uploads/2020/07/dotties-font-pair-1536x864.jpg"
        summary="I'm a sucker for a well-designed, full-bodied typeface."
      />,
      <Article 
        category="Link #"
        title="React for Design"
        pic="https://mattdowney.co/wp-content/uploads/2020/07/img-react-design@2x-768x476.jpg"
        summary="There's a lot you can do with react that would be difficult with a traditional design application."
      />,
      <Article 
        category="Link #"
        title="Linear: The issue tracking tool you'll enjoy using"
        pic="https://mattdowney.co/wp-content/uploads/2020/07/img-linear@2x-768x476.jpg"
        summary="Linear helps streamline software projects, sprints, tasks, and bug tracking"
      />,
      <Article 
        pic="https://mattdowney.co/wp-content/uploads/2020/05/ux-design-tools@2x-1536x864.jpg"
        category="Design"
        title="The state of UX tools in 2021"
        summary="For the past few years, creative profesionals have had access to a wide variety of powerful UX design tools."
      />,
      <Article 
        category="Productivity"
        pic="https://mattdowney.co/wp-content/uploads/2020/04/time-blocking@2x-1536x864.jpg"
        title="Master your productivity with time blocking"
        summary="For the past decade, I've been on the lookout for habits and routines that will keep me organized and productive."
      />


    ]}
      </main>
      <Submain />
      <Footer />
    </div>
  );
}

export default App;
