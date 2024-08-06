// StartupCard.tsx
import Image from 'next/image';

interface Startup {
    name: string;
    description: string;
    image: string;
    members: {
        name: string;
        role: string;
        image: string;
    }[];
}

const StartupCard = ({ startup }: { startup: Startup }) => {
    return (
        <div className="bg-background rounded-lg p-6 shadow-md flex flex-col md:flex-row items-start gap-4">
            <Image
                src={startup.image}
                width={600}
                height={400}
                alt={startup.name}
                className="rounded-lg object-cover flex-1"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="space-y-2 flex-1">
                <h4 className="text-lg font-bold">{startup.name}</h4>
                <p className="text-muted-foreground">{startup.description}</p>
                {startup.members.map((member, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <Image
                            src={member.image}
                            width={50}
                            height={50}
                            alt={member.name}
                            className="rounded-full"
                            style={{ aspectRatio: "50/50", objectFit: "cover" }}
                        />
                        <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-muted-foreground text-sm">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StartupCard;