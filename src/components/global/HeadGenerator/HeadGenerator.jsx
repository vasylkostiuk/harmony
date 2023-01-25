import Head from "next/head";

const HeadGenerator = ({ title, description, keywords }) => {
  return (
      <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
          <meta property="og:description" content={description} key="description" />
          <meta property="og:keywords" name="keywords" content={keywords} key="keywords" />
      </Head>
  );
}

export default HeadGenerator;