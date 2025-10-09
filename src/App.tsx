import { Github } from 'lucide-react';
import { MemberCard } from './components/MemberCard';
import membersData from './data/members.json';
import { Member } from './types/member';

const members: Member[] = membersData;

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <header className="bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-red-900/90 backdrop-blur-md border-b border-white/20 shadow-lg text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <img src="/azure-ph-logo.png" alt="Azure PH Logo" className="w-16 h-16" />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Microsoft Azure Community
                </h1>
                <p className="text-blue-100 text-sm md:text-base mt-1">
                  Philippines
                </p>
              </div>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
            >
              <Github size={20} />
              <span className="text-sm font-medium">Contribute on GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Community Members
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our vibrant community of Azure enthusiasts. Contribute by
            adding your profile through a pull request to our GitHub repository.
            Simply add your information to the members.json file!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {members.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No members yet. Be the first to contribute!
            </p>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              Made with ❤️ by Microsoft Azure Community Philippines
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Powered by Azure Cloud!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
