import SafeKanban from '@site/src/components/kanban/SafeKanban';
import Layout from '@theme/Layout';

const Issues = () => {
  return (
    <Layout title="Issues">
      <SafeKanban service="warehouse" kind="issue" title="Issues" />
    </Layout>
  )
}

export default Issues;
