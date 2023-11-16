import Layout from '@theme/Layout';

const Feedback = () => {
  return (
    <Layout title="Feedback">
      <iframe
        width="100%"
        height="100%"
        src="http://ws-vm02:8091/warehouse/feedback"
      />;
    </Layout>
  )
}

export default Feedback;
