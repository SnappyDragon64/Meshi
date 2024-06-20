import MaxWidthWrapper from "@/components/MaxWidthWrapper.jsx";
import AniListUsername from "@/components/AniListUsername.jsx";

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-theme-color-header z-30">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center p-2.5">
          <p className="text-2xl font-bold text-theme-text-color-highlight">Meshi.</p>
          <div></div>
          <AniListUsername/>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header