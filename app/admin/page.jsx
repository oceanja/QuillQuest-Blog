import CountCard from "./components/CountCard";
import { StickyNote, UserRound, List } from 'lucide-react'

export default function Page() {
    return (
        <main className="p-4 md:p-10">
            <div className="flex flex-col md:flex-row gap-4">
                <CountCard name={'Posts'} path={'posts'} icon={<StickyNote />} />
                <CountCard name={'Authors'} path={'authors'} icon={<UserRound />} />
                <CountCard name={'Categories'} path={'categories'} icon={<List />} />
            </div>
        </main>
    );
}
