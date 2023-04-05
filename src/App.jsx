import mobile from './assets/image-header-mobile.jpg';
import desktop from './assets/image-header-desktop.jpg';
function App() {
  return (
    <main className="flex justify-center items-center min-h-screen font-LexendDeca text-[15px] bg-Verydarkblue">
      <article className="bg-Darkdesaturatedblue max-w-[300px] flex flex-col md:flex-row-reverse md:max-w-[750px]">
        <div className="relative md:flex md:flex-1">
          <img src={mobile} alt="mobileImg" className="md:hidden" />
          <img src={desktop} alt="mobileImg" className="hidden md:block" />
          <div className="absolute bg-Softviolet w-full h-full top-0 opacity-60"></div>
        </div>
        <div className="text-White md:p-12 flex flex-col md:flex md:flex-1 justify-center items-center text-center p-8 gap-7">
          <p className="font-Inter font-bold text-2xl md:text-3xl md:text-left">
            Get <span className="text-Softviolet">insights</span> that help your
            business grow.
          </p>
          <p className="text-Slightlytransparentwhite2 text-sm md:text-left">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex flex-col md:flex-row md:gap-12 md:pt-5 gap-5 w-full justify-between">
            <div>
              <p className="font-bold text-xl">10k+</p>
              <p className="text-Slightlytransparentwhite2 text-sm">
                COMPANIES
              </p>
            </div>
            <div>
              <p className="font-bold text-xl">314</p>
              <p className="text-Slightlytransparentwhite2 text-sm">
                TEMPLATES
              </p>
            </div>
            <div>
              <p className="font-bold text-xl">12M+</p>
              <p className="text-Slightlytransparentwhite2 text-sm">QUERIES</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
