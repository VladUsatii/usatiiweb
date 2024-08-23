import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const tech = [
    'React',
    'NextJS',
    'JSX',
    'TypeScript',
    'Python3',
    'Java'
  ]
  const sites = [
    {
      site: 'https://www.former.lol/',
      favicon: 'https://www.former.lol/favicon.ico',
      title: 'Former AI',
      description: 'Create and analyze general-purpose forms in seconds'
    },
    {
      site: 'https://onlocklearning.vercel.app/',
      favicon: 'https://onlocklearning.vercel.app/favicon.ico',
      title: 'Onlock Learning',
      description: 'Built with @onlocklearning to help students learn STEM topics in under 30 seconds'
    },
    {
      site: 'https://www.usatii.com',
      favicon: 'https://onlocklearning.vercel.app/favicon.ico',
      title: 'Usatii',
      description: 'The only growth agency in the US to handle general-purpose growth operations'
    },
    {
      site: 'https://usatii.com/theopenpaper',
      favicon: 'https://onlocklearning.vercel.app/favicon.ico',
      title: 'OpenPaper',
      description: 'A free-speech social network that I programmed at 14 years old'
    }
  ]

  return (
    <main className="p-8">
      <div className="flex flex-row justify-between items-center gap-x-3">
      <h1 className="text-3xl font-bold">current projects.</h1>
      <div className="flex flex-row gap-x-2 mx-2">
        {tech.map((a, i) => (
        <Badge key={i}>{a}</Badge>
        ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center p-6 w-full">
        <div className="w-[100%] max-w-[800px]">
        {sites.map((site, i) => (
          <Link key={i} href={site.site}>
          <div className="rounded-2xl flex flex-row gap-2 p-2 my-5 border-2 border-neutral-500 hover:border-blue-500">
            <Image src={site.favicon} width={100} height={100} />
            <div className="flex flex-col m-2 p-2">
              <h2 className="text-xl font-bold">{site.title}</h2>
              <h3 className="text-md font-base">{site.description}</h3>
            </div>
          </div>
          </Link>
        ))}
        </div>
      </div>
    </main>
  );
}
