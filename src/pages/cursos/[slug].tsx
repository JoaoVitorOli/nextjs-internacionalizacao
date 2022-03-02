import { GetStaticPaths, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParsedUrlQuery } from "querystring";
import TagManager from "react-gtm-module";
import { baseEN, basePT } from "../../services/airtable";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface cursosProps {
  data: {
    content: string;
    name: string;
  }
}

export default function Cursos({ data }: cursosProps) {
  const { t } = useTranslation('course');

  const tagManagerArgs = {
    dataLayer: {
      contentId: "ed123",
      contentName: `MBA em teste`,
      currency: 'BRL',
      value: "R$ 1.000.000",
    }
  };

  TagManager.dataLayer(tagManagerArgs);

  return (
    <>
      <h1>{t("title")}</h1>
      <span>{data.name}</span> <br />
      <span>{data.content}</span>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { slug } = params as IParams;

  const stringLocale = locale ? locale : "pt";

  let data: any;

  if (stringLocale === "pt") {
    try {
      const records = await basePT('courses').select({
        filterByFormula: `if("${slug}" = {path}, "success")`,
      }).all();
    
      data = {
        name: records[0].fields.name,
        content: records[0].fields.content
      }
    } catch(error) {
      console.error(error);

      return {
        redirect: {
          destination: `/404`,
          permanent: false,
        },
      }
    }
  }

  if (stringLocale === "en") {
    try {
      const records = await baseEN('courses').select({
        filterByFormula: `if("${slug}" = {path}, "success")`,
      }).all();
    
      data = {
        name: records[0].fields.name,
        content: records[0].fields.content
      } 
    } catch (error) {
      console.error(error);

      return {
        redirect: {
          destination: `/404`,
          permanent: false,
        },
      }
    }
  }

  return {
    props: {
      data,
      ...(await serverSideTranslations(stringLocale, ['course'])),
    },
    revalidate: 60 // 1 minuto
  };
};
