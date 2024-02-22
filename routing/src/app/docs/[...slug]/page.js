export default function DocsPage({ params }) {
  if (params.slug.length == 2) {
    return (
      <>
        <h1>
          Viewing the docs {params.slug[0]} and feature {params.slug[1]}
        </h1>
      </>
    );
  }
  if (params.slug.length == 1) {
    return (
      <>
        <h1>Viewing the docs {params.slug[0]}</h1>
      </>
    );
  }
  return (
    <>
      <h1>Docs Page</h1>
    </>
  );
}
