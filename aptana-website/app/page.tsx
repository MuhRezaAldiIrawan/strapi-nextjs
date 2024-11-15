import styles from '@/app/page.module.css'
import qs from "qs";
import { HomePage } from './ui/page/home-page';

const homeQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layout.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"]
            },
            link: {
              populate: true
            }
          }
        }
      }
    }
  },
});

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";
  const url = new URL(path, baseUrl);
  url.search = homeQuery;

  console.log(url);
  

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    // console.log(data);
    console.log(JSON.stringify(data, null, 2));

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");

  const { title, description } = strapiData.data;

  return (
    <main className="container mx-auto py-6">
      <HomePage data={strapiData} />
    </main>
  );
}