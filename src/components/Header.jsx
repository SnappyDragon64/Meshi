import MaxWidthWrapper from "@/components/MaxWidthWrapper.jsx";

const Header = () => {
    return (
        <header className="sticky top-0 w-full bg-theme-color-light">
            <MaxWidthWrapper>
                <div className="flex justify-between p-2.5">
                    <p className="text-2xl font-bold text-white">Meshi.</p>
                    <div></div>
                </div>
            </MaxWidthWrapper>
        </header>
    )
}

export default Header