import Layout from '@theme/Layout';

const Issues = () => {
  return (
    <Layout title="Issues">
      <iframe
        width="100%"
        height="100%"
        src="http://ws-vm02:8091/warehouse/issues"
      />;
    </Layout>
  )
}

export default Issues;
