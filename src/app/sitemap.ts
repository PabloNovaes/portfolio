import { DATA } from '@/data/resume'
import { clearString } from '@/lib/clear-strinh'
import { MetadataRoute } from 'next'

const BASE_URL = "https://pablonovaes-me.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {

    const projectEntries: MetadataRoute.Sitemap = DATA.projects.map((project) => ({
        url: `${BASE_URL}/projects/${clearString(project.title)}`, // Ajuste o path conforme sua estrutura de rotas
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        ...projectEntries,
    ]
}