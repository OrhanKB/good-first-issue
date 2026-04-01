export default function Card() {
    return (
        <>
            <main className="flex flex-col gap-y-3">
                <div className="flex flex-col relative w-auto border-2 rounded-sm bg-gray-700 px-3 gap-y-2 py-2 cursor-pointer shadow-xs bg-sidebar hover:bg-secondary transition-all">
                    <h1 className="text-xl ">*Issue Owner/Repo name</h1>
                    <span className="border-1 rounded-full absolute top-2 right-5 p-1">*4 issues</span>
                    <p>*Repo About</p>
                    <div className="flex gap-x-2">
                        <p>lang: Javascript</p>
                        <p>stars: 14.89k</p>
                        <p>last activity: a year ago</p>
                    </div>
                </div>
                <div className="flex flex-col relative w-auto border-2 rounded-sm bg-gray-700 px-3 gap-y-2 py-2 cursor-pointer shadow-xs bg-sidebar hover:bg-secondary transition-all">
                    <h1 className="text-xl ">ampproject/amphtml</h1>
                    <span className="border-1 rounded-full absolute top-2 right-5 p-1">4 issues</span>
                    <p>The AMP web component framework</p>
                    <div className="flex gap-x-2">
                        <p>lang: Javascript</p>
                        <p>stars: 14.89k</p>
                        <p>last activity: a year ago</p>
                    </div>
                </div>
                <div className="flex flex-col relative w-auto border-2 rounded-sm bg-gray-700 px-3 gap-y-2 py-2 cursor-pointer shadow-xs bg-sidebar hover:bg-secondary transition-all">
                    <h1 className="text-xl ">ampproject/amphtml</h1>
                    <span className="border-1 rounded-full absolute top-2 right-5 p-1">4 issues</span>
                    <p>The AMP web component framework</p>
                    <div className="flex gap-x-2">
                        <p>lang: Javascript</p>
                        <p>stars: 14.89k</p>
                        <p>last activity: a year ago</p>
                    </div>
                </div>
            </main>
        </>
    );
}