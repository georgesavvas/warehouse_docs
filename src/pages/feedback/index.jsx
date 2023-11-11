import SafeKanban from '@site/src/components/kanban/SafeKanban';
import Layout from '@theme/Layout';

const Feedback = () => {
  return (
    <Layout title="Feedback">
      <SafeKanban service="warehouse" kind="rfe" title="Feedback" />
    </Layout>
  )
}

export default Feedback;
