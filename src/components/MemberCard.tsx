import { Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { Member } from '../types/member';

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-red-500 overflow-hidden">
        <img
          src={member.picture}
          alt={member.name}
          className="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-sm font-medium text-blue-600 mb-3">{member.role}</p>

        {member.bio && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{member.bio}</p>
        )}

        <div className="flex gap-3 pt-4 border-t border-gray-100">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          )}
          {member.socials.website && (
            <a
              href={member.socials.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Website"
            >
              <Globe size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
